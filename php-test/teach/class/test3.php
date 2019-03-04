<?php
error_reporting(E_ALL);

define("PI",3.14);
const ENSYUU = 3.14;

echo PI;
echo "\n";
echo ENSYUU;

define("PI",3.15);
const ENSYUU = 3.15;

echo "上書き後";
echo PI;
echo "\n";
echo ENSYUU;
