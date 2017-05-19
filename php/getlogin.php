<!DOCTYPE html>
<html>
<body>

<h1>Get login</h1>

<?php

// Connect to database
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = 'CubeShop';

// Create connection
$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully<br>";

$username=$_POST["username"];
$password=$_POST["password"];

// retrive password
$retrivequery = "SELECT password AS PASSWORD FROM userlogin WHERE username='$username'";
$retriveresult=$conn->query($retrivequery);
if($retriveresult->num_rows > 0){
	$row=$retriveresult->fetch_assoc()
	$pass=$row["PASSWORD"];
}else{
	die(mysqli_error());
}

if($password==$pass){
	// login
}else{
	// not login
}









?>

</body>
</html>