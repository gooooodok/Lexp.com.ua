<?php global $language; ?>

<?php // Если роль «администратор» (3) и «вадим Бурлаков» (6) и если не на странице 404 (укр, рус) и 403 (укр, рус)  ?>
<?php if ((isset($user->roles[3]) || isset($user->roles[6])) && ($node->nid != 1 && $node->nid != 38 && $node->nid != 2 && $node->nid != 39)) : ?>
	<?php if ($language->language == 'uk') : ?>
	<a href="<?php print $base_path; ?>ua/node/<?php print arg(1); ?>/edit" style="float: right; color: green; position: relative; z-index: 5;">[Редагувати]</a>
	<?php elseif ($language->language == 'ru') : ?>
	<a href="<?php print $base_path; ?>ru/node/<?php print arg(1); ?>/edit" style="float: right; color: green; position: relative; z-index: 5;">[Редактировать]</a>
	<?php endif; ?>
<?php endif; ?>