<?php

$arr = [1, 2, 3];
$str = implode(',', $arr);
var_dump($str);

$str = '1,2,3';
$arr = explode(',', $str);
var_dump($arr);
