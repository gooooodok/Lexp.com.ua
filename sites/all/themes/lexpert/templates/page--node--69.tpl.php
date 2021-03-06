<?php
/**
 * @file
 * Zen theme's implementation to display a single Drupal page.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $secondary_menu_heading: The title of the menu used by the secondary links.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['header']: Items for the header region.
 * - $page['navigation']: Items for the navigation region, below the main menu (if any).
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['footer']: Items for the footer region.
 * - $page['bottom']: Items to appear at the bottom of the page below the footer.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see zen_preprocess_page()
 * @see template_process()
 */
?>
<?php // СТРАНИЦА "О НАС" РУС ?>

<div id="body">
  <?php require_once('blocks/header.php'); ?>
  
  <?php require_once('blocks/main-menu.php'); ?>

  <div id="main-inner">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td id="main-wrapper">
          <div id="main-content">
            <!-- Sidebar -->
            <?php require_once('blocks/sidebar.php'); ?>
            <!-- End Sidebar -->

            <!-- Content -->
            <div id="inner-content">
            	<table class="beautiful-buttons" border="0" cellpadding="0" cellspacing="0" width="100%">
					<tr>
					  <td>
					    <a href="<?php print $base_path; ?>ru/otdeleniya-lombarda">
					      <div class="beautiful-title" style="right: -25px !important; top: 25px;">
					        <div class="beautiful-title_line">&nbsp;</div>
					        Наши<br>отделения
					      </div>
					      <img src="<?php print $base_path; ?>images/test-button-ukraine.png" style="width: 120px; top: 7px; left: -9%;">
					    </a>
					  </td>
					  <td>
					    <a href="<?php print $base_path; ?>ru/vakansii-lombard">
					      <div class="beautiful-title" style="top: 38px; right: -35px !important;">
					        <div class="beautiful-title_line">&nbsp;</div>
					        Вакансии
					      </div>
					      <img src="<?php print $base_path; ?>images/test-button-vacancy.png" style="top: 5px; width: 100px; left: 7%;">
					    </a>
					  </td>
					  <td>
					    <?php /* <a href="<?php print $base_path; ?>ru/partnerstvo">
					      <div class="beautiful-title">
					        <div class="beautiful-title_line">&nbsp;</div>
					        Партнеры
					      </div>
					      <img src="<?php print $base_path; ?>images/test1-button-partners.png" style="top: 11px; left: 27%;">
					    </a> */ ?>
					    <a href="<?php print $base_path; ?>ru/komisiyni-magazini">
                          <div class="beautiful-title" style="right: -7px !important; top: 25px;">
                            <div class="beautiful-title_line">&nbsp;</div>
                            Комиссионные<br>магазины
                          </div>
                          <img src="<?php print $base_path; ?>images/test-button-shops.png" style="top: 1px; width: 80px; left: 20px;">
                        </a>
					  </td>
					</tr>
					<tr>
					  <td>
					    <a href="<?php print $base_path; ?>ru/novosti/novosti-lombarda">
					      <div class="beautiful-title" style="right: -25px !important; top: 24px;">
					        <div class="beautiful-title_line">&nbsp;</div>
					        Новости компании
					      </div>
					      <img src="<?php print $base_path; ?>images/button-news.png" style="width: 140px; left: -16%; top: 5px;">
					    </a>
					  </td>
					  <td>
					    <a href="<?php print $base_path; ?>ru/kredit-pod-zalog">
					      <div class="beautiful-title" style="right: -5px !important; top: 33px;">
					        <div class="beautiful-title_line">&nbsp;</div>
					        Кредитование
					      </div>
					      <img src="<?php print $base_path; ?>images/button-crediting.png" style="top: 3px; width: 100px; left: -16px;">
					    </a>
					  </td>
					  <td>
					    <a href="<?php print $base_path; ?>ru/finansova-zvitnist">
					      <div class="beautiful-title" style="right: 8px !important; top: 8px; width: 180px;">
					        <div class="beautiful-title_line">&nbsp;</div>
					        Финансовая отчетность и информация про обособленные подразделения
					      </div>
					    </a>
					  </td>
					</tr>
				</table>

                <?php print $breadcrumb; ?>
                <div class="beautiful-title"><div class="beautiful-title_line">&nbsp;</div><h1><?php print $title; ?></h1></div>

                <div id="page-content">
					<?php require_once('blocks/edit-link.php'); ?>
                    <?php print $messages; ?>
                    <?php print render($page['content']); ?>
                </div>

                <?php print render($page['bottom']); ?>
            </div>
            <!-- End Content -->
          </div>
        </td>
      </tr>
    </table>
  </div>

  <!-- Footer -->
  <?php require_once('blocks/footer.php'); ?>
  <!-- End Footer -->
</div>
