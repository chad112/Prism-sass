<?php

$EmailFrom = "mrdraper@chadschaub.com";
$EmailTo = "chad@chadschaub.com";
$Subject = "PRISM Inquiry";
$Name = Trim($_POST['Name']);
if(empty($Name))
{
	echo "Please enter your name";
	exit;
}
echo "success";
$Email = Trim($_POST['Email']);
if(empty($Email))
{
	echo "Please enter your email";
	exit;
}
echo "success";
$Message = Trim($_POST['Message']);
if(empty($Message))
{
	echo "Don't you want to say something?";
	exit;
}
echo "success";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html#success\">";
  echo '<script>$.notify("Thank you for your order. We will contact you shortly.", "info");</script>';
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html#error\">";
}
?>
