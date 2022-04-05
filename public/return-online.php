<?php
 session_start(); // this NEEDS TO BE AT THE TOP of the page before any output etc
 $ref=$_SESSION['superhero'];
 $ref12=$_SESSION['superhero1'];
 $ref123=$_SESSION['superhero2'];
 $ref123bg=$_SESSION['superhero24'];
 $ref123bg34=$_SESSION['superhero241'];
 









 
include('includes/dbconfig.php');
 
$fetchdata=$database->getReference($ref)->getValue();
$newdata1=$fetchdata['url'];
$newdata1new=$fetchdata['sheet'];


// $fetchdata as $key->$row;
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
    echo "<center><a href='$newdata1'><h1>CLICK HERE TO GET ROOM ID</h1></a></center>";
  echo "<center><p>TRANSACTION STATUS</p> <h1>$txStatus</h1></center>";
  echo "<center><p>TRANSACTION AMOUNT</p><h2>$orderAmount</h2></center>";
  echo "<center><p>REFERENCE ID</p> <h4>$referenceId</h4></center>";
  echo "<center><p>TRANSACTION TIME<h4>$txTime</h4></p></center>";
  echo "<center><p>ORDER ID<h4>$orderId</h4></p></center>"; 
//   echo "<center><p>ORDER ID<h4>$ref123bg34</h4></p></center>";  


  require __DIR__ . '/vendor/autoload.php';
  /*
  if (php_sapi_name() != 'cli') {
      throw new Exception('This application must be run on the command line.');
  }*/
  
  /**
   * Returns an authorized API client.
   * @return Google_Client the authorized client object
   */
  function getClient()
  {
      $client = new Google_Client();
      $client->setApplicationName('Google Sheets API PHP Quickstart');
      $client->setScopes(Google_Service_Sheets::SPREADSHEETS);
      $client->setAuthConfig(__DIR__ .'/credentials.json');
      $client->setAccessType('offline');
      $client->setPrompt('select_account consent');
  
      // Load previously authorized token from a file, if it exists.
      // The file token.json stores the user's access and refresh tokens, and is
      // created automatically when the authorization flow completes for the first
      // time.
      $tokenPath = __DIR__ .'/token.json';
      if (file_exists($tokenPath)) {
          $accessToken = json_decode(file_get_contents($tokenPath), true);
          $client->setAccessToken($accessToken);
      }
  
      // If there is no previous token or it's expired.
      if ($client->isAccessTokenExpired()) {
          // Refresh the token if possible, else fetch a new one.
          if ($client->getRefreshToken()) {
              $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
          } else {
              // Request authorization from the user.
              $authUrl = $client->createAuthUrl();
              printf("Open the following link in your browser:\n%s\n", $authUrl);
              print 'Enter verification code: ';
              $authCode = trim(fgets(STDIN));
  
              // Exchange authorization code for an access token.
              $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
              $client->setAccessToken($accessToken);
  
              // Check to see if there was an error.
              if (array_key_exists('error', $accessToken)) {
                  throw new Exception(join(', ', $accessToken));
              }
          }
          // Save the token to a file.
          if (!file_exists(dirname($tokenPath))) {
              mkdir(dirname($tokenPath), 0700, true);
          }
          file_put_contents($tokenPath, json_encode($client->getAccessToken()));
      }
      return $client;
  }
  
  
  // Get the API client and construct the service object.
  $client = getClient();
  $service = new Google_Service_Sheets($client);
  
  // Prints the names and majors of students in a sample spreadsheet:
  // https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 /* $spreadsheetId = '148bYnThNHJKPuq6U18Ve3mS5vw6-5zjTXtbGf7OcJzw';
  $range = 'Sheet1!A2:C';
  $response = $service->spreadsheets_values->get($spreadsheetId, $range);
  $values = $response->getValues();
  
  if (empty($values)) {
      print "No data found.\n";
  } else {
      print "Name, Major:\n";
      foreach ($values as $row) {
          // Print columns A and E, which correspond to indices 0 and 4.
          printf("%s, %s, %s\n", $row[0], $row[1], $row[2]);
      }
  }
  */
  
  $spreadsheetId = $newdata1new;
  $range = 'Sheet1!A2:G';

  
  $values = [
      [
          $ref12,$ref123,$referenceId,$txStatus,$txTime,$ref123bg,$ref123bg34// Cell values ...
      ],
      // Additional rows ...
  ];
  $body = new Google_Service_Sheets_ValueRange([
      'values' => $values
  ]);
  $params = [
      'valueInputOption' => 'RAW'
  ];

  $response = $service->spreadsheets_values->get($spreadsheetId, $range);
  $values2 = $response->getValues();
  
  // if (empty($values)) {
  //     print "No data found.\n";
  // } else {
  //     print "Name, Major:\n";

$hal=false;

      foreach ($values2 as $row) {
          if($referenceId==$row[2]){$hal=true;
          }
      }
      if($hal===true){


      }else{
        $result = $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);

      }
  // printf("%d cells appended.", $result->getUpdates()->getUpdatedCells());
 



  
    


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
