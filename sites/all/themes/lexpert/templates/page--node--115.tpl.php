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
<?php // СТРАНИЦА "КРЕДИТНЫЙ КАЛЬКУЛЯТОР" УКР ?>
<?php 
  // Глобальные константы
  require_once('blocks/VARIABLES.php');
?>

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
				<?php print $breadcrumb; ?>

				<?php if ($title) : ?>
				<div class="beautiful-title"><div class="beautiful-title_line">&nbsp;</div><h1><?php print $title; ?></h1></div>
				<?php endif; ?>

				<div id="page-content">
				  <?php require_once('blocks/edit-link.php'); ?>
				  <?php print $messages; ?>

				  <div id="rate-gold">
						  <div id="rate-gold_filter">
							<div class="field_title">Материал изделия <a href="/ru/faq#faq_question_221" target="_blank"><img src="/images/credit-calculator/help.png" width="16" height="16"></a></div>
							  <div class="filer-block_select">
								<select id="rate-gold-material" style="width: 200px; height: 35px;" name="">
								  <option selected="selected" value="default">-- Выберите материал --</option>
								  <option value="gold_375">Золото 375°</option>
								  <option value="gold_500">Золото 500°</option>
								  <option value="gold_583">Золото 583°</option>
								  <option value="gold_585">Золото 585°</option>
								  <option value="gold_750">Золото 750°</option>
								  <option value="gold_750900">Золото 750/900°</option>
								  <option value="gold_900">Золото 900°</option>
								  <option value="silver_875">Серебро 875°</option>
								  <option value="silver_900">Серебро 900°</option>
								  <option value="silver_916">Серебро 916°</option>
								  <option value="silver_925">Серебро 925°</option>
								  <option value="silver_960">Серебро 960°</option>
								</select>
							  </div>

							  <div class="field_title">Тариф <a href="#info"><img src="/images/credit-calculator/help.png" width="16" height="16"></a></div>
							  <div class="filer-block_select">
								<select id="rate-gold-category" style="width: 200px; height: 35px;" name="">
								  <option selected="selected" value="default">-- Выберите тариф --</option>
								  <option id="category_1" value="1">Тариф 1</option>
								  <option id="category_2" value="2">Тариф 2</option>
  								  <option id="category_3" value="3">Тариф 3</option>
								  <option id="category_4" value="4">Тариф 4</option>
								  <option id="category_5" value="5">Тариф 5</option>
								  <?php /* ?><option id="category_6" value="6">Тариф 6</option><?php */ ?>
								</select>
							  </div>

							  <div class="field_title">Масса</div>
							  <div class="filer-block_input" style="position: relative;">
								<div id="massa_value_hint">грамм</div>
								<input value="" id="rate-gold-massa" type="number">
							  </div>

							  <div class="field_title">Срок кредитования</div>
							  <div class="filer-block_input" style="position: relative;">
								<div id="count_day_value_hint">дней</div>
								<input value="" id="credit_calulator_count_day" type="number">
							  </div>

							  <div style="padding: 11px 20px 7px 0;">
								<a id="credit_calulator_submit" class="beauty-yellow-button" href="javascript:;"  onclick="_gaq.push(['_trackEvent', 'credit-calculator', 'calculate'])">
								  <span>Рассчитать кредит</span>
								</a>
							  </div>
							</div>
						<div id="rate-gold_result">
						  <div style="text-align: center;"><img src="/images/credit-calculator/money_tree.png" width="375" height="281" style="position: relative; left: -18px; top: 15px;"></div>

						  <div style="overflow: hidden; zoom: 1;">
							  <div id="evaluative-value" class="credit_calulator_result_1" style="display: block; float: left; width: 50%; white-space: nowrap;">
								<div style="line-height: 37px;">
								  <div style="font-size: 22px; color: #fff;">Cумма на руки:</div>
								  <div><span href="#" id="credit_calulator_sum_on_hands" style="background-color: #f5cb00; border-radius: 5px; font-size: 30px; padding: 5px;">0</span><span style="font-size: 18px; color: #591619;">&nbsp;грн.</span></div>
								</div>
							</div>
							
							<div id="evaluative-value" class="credit_calulator_result_2" style="display: block; float: left; white-space: nowrap;">
								<div style="line-height: 37px;">
								  <div style="font-size: 22px; color: #fff;">Cумма викупа:</div>
								  <div>
									<span href="#" id="credit_calulator_sum_buyout" style="background-color: #f5cb00; border-radius: 5px; font-size: 30px; padding: 5px;">0</span><span style="font-size: 18px; color: #591619;">&nbsp;грн.</span>
									<div id="discount_notifications" style="display: none; font-size: 14px;">(по акции «<a href="http://l-expert.com.ua/ru/akcii-lombard/265" target="_blank">Плати половину</a>»)</div>
								  </div>
								</div>
							</div>
							</div>
						</div>
				  </div>

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

<?php require_once('blocks/block-credit_calculator_scripts.php'); ?>
