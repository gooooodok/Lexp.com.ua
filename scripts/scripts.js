$(document).ready(function() {
	var current_language;

	// Выпадающее окно
	$('.pop-up-image a').fancybox({
		closeClick : true
	});

	// Переключение языка сайта
	var str = location.href;
	var re = /^http\:\/\/lexp\.com\.ua/i;
	if (re.test(str)) {
		$("#language_ua").attr('href', str.replace('ua/ru','ua/ua'));
	}

	var re = /^http\:\/\/lexp\.com\.ua/i;
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
			'calulator_count_day_over_60_ru': 'Кредиты на срок больше 60 дней не выдаются.',
			'calulator_count_day_over_60_ua': 'Кредити на срок більше 60 днів не видаються.',
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
	    /* width: 822, */
        /* height: 274, */
        navigation: false,
        play: {
          effect: "slide",
            // [string] Can be either "slide" or "fade".
          interval: 7000,
            // [number] Time spent on each slide in milliseconds.
          auto: true,
            // [boolean] Start playing the slideshow on load.
          pauseOnHover: true,
            // [boolean] pause a playing slideshow on hover
          restartDelay: 7000
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
	      effect: "slide"
	        // [string] Can be either "slide" or "fade".
	    },
	    navigation: {
	      active: false,
	        // [boolean] Generates next and previous buttons.
	        // You can set to false and use your own buttons.
	        // User defined buttons must have the following:
	        // previous button: class="slidesjs-previous slidesjs-navigation"
	        // next button: class="slidesjs-next slidesjs-navigation"
	      effect: "slide"
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

	$('#search-loupe').click(function() {
		$('#search-input').show().animate(
			{width: 180}, 300,
			function() {
				$('#search-input-close').show();
			}
		);
	});

	$('#search-input-close').click(function() {
		$(this).hide();
		$('#search-input').animate(
			{width: 0}, 300,
			function() {
				$(this).hide();
			}
		);
	});

	$('#offices-qr-code__link').click(function() {
		if ($('#offices-qr-code__body').hasClass('active')) {
			$('#offices-qr-code__body').hide().removeClass('active');	
		}
		else {
			$('#offices-qr-code__body').show().addClass('active');
		}
	});

	$('#mobile_popup__open').click(function() {
		$(this).hide();
		$('#mobile_popup__close').css('display', 'block');
		$('#mobile-menu__popup-menu').show();
	});

	$('#mobile_popup__close').click(function() {
		$(this).hide();
		$('#mobile_popup__open').css('display', 'block');
		$('#mobile-menu__popup-menu').hide();
	});

	$('#sidebar-menu_popup-open').click(function() {
		$(this).hide();
		$('#sidebar-menu_popup-close').show();
		$('#sidebar').fadeIn();
	});

	$('#sidebar-menu_popup-close').click(function() {
		$(this).hide();
		$('#sidebar-menu_popup-open').show();
		$('#sidebar').hide();
	});
});
