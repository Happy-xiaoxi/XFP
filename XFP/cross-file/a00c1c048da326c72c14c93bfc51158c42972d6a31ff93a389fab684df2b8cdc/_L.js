export function L(t) {
	forShopifyCall = !1;
	var o = g.welcomeNotifTemplate,
	  e = {};
	o.image && o.imagesRegion
	  ? (e.image = imgUrl + "campaign_images/" + H(o.image))
	  : o.image && (e.image = cdnUrl + "campaign_images/" + H(o.image)),
	  o.icon && o.iconRegion
		? (e.icon = imgUrl + "website_icons/" + H(o.icon))
		: o.icon && (e.icon = cdnUrl + "website_icons/" + H(o.icon)),
	  o.message && (e.body = H(o.message)),
	  o.isActionRequired && (e.requireInteraction = !0),
	  (e.data = g.welcomeNotifTemplate),
	  o.url && (e.data.link = H(o.url)),
	  e.data &&
		((e.data.skipReport = !0),
		(e.data.isWelcomeNotification = !0),
		(e.data.platformId = g._id)),
	  t.showNotification(H(o.title), e);
	var i = { event: "view", platformId: g._id },
	  n = host + "api/v1/welomeNotificationStats";
	HTTP.post(n, i, R, function (t, o) {
	  t && console.log("error while making upsertsubscriber req");
	});
  }