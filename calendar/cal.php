<?php

require 'vendor/autoload.php';
use GuzzleHttp\Client;


//カレンダーAPI認証
$scopes = ['https://www.googleapis.com/auth/calendar'];

$oauth_creds = __DIR__ . './auth.json';

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
//var_dump($service->events);exit;
$cal_list = $service->calendarList->listCalendarList();

foreach ($cal_list['items'] as $calendar) {
	$calendar_id = $calendar->id;
	break;
}

$event_list = $service->events->listEvents($calendar_id);
var_dump($event_list);

//foreach ($cal_list['items'] as $calendar) {
//    var_dump($calendar->id);exit;
//}

//ar_dump($cal_list);
