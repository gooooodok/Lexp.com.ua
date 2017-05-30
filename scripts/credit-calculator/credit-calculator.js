
if ($("#rate-gold-material option:selected").val() == 'platinum_950') {
	$('#rate-gold-category #category_3').hide();
	$('#rate-gold-category #category_4').hide();
	$('#rate-gold-category #category_5').hide();
	$('#rate-gold-category #category_6').hide();
	$('#rate-gold-category').val('category_1');
}

$('#rate-gold-material').bind("change click", function() {
	if ($("#rate-gold-material option:selected").val().indexOf("gold") !== -1) {
		$('#rate-gold-category option').show()

		$('.category_tab').parent().removeClass('tab_current');
		$('#tabs_categories a[tab_target=gold]').parent().addClass('tab_current');
		$('[id^="TAB_"]').hide();
		$('#TAB_gold').show();
	}
	else if ($("#rate-gold-material option:selected").val().indexOf("silver") !== -1) {
		$('#rate-gold-category #category_3').hide();
		$('#rate-gold-category #category_4').hide();
		$('#rate-gold-category #category_5').hide();
		$('#rate-gold-category #category_6').hide();
		$('#rate-gold-category').val('category_1');

		$('.category_tab').parent().removeClass('tab_current');
		$('#tabs_categories a[tab_target=silver]').parent().addClass('tab_current');
		$('[id^="TAB_"]').hide();
		$('#TAB_silver').show();
	}
	else if ($("#rate-gold-material option:selected").val().indexOf("platinum") !== -1) {
		$('#rate-gold-category #category_3').hide();
		$('#rate-gold-category #category_4').hide();
		$('#rate-gold-category #category_5').hide();
		$('#rate-gold-category #category_6').hide();
		$('#rate-gold-category').val('category_1');

		$('.category_tab').parent().removeClass('tab_current');
		$('#tabs_categories a[tab_target=platinum]').parent().addClass('tab_current');
		$('[id^="TAB_"]').hide();
		$('#TAB_platinum').show();
	}
});

// Отправить запрос на обработку
$('#credit_calulator_submit').click(function() {
	var rate_gold_material = $("#rate-gold-material option:selected").val();
	var rate_gold_category = $('#rate-gold-category option:selected').val();
	var rate_gold_massa = parseFloat($('#rate-gold-massa').val().replace(/\,/, '.'));

	var credit_calulator_count_day = parseInt($('#credit_calulator_count_day').val(), 10);
	var credit_calulator_discount = $('#credit_calulator_discount option:selected').val();

	$.post('/scripts/credit-calculator/credit-calculator--handler.php', {
	    rate_gold_material: rate_gold_material,
	    rate_gold_category: rate_gold_category,
	   	rate_gold_massa: rate_gold_massa,
	   	credit_calulator_count_day: credit_calulator_count_day,
	   	credit_calulator_discount: credit_calulator_discount,
  	}, onAjaxSuccess);
});

function onAjaxSuccess(data) {
  var response = eval('(' + data + ')');
  $('#credit_calulator_sum_on_hands').html(response.sum_on_hands.toFixed(2));
  $('#credit_calulator_sum_buyout').html(response.sum_buyout.toFixed(2));
}
