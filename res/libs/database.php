<?php

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_database = "blog";

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_database);

if(mysqli_connect_errno()){
    print_r("Failed to connect to the Database... " . mysqli_connect_errno());
}

?>