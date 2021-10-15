//=====================================================
// mobile
//=====================================================
var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
	|| u.indexOf("ipad") != -1
	|| (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
	|| (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
	|| u.indexOf("kindle") != -1
	|| u.indexOf("silk") != -1
	|| u.indexOf("playbook") != -1,
	Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
	|| u.indexOf("iphone") != -1
	|| u.indexOf("ipod") != -1
	|| (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
	|| (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
	|| u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());
$(function(){
if( _ua.Mobile ){
	$('body').addClass('mobile');
} else if ( _ua.Tablet ){
	$('body').addClass('tablet');
} else {
	$('body').addClass('pc');
}
});
//=====================================================
// roll over img change
//=====================================================
$(function(){
	$('.swap img').not("img.not-swap").each(function(){
      	this.onImage = $(this).attr('src').replace(/^(.+)(\.[a-z]+)$/, "$1_on$2");
      	this.onHtml = $('<img src="'+this.onImage+'" alt="" style="position:absolute; opacity:0;" />');
      	$(this).before(this.onHtml); 
      	$(this.onHtml).hover(
        	function(){
          		$(this).stop().animate({'opacity': '1'}, 400);
        	},
        	function(){
         		$(this).stop().animate({'opacity': '0'}, 400);
       		}
      	);
    }).each(function(){
		$("<img>").attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
	});
});
//=====================================================
// dropdown-menu
//=====================================================
$(function(){
    if( !$('body').hasClass('mobile') ) {
		$(window).on('load resize',function() {
            var wd = $('.dropdown-toggle').outerWidth();
            $('.dropdown-menu, .dropdown-menu li').css('width', wd);
        });
	}
    if( $('body').hasClass('pc') ) {
		$('.dropdown > a').click(function() {
            return false;
        });
	}
});
//=====================================================
//  wn setting
//=====================================================
$(function() {
	if( $("body").hasClass("home") ) {
        $("dd.txt:empty").append("&nbsp;");
	}
});
//=====================================================
// page top
//=====================================================
$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.back-top').fadeIn();
		} else {
			$('.back-top').fadeOut();
		}
	});
	$('.back-top').click(function () {
		$('html,body').animate({ scrollTop: 0 }, 'fast');
		return false;
	});
});
