<?php
/**
 * @file
 * Zen theme's implementation to display the basic html structure of a single
 * Drupal page.
 *
 * Variables:
 * - $css: An array of CSS files for the current page.
 * - $language: (object) The language the site is being displayed in.
 *   $language->language contains its textual representation. $language->dir
 *   contains the language direction. It will either be 'ltr' or 'rtl'.
 * - $html_attributes: String of attributes for the html element. It can be
 *   manipulated through the variable $html_attributes_array from preprocess
 *   functions.
 * - $html_attributes_array: Array of html attribute values. It is flattened
 *   into a string within the variable $html_attributes.
 * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.
 * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.
 * - $head_title: A modified version of the page title, for use in the TITLE
 *   tag.
 * - $head_title_array: (array) An associative array containing the string parts
 *   that were used to generate the $head_title variable, already prepared to be
 *   output as TITLE tag. The key/value pairs may contain one or more of the
 *   following, depending on conditions:
 *   - title: The title of the current page, if any.
 *   - name: The name of the site.
 *   - slogan: The slogan of the site, if any, and if there is no title.
 * - $head: Markup for the HEAD section (including meta tags, keyword tags, and
 *   so on).
 * - $default_mobile_metatags: TRUE if default mobile metatags for responsive
 *   design should be displayed.
 * - $styles: Style tags necessary to import all CSS files for the page.
 * - $scripts: Script tags necessary to load the JavaScript files and settings
 *   for the page.
 * - $skip_link_anchor: The HTML ID of the element that the "skip link" should
 *   link to. Defaults to "main-menu".
 * - $skip_link_text: The text for the "skip link". Defaults to "Jump to
 *   Navigation".
 * - $page_top: Initial markup from any modules that have altered the
 *   page. This variable should always be output first, before all other dynamic
 *   content.
 * - $page: The rendered page content.
 * - $page_bottom: Final closing markup from any modules that have altered the
 *   page. This variable should always be output last, after all other dynamic
 *   content.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It should be placed within the <body> tag. When selecting through CSS
 *   it's recommended that you use the body tag, e.g., "body.front". It can be
 *   manipulated through the variable $classes_array from preprocess functions.
 *   The default values can contain one or more of the following:
 *   - front: Page is the home page.
 *   - not-front: Page is not the home page.
 *   - logged-in: The current viewer is logged in.
 *   - not-logged-in: The current viewer is not logged in.
 *   - node-type-[node type]: When viewing a single node, the type of that node.
 *     For example, if the node is a Blog entry, this would be "node-type-blog".
 *     Note that the machine name of the content type will often be in a short
 *     form of the human readable label.
 *   The following only apply with the default sidebar_first and sidebar_second
 *   block regions:
 *     - two-sidebars: When both sidebars have content.
 *     - no-sidebars: When no sidebar content exists.
 *     - one-sidebar and sidebar-first or sidebar-second: A combination of the
 *       two classes when only one of the two sidebars have content.
 *
 * @see template_preprocess()
 * @see template_preprocess_html()
 * @see zen_preprocess_html()
 * @see template_process()
 */
?>
<?php 
  // Получение номеров версий подключаемых файлов
  require_once(__DIR__.'/../../VERSIONS.php');
?>

<!DOCTYPE HTML>
<html>
<head>
  <title><?php print $head_title; ?></title>
  <?php print $head; ?>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  <link href="/styles/styles.css?ver=<?php print VERSION_STYLE_CSS; ?>" rel="stylesheet" type="text/css" />
  <link href="/styles/adaptive.css?ver=<?php print VERSION_STYLE_CSS; ?>" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="/scripts/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" src="/scripts/scripts.js?ver=<?php print VERSION_SCRIPTS_JS; ?>"></script>
  <script type="text/javascript" src="/scripts/jquery.fancybox.pack.js"></script>
  <script type="text/javascript" src="/scripts/jquery.slides_special_for_lexpert.js"></script>
  <link href="/styles/jquery.fancybox.css" rel="stylesheet" type="text/css" />
  
  <?php if ($is_front) : ?><link href="/styles/main-banner.css?ver=<?php print VERSION_STYLE_CSS; ?>" rel="stylesheet" type="text/css" /><?php endif; ?>

  <?php if (!preg_match('/88.81.235.222/', $_SERVER["REMOTE_ADDR"])) : // если пользователь заходит на сайт с компьютера не компании (не локальной сети) ?>
    <?php if (!$logged_in) : // если пользователь не залогинен, то показать блок ?>
      <?php if ($_GET['q'] == 'node') : ?>
        <!-- Google Analytics Content Experiment code -->
        <script>function utmx_section(){}function utmx(){}(function(){var
        k='51559052-0',d=document,l=d.location,c=d.cookie;
        if(l.search.indexOf('utm_expid='+k)>0)return;
        function f(n){if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.
        indexOf(';',i);return escape(c.substring(i+n.length+1,j<0?c.
        length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;d.write(
        '<sc'+'ript src="'+'http'+(l.protocol=='https:'?'s://ssl':
        '://www')+'.google-analytics.com/ga_exp.js?'+'utmxkey='+k+
        '&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='+new Date().
        valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
        '" type="text/javascript" charset="utf-8"><\/sc'+'ript>')})();
        </script><script>utmx('url','A/B');</script>
        <!-- End of Google Analytics Content Experiment code -->
      <?php endif; ?>

      <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-26293987-1']);
        _gaq.push(['_trackPageview']);

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
      </script>

      <!-- Google Code for lexp.com.ua Conversion Page -->
      <script type="text/javascript">
      /* <![CDATA[ */
      var google_conversion_id = 1020652820;
      var google_conversion_language = "en";
      var google_conversion_format = "3";
      var google_conversion_color = "ffffff";
      var google_conversion_label = "Bq82CKnKtmcQlNrX5gM";
      var google_remarketing_only = false;
      /* ]]> */
      </script>
      <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
      </script>
      <noscript>
      <div style="display:inline;">
      <img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1020652820/?label=Bq82CKnKtmcQlNrX5gM&amp;guid=ON&amp;script=0"/>
      </div>
      </noscript>
      <!-- End Google Code for lexp.com.ua Conversion Page -->


      <!-- Yandex.Metrika counter -->
      <script type="text/javascript">
      (function (d, w, c) {
          (w[c] = w[c] || []).push(function() {
              try {
                  w.yaCounter22222984 = new Ya.Metrika({id:22222984,
                          webvisor:true,
                          clickmap:true,
                          trackLinks:true,
                          accurateTrackBounce:true});
              } catch(e) { }
          });

          var n = d.getElementsByTagName("script")[0],
              s = d.createElement("script"),
              f = function () { n.parentNode.insertBefore(s, n); };
          s.type = "text/javascript";
          s.async = true;
          s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

          if (w.opera == "[object Opera]") {
              d.addEventListener("DOMContentLoaded", f, false);
          } else { f(); }
      })(document, window, "yandex_metrika_callbacks");
      </script>
      <noscript><div><img src="//mc.yandex.ru/watch/22222984" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
      <!-- /Yandex.Metrika counter -->
    <?php endif; ?>
  <?php endif; ?>

  <?php if ($is_admin or $logged_in) : ?>
    <!-- -->
    <?php print $styles; ?>
    <?php print $scripts; ?>
    <!-- -->
  <?php endif; ?>
</head>
  <body>
    <?php print $page_top; ?>
    <?php print $page; ?>
    <?php print $page_bottom; ?>

    <!-- Временно -->
    <div style="display: none;">
      <img src="/images/mini-map-hover-2.png">
      <img src="/images/search-loupe-hover.png">
      <img src="/images/login-button-enter-hover.png">
      <img src="/images/banner-line6-hover.png">
    </div>
    <!-- -->
  </body>
</html>
