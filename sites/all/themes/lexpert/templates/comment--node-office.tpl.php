<?php

/**
 * @file
 * Default theme implementation for comments.
 *
 * Available variables:
 * - $author: Comment author. Can be link or plain text.
 * - $content: An array of comment items. Use render($content) to print them all, or
 *   print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $created: Formatted date and time for when the comment was created.
 *   Preprocess functions can reformat it by calling format_date() with the
 *   desired parameters on the $comment->created variable.
 * - $changed: Formatted date and time for when the comment was last changed.
 *   Preprocess functions can reformat it by calling format_date() with the
 *   desired parameters on the $comment->changed variable.
 * - $new: New comment marker.
 * - $permalink: Comment permalink.
 * - $submitted: Submission information created from $author and $created during
 *   template_preprocess_comment().
 * - $picture: Authors picture.
 * - $signature: Authors signature.
 * - $status: Comment status. Possible values are:
 *   comment-unpublished, comment-published or comment-preview.
 * - $title: Linked title.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the following:
 *   - comment: The current template type, i.e., "theming hook".
 *   - comment-by-anonymous: Comment by an unregistered user.
 *   - comment-by-node-author: Comment by the author of the parent node.
 *   - comment-preview: When previewing a new or edited comment.
 *   The following applies only to viewers who are registered users:
 *   - comment-unpublished: An unpublished comment visible only to administrators.
 *   - comment-by-viewer: Comment by the user currently viewing the page.
 *   - comment-new: New comment since last the visit.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * These two variables are provided for context:
 * - $comment: Full comment object.
 * - $node: Node object the comments are attached to.
 *
 * Other variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 *
 * @see template_preprocess()
 * @see template_preprocess_comment()
 * @see template_process()
 * @see theme_comment()
 *
 * @ingroup themeable
 */
?>

<?php global $user; ?>

<div class="comments-item <?php echo $zebra; ?>">
	<div class="comments-info">
		<span class="comments-name"><?php print $comment->name; ?></span>
		<span class="comments-date"><?php print date('d.m.Y H:i', $comment->created); ?></span>

		<?php if ($new != NULL) : ?>
		<span style="color: #1AAB0E; margin-left: 5px;">новий</span>
		<?php endif; ?>

		<?php if ($status == 'comment-unpublished') : ?>
		<span style="color: red; margin-left: 10px;">будет опубликован после модерации2</span>
		<?php endif; ?>
	</div>
	<div class="comments-body">
		<?php print $content['comment_body'][0]['#markup']; ?>

		<div class="comments-link">
			<?php if ($comment->language == 'uk') : ?>
			<?php
				// Если роль «администратор» (3) и «вадим Бурлаков» (6)
				if (isset($user->roles[3]) || isset($user->roles[6])) :
			?>
				<a href="/ua/<?php print $content['links']['comment']['#links']['comment-edit']['href']; ?>" style="margin-right: 10px;">[Редагувати]</a>
			<?php endif; ?>
			<?php if (($user->uid != 0) && ($status == 'comment-published')) : ?><a href="/ua/<?php print $content['links']['comment']['#links']['comment-reply']['href']; ?>">Відповісти</a><?php endif; ?>

			<?php elseif ($comment->language == 'ru') : ?>
			<?php
				// Если роль «администратор» (3) и «вадим Бурлаков» (6)
				if (isset($user->roles[3]) || isset($user->roles[6])) :
			?>
				<a href="/ru/<?php print $content['links']['comment']['#links']['comment-edit']['href']; ?>" style="margin-right: 10px;">[Редактировать]</a>
			<?php endif; ?>
			<?php if (($user->uid != 0) && ($status == 'comment-published')) : ?><a href="/ru/<?php print $content['links']['comment']['#links']['comment-reply']['href']; ?>">Відповісти</a><?php endif; ?>

			<?php endif; ?>
		</div>
	</div>
</div>