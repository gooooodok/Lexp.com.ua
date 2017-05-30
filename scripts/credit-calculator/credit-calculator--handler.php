<?php
	require_once('credit-calculator__material-price.php');

	// Материал
	$rate_gold_material = $_POST['rate_gold_material'];
    
	// Масса
    $rate_gold_massa = $_POST['rate_gold_massa'];

    // Категория
    $rate_gold_category = $_POST['rate_gold_category'];

    // Срок кредитования
    $credit_calulator_count_day = $_POST['credit_calulator_count_day'];

    // Скидка
    $credit_calulator_discount = $_POST['credit_calulator_discount'];

    // Процент
    $payout_percentage = 0;

    // Процент за пользования
	$use_percentage = 0.45;

	// Скидка
	$discount = 0;

	// Процент страховки
	$insurance_percentage = 0.35;

	// Оценка
    $evaluative_value = $material_price[$rate_gold_material][$rate_gold_category] * $rate_gold_massa;


    if (($credit_calulator_count_day >= 1) && ($credit_calulator_count_day <= 30)) {
		$payout_percentage = 80.00;
		if ($credit_calulator_count_day == 7) {
			$use_percentage = 0.20;
		}
	}
	else if (($credit_calulator_count_day >= 31) && ($credit_calulator_count_day <= 60)) {
		$payout_percentage = 70.00;
	}
	else if ($credit_calulator_count_day > 60) {
		// $.fancybox(cc_messages('calulator_count_day_over_60'));
		$credit_calulator_count_day = 0;
	}


	if ($credit_calulator_discount == 'holiday') {
		$discount = 7;	
	}
	else if ($credit_calulator_discount == 'birthday') {
		$discount = 7;
	}

	// Сумма кредита
	$sum_credit = $evaluative_value * ($payout_percentage/100);
	
	if ($sum_credit >= 10000.00) {
		$use_percentage = 0.05;
	}

	if (($credit_calulator_count_day >= 1) && ($credit_calulator_count_day <= 60)) {
		$sum_on_hands = $sum_credit;

		$sum_usage = $sum_credit * ($use_percentage/100) * $credit_calulator_count_day;
		$sum_buyout = $sum_credit + ($sum_usage * ((100-$discount)/100)) + ($evaluative_value * ($insurance_percentage/100) * $credit_calulator_count_day);

		$result['sum_on_hands'] = $sum_on_hands;
		$result['sum_buyout'] = $sum_buyout;
	}
	else {
		$result['sum_on_hands'] = $result['sum_buyout'] = 0;
	}

	echo json_encode($result);
?>