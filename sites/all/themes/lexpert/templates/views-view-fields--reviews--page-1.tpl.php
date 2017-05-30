<div class="comments-item <?php echo $zebra; ?>">
	<div class="comments-info">
		<span class="comments-name"><?php print $fields['name']->content; ?></span>
		<span class="comments-date"><?php print $fields['created']->content; ?></span>
		<?php if ($fields['status']->content == 'unpublished') : ?>
			<span style="color: red; margin-left: 10px;">будет опубликован после модерации</span>
		<?php endif; ?>
	</div>
	<div class="comments-body">
		<?php print $fields['comment_body']->content; ?>
	</div>

	<div class="reviews-comment-bottom">
		<?php if ($fields['type']->content == 'action') : ?>
		<div class="comments-path"><a href="/akcii-lombard">Акції</a> - <?php print $fields['title']->content; ?></div>

		<?php elseif ($fields['type']->content == 'news_company') : ?>
			<div class="comments-path"><a href="/novosti">Новини</a> - <a href="/novosti/novosti-lombarda">Новини компанії</a> - <?php print $fields['title']->content; ?></div>

		<?php elseif ($fields['type']->content == 'news_financial') : ?>
			<div class="comments-path"><a href="/novosti">Новини</a> - <a href="/novosti/novosti-finansi">Фінансові новини</a> - <?php print $fields['title']->content; ?></div>

		<?php elseif ($fields['type']->content == 'article') : ?>
			<div class="comments-path"><a href="/statyi">Статті</a> - <?php print $fields['field_article_categories']->content; ?> - <?php print $fields['title']->content; ?></div>

		<?php elseif ($fields['type']->content == 'office') : ?>
			<div class="comments-path"><a href="/otdeleniya-lombarda">Наші відділення</a> - <?php print $fields['field_office_city']->content; ?> - <?php print $fields['title']->content; ?></div>

		<?php elseif ($fields['type']->content == 'faq_question') : ?>
			<div class="comments-path"><a href="/faq">Найчастіші запитання</a> - <?php print $fields['title']->content; ?></div>

		<?php elseif ($fields['type']->content == 'page') : ?>
			<div class="comments-path"><?php print $fields['title']->content; ?></div>
		
		<?php endif; ?>
		
		<div class="comments-link">
			<a href="/ua/comment/<?php print $fields['cid']->content; ?>#comment-<?php print $fields['cid']->content; ?>" style="margin-right: 10px;">Всё обсуждение (<?php print $fields['comment_count']->content; ?>)</a>
			<a href="/ua/comment/reply/<?php print $fields['nid']->content; ?>/<?php print $fields['cid']->content; ?>">Відповісти</a>
		</div>
	</div>
</div>