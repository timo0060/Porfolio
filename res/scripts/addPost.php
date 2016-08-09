<?php

require_once('../libs/database.php');

$data = json_decode(file_get_contents("php://input"));

$title = addslashes($data->title);
$content = addslashes($data->content);
$description = addslashes($data->description);


if(isset($data->created)){
    $created = $data->created;
}else{
    $created = date("Y/m/d");
}

function getRandomID(){
    global $conn;
    $temp_id = rand(1,99999);
    
    $uniqueID = false;
    
    while(!$uniqueID){
        $q = "SELECT * FROM posts WHERE id='$temp_id'";
        $result = $conn->query($q);
        $count = mysqli_num_rows($result);
        if($count != 0){
            $temp_id = rand(1,99999);
        }else{
            $uniqueID = true;
        }
    }
    
    return $temp_id;
}


if(isset($data->id)){
    $id = $data->id;
}else{
    $id = getRandomID();
}

$q = "INSERT INTO posts (id,title,content,description,created) VALUES ('$id', '$title', '$content', '$description','$created')";

if($conn->query($q)){
    echo true;
    var_dump(mysqli_error($conn));
}else{
    echo false;
    var_dump(mysqli_error($conn));
}

?>