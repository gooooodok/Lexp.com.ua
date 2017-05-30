<?php
	// Загрузка настроек
	require_once "settings.php";

	// Загрузка функций
	require_once "functions.php";
	
//	if (!(remoteAddr())) {return;}

	// Если поступил GET-запрос
	if ($_SERVER['REQUEST_METHOD'] == 'GET')
	{

		if (!isset($_GET['metod'])) {retERROR('!metod_ERROR'); return;} //что делаем
		if (!isset($_GET['apikey']))   {retERROR('!apikey_ERROR'); return;} //ключ
		
		if (API_KEY <> $_GET['apikey']) {retERROR('apikey_ERROR'); return;}


		if ($_GET['metod'] == 'getpages') //получить страницы для показа
		{

			$pages = getPages2View();

			print json_encode($pages);
			
			return;
		}
		
	}


?>