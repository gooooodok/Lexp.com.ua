<?php 
  // Глобальные константы
  require_once('VARIABLES.php');
?>
<?php global $language; ?>
<div id="mobile-menu">
	<div id="mobile-menu__popup-button">
		<a id="mobile_popup__open" href="javascript:;">=</a>
		<a id="mobile_popup__close" href="javascript:;">×</a>
	</div>
	<div id="mobile-header-phones">
		<a href="tel:380672330315"><span>+380&nbsp;(67)</span>&nbsp;233-03-15</a>
	</div>
</div>

<div id="mobile-menu__popup-menu">
	<?php if ($language->language == 'uk') : ?>
		<a href="/ua/kredit-pod-zalog">Кредитування</a>
		<a href="/ua/ocinka-zastavi/kreditniy-kalkulyator">Кредитний калькулятор</a>
		<a href="/ua/ocinka-zastavi/ociniti-tehniku">Оцінити техніку</a>
		<a href="https://online.lexp.com.ua/prolong">Онлайн пролонгація</a>
		<a href="/ua/otdeleniya-lombarda">Наші відділення</a>
		<a href="http://work.lexp.com.ua" target="_blank">Вакансії</a>
		<a href="/ua/o-lombarde">Про нас</a>
		
	<?php elseif ($language->language== 'ru') : ?>
		<a href="/ru/kredit-pod-zalog">Кредитование</a>
		<a href="/ru/ocinka-zastavi/kreditniy-kalkulyator">Кредитный калькулятор</a>
		<a href="/ru/ocinka-zastavi/ociniti-tehniku">Оценить технику</a>
		<a href="https://online.lexp.com.ua/prolong">Онлайн пролонгация</a>
		<a href="/ru/otdeleniya-lombarda">Наши отделения</a>
		<a href="http://work.lexp.com.ua" target="_blank">Вакансии</a>
		<a href="/ru/o-lombarde">О нас</a>
	<?php endif; ?>
</div>

<div id="header">
	<div id="header-inner">
		<?php if ($is_front) : ?>
			<div id="logo"><img src="<?php print $base_path; ?>images/logo.gif"></div>
			<?php /* ?><div id="logo"><img src="<?php print $base_path; ?>images/logo-new-yaer.png"></div><?php */ ?>
		<?php else : ?>
			<a id="logo" href="<?php print $front_page; ?>">
				<img src="<?php print $base_path; ?>images/logo.gif">
				<?php /* ?><img src="<?php print $base_path; ?>images/logo-new-yaer.png"><?php */ ?>
			</a>
		<?php endif; ?>

		<div id="header-phones">
			<span>+380&nbsp;(67)</span>&nbsp;233-03-15<br>
			<span>+380&nbsp;(44)</span>&nbsp;563-94-19
		</div>
	</div>
</div>
