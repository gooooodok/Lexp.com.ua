<?php

	function getReport($shares_id, $date1, $date2)	{
		
		$mysqli = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME)
					or die('not_connection');
			
		
		$query = "SELECT generation_date, email, code, cliend_uid, date_of_use FROM promo
					WHERE shares_id = " . $shares_id 
					. " and (generation_date >= '" . $date1 . "')
					    and (generation_date <= '" . $date2 . "')";

					
		if ($result = $mysqli->query($query))
		{

			$sRes = '';
			
			while ($obj = $result->fetch_object()) 
			{

				$aRes = array(
					'generation_date' => $obj->generation_date,
					'email' => $obj->email,
					'code' => $obj->code,
					'cliend_uid' => $obj->cliend_uid,
					'date_of_use' => $obj->date_of_use
				);				
				
				$sRes = $sRes . json_encode($aRes) . '#';
			
			}
			
			//print $sRes;		
			print base64_encode($sRes);		
			
			$result->close();	
			return;
			
		}

		//ошибка
		print json_encode(array("error" => 'SQL_ERROR'));					
		
	}


	function putClient4Code($shares_id, $code, $client_uid)	{

		$mysqli = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME)
					or die('not_connection');


		$iCode = 0 + $code;
		
		if ($iCode == 0) return retERROR('CODE_ERROR');
		
		if (strlen($iCode) <> strlen($code)) return retERROR('CODE_ERROR');
		
		$date_of_use = date('Y-m-d');
		
		$query = "UPDATE promo SET cliend_uid = '" . $client_uid . "', date_of_use = '" . $date_of_use ."'
						WHERE shares_id = " . $shares_id . "
						and code = " . $iCode;
		
		
		$result = ($mysqli->query($query));
	
		if (!$result) {return retERROR('SQL_ERROR');}

	
		return retERROR('OK', 'FALSE');					
	
	}

	//возвращает email по коду
	function getEmail4Code($shares_id, $code)	{

		
		$mysqli = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME)
					or die('not_connection');


		$iCode = 0 + $code;
		
		if ($iCode == 0) return array("email" => 'CODE_ERROR');
		
		if (strlen($iCode) <> strlen($code)) return array("email" => 'CODE_ERROR');
		
		$query = "SELECT email, term_of_use, percent, date_of_use FROM promo
					WHERE shares_id = " . $shares_id . "
						and code = " . $iCode;

		
						
		if ($result = $mysqli->query($query))
		{

			if ($obj = $result->fetch_object()) //вернем email
			{
				
				$res = array(
					"email" => $obj->email,
					"term_of_use" => $obj->term_of_use,
					"percent" => $obj->percent,
					"date_of_use" => $obj->date_of_use
				);		
				
				$result->close();
				
				return $res;
        	}

			return array("email" => 'CODE_NOT_FOUND');					
			

		}

		$result->close();
		//ошибка
		return array("email" => 'SQL_ERROR'	);					
		
		
	}

	// возвращает добавленный или найденный код для email и акции
	function getPromoCode($email, $shares_id)	{

		
		$mysqli = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME)
					or die('not_connection');


		$query = "SELECT day_of_use, percent FROM shares
					WHERE id = " . $shares_id ;

		$day_of_use = 0; //сколько дней можно использовать промокод
		$percent = 0; //процент скидки

		if ($result = $mysqli->query($query))
		{

			if ($obj = $result->fetch_object())
			{
				$day_of_use = $obj->day_of_use;
				$percent = $obj->percent;
				$result->close();
        	}


		} else {return 0;}


		if ( ($day_of_use == 0) || ($percent == 0) ) return 0; //что-то не так


		/* проверку на email убрал

		$query = "SELECT code FROM promo
					WHERE shares_id = " . $shares_id . "
						and email = '" . $email . "'";

		$code4Email = 0;

		if ($result = $mysqli->query($query))
		{

			if ($obj = $result->fetch_object()) //вернем код
			{
				$code4Email = $obj->code;
				$result->close();
				return $code4Email;
        	}


		}

		*/

		$maxI = 100; //максимальное число проверок кода

		$i = 0;
		while ($i++ <= $maxI)
		{

			$rndPromo = rand(256, 99999); //получаем случайный код

			//проверка занятости кода
			$query = "SELECT code FROM promo
						WHERE shares_id = " . $shares_id .
							" and code = " . $rndPromo;



			if ($result = $mysqli->query($query))
			{
				if ($result->num_rows == 0) { //код не найден можем использовать его
					$code4Email = $rndPromo;
					break;
				}



			} else return 0; //error

			$result->close();

		}


		if ($code4Email == 0) return 0; //код не определен

		$ip = get_client_ip(); //пытаемся получить ip

		$generation_date = date('Y-m-d H:i:s');


		$term_of_use = date_modify(date_create(Date('Y-m-d')), '+' . $day_of_use . ' day');

		$query = "INSERT INTO promo (generation_date, email, code, shares_id, ip, percent, term_of_use)
						VALUES ('" . $generation_date . "', '" . $email . "', " . $code4Email . "," . $shares_id . ", '" . $ip . "'," . $percent . ", '" .  date_format($term_of_use, 'Y-m-d') . "')";


		if (!($mysqli->query($query))) {return 0;}

		return $code4Email;


		/*
		//определим максимальный код

		$query = "SELECT max(code) as code FROM promo
						WHERE shares_id = " . $shares_id;


		if ($result = $mysqli->query($query))
		{

			if ($obj = $result->fetch_object())
			{
				if (is_null($obj->code)) $code4Email = $minCode; //не найден - вернем минимальный
				else $code4Email = $obj->code + 1;

			}

			$result->close();

		} else return 0; //error

		*/

	}

	//получает jpg-файл и отправляет на email
	function SendPromoByEmail($promo, $email, $templJpgPath) {

		$tmpImageName = 'cupon_' . $promo . '.jpg';

		//$tmpFolders = '../tmp/cupon/';
		$tmpFolders =  './images/tmp/';

		//'files/Cupon_v3.jpg'

		//CreateImage($templJpgPath, $tmpFolders . $tmpImageName  , $promo);

		//$aImageFiles = array($tmpFolders . $tmpImageName);

		//return sendmail($aImageFiles, $tmpImageName, $email);

		if (CreateImage($templJpgPath, $tmpFolders . $tmpImageName  , $promo))
		{


			if (!file_exists($tmpFolders . $tmpImageName))
			{
				return false;
			}

			$aImageFiles = array($tmpFolders . $tmpImageName);

			//return true;

			if (sendmail($aImageFiles, $tmpImageName, $email))
			{

				//удаляем временный jpg
				try {
					unlink($tmpFolders . $tmpImageName);
				} catch (Exception $e) {

				}

				return true;
			}

		}

		return false;
	}

	//создает новый jpg-файл, используя шаблон и накладывает текс поверх рисунка
	function CreateImage($imagePath, $imageResPath, $textOnTheImage) {

		// Подключаем класс для работы с изображением
		include_once 'LImageHandler.php';

		// Подключаем выбранный шрифт текста
		$fontPath = './images/fonts/MyriadProRegular.ttf';

		// Указываем размер шрифта
		$fontSize = 100;

		// Задаем цвет текста
		$color = array(255, 255, 255);
		$color = array(0, 0, 0);

		// Задаем цвет подложки
		$backgroundColor = array(0, 0, 0);
		$backgroundColor = array(255, 255, 255);

		// Создаем экземпляр класса LImageHandler
		$ih = new LImageHandler;


		if (!file_exists($imagePath))
		{
			return false;
		}


		// Загружаем изображение
		$imgObj = $ih->load($imagePath);


	// Выполняем наложение текста на изображение
//		$imgObj->textWithBackground($textOnTheImage, $fontPath, $fontSize, $color, $backgroundColor, LImageHandler::CORNER_CENTER_TOP, 0, 150, 0, 50, 10);

		$promoLen = strlen($textOnTheImage);


		if (($promoLen > 5) || ($promoLen < 3))
		{
			return false;
		}

		$offsetX  = 0;

		if ($promoLen == 3)
		{
			$offsetX  = 75;
		} elseif ($promoLen == 4)
		{
			$offsetX  = 40;
		} elseif ($promoLen == 5) {
			$offsetX  = 0;
		}

		$imgObj->text($textOnTheImage, $fontPath, $fontSize, $color, LImageHandler::CORNER_LEFT_TOP, 135 + $offsetX, 665, 0);


		//$imgObj->show(false, 100);


		$imgObj->Save($imageResPath, false, 100);


		return true;


	}

	//отправляет jpg-файл в теле письма по указанному адресу
	function sendmail($aImageFiles, $tmpImageName, $sEmail)	{
	//	echo "Example function.\n";

		// картинки
		$attach = $aImageFiles;
		// чтобы отображалась картинка и ее не было в аттаче
		// путь к картинке задается через CID: - Content-ID
		// тестовый текст
		$text = '
			<img style="float: left; margin-right: 15px; margin-bottom: 15px;" src="cid:' . $tmpImageName . '"/>';

		$from = "support@lexp.com.ua";

		$to = str_replace(" ","",$sEmail);

		$subject = "Expert promocode";

		// Заголовки письма === >>>
		$headers = "From: $from\r\n";
		//$headers .= "To: $to\r\n";
		$headers .= "Subject: $subject\r\n";
		$headers .= "Date: " . date("r") . "\r\n";
		$headers .= "X-Mailer: zm php script\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: multipart/alternative;\r\n";
		$baseboundary = "------------" . strtoupper(md5(uniqid(rand(), true)));
		$headers .= "  boundary=\"$baseboundary\"\r\n";
		// <<< ====================

		// Тело письма === >>>
		$message  =  "--$baseboundary\r\n";
		$message .= "Content-Type: text/plain;\r\n";
		$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
		$message .= "--$baseboundary\r\n";
		$newboundary = "------------" . strtoupper(md5(uniqid(rand(), true)));
		$message .= "Content-Type: multipart/related;\r\n";
		$message .= "  boundary=\"$newboundary\"\r\n\r\n\r\n";
		$message .= "--$newboundary\r\n";
		$message .= "Content-Type: text/html; charset=utf-8\r\n";
		$message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
		$message .= $text . "\r\n\r\n";
		// <<< ==============

		// прикрепляем файлы ===>>>
		foreach($attach as $filename){
			$mimeType='image/png';
			$fileContent = file_get_contents($filename,true);
			$filename=basename($filename);
			$message.="--$newboundary\r\n";
			$message.="Content-Type: $mimeType;\r\n";
			$message.=" name=\"$filename\"\r\n";
			$message.="Content-Transfer-Encoding: base64\r\n";
			$message.="Content-ID: <$filename>\r\n";
			$message.="Content-Disposition: inline;\r\n";
			$message.=" filename=\"$filename\"\r\n\r\n";
			$message.=chunk_split(base64_encode($fileContent));
		}
		// <<< ====================

		// заканчиваем тело письма, дописываем разделители
		$message.="--$newboundary--\r\n\r\n";
		$message.="--$baseboundary--\r\n";

		// отправка письма
		$result = mail($to, $subject, $message , $headers);

		return $result;
	}

	// Переадресация пользователя
	function user_redirect($url) {
		header("Location: ".$url);
	}

	// Получение IP пользователя
	function get_client_ip() {
		if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
			$ip = $_SERVER['HTTP_CLIENT_IP'];
		} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
			$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		} else {
			$ip = $_SERVER['REMOTE_ADDR'];
		}

		return $ip;
	}

	//вывести сообщение об ошибке
	function retERROR($errorMessage, $error='TRUE') {

		$result = array(
			'message' => $errorMessage,
			'error' => $error
		);

		print json_encode($result);

	}


	//разрешен ли удаленный адрес
	function remoteAddr() {

		$ACCESS_REMOTE_ADDR_IP =  array(
				1 => '62.149.12.53',
				2 => '89.252.39.13',
				3 => '62.149.13.22');


		if ( !(in_array(SERVER_REMOTE_ADDR, $ACCESS_REMOTE_ADDR_IP))) {

			retERROR(SERVER_REMOTE_ADDR);
			return false;

		}

		return true;
	}

?>