








       
<?php
 session_start();
 $timming=$_POST["amountinfo"];
 $reference12=$_POST["orderpin"];
 $reference12987=$_POST["orderpin098"];

 $referdat=$_POST["orderpub"];
 $reference12cv=$_POST["orderpin123x"];
// echo $referdat;
//  $xyz123=$_POST["name123c"];
//  echo $xyz123;
//  echo $timming;


 $new34=strval($reference12987."/".$timming."/".$reference12);
 $_SESSION['superhero'] =$new34;
$orderid=$_POST["orderid"];
$orderamount=$_POST["amount"];
$ordername1=$_POST["name"];
$orderemail1=$_POST["email"];
$orderphone1=$_POST["phoneno"];
$_SESSION['superhero1'] =$orderemail1;
$_SESSION['superhero2'] =$orderphone1;
$_SESSION['superhero24'] =$reference12cv;
$_SESSION['superhero241'] =$referdat;







// echo $orderid."|".$orderamount;
$host="https://myknot-tournament.online/public";
$notifyUrl=$host."/notify.php";
$returnUrl=$host."/return.php";
$orderDetails=array();
$orderDetails["notifyUrl"] =$notifyUrl;
$orderDetails["returnUrl"] =$returnUrl;
$userDetails=getuserdetail($orderid,$ordername1,$orderemail1,$orderphone1);
$order =getorderdetail($orderid,$orderamount);
$orderDetails["customerName"]=$userDetails["customerName"];
$orderDetails["customerEmail"]=$userDetails["customerEmail"];
$orderDetails["customerPhone"]=$userDetails["customerPhone"];
$orderDetails["orderId"]=$order["orderId"];
$orderDetails["orderAmount"]=$order["orderAmount"];
$orderDetails["orderNote"]=$order["orderNote"];
$orderDetails["orderCurrency"]=$order["orderCurrency"];
$orderDetails["appId"]="5302711808b9af9641345da8b72035";
$orderDetails["signature"]=generatesig($orderDetails);
// echo json_encode($orderDetails);


function generatesig($postData){
    $secretKey = "ae5d4c5252ede9e23e8edd908fc376b3af7bb1a8";

 // get secret key from your config
 ksort($postData);
 $signatureData = "";
 foreach ($postData as $key => $value){
      $signatureData .= $key.$value;
 }
 $signature = hash_hmac('sha256', $signatureData, $secretKey,true);
 $signature = base64_encode($signature);
return $signature;
}




function getuserdetail($orderid,$ordername1,$orderemail1,$orderphone1){
  
return array(
"customerName"=>$ordername1,
"customerPhone"=>$orderphone1,
"customerEmail"=>$orderemail1,




);


}

function getorderdetail($orderid,$orderamount){
    return array(
    "orderId"=>time(),
    "orderAmount"=>$orderamount,
    "orderNote"=>"test",
    "orderCurrency"=>"INR",
    
    
    
    
    );
    
    
    }







?>
 <form id="redirectForm" method="post" action="https://www.cashfree.com/checkout/post/submit">
    <input type="hidden" name="appId" value="<?php echo $orderDetails["appId"]?>"/>
    <input type="hidden" name="orderId" value="<?php echo $orderDetails["orderId"]?>"/>
    <input type="hidden" name="orderAmount" value="<?php echo $orderDetails["orderAmount"]?>"/>
    <input type="hidden" name="orderCurrency" value="<?php echo $orderDetails["orderCurrency"]?>"/>
    <input type="hidden" name="orderNote" value="<?php echo $orderDetails["orderNote"]?>"/>
    <input type="hidden" name="customerName" value="<?php echo $orderDetails["customerName"]?>"/>
    <input type="hidden" name="customerEmail" value="<?php echo $orderDetails["customerEmail"]?>"/>
    <input type="hidden" name="customerPhone" value="<?php echo $orderDetails["customerPhone"]?>"/>
    <input type="hidden" name="returnUrl" value="<?php echo $orderDetails["returnUrl"]?>"/>
    <input type="hidden" name="notifyUrl" value="<?php echo $orderDetails["notifyUrl"]?>"/>
    <input type="hidden" name="signature" value="<?php echo $orderDetails["signature"]?>"/>
  </form>
  <!-- <form action="return.php" method="post" name="lolp2">
                                
<input type="hidden" name="email78" value="">
 </form>
 <script>   document.lolp2.submit();</script> -->




  <script>document.getElementById("redirectForm").submit();</script>

