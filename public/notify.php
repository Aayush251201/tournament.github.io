<?php
include('includes/dbconfig.php');
// $ref="night/-M81bfaa475J_cPCgVqu";
// $fetchdata=$database->getReference($ref)->getValue();

// echo json_encode($_POST);
$orderId = $_POST["orderId"];
 $orderAmount = $_POST["orderAmount"];
 $referenceId = $_POST["referenceId"];
 $txStatus = $_POST["txStatus"];
 $paymentMode = $_POST["paymentMode"];
 $txMsg = $_POST["txMsg"];
 $txTime = $_POST["txTime"];
 $signature = $_POST["signature"];
 $data = $orderId.$orderAmount.$referenceId.$txStatus.$paymentMode.$txMsg.$txTime;
 $secretKey = "ae5d4c5252ede9e23e8edd908fc376b3af7bb1a8";
 $hash_hmac = hash_hmac('sha256', $data, $secretKey, true) ;
 $computedSignature = base64_encode($hash_hmac);
 if ($signature == $computedSignature) {
  if($_POST["txStatus"]=="SUCCESS"){
  echo "<center><p>TRANSACTION STATUS</p> <h1>$txStatus</h1></center>";
  echo "<center><p>TRANSACTION AMOUNT</p><h2>$orderAmount</h2></center>";
  echo "<center><p>REFERENCE ID</p> <h4>$referenceId</h4></center>";
  echo "<center><p>TRANSACTION TIME<h4>$txTime</h4></p></center>";
  echo "<center><p>ORDER ID<h4>$orderId</h4></p></center>";
//   echo "<center><p>ORDER ID<h4>$fetchdata['url']</h4></p></center>";


  // echo 'User IP - '.getUserIpAddr();

    

    }
    else{
      echo "<center><p>TRANSACTION STATUS</p> <h1>$txStatus</h1></center>";
  echo "<center><p>TRANSACTION AMOUNT</p><h2>$orderAmount</h2></center>";
  echo "<center><p>REFERENCE ID</p> <h4>$referenceId</h4></center>";
  echo "<center><p>TRANSACTION TIME<h4>$txTime</h4></p></center>";
  echo "<center><p>ORDER ID<h4>$orderId</h4></p></center>";
      
      
      echo "<center><h5>ANY AMOUNT DETUCTED WILL BE REFUNDED</h5></center>";}
  } else {
    echo "<h1>signature mismatch-MALICIUOS ATTEMPT DETECTED
    </h1>";
    echo 'User IP - '.getUserIpAddr();
    
;
   
 }

 function getUserIpAddr(){
  if(!empty($_SERVER['HTTP_CLIENT_IP'])){
      //ip from share internet
      $ip = $_SERVER['HTTP_CLIENT_IP'];
  }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
      //ip pass from proxy
      $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }else{
      $ip = $_SERVER['REMOTE_ADDR'];
  }
  return $ip;
}


?>