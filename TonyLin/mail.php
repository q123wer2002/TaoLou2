<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="thanks.css">
	<link rel="stylesheet" href="style.css">
</head>
<body>
<?php
$to ="tony507yu@gmail.com";
$subject="Someone visit my website";
$name=$_POST["name"];
$email=$_POST['email'];
$msg=$_POST['message'];
mail($to ,$subject, $msg, 'From:' . $email);
?>
<div class="thanks">Thanks for your mailing. <br>I will reply it as soon as possible!</div>
<div class="center"><a class="button" href="index.html">Return</a></div>
</body>
</html>