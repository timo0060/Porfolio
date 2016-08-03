<?php

require_once("../libs/database.php");

$output = array();

$q = "SELECT * FROM posts ORDER BY created";

if($result = $conn->query($q)){
    
    $output['error'] = false;
    
    $posts = array();
    $postCount = 0;
    
    while($row = mysqli_fetch_array($result)){
        $posts[] = array(
            "id" => $row['id'],
            "title" => $row['title'],
            "content" => $row['content'],
            "created" => $row['created']
        );
        $postCount++;
    }
    $output['postCount'] = $postCount;
    $output['posts'] = $posts;
    
}else{
    $output['error'] = true;
    $output['errorMsg'] = $conn->mysqli_error();
}

print_r(json_encode($output));

?>