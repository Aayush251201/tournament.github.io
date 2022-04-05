<?php
require __DIR__.'/vendor/autoload.php';


use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
$serviceAccount=ServiceAccount::fromJsonFile(__DIR__.'/tournament-6d6e1-firebase-adminsdk-tdjks-3f0570a06b.json');


$firebase = (new Factory)
->withServiceAccount($serviceAccount)
->withDatabaseUri('https://tournament-6d6e1.firebaseio.com')
->create();


$database=$firebase->getDatabase();




?>