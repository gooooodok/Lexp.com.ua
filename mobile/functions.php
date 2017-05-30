<?php

	//возвращает активные страницы для показа в моб.приложении
	function getPages2View()	{

		
		$mysqli = mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME)
					or die('not_connection');
		
		$query = "SELECT http_address FROM pages WHERE  is_active = 1";
						
		$res = array();						
						
		if ($result = $mysqli->query($query))
		{
			
			$pageNum = 1;
			
			while ($obj = $result->fetch_object()) 
			{
			
				$res['_'.$pageNum++]= $obj->http_address;
			
						
			}

		}

		$result->close();
		
		return $res;					
		
		
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