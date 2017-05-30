<?php if (!in_array($node->nid, array(63, 252, 395, 396))) : ?>
	<?php if ($node->language == 'uk') : ?>
		<div id="feedback-block">
			Нам дуже важлива ваша думка, тому просимо вас <a href="/ua/reviews">залишити відгуки</a> про нашу роботу<br>
		</div>

	<?php elseif ($node->language == 'ru') : ?>
		<div id="feedback-block">
		    Нам очень важно ваше мнение, поэтому просим вас <a href="/ru/reviews">оставить отзывы</a> о нашей работе<br>
		</div>
	<?php endif; ?>
<?php endif; ?>