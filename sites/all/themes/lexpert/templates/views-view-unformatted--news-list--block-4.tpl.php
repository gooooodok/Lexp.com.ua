<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>

<div class="beautiful-title"><div class="beautiful-title_line">&nbsp;</div>Інші фінансові новини</div>
<div class="article-previews_big">
	<?php foreach ($rows as $id => $row): ?>
	    <?php print $row; ?>
	<?php endforeach; ?>
</div>