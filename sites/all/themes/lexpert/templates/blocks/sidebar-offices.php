<?php global $language; ?>

<?php if ($language->language == 'uk') : ?>
<div class="beautiful-block">
	<div class="beautiful-title"><div class="beautiful-title_line">&nbsp;</div>Наші відділення</div>
	<div><a href="<?php print $base_path; ?>otdeleniya-lombarda" id="offices-mini-map"></a></div>
</div>

<?php elseif ($language->language== 'ru') : ?>
<div class="beautiful-block">
	<div class="beautiful-title"><div class="beautiful-title_line">&nbsp;</div>Наши отделения</div>
	<div><a href="<?php print $base_path; ?>ru/otdeleniya-lombarda" id="offices-mini-map"></a></div>
</div>

<?php endif; ?>