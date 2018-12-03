<?php

include('../vendor/autoload.php');

use Carbon\Carbon;

$now = Carbon::parse('2018-10-31');
var_dump($now);

$now2 = $now->copy()->subMonth();
var_dump($now2);

$now3 = $now->copy()->settings(['monthOverflow' => false])->subMonth();
var_dump($now3);
