<?php

$postdata = file_get_contents("php://input");
$data = json_decode($postdata);

$name = $data->name;
$email = $data->email;
$subject = $data->subject;
$message = $data->message;


$to = 'RadderTim@gmail.com';
$body = <<<EMAIL

FROM: $name 
----------------------------------------------

$message

----------------------------------------------
EMAIL;

$header = "From: $email";

if(mail($to, $subject, $body, $header)){
    echo 'Success';
}else{
    echo 'error';
}


/*$to = 'timo0060@gmail.com';
$headers = "From: $email";

if(mail($to, $subject, $message, $headers)){
    echo "Success";
}else{
    echo "Failure!";
}*/

?>