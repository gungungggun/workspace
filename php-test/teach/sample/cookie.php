<?php

setcookie('a', 1, time() + 1000000);

var_dump($_COOKIE);
var_dump($_COOKIE['a']);
