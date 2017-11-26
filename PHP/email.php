<?php
	$plantNumber = $_POST['plantNum'];
	$plantInformation = $_POST['plantInfo'];
	$username = $_POST['userName'];
	$howFind = $_POST['howFind'];
	$recomend = $_POST['recomend'];
?>
<?php
	$email_from = 'liamebirge@gmail.com';
    $email_subject = "Form submission";
    $email_body = "Message from the user $username.\n".
    "$username has given you information on $plantNumber: $plantInformation\n".
    "$username found the site by means of: $howFind\n".
    "And says $recomend to recomending the site".

    $to = "yourname@yourwebsite.com";
	$headers = "From: $email_from \r\n";
	$headers .= "Reply-To: $visitor_email \r\n";
	mail($to,$email_subject,$email_body,$headers);
?>
<?php
	function IsInjected($str){
	    $injections = array('(\n+)', '(\r+)', '(\t+)', '(%0A+)', '(%0D+)', '(%08+)', '(%09+)');
	               
	    $inject = join('|', $injections);
	    $inject = "/$inject/i";
	    
	    if(preg_match($inject,$str)){
			return true;
	    } else{
			return false;
	    }
	}
	if(IsInjected($visitor_email)){
	    echo "Bad email value!";
	    exit;
	}
?>