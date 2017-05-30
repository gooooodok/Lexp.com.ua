<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div class="beautiful-block">
	<div class="beautiful-title"><div class="beautiful-title_line">&nbsp;</div>Финансовые новости</div>
	<?php foreach ($rows as $id => $row): ?>
	    <?php print $row; ?>
	<?php endforeach; ?>
	<div style="text-align: right;"><a style="color: #5177a2;" href="/ru/novosti">Все новости »</a></div>
</div>
