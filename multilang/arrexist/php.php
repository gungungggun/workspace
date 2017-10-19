<?php
$arr = [1, 2, 3, 2, 5, 2, 3, 4];
var_dump(in_array(2, $arr)); // true
var_dump(in_array(0, $arr)); // false

var_dump(in_array("2", $arr)); // true
var_dump(in_array("2.0", $arr)); // true

var_dump(in_array("2", $arr, true)); // false
var_dump(in_array("2.0", $arr, true)); // false

$arr2 = [
  'a' => 1,
  'b' => 2,
  'c' => 3
];
var_dump(in_array(2, $arr2)); // true
var_dump(in_array(0, $arr2)); // false


