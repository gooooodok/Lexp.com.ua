<?php
// $Id: comment-form.tpl.php,v 1.6 2009/03/13 06:45:28 zinv Exp $
/**
* @file comment-form.tpl.php
* Renders comment form for Magazeen.
*/
?>
<div class="post-meta clearfix">
<h3 class="post-title-small left"><?php print theme_get_setting('comment_title'); ?></h3>
<p class="post-info">
</p>
</div>
<div class="comment-form clearfix">
<?php print $comment_preview; ?>
<?php print $name; ?>
<?php print $mail; ?>
<?php print $homepage; ?>
<?php print $subject; ?>
<?php print $comment; ?>
<div class="hide">
111<?php print drupal_render($form); ?>
</div>
<?php print $submit; ?><?php print $preview; ?>
</div>