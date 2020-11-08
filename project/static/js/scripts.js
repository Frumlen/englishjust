$(document).ready(function() {
    //navigation scroll
    $(".main_nav").navigation();
    
    //phone mask
    $(".phone_field").mask("+7(999)-999-99-99");
    
    //fancybox
    $(".fancybox").fancybox({
        padding: 10
    });
    
    
    //fancybox youtube
    $("a.yt_link").click(function() {
        $.fancybox({
                'padding'       : 0,
                'autoScale'     : false,
                'transitionIn'  : 'none',
                'transitionOut' : 'none',
                'title'         : this.title,
                'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type'          : 'swf',
                'swf'           : {
                     'wmode'        : 'transparent',
                    'allowfullscreen'   : 'true'
                }
            });

        return false;
    });
    
    //скролл по клику
    $("a.scroll_down").click(function() {
		$.scrollTo($(".benefits"), 800, {
			offset: -50
		});
	});
    
    //скролл по клику
    $(".scroll_link").click(function() {
		$.scrollTo($(".training_cost"), 800, {
			offset: -50
		});
	});
    
    $(".to_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
    
});

$(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $(".top_panel").addClass("shadow");
    } else {
        $(".top_panel").removeClass("shadow");
    }
});