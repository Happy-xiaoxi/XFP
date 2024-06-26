export function M() {
	1 == fromshopifyDomain || "true" == fromshopifyDomain
	  ? navigator.serviceWorker.getRegistrations().then(function (t) {
		  t.forEach(function (o, e) {
			e == t.length - 1 &&
			  o.pushManager
				.getSubscription()
				.then(function (t) {
				  t
					? o.scope.includes("/apps/truepush/") ||
					  t.unsubscribe().then(function (t) {
						(skipSubscriberReport = !1),
						  truepush.subscribeUserVapid(!0),
						  1;
					  })
					: (1 != fromshopifyDomain &&
						"true" != fromshopifyDomain) ||
					  ((forShopifyCall = !0),
					  (skipSubscriberReport = !1),
					  C());
				})
				.catch(function (t) {
				  console.log("error while getting ReSubscribe", t);
				});
		  });
		})
	  : navigator.serviceWorker.ready
		  .then(function (t) {
			t.pushManager
			  .getSubscription()
			  .then(function (t) {
				t
				  ? t.unsubscribe().then(function (t) {
					  (skipSubscriberReport = !1),
						truepush.subscribeUserVapid(!0);
					})
				  : console.log("subscription is null");
			  })
			  .catch(function (t) {
				console.log("error while getting ReSubscribe", t);
			  });
		  })
		  .catch(function (t) {
			console.log("error while ready ReSubscribe", t);
		  });
  }