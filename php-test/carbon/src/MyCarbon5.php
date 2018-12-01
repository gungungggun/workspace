<?php

include('../vendor/autoload.php');

use Carbon\Carbon;

$now = Carbon::parse('2016-2-29');
var_dump($now);

$now2 = $now->copy()->addYear();
var_dump($now2);

$now3 = $now->copy()->settings(['yearOverflow' => false])->addYear();
var_dump($now3);
