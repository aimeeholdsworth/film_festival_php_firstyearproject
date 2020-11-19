<?PHP

/*
FormMail.php
The program is in two parts:
the first part receives the values form your Form and assigns them to variables.
An email is then sent to the specified address.
The second part creates a simple html response page.

Note that a php script is essentially just anordinary html script with some php statements
embedded within the code using <php  and  ?>  as the start and end php tags.

This program as it is expects that
1.  you have written a Form with  'action=FormMail.php method=post'
2.   your Form contains  3 fields 'name', 'email', and 'message'
	(You can, if you are careful, amend this program to deal with more fields)
3.  your Form contains  a hidden field named 'subject' which conatains the phrase 
you wish to appear in the 'Subject' line of the email that is sent to you

 To use this program as it is you *must* change the next line after these comments
	"you@uwe.ac.uk" must be replaced with your email address
*/

$YourEmail = "aimeeholdsworth@hotmail.co.uk";

/*
To use the program as it is you do not need to cahnge anything more.
Comments are included to explain what is happening 
(and to note places where you could edit the program.)

The next lines receive the field values from your Form and assign them 
to $variables which are used later on in the program.
You could create more variables to handle
more Form fields - or edit the statements to reflect the names in your Form
The syntax is $variable=$_POST[fieldname];
*/

$name=$_POST[name];
$email=$_POST[email];
$message=$_POST[message];

/* 
The next lines build your email
(You have already assigned a value to 'YourEmail' above.)
 */

$sendto="$YourEmail";
$headers.= "MIME-Version: 1.0\r\n";
$headers.= "Content-type: text/html; ";
$headers.= "charset=iso-8859-1\r\n";
$headers.= "From: $email";
$subject=$_POST[subject];
// Build the email body text
  $emailcontent = " 

Name: $name 
Email: $email 
Message: 
$message 
"
/* and the email is sent  later - after we have started the html page 
so that we can include an appropriate message  within the page */
?> 

<!--  HTML PAGE 
Except for the inclusion of php variables and the 'mail' statement
the following is straightforward html code.
You can add more html code but it should be outside the <php .. ?> tags.
-->
<html>
<head>
<title>Form Mail Response</title>
</head>
<body>
<h2>Thank you for your message</h2>
<?php
// Send out the email or output an error message 
if (mail($sendto, $subject, $emailcontent, $headers)) { 
?>
  	<p>&nbsp;</p>
	<p><b>Thank You <?php echo $name; ?></b> an email has been sent to the address you gave.</p>
  	<p>You sent the following:</p>
		<table border="0" align="center" cellpadding="6">
		<tr>
		<td>Name: </td><td><b><?php echo $name; ?> </b> </td>
		</tr>
		<tr>
		<td>Email: </td><td> <b><?php echo $email; ?> </b></td>
		</tr>
		<tr>
		<td>Message: </td><td><b><?php echo $message; ?> </b> </td>
		</tr>
		</table>
 	<p>We will be in touch as soon as possible.</p>
<?php
	} 
	
else { // email send has been unsuccessful
?>
  	<p>&nbsp;</p>
	<p><b>Sorry <?php echo $name; ?></b></p>
	<p>For some reason the form submission has not been successful.</p>
 	<p>You sent the following:</p>
		<table border="0" align="center" cellpadding="6">
		<tr>
		<td>Name: </td><td><b><?php echo $name; ?> </b> </td>
		</tr>
		<tr>
		<td>Email: </td><td> <b><?php echo $email; ?> </b></td>
		</tr>
		<tr>
		<td>Message: </td><td><b><?php echo $message; ?> </b> </td>
		</tr>
		</table>
	
	
	<p> Please try again.</p>
<?php 
	} 
?>
</body>
</html>
