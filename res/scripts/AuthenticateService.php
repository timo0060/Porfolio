<?php

require_once('database.php');

$data = json_decode(file_get_contents("php://input"));

$token = $data->token;
$query = "SELECT * FROM blog_admin WHERE _token = '$token'";
$result = mysqli_num_rows($conn->query($query));

if($result == 1){
    echo true;
}else{
    echo false;
}

?>