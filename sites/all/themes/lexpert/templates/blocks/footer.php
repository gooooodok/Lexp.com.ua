<?php global $language; ?>

<?php if ($language->language == 'uk') : ?>

<div id="footer">
		<?php /* ?>
		<div id="new-year__footer-uk">
			<div id="new-year__footer-uk-1"><img src="/images/new-year/christmas-tree2.png" width="200px"></div>
			
			<div id="new-year__footer-uk-2">
				З Новим роком<br>
				та Різдвом Христовим!<br>
				<br>
				Шукайте прекрасне всюди. Не бачите?<br>
				Тоді творіть його своїми руками.<br>
				<br>
				Мирного неба над головою<br>
				та рідної землі під ногами!
			</div>

			<?php if (($date >= '1.01.2016') && ($date < '7.01.2016')) : ?>
				<div style="float: left;">
					З Новим роком<br>
					та наступаючим Різдвом Христовим!<br>
					<br>
					Мирного неба над головою<br>
					та рідної землі під ногами!
				</div>
			<?php endif; ?>

			<?php if ($date == '7.01.2016') : ?>
				<div style="float: left;">
					З наступаючим<br>
					Новим роком<br>
					та Різдвом Христовим!<br>
					<br>
					Мирного неба над головою<br>
					та рідної землі під ногами!
				</div>
			<?php endif; ?>

			<?php if ($date >= '7.01.2016') : ?>
				<div style="float: left;">
					З <br>
					Новим роком<br>
					та Різдвом Христовим!<br>
					<br>
					Мирного неба над головою<br>
					та рідної землі під ногами!
				</div>
			<?php endif; ?>
		</div>
		<?php */ ?>
		
		<div id="footer-contacts">
			<a href="/ua/feedback">Контакти</a>&nbsp;&nbsp;|&nbsp;&nbsp; 
			<div id="social_networks">
				<ul>
					<li><a target="_blank" href="https://vk.com/lombard_expert" title="Ломбард «Експерт» у Вконтакті"><img width="16" height="16" src="<?php print $base_path; ?>images/vk.png"></a></li>
					<li><a target="_blank" href="https://twitter.com/Lombard_Expert" title="Ломбард «Експерт» в Твіттері"><img width="16" height="16" src="<?php print $base_path; ?>images/twitter.png"></a></li>
					<li><a target="_blank" href="https://www.facebook.com/478929125485733" title="Ломбард «Експерт» в Facebook"><img width="16" height="16" src="<?php print $base_path; ?>images/facebook.png"></a></li>
					<li><a target="_blank" href="http://google.com/+L-expertUa" title="Ломбард «Експерт» в Google+"><img width="16" height="16" src="<?php print $base_path; ?>images/google_plus.png"></a></li>
					<li><a target="_blank" href="http://feeds.feedburner.com/l-expert" title="Новини ломбарду «Експерт» через RSS"><img width="16" height="16" src="<?php print $base_path; ?>images/rss.png"></a></li>
					<li><a target="_blank" href="https://www.youtube.com/channel/UCFn6U9rAsOM82StMZS0EkpQ" title="Youtube-канал ломбарду «Експерт»"><img width="20" height="16" src="<?php print $base_path; ?>images/youtube.png"></a></li>
				</ul>
			</div>
			|&nbsp;&nbsp;<a href="<?php echo '/ru/'.drupal_get_path_alias(); ?>" title="перейти на русскую версию сайта">ru</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://komshop.com.ua" target="_blank">Комісійні магазини KomShop.com.ua</a>
		</div>
		<div id="copyright">&copy; 2010-<?php print date('Y'); ?> Ломбард «Експерт»</div>

		<?php /* ?>
		<div id="footer-menu">
			<a href="<?php print $base_path; ?>ua/faq">Найчастіші запитання</a><span>|</span>
			<a href="<?php print $base_path; ?>ua/o-lombarde">Про нас</a><span>|</span>
			<a href="<?php print $base_path; ?>ua/akcii-lombard">Акції</a><span>|</span>
			<a href="<?php print $base_path; ?>ua/novosti">Новини</a><span>|</span>
			<a href="<?php print $base_path; ?>ua/statyi">Статті</a><span>|</span>
			<a href="<?php print $base_path; ?>ua/kredit-pod-zalog">Кредитування</a><span>|</span>
			<a href="<?php print $base_path; ?>ua/otdeleniya-lombarda">Наші відділення</a>
			<a href="<?php print $base_path; ?>otzyvi">Відгуки</a>
		</div>

		<div id="mark-18plus">
			<a href="<?php print $base_path; ?>ua/pravila-saytu"></a>
		</div>
		<?php */ ?>

</div>

<?php elseif ($language->language== 'ru') : ?>

<div id="footer">
	<?php /* ?>
	<div id="new-year__footer-ru">
		<div id="new-year__footer-ru-1"><img src="/images/new-year/christmas-tree2.png" width="200px"></div>
		
		<div id="new-year__footer-ru-2">
			С Новым годом<br>
			и Рождеством Христовым!<br>
			<br>
			Ищите прекрасное повсюду. Не видите?<br>
			Тогда творите его своими руками.<br>
			<br>
			Мирного неба над головой<br>
			и родной земли под ногами!
		</div>

		<?php if (($date >= '1.01.2016') && ($date < '7.01.2016')) : ?>
			<div style="float: left;">
				С Новым годом<br>
				и наступающим Рождеством Христовым!<br>
				<br>
				Мирного неба над головой<br>
				и родной земли под ногами!
			</div>
		<?php endif; ?>

		<?php if ($date == '7.01.2016') : ?>
			<div style="float: left;">
				З наступаючим<br>
				Новим роком<br>
				та Різдвом Христовим!<br>
				<br>
				Мирного неба над головою<br>
				та рідної землі під ногами!
			</div>
		<?php endif; ?>

		<?php if ($date >= '7.01.2016') : ?>
			<div style="float: left;">
				З <br>
				Новим роком<br>
				та Різдвом Христовим!<br>
				<br>
				Мирного неба над головою<br>
				та рідної землі під ногами!
			</div>
		<?php endif; ?>
	</div>
	<?php */ ?>

	<div id="footer-contacts">
		<a href="/ru/feedback">Контакты</a>&nbsp;&nbsp;|&nbsp;&nbsp; 
		<div id="social_networks">
			<ul>
				<li><a target="_blank" href="https://vk.com/lombard_expert" title="Ломбард «Експерт» во Вконтакте"><img width="16" height="16" src="<?php print $base_path; ?>images/vk.png"></a></li>
				<li><a target="_blank" href="https://twitter.com/Lombard_Expert" title="Ломбард «Експерт» в Твиттере"><img width="16" height="16" src="<?php print $base_path; ?>images/twitter.png"></a></li>
				<li><a target="_blank" href="https://www.facebook.com/478929125485733" title="Ломбард «Експерт» в Facebook"><img width="16" height="16" src="<?php print $base_path; ?>images/facebook.png"></a></li>
				<li><a target="_blank" href="http://google.com/+L-expertUa" title="Ломбард «Експерт» в Google+"><img width="16" height="16" src="<?php print $base_path; ?>images/google_plus.png"></a></li>
				<li><a target="_blank" href="http://feeds.feedburner.com/l-expert" title="Новости ломбарда «Експерт» через RSS"><img width="16" height="16" src="<?php print $base_path; ?>images/rss.png"></a></li>
				<li><a target="_blank" href="https://www.youtube.com/channel/UCFn6U9rAsOM82StMZS0EkpQ" title="Youtube-канал ломбарда «Експерт»"><img width="20" height="16" src="<?php print $base_path; ?>images/youtube.png"></a></li>
			</ul>
		</div>
		|&nbsp;&nbsp;<a href="<?php echo '/ua/'.drupal_get_path_alias(); ?>" title="перейти на українську версію сайту">ua</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://komshop.com.ua" target="_blank">Комиссионные магазины KomShop.com.ua</a>
	</div>
	<div id="copyright">&copy; 2010-<?php print date('Y'); ?> Ломбард «Експерт»</div>

	<?php /* ?>
		<div id="footer-menu">
			<a href="<?php print $base_path; ?>ru/faq">Частые вопросы</a><span>|</span>
			<a href="<?php print $base_path; ?>ru/o-lombarde">О нас</a><span>|</span>
			<a href="<?php print $base_path; ?>ru/akcii-lombard">Акции</a><span>|</span>
			<a href="<?php print $base_path; ?>ru/novosti">Новости</a><span>|</span>
			<a href="<?php print $base_path; ?>ru/statyi">Статьи</a><span>|</span>
			<a href="<?php print $base_path; ?>ru/kredit-pod-zalog">Кредитование</a><span>|</span>
			<a href="<?php print $base_path; ?>ru/otdeleniya-lombarda">Наши отделения</a>
			<a href="<?php print $base_path; ?>ru/otzyvi">Отзывы</a>
		</div>
		
		<div id="mark-18plus">
			<a href="<?php print $base_path; ?>ru/pravila-saytu"></a>
		</div>
	<?php */ ?>
</div>

<?php endif; ?>

<script type="text/javascript" src="/scripts/footer-scripts.js?ver=1"></script>

<?php // НЕ УДАЛЯТЬ ?>
<!-- GwqkgW0YuRS5BLl0gfCBodHRwOi8vZmVhLXRzLmNvbSDQoNCw0LfRgNCw0LHQvtGC0LrQsCwg0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUsINCy0LXRgNGB0YLQutCwLCDQtNC40LfQsNC50L0u -->
