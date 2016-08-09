<?php

require_once("../libs/database.php");

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$title = addslashes($data->title);
$content = addslashes($data->content);
$description = addslashes($data->description);

$q = "UPDATE posts SET title='$title', content='$content', description='$description' WHERE id='$id'";

if($conn->query($q)){
    echo true;
}else{
    echo false;
}

?>