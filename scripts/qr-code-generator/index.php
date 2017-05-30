<?php    
/*
 * PHP QR Code encoder
 *
 * Exemplatory usage
 *
 * PHP QR Code is distributed under LGPL 3
 * Copyright (C) 2010 Dominik Dzienia <deltalab at poczta dot fm>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 */
    
   
    //set it to writable location, a place for temp generated PNG files
    $PNG_TEMP_DIR = '/tmp/';
    
	include "qrlib.php";


	// how to build raw content - QRCode with detailed Business Card (VCard)

    $PNG_WEB_DIR = 'tmp/';

    $phoneCell     = '+380 (67) 233-03-15';
    $phoneCell2    = '+380 (44) 563-94-19';
    $orgName      = 'Ломбард «Експерт»';

    $address     	  = 'Київ, вул. Декабристів, 12/37';

    $codeContents  = 'BEGIN:VCARD'."\n";
    $codeContents .= 'VERSION:2.1'."\n";
    $codeContents .= 'N:'.$sortName."\n";
    $codeContents .= 'FN:'.$name."\n";
    $codeContents .= 'ORG:'.$orgName."\n";

    $codeContents .= 'TEL;WORK;VOICE:'.$phoneCell."\n";
    $codeContents .= 'TEL;WORK;VOICE:'.$phoneCell2."\n";

    $codeContents .= 'ADR;TYPE=work;'.
        'LABEL="'.$addressLabel.'":'.$address.';'."\n";;
    $codeContents .= 'URL:http://lexp.com.ua'."\n";
	$codeContents .= 'NOTE:Щодня з 09:00 до 21:00, без вихідних'."\n";
    $codeContents .= 'END:VCARD';

    // generating
    QRcode::png($codeContents, $PNG_WEB_DIR.'026.png', QR_ECLEVEL_L, 3);

    // displaying
    echo '<img src="'.$PNG_WEB_DIR.'026.png" />'; 
  

    