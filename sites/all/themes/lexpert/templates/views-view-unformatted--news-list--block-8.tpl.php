<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div class="beautiful-block">
	<div class="beautiful-title"><div class="beautiful-title_line">&nbsp;</div>Фінансові новини</div>
	<?php foreach ($rows as $id => $row): ?>
	    <?php print $row; ?>
	<?php endforeach; ?>
	<div style="text-align: right;"><a style="color: #5177a2;" href="/novosti">Всі новини »</a></div>
</div>
