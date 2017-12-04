<?php

$arr = [4, 2, 9, 0, 5, 1, 7, 5];

$arr1 = $arr;
sort($arr1);
var_dump($arr1); // [0, 1, 2, 4, 5, 5, 7, 9]

$arr2 = $arr;
asort($arr2);
var_dump($arr2); // [0, 1, 2, 4, 5, 5, 7, 9]

$arr3 = $arr;
rsort($arr3);
var_dump($arr3); // [0, 1, 2, 4, 5, 5, 7, 9]

$arr4 = $arr;
arsort($arr4);
var_dump($arr4); // [0, 1, 2, 4, 5, 5, 7, 9]
