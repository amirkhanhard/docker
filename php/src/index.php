<?php
// http://localhost:8080/index.php
$dsn = 'mysql:host=mysql;dbname=app_db;charset=utf8';
$user = 'user';
$password = 'password';
// echo phpinfo();
try {
    $pdo = new PDO($dsn, $user, $password);
    echo "Connected to MySQL successfully! 123";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>

