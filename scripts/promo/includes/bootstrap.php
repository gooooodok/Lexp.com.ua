<?php
	// Загрузка настроек
	require_once "settings.php";

	// Загрузка функций
	require_once "functions.php";

/*

*/

//	echo $_SERVER['HTTP_REFERER'];
//	header("Location: ".$_SERVER['PHP_SELF']);

	// Если поступил POST-запрос
	if ($_SERVER['REQUEST_METHOD'] == 'POST')
	{
		session_start();

		if ($_POST['token'] == $_SESSION['lastToken']) 	{ /*попытка повторного нажатия - ничего не делаем*/}
		else
		{

			if (!isset($_POST['email-id'])) {return;}

			$_SESSION['lastToken'] = $_POST['token'];

			$email = trim(mb_strtolower($_POST['email-id'], 'UTF-8'));
			$email = str_replace(" ","",$email);

			if ($email=='') {return;}


			$_error = false; $_message = false;

			$shares_id = 1; //id акции

			$promo = getPromoCode($email, $shares_id);


			if ($promo == 0) {

				$_error = true;
				$error_message = $aMessage['promo_err'];
				return;
			}

			$templJpgPath = './images/cupon_pr.jpg'; //файл-шаблон


			if ( !(SendPromoByEmail($promo, $email, $templJpgPath)) ) {

				$_error = true;
				$error_message = $aMessage['email_err'];
				return;

			}  else {


				$_message = true;
				$print_message = $aMessage['ok_message'];
				return;

			}



			//	header("Location: ".SUCCESS_PAGE);


		}
	}


?>