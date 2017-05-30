<?php global $language; ?>

<div id="main-menu">
	<table border="0" cellpadding="0" cellspacing="0" width="100%">
		<tr>
			<td>
				<?php if (!$is_front) : ?>
					<div id="sidebar-menu_popup-open" class="sidebar-menu_popup">
						<a href="javascript:;">=</a>
					</div>
					<div id="sidebar-menu_popup-close" class="sidebar-menu_popup">
						<a href="javascript:;">×</a>
					</div>
				<?php endif; ?>
			</td>
			<td class="left_side">
				<?php // print theme('links', array('links' => $main_menu, 'for_main_menu' => true)); // Главное меню ?>

				<?php
					$menu = menu_tree('main-menu');
					print render($menu);
				?>
			</td>
			<td class="right_side" style="position: relative;">
				<input id="search-input" type="text" name="keys" onblur="if(this.value=='') {this.value='Пошук по сайту'}" onfocus="if(this.value=='Пошук по сайту') {this.value=''}" value="Пошук по сайту">
				<div id="search-loupe">&nbsp;</div>
				<img id="search-input-close" src="/images/search-input-close.png">
			</td>
		</tr>
	</table>
</div>

<?php if ($language->language == 'uk') : ?>
	<div id="franch-banner">
		<div id="franch-banner__background"></div>
		<a href="http://franchise.lexp.com.ua" target="_blank" title="Дизнатись детальніше">★ Франшиза. Створи свій бізнес ★</a>
	</div>

<?php elseif ($language->language== 'ru') : ?>
	<div id="franch-banner">
		<div id="franch-banner__background"></div>
		<a href="http://franchise.lexp.com.ua" target="_blank" title="Узнать подробнее">★ Франшиза. Создай свой бизнес ★</a>
	</div>
<?php endif; ?>
