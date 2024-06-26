export function filterModels(t) {
	var e = t.id;
	switch (($(".model-filter > span").css({ color: "#666" }), e)) {
	  case "filter-all":
		$("#filter-all").css({ color: "#e00101" }),
		  $(".filter-all").show(),
		  $(".hybrid-info").hide();
		break;
	  case "filter-cars":
		$("#filter-cars").css({ color: "#e00101" }),
		  $(".filter-cars").show(),
		  $(".filter-mpv,.filter-suv,.filter-hybrid").hide();
		break;
	  case "filter-mpv":
		$("#filter-mpv").css({ color: "#e00101" }),
		  $(".filter-mpv").show(),
		  $(".filter-cars,.filter-suv,.filter-hybrid").hide();
		break;
	  case "filter-suv":
		$("#filter-suv").css({ color: "#e00101" }),
		  $(".filter-suv").show(),
		  $(".filter-cars,.filter-mpv,.filter-hybrid").hide();
		break;
	  case "filter-hybrid":
		$("#filter-hybrid").css({ color: "#e00101" }),
		  $(".filter-hybrid").show(),
		  $(".filter-cars,.filter-mpv,.filter-suv").hide();
	}
  }