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
<?php // СТРАНИЦА "ОЦЕНИТЬ ЗОЛОТО" УКР ?>
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
                <table width="100%" cellspacing="0" cellpadding="0" border="0" class="beautiful-buttons">
                  <tbody><tr>
                    <td>
                      <a href="<?php print $base_path; ?>ua/ocinka-zastavi/ociniti-zoloto" class="button3">
                        <div class="beautiful-title">
                          <div class="beautiful-title_line">&nbsp;</div>
                          Онлайн-оцінка золота
                        </div>
                        <img style="left: 135px !important; top: 13px !important;" src="<?php print $base_path; ?>images/button-gold.png">
                      </a>
                    </td>
                    <td>
                      <a href="<?php print $base_path; ?>ua/ocinka-zastavi/ociniti-tehniku" class="button2">
                        <div class="beautiful-title">
                          <div class="beautiful-title_line">&nbsp;</div>
                          Онлайн-оцінка техніки
                        </div>
                        <img src="<?php print $base_path; ?>images/button-machine.png">
                      </a>
                    </td>
                    <td>
                      <a href="<?php print $base_path; ?>ua/kredit-pod-zalog/kreditniy-kalkulyator" class="button1">
                        <div class="beautiful-title">
                          <div class="beautiful-title_line">&nbsp;</div>
                          Кредитний калькулятор
                        </div>
                        <img src="<?php print $base_path; ?>images/button-calculator.png">
                      </a>
                    </td>
                  </tr>
                </tbody></table>

                <?php print $breadcrumb; ?>
                <div class="beautiful-title"><div class="beautiful-title_line">&nbsp;</div><h1><?php print $title; ?></h1></div>

                <div id="page-content">
                  <?php require_once('blocks/edit-link.php'); ?>

                  Вибачте, сервіс на обновленні.<br>
                  Оцінити техніку можете через <a href="<?php print $base_path; ?>ua/ocinka-zastavi/ociniti-tehniku">форму</a>.

                  <?php /*
                  <div id="rate-gold">
                    <div id="rate-gold_date_update">
                      Обновлено: <?php print PRICE_DATE_UPDATE; ?>
                    </div>
                    
                    <div id="rate-gold_filter">
                      <table width="100%" cellspacing="20" cellpadding="0" border="0" style="border-bottom: 1px solid #CF0036;">
                        <tbody><tr>
                          <td>
                            <div class="field_title">Матеріал (<a href="<?php print $base_path; ?>ua/faq#faq_question_220">?</a>)</div>
                            <div class="filer-block_select">
                              <select id="rate-gold-material" style="width: 240px; height: 35px;" name="">
                                <option selected="selected" value="gold_375">Золото 375°</option>
                                <option value="gold_500">Золото 500°</option>
                                <option value="gold_583">Золото 583°</option>
                                <option value="gold_585">Золото 585°</option>
                                <option value="gold_750">Золото 750°</option>
                                <option value="gold_750900">Золото 750/900°</option>
                                <option value="gold_900">Золото 900°</option>
                                <option value="silver_875">Срібло 875°</option>
                                <option value="silver_900">Срібло 900°</option>
                                <option value="silver_916">Срібло 916°</option>
                                <option value="silver_925">Срібло 925°</option>
                                <option value="silver_960">Срібло 960°</option>
                              </select>
                            </div>
                          </td>
                          <td>
                            <div class="field_title">Маса (Г)</div>
                            <div class="filer-block_input">
                              <input id="rate-gold-massa"></input>
                            </div>
                          </td>
                          <td>
                            <div class="field_title">Категорія (<a href="#">?</a>)</div>
                            <div class="filer-block_select">
                              <select id="rate-gold-category" style="width: 125px; height: 35px;" name="">
                                <option id="category_1" selected="selected" value="1">Категорія 1</option>
                                <option id="category_2" value="2">Категорія 2</option>
                                <option id="category_3" value="3">Категорія 3</option>
                                <option id="category_4" value="4">Категорія 4</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody></table>
                      <div style="text-align: right; padding: 11px 20px 7px 0; border-top: 1px solid #EC2159;">
                        <a href="javascript:;" id="rate-gold-submit"><img src="/images/button-rate-ua.png"></a>
                      </div>
                    </div>
                    
                    <div id="evaluative-value">
                      Оціночна вартість: <a href="#" id="rate-gold-result">0</a> грн <a id="button-calculate-credit" style="text-decoration: none !important; position: relative; top: -3px; margin-left: 13px;" href="javascript:;" lang="ua"><img align="top" src="/images/button-calculate-credit-ua.png"></a>
                    </div>
                  </div>

                  <div id="tabs_categories">
                      <ul>
                        <li class="tab_current">
                          <a tab_target="gold" class="category_tab" href="javascript:;">Категорії золота</a>
                        </li>
                        <li>
                          <a tab_target="silver" class="category_tab" href="javascript:;">Категорії серебра</a>
                        </li>
                      </ul>
                  </div>

                  <div id="tabs_content">
                    <div id="TAB_gold">
                      <table border="0" cellpadding="10" cellspacing="10">
                        <tbody>
                          <tr>
                            <td style="text-align:center; vertical-align:top">
                            <p><strong>4&nbsp;категорія</strong></p>
                            </td>
                            <td style="vertical-align:top">- вироби з пробірними клеймами України в ідеальному стані (відсутність деформацій, подряпин, забруднень).</td>
                          </tr>
                          <tr>
                            <td style="text-align:center; vertical-align:top">
                            <p><strong>3 категорія</strong></p>
                            </td>
                            <td style="vertical-align:top">- вироби з пробірними клеймами України (крім брухту, непарних &nbsp;виробів та &nbsp;виробів без подальшого викупу).</td>
                          </tr>
                          <tr>
                            <td style="text-align:center; vertical-align:top">
                            <p><strong>2&nbsp;категорія</strong></p>
                            </td>
                            <td style="vertical-align:top">
                            <p>- брухт дорогоцінного металу у вигляді монет, зливків, нагород;<br />
                            - вироби з радянськими пробірними клеймами;<br />
                            - вироби з пробірними клеймами країн СНД;<br />
                            - вироби із золота виготовлені приватним способом без пробірного клейма України;<br />
                            - вироби іноземного виробництва ,в тому числі апробовані в Україні;<br />
                            - обручки.</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align:center; vertical-align:top">
                            <p><strong>1&nbsp;категорія</strong></p>
                            </td>
                            <td style="vertical-align:top">
                            <p>- вироби без подальшого викупу;<br />
                            - брухт виробів з дорогоцінних металів;<br />
                            - непарні вироби (одна сережка, запонка);<br />
                            - стоматологічне золото.</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div id="TAB_silver">
                      <table border="0" cellpadding="10" cellspacing="10">
                        <tbody>
                          <tr>
                            <td style="text-align:center; vertical-align:top">
                            <p><strong>2&nbsp;категорія</strong></p>
                            </td>
                            <td style="vertical-align:top">
                            <p>- вироби з українськими пробірними клеймами (без механічних дефектів та пошкоджень, що мають товарний вигляд).</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align:center; vertical-align:top">
                            <p><strong>1&nbsp;категорія</strong></p>
                            </td>
                            <td style="vertical-align:top">
                            <p>- вироби з радянськими та російськими пробірними клеймами;<br />
                            - вироби з золотниковими клеймами;<br />
                            - вироби з дефектами та пошкодженнями;<br />
                            - брухт дорогоцінних металів у вигляді монет та злитків;</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div> */ ?>

                  <?php // print render($page['content']); ?>
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

<?php require_once('blocks/block-rate-gold-material-price.php'); ?>
