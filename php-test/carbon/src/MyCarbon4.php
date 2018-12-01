<?php

include('../vendor/autoload.php');

use Carbon\Carbon;

$now = Carbon::parse('2018-10-31');
echo $now->toDateString(); // 2018-10-31
echo PHP_EOL;
echo '-------------------';
echo PHP_EOL;

$now2 = $now->copy()->addMonth();
echo $now2->toDateString(); // 2018-12-01
echo PHP_EOL;

$now3 = $now->copy()->addMonthNoOverflow();
echo $now3->toDateString(); // 2018-11-30
echo PHP_EOL;

$now4 = $now->copy()->addMonthWithOverflow();
echo $now4->toDateString(); // 2018-12-01
echo PHP_EOL;

echo '-------------------';
echo PHP_EOL;

Carbon::useMonthsOverflow(false);

$now5 = $now->copy()->addMonth();
echo $now5->toDateString(); // 2018-11-30
echo PHP_EOL;

$now6 = $now->copy()->addMonthNoOverflow();
echo $now6->toDateString(); // 2018-11-30
echo PHP_EOL;

$now7 = $now->copy()->addMonthWithOverflow();
echo $now7->toDateString(); // 2018-12-01
