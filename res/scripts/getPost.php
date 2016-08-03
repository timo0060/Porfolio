<?php

require_once("../libs/database.php");

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

$output = array();

$q = "SELECT * FROM posts WHERE id = '$id'";

if($result = $conn->query($q)){
    $output['error'] = false;
    
    $post = array();
    
    while($row = mysqli_fetch_array($result)){
        $post[] = array(
            "id" => $row['id'],
            "title" => $row['title'],
            "content" => $row['content'],
            "created" => $row['created']
        );
    }
    
    $output['post'] = $post;
    
}else{
    $output['error'] = true;
    $output['errorMsg'] = "Could not run the SQL... " . $conn->mysqli_error();
}

print_r(json_encode($output));

?>