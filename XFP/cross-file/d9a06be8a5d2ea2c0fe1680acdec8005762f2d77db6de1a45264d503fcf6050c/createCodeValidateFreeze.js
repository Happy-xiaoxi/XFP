var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;


export function createCodeValidateFreeze(id, top, left, height, width) {
    var voteFreezeDiv = document.createElement('div');
    voteFreezeDiv.id = id;
    voteFreezeDiv.style.top = top + 'px';
    voteFreezeDiv.style.left = left + 'px';
    voteFreezeDiv.style.height = height + 'px';
    voteFreezeDiv.style.width = width + 'px';
    voteFreezeDiv.style.border = 'none';
    voteFreezeDiv.style.position = 'absolute';
    voteFreezeDiv.style.backgroundColor = '#000';
    voteFreezeDiv.style.margin = 0;
    voteFreezeDiv.style.padding = 0;
    voteFreezeDiv.style.zIndex = 9998;
    voteFreezeDiv.style.opacity = '0.2';
    voteFreezeDiv.style.filter = 'alpha(opacity=20)';
    voteFreezeDiv.style.duration = 1000;
    voteFreezeDiv.innerHTML = '''''''';
    document.body.insertBefore(voteFreezeDiv, document.body.firstChild);
}
