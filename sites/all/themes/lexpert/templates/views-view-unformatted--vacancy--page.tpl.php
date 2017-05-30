<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>

<table width="100%" cellspacing="0" cellpadding="0" border="0" id="jobs-list">
	<tr>
		<th width="128">Вакансія</th>
		<th width="90">Місто</th>
	</tr>
	<?php foreach ($rows as $id => $row): ?>
		<tr<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
	    <?php print $row; ?>
	   	</tr>
	<?php endforeach; ?>
</table>