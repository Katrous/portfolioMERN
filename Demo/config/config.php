<?php
ob_start(); //This turns on output buffering
    session_start();

    $servername = "localhost";
    $username = "root";
    $password= "";

    $timezone = date_default_timezone_set("Europe/London");
    
    $con = mysqli_connect($servername, $username, $password, "social");

    if(mysqli_connect_errno()){
        echo "Failed to connect" . mysqli_connect_errno();
    }
?>