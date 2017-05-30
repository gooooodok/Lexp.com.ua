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
<?php // СТРАНИЦА "КРЕДИТОВАНИЕ" РУС ?>

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
                      <a class="button3" href="<?php print $base_path; ?>ru/ocinka-zastavi/ociniti-zoloto">
                        <div class="beautiful-title">
                          <div class="beautiful-title_line">&nbsp;</div>
                          Онлайн-оценка золота
                        </div>
                        <img src="<?php print $base_path; ?>images/button-gold.png" style="left: -25px !important; top: 16px !important; width: 116px;">
                      </a>
                    </td>
                    <td>
                      <a class="button2" href="<?php print $base_path; ?>ru/ocinka-zastavi/ociniti-tehniku">
                        <div class="beautiful-title">
                          <div class="beautiful-title_line">&nbsp;</div>
                          Онлайн-оценка техники
                        </div>
                        <img src="<?php print $base_path; ?>images/button-machine.png">
                      </a>
                    </td>
                    <td>
                      <a class="button1" href="<?php print $base_path; ?>ru/kredit-pod-zalog/kreditniy-kalkulyator">
                        <div class="beautiful-title">
                          <div class="beautiful-title_line">&nbsp;</div>
                          Кредитный калькулятор
                        </div>
                        <img src="<?php print $base_path; ?>images/button-calculator.png">
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
