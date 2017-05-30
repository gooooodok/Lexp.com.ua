$(document).ready(function() {
	var current_language;

	// Переключение языка сайта
	var str = location.href;
	var re = /^http\:\/\/l\-expert\.com\.ua/i;
	if (re.test(str)) {
		$("#language_ua").attr('href', str.replace('ua/ru','ua/ua'));
	}

	var re = /^http\:\/\/l\-expert\.com\.ua/i;
	if (re.test(str)) {
		$("#language_ru").attr('href', str.replace('ua/ua','ua/ru'));
	}
	else {
		$("#language_ru").attr('href', str.replace('ua/','ua/ru'));
	}

	var re = /^(.*)\.ua\/ru/i
	if (re.test(str)) {
		$("#language_ru").addClass('active');
		$("#language_ua").removeClass('active');
		
		current_language = "ru";
	}

	var re = /^(.*)\.ua\/ua/i
	if (re.test(str)) {
		$("#language_ua").addClass('active');
		$("#language_ru").removeClass('active');

		current_language = "ua";
	}
	// Конец Переключение языка сайта

	function cc_messages(key) {
		var cc_messages = {
			'message_action_pay_half_ua': '(за акцією «<a href="/ua/akcii-lombard/265" target="_blank">Сплачуй половину</a>»)',
			'message_action_pay_half_ru': '(по акции «<a href="/ru/akcii-lombard/265" target="_blank">Плати половину</a>»)',
			'discount_ua': '(зі знижкою)',
			'discount_ru': '(со скидкой)',
			'no_comments_for_guest_ua': '<div style="font-size: 18px;">Тільки зареєстровані користувачі можуть залишати коментарі!</div><div align="center"><a href="/ua/user">Увійти</a> <a href="/ua/user/register">Зареєструватись</a></div>',
			'no_comments_for_guest_ru': '<div style="font-size: 18px;">Только зарегистрированные пользователи могут оставлять комментарии!</div><div align="center"><a href="/ru/user">Войти</a> <a href="/ru/user/register">Зарегистрироваться</a></div>',
			'summa_diff_ua': 'Різниця: ',
			'summa_diff_ru': 'Разница: ',
		};

		return cc_messages[key+'_'+current_language];
	}

	// Боковое меню
	$('#sidebar-menu > ul > li').not('.active-trail').children('ul').hide();
	$('#sidebar-menu > ul > li.expanded > a').attr('href','javascript:;');

	$('#sidebar-menu > ul > li.expanded > a, #sidebar-menu li.expanded > div.arrow_down').click(function() {
		$('#sidebar-menu ul ul').hide();
		$('#sidebar-menu ul li').removeClass('active-trail');
		$(this).parent().addClass('active-trail');
		$(this).parent().find('ul').show();
	});
	// Конец Боковое меню

	$('#slides').slidesjs({
	    width: 689,
        height: 311,
        navigation: false,
        play: {
          effect: "fade",
            // [string] Can be either "slide" or "fade".
          interval: 4000,
            // [number] Time spent on each slide in milliseconds.
          auto: true,
            // [boolean] Start playing the slideshow on load.
          pauseOnHover: true,
            // [boolean] pause a playing slideshow on hover
          restartDelay: 2500
            // [number] restart delay on inactive slideshow
        },
        effect: {
		  slide: {
		    // Slide effect settings.
		    speed: 500
		      // [number] Speed in milliseconds of the slide animation.
		  },
		  fade: {
		    speed: 500,
		      // [number] Speed in milliseconds of the fade animation.
		    crossfade: true
		      // [boolean] Cross-fade the transition.
		  }
		},
		pagination: {
	      active: true,
	        // [boolean] Create pagination items.
	        // You cannot use your own pagination. Sorry.
	      effect: "fade"
	        // [string] Can be either "slide" or "fade".
	    },
	    navigation: {
	      active: false,
	        // [boolean] Generates next and previous buttons.
	        // You can set to false and use your own buttons.
	        // User defined buttons must have the following:
	        // previous button: class="slidesjs-previous slidesjs-navigation"
	        // next button: class="slidesjs-next slidesjs-navigation"
	      effect: "fade"
	        // [string] Can be either "slide" or "fade".
	    }
      });
    
	$('[id^="TAB_"]').hide();
	$('#tabs_content div:first').show();
	$('.category_tab').click(function () {
		$('.category_tab').parent().removeClass('tab_current');
		$(this).parent().addClass('tab_current');
		$('[id^="TAB_"]').hide();
		$('#TAB_'+$(this).attr('tab_target')).show();
	});

	if ($("#rate-gold-material option:selected").val() == 'platinum_950') {
		$('#rate-gold-category #category_3').hide();
		$('#rate-gold-category #category_4').hide();
		$('#rate-gold-category').val('category_1');
	}
	
	$('#rate-gold-material').bind("change click", function() {
		if ($("#rate-gold-material option:selected").val().indexOf("gold") !== -1) {
			$('#rate-gold-category option').show()

			$('.category_tab').parent().removeClass('tab_current');
			$('#tabs_categories a[tab_target=gold]').parent().addClass('tab_current');
			$('[id^="TAB_"]').hide();
			$('#TAB_gold').show();
		}
		else if ($("#rate-gold-material option:selected").val().indexOf("silver") !== -1) {
			$('#rate-gold-category #category_3').hide();
			$('#rate-gold-category #category_4').hide();
			$('#rate-gold-category').val('category_1');

			$('.category_tab').parent().removeClass('tab_current');
			$('#tabs_categories a[tab_target=silver]').parent().addClass('tab_current');
			$('[id^="TAB_"]').hide();
			$('#TAB_silver').show();
		}
		else if ($("#rate-gold-material option:selected").val().indexOf("platinum") !== -1) {
			$('#rate-gold-category #category_3').hide();
			$('#rate-gold-category #category_4').hide();
			$('#rate-gold-category').val('category_1');

			$('.category_tab').parent().removeClass('tab_current');
			$('#tabs_categories a[tab_target=platinum]').parent().addClass('tab_current');
			$('[id^="TAB_"]').hide();
			$('#TAB_platinum').show();
		}
	});

	$('#comments-comment-form').hide();

	$('.comments-button input').click(function() {
		if ($('.comments-button input').attr('js-action') == 'comments_guest_alert') {
			$.fancybox(cc_messages('no_comments_for_guest'));
		}

		if ($('.comments-button input').attr('js-action') == 'comments_show_comment_form') {
			$('#comments-comment-form').show();
			$(document).scrollTop($('#comments-comment-form').position().top-50);
		}
	});
});
