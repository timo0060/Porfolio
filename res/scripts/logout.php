<?php

require_once('../libs/database.php');

$data = json_decode(file_get_contents("php://input"));

$token = $data->token;

$tokenElements = explode("|", $token);
$user = $tokenElements[0];

$query = "UPDATE blog_admin SET _token = 'LOGGED OUT' WHERE username = '$user'";

if($conn->query($query)){
    echo true;
}else{
    echo $conn->error;
}

$conn->close();

?>