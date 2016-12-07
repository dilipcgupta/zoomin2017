jQuery(document).ready(function($){
	var $lateral_menu_trigger = $('#leftNavTrig'),
		$content_wrapper = $('.menuOverlay'),
		$navigation = $('header');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();
		
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('leftNavOpen');
		$content_wrapper.toggleClass('leftNavOpen').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#leftSlidenav').toggleClass('leftNavOpen');
		
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('click', function(event){
		if( !$(event.target).is('#leftNavTrig, #leftNavTrig span') ) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('leftNavOpen');
			$content_wrapper.removeClass('leftNavOpen').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$('#leftSlidenav').removeClass('leftNavOpen');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});

	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
	$('.subnav').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.subnav').siblings('.subnav').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});
    
    
    $('.selectpicker').selectpicker({
        size: 7
    });
    
    $(".footNav > .bootstrap-select > .dropdown-toggle").append("<span class='flagIcon'> </span>");
    
});