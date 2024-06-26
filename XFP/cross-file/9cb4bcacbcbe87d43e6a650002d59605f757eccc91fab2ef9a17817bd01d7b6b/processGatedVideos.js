



export function processGatedVideos(videoElements) {
    window.mediaPlayers = [];
    window.setInterval(function (e) {
        MauticJS.iterateCollection(mediaPlayers)(function (node, i) {
            if (mediaPlayers[i].views) {
                MauticJS.iterateCollection(mediaPlayers[i].views)(function (nodeA, iA) {
                    if (!node.views[iA].sent) {
                        MauticJS.makeCORSRequest('POST', 'https://sangfor.huoyan.cn/video/hit', node.views[iA], function (data) {
                            if (data.success && node.views[iA].locked) {
                                node.views[iA].sent = true;
                            }
                        });
                    }
                });
            }
        });
    }, 3000);
    function addVideoView(i, totalWatched) {
        if (totalWatched == 0) {
            return;
        }
        var viewId = mediaPlayers[i].views.length;
        var view = {
            guid: MauticJS.guid(),
            locked: false,
            duration: mediaPlayers[i].mediaElement.duration,
            url: mediaPlayers[i].mediaElement.src
        };
        MauticJS.iterateCollection(mediaPlayers[i].views)(function (node, j) {
            if (mediaPlayers[i].views[j].locked == false) {
                viewId = j;
                view = mediaPlayers[i].views[j];
            }
        });
        view.total_watched = totalWatched;
        mediaPlayers[i].views[viewId] = view;
    }
    ;
    function endCurrentView(i) {
        var viewId = 0;
        MauticJS.iterateCollection(mediaPlayers[i].views)(function (node, j) {
            if (mediaPlayers[i].views[j].locked == false) {
                viewId = j;
            }
        });
        mediaPlayers[i].views[viewId].locked = true;
    }
    ;
    MauticJS.iterateCollection(videoElements)(function (node, i) {
        var playerFeatures = [];
        var source = node.getElementsByTagName('source')[0];
        if (typeof source != 'undefined' && typeof source.type != 'undefined' && source.type === 'video/mp4') {
            node.dataset.mp4 = true;
            playerFeatures = [
                'playpause',
                'progress',
                'current',
                'duration',
                'volume',
                'fullscreen'
            ];
        }
        if (!node.id) {
            node.id = 'mautic-player-' + i;
        }
        mediaPlayers[i] = [];
        if (node.dataset.formId) {
            var cookieName = 'mautic-player-' + i + '-' + node.dataset.formId;
            MauticJS.makeCORSRequest('GET', 'https://sangfor.huoyan.cn/form/embed/' + node.dataset.formId, {}, function (data) {
                mediaPlayers[i].formHtml = data;
            });
        } else {
            mediaPlayers[i].formHtml = '';
        }
        if (!node.dataset.formId && !node.dataset.mauticVideo) {
            return;
        }
        mediaPlayers[i].player = new MediaElementPlayer('#' + node.id, {
            features: playerFeatures,
            alwaysShowControls: true,
            enableKeyboard: false,
            success: function (mediaElement, domElement) {
                mediaPlayers[i].inPoster = false;
                mediaPlayers[i].success = false;
                mediaPlayers[i].views = [];
                mediaPlayers[i].mediaElement = mediaElement;
                if (!node.dataset.mp4) {
                    node.parentElement.parentElement.parentElement.className += ' no-controls';
                }
                var iframes = node.parentElement.getElementsByTagName('iframe');
                if (iframes) {
                    MauticJS.iterateCollection(iframes)(function (node, i) {
                        node.setAttribute('tabindex', -1);
                    });
                }
                mediaElement.addEventListener('ended', function (e) {
                    MauticJS.endCurrentView(i);
                });
                mediaElement.addEventListener('timeupdate', function (e) {
                    var currentTime = 0;
                    if ('Event' == e.constructor.name) {
                        currentTime = e.srcElement.currentTime;
                    } else {
                        currentTime = e.currentTime;
                    }
                    MauticJS.addVideoView(i, currentTime);
                    if (node.dataset.formId && document.cookie.indexOf(cookieName) == -1 && currentTime >= node.dataset.gateTime && mediaPlayers[i].inPoster === false && mediaPlayers[i].success === false) {
                        if (document.activeElement.tagName == 'IFRAME') {
                            window.mejs.previousActiveElement = document.activeElement;
                            document.activeElement.blur();
                        }
                        mediaPlayers[i].inPoster = true;
                        mediaPlayers[i].player.pause();
                        mediaPlayers[i].poster = document.getElementById(node.id).parentElement.parentElement.getElementsByClassName('mejs-poster')[0];
                        mediaPlayers[i].poster.innerHTML = mediaPlayers[i].formHtml;
                        mediaPlayers[i].poster.style.display = 'block';
                        mediaPlayers[i].form = mediaPlayers[i].poster.getElementsByTagName('form')[0];
                        mediaPlayers[i].form.className += ' mautic-gated-video-style';
                        mediaPlayers[i].form.addEventListener('submit', function (e) {
                            e.preventDefault();
                            MauticJS.makeCORSRequest('POST', 'https://sangfor.huoyan.cn/form/submit/ajax?formId=' + node.dataset.formId, jQuery(mediaPlayers[i].form).serialize(), function (data) {
                                if (data.success) {
                                    mediaPlayers[i].success = true;
                                    if (!data.message) {
                                        mediaPlayers[i].poster.style.display = 'none';
                                        mediaPlayers[i].player.play();
                                        window.mejs.previousActiveElement.focus();
                                    }
                                    document.cookie = cookieName + '=true; max-age=' + 60 * 60 * 24 * 7;
                                }
                                if (data.message) {
                                    var position = parseInt(mediaPlayers[i].poster.style.height) / 1.4;
                                    mediaPlayers[i].poster.innerHTML = '<p style="padding:20px;padding-top:' + position + 'px;" class="mautic-response">' + data.message + '</p>';
                                    setTimeout(function () {
                                        mediaPlayers[i].poster.style.display = 'none';
                                        mediaPlayers[i].player.play();
                                        if (window.mejs.previousActiveElement && window.mejs.previousActiveElement.tagName == 'IFRAME') {
                                            window.mejs.previousActiveElement.focus();
                                        }
                                    }, 3000);
                                } else if (data.validationErrors) {
                                    jQuery('#mauticform_' + data.formName + ' .mauticform-errormsg').css('display', 'none');
                                    jQuery.each(data.validationErrors, function (field, message) {
                                        if (jQuery('#mauticform_' + data.formName + '_' + field + ' .mauticform-errormsg')) {
                                            jQuery('#mauticform_' + data.formName + '_' + field + ' .mauticform-errormsg').css('display', 'block');
                                        }
                                    });
                                }
                            });
                            return false;
                        });
                    }
                });
            }
        });
        if (node.autoplay) {
            mediaPlayers[i].player.play();
        }
    });
}
