<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * A QUICK OVERVIEW OF DRUPAL THEMING
 *
 *   The default HTML for all of Drupal's markup is specified by its modules.
 *   For example, the comment.module provides the default HTML markup and CSS
 *   styling that is wrapped around each comment. Fortunately, each piece of
 *   markup can optionally be overridden by the theme.
 *
 *   Drupal deals with each chunk of content using a "theme hook". The raw
 *   content is placed in PHP variables and passed through the theme hook, which
 *   can either be a template file (which you should already be familiary with)
 *   or a theme function. For example, the "comment" theme hook is implemented
 *   with a comment.tpl.php template file, but the "breadcrumb" theme hooks is
 *   implemented with a theme_breadcrumb() theme function. Regardless if the
 *   theme hook uses a template file or theme function, the template or function
 *   does the same kind of work; it takes the PHP variables passed to it and
 *   wraps the raw content with the desired HTML markup.
 *
 *   Most theme hooks are implemented with template files. Theme hooks that use
 *   theme functions do so for performance reasons - theme_field() is faster
 *   than a field.tpl.php - or for legacy reasons - theme_breadcrumb() has "been
 *   that way forever."
 *
 *   The variables used by theme functions or template files come from a handful
 *   of sources:
 *   - the contents of other theme hooks that have already been rendered into
 *     HTML. For example, the HTML from theme_breadcrumb() is put into the
 *     $breadcrumb variable of the page.tpl.php template file.
 *   - raw data provided directly by a module (often pulled from a database)
 *   - a "render element" provided directly by a module. A render element is a
 *     nested PHP array which contains both content and meta data with hints on
 *     how the content should be rendered. If a variable in a template file is a
 *     render element, it needs to be rendered with the render() function and
 *     then printed using:
 *       <?php print render($variable); ?>
 *
 * ABOUT THE TEMPLATE.PHP FILE
 *
 *   The template.php file is one of the most useful files when creating or
 *   modifying Drupal themes. With this file you can do three things:
 *   - Modify any theme hooks variables or add your own variables, using
 *     preprocess or process functions.
 *   - Override any theme function. That is, replace a module's default theme
 *     function with one you write.
 *   - Call hook_*_alter() functions which allow you to alter various parts of
 *     Drupal's internals, including the render elements in forms. The most
 *     useful of which include hook_form_alter(), hook_form_FORM_ID_alter(),
 *     and hook_page_alter(). See api.drupal.org for more information about
 *     _alter functions.
 *
 * OVERRIDING THEME FUNCTIONS
 *
 *   If a theme hook uses a theme function, Drupal will use the default theme
 *   function unless your theme overrides it. To override a theme function, you
 *   have to first find the theme function that generates the output. (The
 *   api.drupal.org website is a good place to find which file contains which
 *   function.) Then you can copy the original function in its entirety and
 *   paste it in this template.php file, changing the prefix from theme_ to
 *   STARTERKIT_. For example:
 *
 *     original, found in modules/field/field.module: theme_field()
 *     theme override, found in template.php: STARTERKIT_field()
 *
 *   where STARTERKIT is the name of your sub-theme. For example, the
 *   zen_classic theme would define a zen_classic_field() function.
 *
 *   Note that base themes can also override theme functions. And those
 *   overrides will be used by sub-themes unless the sub-theme chooses to
 *   override again.
 *
 *   Zen core only overrides one theme function. If you wish to override it, you
 *   should first look at how Zen core implements this function:
 *     theme_breadcrumbs()      in zen/template.php
 *
 *   For more information, please visit the Theme Developer's Guide on
 *   Drupal.org: http://drupal.org/node/173880
 *
 * CREATE OR MODIFY VARIABLES FOR YOUR THEME
 *
 *   Each tpl.php template file has several variables which hold various pieces
 *   of content. You can modify those variables (or add new ones) before they
 *   are used in the template files by using preprocess functions.
 *
 *   This makes THEME_preprocess_HOOK() functions the most powerful functions
 *   available to themers.
 *
 *   It works by having one preprocess function for each template file or its
 *   derivatives (called theme hook suggestions). For example:
 *     THEME_preprocess_page    alters the variables for page.tpl.php
 *     THEME_preprocess_node    alters the variables for node.tpl.php or
 *                              for node--forum.tpl.php
 *     THEME_preprocess_comment alters the variables for comment.tpl.php
 *     THEME_preprocess_block   alters the variables for block.tpl.php
 *
 *   For more information on preprocess functions and theme hook suggestions,
 *   please visit the Theme Developer's Guide on Drupal.org:
 *   http://drupal.org/node/223440 and http://drupal.org/node/1089656
 */


/**
 * Override or insert variables into the maintenance page template.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("maintenance_page" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_maintenance_page(&$variables, $hook) {
  // When a variable is manipulated or added in preprocess_html or
  // preprocess_page, that same work is probably needed for the maintenance page
  // as well, so we can just re-use those functions to do that work here.
  STARTERKIT_preprocess_html($variables, $hook);
  STARTERKIT_preprocess_page($variables, $hook);
}
// */

/**
 * Override or insert variables into the html templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_html(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // The body tag's classes are controlled by the $classes_array variable. To
  // remove a class from $classes_array, use array_diff().
  //$variables['classes_array'] = array_diff($variables['classes_array'], array('class-to-remove'));
}
// */

/**
 * Override or insert variables into the page templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_page(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the node templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_node(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // Optionally, run node-type-specific preprocess functions, like
  // STARTERKIT_preprocess_node_page() or STARTERKIT_preprocess_node_story().
  $function = __FUNCTION__ . '_' . $variables['node']->type;
  if (function_exists($function)) {
    $function($variables, $hook);
  }
}
// */

/**
 * Override or insert variables into the comment templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("comment" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_comment(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the region templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_region(&$variables, $hook) {
  // Don't use Zen's region--sidebar.tpl.php template for sidebars.
  //if (strpos($variables['region'], 'sidebar_') === 0) {
  //  $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('region__sidebar'));
  //}
}
// */

/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
/* -- Delete this line if you want to use this function
function STARTERKIT_preprocess_block(&$variables, $hook) {
  // Add a count to all the blocks in the region.
  // $variables['classes_array'][] = 'count-' . $variables['block_id'];

  // By default, Zen will use the block--no-wrapper.tpl.php for the main
  // content. This optional bit of code undoes that:
  //if ($variables['block_html_id'] == 'block-system-main') {
  //  $variables['theme_hook_suggestions'] = array_diff($variables['theme_hook_suggestions'], array('block__no_wrapper'));
  //}
}
// */

/* function lexpert_field__field_tags($variables){
    $output = '<div class="article-info">Теги: ';
    $tags = array();
 
    foreach($variables['items'] as $item){
        $tags[]=drupal_render($item);
    }
 
    $output .= implode(', ', $tags); // Здесь мы ставим разделитель между тегами в виде запятой
 
    $output .= '</div>';
    return $output;
} */

function lexpert_field__field_tags($variables){
    $output = '';
    $tags = array();
 
    foreach($variables['items'] as $item){
        $tags[]=drupal_render($item);
    }
 
    $output .= implode(', ', $tags); // Здесь мы ставим разделитель между тегами в виде запятой

    return $output;
}

/* function lexpert_links($variables) {
  $links = $variables['links'];
  $attributes = $variables['attributes'];
  $heading = $variables['heading'];
  global $language_url;
  $output = '';

  if (count($links) > 0) {
  $output = '';

  // Treat the heading first if it is present to prepend it to the
  // list of links.
  if (!empty($heading)) {
    if (is_string($heading)) {
    // Prepare the array that will be used when the passed heading
    // is a string.
    $heading = array(
      'text' => $heading,
      
      // Set the default level of the heading.
      'level' => 'h2',
    );
    }
    $output .= '<' . $heading['level'];
    if (!empty($heading['class'])) {
    $output .= drupal_attributes(array('class' => $heading['class']));
    }
    $output .= '>' . check_plain($heading['text']) . '</' . $heading['level'] . '>';
  }

  $output .= '<ul' . drupal_attributes($attributes) . '>';

  $num_links = count($links);
  $i = 1;

  foreach ($links as $key => $link) {
    $class = array($key);

    // Add first, last and active classes to the list of links to help out themers.
    if ($i == 1) {
    $class[] = 'first';
    }
    if ($i == $num_links) {
    $class[] = 'last';
    }
    if (isset($link['href']) && ($link['href'] == $_GET['q'] || ($link['href'] == '<front>' && drupal_is_front_page())) && (empty($link['language']) || $link['language']->language == $language_url->language)) {
    $class[] = 'active';
    }
    $output .= '<li' . drupal_attributes(array('class' => $class)) . '>';

    if (isset($link['href'])) {
    // Pass in $link as $options, they share the same keys.
    $output .= l($link['title'], $link['href'], $link);
    }
    elseif (!empty($link['title'])) {
    // Some links are actually not links, but we wrap these in <span> for adding title and class attributes.
    if (empty($link['html'])) {
      $link['title'] = check_plain($link['title']);
    }
    $span_attributes = '';
    if (isset($link['attributes'])) {
      $span_attributes = drupal_attributes($link['attributes']);
    }
    $output .= '<span' . $span_attributes . '>' . $link['title'] . '</span>';
    }

    $i++;
    $output .= "</li>\n";
  }

  $output .= '</ul>';
  }

  return $output;
} */

function lexpert_menu_tree__main_menu($variables) {
  return '<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr>' . $variables['tree'] . '</tr></table>';
}

function lexpert_menu_link__main_menu($variables) {
  $element = $variables['element'];
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  return '<td' . drupal_attributes($element['#attributes']) . '>' . $output . "</td>\n";
}

function lexpert_menu_tree__menu_sidebar_menu($variables) {
  return '<ul>' . $variables['tree'] . '</ul>';
}

function lexpert_menu_link__menu_sidebar_menu($variables) {
  $element = $variables['element'];
  $sub_menu = '';

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

function lexpert_preprocess_page(&$variables) {
    if (isset($variables['node']->type)) {
        $nodetype = $variables['node']->type;
        $variables['theme_hook_suggestions'][] = 'page__' . $nodetype;
    }

    if(arg(0) == 'taxonomy' && arg(1) == 'term') {
    $tid = (int)arg(2);
    $term = taxonomy_term_load($tid);
    if(is_object($term)) {
      $variables['theme_hook_suggestions'][] = 'page__taxonomy__'.$term->vocabulary_machine_name;
    }
  }
}

function lexpert_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];

  if (!empty($breadcrumb)) {
    $output = '<div class="breadcrumb">' . implode(' › ', $breadcrumb) . '</div>';
    return $output;
  }
}

/**
 * Theme the username description of the user login form
 * and the user login block.
 */
function lexpert_lt_username_description($variables) {
  switch ($variables['form_id']) {
    case 'user_login':
      // The username field's description when shown on the /user/login page.
      return t('');
      break;
    case 'user_login_block':
      return '';
      break;
  }
}

/**
 * Theme the password description of the user login form
 * and the user login block.
 */
function lexpert_lt_password_description($variables) {
  switch ($variables['form_id']) {
    case 'user_login':
      // The password field's description on the /user/login page.
      return t('The password field is case sensitive. <a href="@password">Have you forgotten your password?</a>', array('@password' => url('user/password')));
      break;

    case 'user_login_block':
      // If showing the login form in a block, don't print any descriptive text.
      return '';
      break;
  }
}
function lexpert_form_user_profile_form_alter(&$form, $form_state) {
   unset($form['locale']);
}

function lexpert_email_registration_name($edit, $account) {
  return 'u' . $account->uid;
}