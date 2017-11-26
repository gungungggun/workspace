<?php

$a = ["a", "aa", "aaa"];
$b = ["b", "bb", "bbb"];

$c = $a + $b;
var_dump($c);

$d = array_merge($a, $b);
var_dump($d);


$a = ["a" => 1, "aa" => 2, "aaa" => 3];
$b = ["b" => 1, "bb" => 2, "bbb" => 3];

$e = $a + $b;
var_dump($e);
