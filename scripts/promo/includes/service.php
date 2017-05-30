<?php
	// Загрузка настроек
	require_once "settings.php";

	// Загрузка функций
	require_once "functions.php";

	if (!(remoteAddr())) {return;}

	// Если поступил GET-запрос
	if ($_SERVER['REQUEST_METHOD'] == 'GET')
	{

		if (!isset($_GET['sharesid'])) {retERROR('!sharesid_ERROR'); return;} //код акции
		if (!isset($_GET['apikey']))   {retERROR('!apikey_ERROR'); return;} //ключ
		
		if (API_KEY <> $_GET['apikey']) {retERROR('apikey_ERROR'); return;}

		
		if (isset($_GET['getreport'])) //получить отчет
		{
			if (!isset($_GET['date1'])) {retERROR('!date1'); return;} //дата с
			if (!isset($_GET['date2'])) {retERROR('!date2'); return;} //дата по
			
			getReport($_GET['sharesid'], $_GET['date1'], $_GET['date2']);
			
			return;
		
		}		

		if (isset($_GET['getpromome'])) //получить промокод из Mobile Expert
		{
			
			if (!isset($_GET['clientuid'])) {retERROR('!clientuid'); return;}
			
			$promo = getPromoCode($_GET['clientuid'], $_GET['sharesid']);
			
			print $promo;
			
			return;
		
		}			
		
		if (isset($_GET['getpromo'])) //получить промокод
		{

			$code = $_GET['getpromo'];

			//echo API_KEY . '    ' . $getApiKey;


			$term_of_use = 0;
			$res = getEmail4Code($_GET['sharesid'], $code);
			
			$error = 'FALSE';

			$pos = strripos($res['email'], 'ERROR');

			if (!($pos === false))  $error = 'TRUE';  //ошибка

			$result = array(
				'promo' => $code,
				'email' => $res['email'],
				'error' => $error,
				'term_of_use' => $res['term_of_use'],
				'percent' => $res['percent'],
				'date_of_use' => $res['date_of_use']
				
			);

			print json_encode($result);
			return;
		}
		
		if (isset($_GET['putpromo'])) //записать использованный промокод
		{

			if (!isset($_GET['client_uid']))  {retERROR('!client_uid_ERROR'); return;}
			
			putClient4Code($_GET['sharesid'], $_GET['putpromo'], $_GET['client_uid']);
			
			return;
		
		}
		
	}


?>