<?php
$t = microtime(true);
$count = 0;

for ($i = 2; $i <= 10000; $i++) {
  $x = $i;
  while ($x != 1) {
    if ($x % 2 == 0) {
      $x = a($x);
    } else {
      $x = b($x);
    }
    $count++;
  }
}
echo '処理時間' . (microtime(true) - $t);
echo "\n";
echo 'count:' . $count;

function a ($n) {
  return $n / 2;
}

function b ($n) {
  return $n * 3 + 1;
}
