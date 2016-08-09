<?php

require_once('../libs/database.php');

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = md5($data->password);

$output = array();

$q = "SELECT * FROM blog_admin WHERE username = '$username' AND password='$password'";

if($result = $conn->query($q)){
    $count = mysqli_num_rows($result);
    
    if($count > 0){
        
        $token = $username . "|" . md5(uniqid("kongo", true)) . md5(uniqid("Minekaze", true)) . md5(uniqid("Mitsuki", true));
        
        $q = "UPDATE blog_admin SET _token='$token' WHERE username='$username' AND password='$password'";
        
        if($conn->query($q)){
            $output['error'] = false;
            $output['token'] = $token;
        }else{
            $output['error'] = true;
            $output['errorMsg'] = "Could not update the database... " . $conn->mysqli_error();
        }
        
    }else{
        $output['error'] = true;
        $output['errorMsg'] = "Username and/or Password does not match with our records";
    }
    
}else{
    $output['error'] = true;
    $output['errorMsg'] = "Could not run SQL... " . $conn->mysqli_error();
}


$conn->close();

print_r(json_encode($output));
?>