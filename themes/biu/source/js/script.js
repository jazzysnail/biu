(function () {
	//// 小屏处理
	if (window.outerWidth < 1000) {
		document.getElementById('profile').remove();
		document.getElementsByClassName('logo-link').remove();
	};
	//// 隐藏索引
	var offset = window.location.pathname == '/' ? 600 : 0;
	var headroom = new Headroom(document.getElementById('header'), {
	  tolerance: 10,
	  offset: offset,
	  classes: {
	  	initial : "animated",
	    pinned: "slide-up",
	    unpinned: "slide-down"
	  }
	});
	headroom.init();
	// to destroy
	// headroom.destroy();

	//// 固定索引
	var pinHeader = new pin("header");

	/*
	 * @constructor of pin
	 * @argument {string} ele
	 * @argument {number} offset ![Is not enabled]
	*/
	function pin (ele,offset) {
		var self = this;
		var ele = self.ele = document.getElementById(ele);
		var offsetTop = getoffsetTop(ele);
		var isIE6 = /msie 6/i.test(navigator.userAgent);
		window.onscroll = function() {
		  var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		  if (bodyScrollTop > offsetTop) {
		    ele.style.position = (isIE6) ? "absolute" : "fixed";
		    ele.style.top = (isIE6) ? bodyScrollTop + "px" : "0px";
		  } else {
		    ele.style.position = "static";
		  }
		}
		function getoffsetTop(ele) {
		  var offset = ele.offsetTop;
		  if (ele.offsetParent != null) offset += getoffsetTop(ele.offsetParent);
		  return offset;
		}
	}
})();