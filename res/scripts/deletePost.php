<?php

require_once('../libs/database.php');

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

$q = "DELETE FROM posts WHERE id = '$id'"; 

if($conn->query($q)){
    echo true;
}else{
    echo false;
}

?>