export function populateWhitelist (b) {
	try {
	  if (b && b.hasOwnProperty("whiteListReq") && b.whiteListReq.length > 0) {
		var a = this;
		window.addEventListener("whitelistAssigned", function () {
		  a.whitelistAssigned(a);
		});
		a.addScript(b.whiteListReq);
	  } else {
		logger("Invalid param passed to populateWhitelist");
	  }
	} catch (c) {
	  logger("Failed to execute populateWhitelist - " + c.message);
	}
  }