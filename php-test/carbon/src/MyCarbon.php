<?php

include('../vendor/autoload.php');

$now = \Carbon\Carbon::now();
var_dump($now);

$now2 = \Carbon\Carbon::now()->setTimezone('Asia/Tokyo');
var_dump($now2);

$now3 = \Carbon\Carbon::parse($now->toDatetimeString(), 'Asia/Tokyo');
var_dump($now3);
