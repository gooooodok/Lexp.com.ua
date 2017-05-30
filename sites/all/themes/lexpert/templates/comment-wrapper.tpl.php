<?php
/**
 * @file
 * Zen theme's implementation to provide an HTML container for comments.
 *
 * Available variables:
 * - $content: The array of content-related elements for the node. Use
 *   render($content) to print them all, or print a subset such as
 *   render($content['comment_form']).
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default value has the following:
 *   - comment-wrapper: The current template type, i.e., "theming hook".
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * The following variables are provided for contextual information.
 * - $node: Node object the comments are attached to.
 * The constants below the variables show the possible values and should be
 * used for comparison.
 * - $display_mode
 *   - COMMENT_MODE_FLAT
 *   - COMMENT_MODE_THREADED
 *
 * Other variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 *
 * @see template_preprocess_comment_wrapper()
 * @see theme_comment_wrapper()
 */

// Render the comments and form first to see if we need headings.
$comments = render($content['comments']);
$comment_form = render($content['comment_form']);
?>

<?php global $user; ?>

<?php // Если пользователь — Гость ?>
<?php if ($user->uid == 0) : ?>
  <?php // Если нет комментариев ?>
  <?php if (!$comments) : ?>
    <section class="comments <?php print $classes; ?>"<?php print $attributes; ?>>
      <div class="comments-header no-comments">
        <h2 class="title"><?php print t('Коментарі'); ?></h2>
        <div class="comments-button">
          <input type="submit" class="submit" value="Залиште коментар" js-action="comments_guest_alert">
        </div>
      </div>

      <div style="text-align: center;"><?php print t('Немає коментарів.'); ?></div>
    </section>

  <?php // Если есть комментарии ?>
  <?php else : ?>
    <section class="comments <?php print $classes; ?>"<?php print $attributes; ?>>
      <div class="comments-header">
        <h2 class="title"><?php print t('Коментарі'); ?></h2>
        <div class="comments-button">
          <input type="submit" class="submit" value="Залиште коментар" js-action="comments_guest_alert">
        </div>
      </div>

      <?php print $comments; ?>

      <div style="margin-top: 20px; overflow: hidden; zoom: 1;">
        <div class="comments-button">
          <input type="submit" class="submit" value="Залиште коментар" js-action="comments_guest_alert">
        </div>
      </div>
    </section>
  <?php endif; ?>

<?php // Если зарегистрированный пользователь ?>
<?php else : ?>
  <?php // Если нет комментариев ?>
  <?php if (!$comments) : ?>
    <section class="comments <?php print $classes; ?>"<?php print $attributes; ?>>
      <div class="comments-header no-comments">
        <h2 class="title"><?php print t('Коментарі'); ?></h2>
        <div class="comments-button">
          <input type="submit" class="submit" value="Залиште коментар" js-action="comments_show_comment_form">
        </div>
      </div>

      <div style="text-align: center;"><?php print t('Немає коментарів.'); ?></div>

      <?php if ($comment_form): ?>
        <div id="comments-comment-form">
            <h2 class="title comment-form" style="margin-top: 30px;"><?php print t('Додати коментар'); ?></h2>
          <?php print $comment_form; ?>
        </div>
      <?php endif; ?>
    </section>

  <?php // Если есть комментарии ?>
  <?php else : ?>
    <section class="comments <?php print $classes; ?>"<?php print $attributes; ?>>
      <?php print render($title_prefix); ?>
      <?php if ($comments && $node->type != 'forum'): ?>
        <div class="comments-header">
          <h2 class="title"><?php print t('Коментарі'); ?></h2>
          <div class="comments-button">
            <input type="submit" class="submit" value="Залиште коментар" js-action="comments_show_comment_form">
          </div>
        </div>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php print $comments; ?>

      <?php if ($comment_form): ?>
        <div id="comments-comment-form">
            <h2 class="title comment-form" style="margin-top: 30px;"><?php print t('Додати коментар'); ?></h2>
          <?php print $comment_form; ?>
        </div>
      <?php endif; ?>

      <div style="margin-top: 20px; overflow: hidden; zoom: 1;">
        <div class="comments-button">
          <input type="submit" class="submit" value="Залиште коментар" js-action="comments_show_comment_form">
        </div>
      </div>
    </section>
  <?php endif; ?>
<?php endif; ?>
