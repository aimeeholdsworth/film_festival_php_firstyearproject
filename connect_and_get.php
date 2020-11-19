<?php

header('Content-Type: application/json');

$userAnswer = intval($_GET['id']);
$host = 'localhost'; 
$user = 'aimeeholdsworth'; 
$password = 'Hercle970'; 
$dbname = 'aimeehol_Oscars'; 
$tablename = 'film_info'; 

$cxn = mysqli_connect($host,$user,$password,$dbname); // create a variable calling the connect function - this will connect to our database


// test to see whether the connection returned false - if it is false then stop program and print the connection error
if(!$cxn) {
  die('Connection failed: ' . mysqli_connect_error());
}


// select the correct database
$dbs = mysqli_select_db($cxn,$dbname);
// the database selection returns false, stop program and print the connection error
if(!$dbs) {
  die('Could not connect to DB' . mysqli_connect_error());
}


$query = 'SELECT * FROM film_info WHERE id = '.$userAnswer.''; // create a Structured Query Language statement for finding a particular id using the variable $userAnswer which is a random number as on line 5

$result = mysqli_query($cxn,$query) or die('Could not query' . mysqli_error($cxn)); // read the result into a variable, or if this doesn't happen successfully stop program and print why

$row = mysqli_fetch_array($result,MYSQLI_ASSOC); // from the result variable, read the row into an associative array

mysqli_close($cxn);

echo json_encode($row);

return $row;




?>
