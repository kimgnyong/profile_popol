<?php

  include_once('header.php');

  $email = $_POST['email'];
  $name  = $_POST['name'];
  $message = $_POST['message'];
  $question = $_POST['question'];


  $sql = "insert into b_user_email (email,name,message,question) values ('$email','$name','$message','$question');";
  $result = mysqli_query($conn, $sql);
  
  if($result){
    echo '소중한 의견 감사합니다.';
  }

  include_once('footer.php');

?>