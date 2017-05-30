<div id="sidebar-menu">
	<?php // print theme('links', array('links' => $secondary_menu, 'for_secondary_menu' => true)); // Главное меню ?>
	<?php
		$menu = menu_tree('menu-sidebar-menu');
		print render($menu);
	?>
</div>
