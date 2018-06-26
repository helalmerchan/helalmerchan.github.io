<?php 
//CHECKING FOR SPAM HEADER
$suspect = false;
$pattern = '/Content-Type:|CC:|BCC:/i';
function checksuspect($value, $pattern, &$suspect){
	if(is_array($value)){
		foreach($value as $item){
			checksuspect($item, $pattern, $suspect);
		}
	}
	else{
		if(preg_match($pattern, $value)){
			$suspect = true;
		}
	}
}

checksuspect($_POST, $pattern, $suspect);
// CHECKING REQUIRED FIELD IS NOT BLANK
if(!$suspect){
		foreach($_POST as $key => $value){
		$temp = is_array($value) ? $value :trim($value);
		if(empty($temp) && in_array($key, $required)){
			$missing[] = $key;
		}
		elseif(in_array($key, $expected)){
			${$key} = $temp;
		}
	}
}

// VALIDATING USER EMAIL
if(!$suspect && !empty($email)){
	$validmail = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
	if($validmail){
		$header .= "\r\nReply-To: $validmail";
	}
	else{
		$error['email'] = true;
	}
}


//BUILDING MESSEGE BODY AND SEND EMAIL

$mailsent = false;
if(!$suspect && !$missing && !$error){
	$messege = '';
	foreach($expected as $item){
		if(isset(${$item}) && !empty(${$item})){
			$val = ${$item};
		}
		else{
			$val = "Not Selected";
		}
		if(is_array($val)){
			$val = implode(', ', $val);
		}
		$item = str_replace(array('_', '-'), ' ', $item);
		$messege .= ucfirst($item) .": $val\r\n\r\n";
	}
	$messege = wordwrap($messege, 70);
	$mailsent = mail($to, $subject, $messege, $header);
	if(!$mailsent){
		$error['mailfail'] = true;
	}
}

