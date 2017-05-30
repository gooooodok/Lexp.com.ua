<?php
/**
 * @file
 * Zen theme's implementation to display a node.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct url of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $submitted: Submission information created from $name and $date during
 *   template_preprocess_node().
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type, i.e., "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   - view-mode-[mode]: The view mode, e.g. 'full', 'teaser'...
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 *   The following applies only to viewers who are registered users:
 *   - node-by-viewer: Node is authored by the user currently viewing the page.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type, i.e. story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $pubdate: Formatted date and time for when the node was published wrapped
 *   in a HTML5 time element.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode, e.g. 'full', 'teaser'...
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content. Currently broken; see http://drupal.org/node/823380
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined, e.g. $node->body becomes $body. When needing to access
 * a field's raw values, developers/themers are strongly encouraged to use these
 * variables. Otherwise they will have to explicitly specify the desired field
 * language, e.g. $node->body['en'], thus overriding any language negotiation
 * rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see zen_preprocess_node()
 * @see template_process()
 */
?>

<?php global $language; ?>

<?php // Если анонс ?>
<?php if ($teaser) : ?>
  <div id="offices-list">
    <div class="offices-item">
      <div class="right">
        <?php print render($content['field_office_main_photo']); ?>
      </div>
      <div class="left">
        <div class="offices-title">
          <?php /* <span class="offices-number"><?php print $id; ?>.</span> */ ?>
          <a href="<?php print $node_url; ?>"><?php print $content['field_office_city']['#items'][0]['taxonomy_term']->name.', '.$title; ?></a>
        </div>
        <div class="offices-content">
          <div class="offices-item_top">
            <?php // Если русская версия ?>
            <?php if ($language->language == 'uk') : ?>
              <div class="offices-item_top_left">
                <strong>Телефони:</strong><br>
                <?php print render($content['field_office_phones']); ?>
              </div>
              <div class="offices-item_top_right">
                <strong>Графік работи:</strong><br>
                <?php print render($content['field_work_schedule']); ?>
              </div>

            <?php // Если русская версия ?>
            <?php elseif ($language->language== 'ru') : ?>
              <div class="offices-item_top_left">
                <strong>Телефоны:</strong><br>
                <?php print render($content['field_office_phones']); ?>
              </div>
              <div class="offices-item_top_right">
                <strong>График работы:</strong><br>
                <?php print render($content['field_work_schedule']); ?>
              </div>
            <?php endif; ?>
          </div>
          <div class="offices-item_bottom">
            <?php print render($content['field_office_against_collateral']); ?>
          </div>
        </div>
      </div>
    </div>
  </div>

<?php // Если страница ?>
<?php elseif ($page) : ?>
  <?php drupal_set_title($content['field_office_city']['#items'][0]['taxonomy_term']->name.', '.$title); ?>

  <div class="vcard">
    <div class="vcard_info__hide">
      <span class="fn org">Ломбард «Експерт»</span>
      <a class="url" href="http://lexp.com.ua"></a>
    </div>
    
    <div class="beautiful-title adr"><span class="country-name vcard_info__hide">Україна</span><div class="beautiful-title_line">&nbsp;</div><h1><?php print '<span class="locality">'.$content['field_office_city']['#items'][0]['taxonomy_term']->name.'</span>, <span class="street-address">'.$title.'</span>'; ?></h1></div>

    <div id="current-office">
      <div class="offices-item">
        <div class="right">
          <table width="100%" cellspacing="0" cellpadding="0" border="0">
            <tbody><tr>
              <td align="center" colspan="3"><div class="pop-up-image"><?php print render($content['field_office_main_photo']); ?></div></td>
            </tr>
            <tr>
              <td align="center" width="33%"><div class="pop-up-image"><?php print render($content['field_field_office_other_photos'][0]); ?></div></td>
              <td align="center" width="33%"><div class="pop-up-image"><?php print render($content['field_field_office_other_photos'][1]); ?></div></td>
              <td align="center" width="33%"><div class="pop-up-image"><?php print render($content['field_field_office_other_photos'][2]); ?></div></td>
            </tr>
          </tbody></table>  
        </div>
        <div class="left">
          <div class="offices-content">
            <div class="offices-item_top">
              <?php // Если русская версия ?>
              <?php if ($language->language == 'uk') : ?>
                <div class="offices-item_top_left">
                  <strong>Телефони:</strong><br>
                  <span class="tel"><?php print render($content['field_office_phones']); ?></span>
                </div>
                <div class="offices-item_top_right">
                  <strong>Графік работи:</strong><br>
                  <span class="workhours"><?php print render($content['field_work_schedule']); ?></span>
                </div>

              <?php // Если русская версия ?>
              <?php elseif ($language->language== 'ru') : ?>
                <div class="offices-item_top_left">
                  <strong>Телефоны:</strong><br>
                  <?php print render($content['field_office_phones']); ?>
                </div>
                <div class="offices-item_top_right">
                  <strong>График работы:</strong><br>
                  <?php print render($content['field_work_schedule']); ?>
                </div>
              <?php endif; ?>
            </div>

            <?php
              $orgName      = 'Ломбард «Експерт»';

              $addressLabel = 'Отделение';
              $address      = $content['field_office_city']['#items'][0]['taxonomy_term']->name.', '.$title;

              $QRcodeContents  = 'BEGIN:VCARD'."\n";
              $QRcodeContents .= 'VERSION:2.1'."\n";
              $QRcodeContents .= 'N:'.$orgName."\n";
              $QRcodeContents .= 'FN:'.$orgName."\n";
              $QRcodeContents .= 'ORG:'.$orgName."\n";

              foreach ($node->field_office_phones['und'] as $qr_code__phone) {
                $QRcodeContents .= 'TEL;WORK;VOICE:'.$qr_code__phone['value']."\n";
              }

              $QRcodeContents .= 'ADR;TYPE=work;'.
                  'LABEL="":'.$address.';'."\n";;
              $QRcodeContents .= 'URL:http://lexp.com.ua'."\n";
              $QRcodeContents .= 'NOTE:'.$node->field_work_schedule['und'][0]['value']."\n";
              $QRcodeContents .= 'END:VCARD';
            ?>

            <?php // Если русская версия ?>
            <?php if ($language->language == 'uk') : ?>
              <div id="offices-qr-code">
                <div>Збережіть на смартфон інформацію про відділення</div>
                <a id="offices-qr-code__link" href="javascript:;">QR-код відділення</a>
                <div id="offices-qr-code__body">
                  За допомогою QR-коду ви швидко збережете на смартфон інформацію про відділення: назву компанії, адресу, телефони, час роботи, адресу сайту.<br><br>
                  1. Встановіть, якщо не встановлений, сканер QR-кодів на свій смартфон <a href="https://play.google.com/store/search?q=qr">Android</a>, iOS або <a href="https://www.windowsphone.com/ru-ru/search?q=qr">Windows Phone</a>;<br>
                  2. Запустіть сканер QR-кодів і відскануйте код знизу;<br>
                  <?php print '<img src="https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl='.urlencode($QRcodeContents).'">'; ?>
                  3. Збережіть контакт.
                </div>
              </div>
            <?php elseif ($language->language == 'ru') : ?>
              <div id="offices-qr-code">
                <div>Сохраните на смартфон информацию об отделении</div>
                <a id="offices-qr-code__link" href="javascript:;">QR-код отделения</a>
                <div id="offices-qr-code__body">
                  С помощью QR-кода вы быстро сохраните на смартфон информацию об отделении: название компании, адрес, телефоны, время работы, адрес сайта.<br><br>
                  1. Установите, если не установлен, сканер QR-кодов на свой смартфон <a href="https://play.google.com/store/search?q=qr">Android</a>, iOS или <a href="https://www.windowsphone.com/ru-ru/search?q=qr">Windows Phone</a>;<br>
                  2. Запустите сканер QR-кодов и отсканируйте код снизу;<br>
                  <?php print '<img src="https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl='.urlencode($QRcodeContents).'">'; ?>
                  3. Сохраните контакт.
                </div>
              </div>
            <?php endif; ?>

            <div class="offices-item_bottom">
              <?php print render($content['field_office_against_collateral']); ?>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>

  <?php if (!empty($content['field_yandex_map_coordinates'])) : ?>
    <?php // Если украинская версия ?>
    <?php if ($language->language == 'uk') : ?>
      <script src="//api-maps.yandex.ru/2.1/?lang=uk-UA&load=package.full&coordorder=longlat" type="text/javascript"></script>

    <?php // Если русская версия ?>
    <?php elseif ($language->language== 'ru') : ?>
       <script src="//api-maps.yandex.ru/2.1/?lang=ru-RU&load=package.full&coordorder=longlat" type="text/javascript"></script>
    <?php endif; ?>

    <script type="text/javascript">
      ymaps.ready(function () {
        var myMap = new ymaps.Map('yandex-map', {
            center: [<?php print $content['field_yandex_map_coordinates']['#items'][0]['safe_value']; ?>],
            controls: ['geolocationControl', 'routeEditor', 'zoomControl', 'trafficControl', 'typeSelector', 'fullscreenControl'],
            zoom: 16,
        });

        <?php // Если украинская версия ?>
        <?php if ($language->language == 'uk') : ?>
          var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContentBody: [
                "<strong style='font-size: 16px;'>Ломбард «Експерт»</strong>",
                "<div><?php print $content['field_office_city']['#items'][0]['taxonomy_term']->name.', '.$title; ?></div>",
                "<br>",
                "<strong>Телефони:</strong><br>",
                <?php 
                  foreach ($node->field_office_phones['und'] as $ymaps__phone) {
                    print '"<div>'.$ymaps__phone['value'].'</div>",';
                  }
                ?>
                "<br>",
                "<strong>Графік работи:</strong><br>",
                "<div><?php print $node->field_work_schedule['und'][0]['value']; ?></div>",
                "<br>"
            ].join('')
          }, {
              preset: 'islands#redDotIcon'
          });

        <?php // Если русская версия ?>
        <?php elseif ($language->language== 'ru') : ?>
          var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContentBody: [
                "<strong style='font-size: 16px;'>Ломбард «Експерт»</strong>",
                "<div><?php print $content['field_office_city']['#items'][0]['taxonomy_term']->name.', '.$title; ?></div>",
                "<br>",
                "<strong>Телефоны:</strong><br>",
                <?php 
                  foreach ($node->field_office_phones['und'] as $ymaps__phone) {
                    print '"<div>'.$ymaps__phone['value'].'</div>",';
                  }
                ?>
                "<br>",
                "<strong>График работы:</strong><br>",
                "<div><?php print $node->field_work_schedule['und'][0]['value']; ?></div>",
                "<br>"
            ].join('')
          }, {
              preset: 'islands#redDotIcon'
          });
        <?php endif; ?>

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
      });
    </script>

    <div id="yandex-map-wrapper"><div id="yandex-map"></div></div>
  <?php endif; ?>

  <?php print render($content['body']); ?>

  <?php require_once('blocks/block-feedback.php'); ?>

  <hr class="hr-ccc">

  <?php /*
  <?php print render($content['comments']); ?>

  <hr class="hr-ccc">
  */ ?>
<?php endif; ?>