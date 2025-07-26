<?php
//http://localhost:8080/index2.php
$host = "mysql";      // or "127.0.0.1" or the Docker service name like "mysql"
$username = "user";
$password = "password";
$database = "app_db";

// Create connection
$conn = mysqli_connect($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully!";
?>
