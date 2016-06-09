<?php

require 'vendor/autoload.php';
use GuzzleHttp\Client;


//カレンダーAPI認証
$scopes = ['https://www.googleapis.com/auth/calendar'];

$oauth_creds = __DIR__ . './oreore.json';

$client = new Google_Client();
$client->setAuthConfig($oauth_creds);
$client->setScopes($scopes);

$base_path= $client->getConfig('base_uri');

$options['exceptions'] = false;
$options['verify'] = false;
$options['base_uri'] = $base_path;
$myclient = new Client($options);

$client->setHttpClient($myclient);

$service = new Google_Service_Calendar($client);

//カレンダー一覧
$cal_list = $service->calendarList->listCalendarList();

foreach ($cal_list['items'] as $calendar) {
    var_dump($calendar);
}

var_dump($cal_list);
