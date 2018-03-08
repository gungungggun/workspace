<?php

include('SubTrait.php');

class Main {
    use SubTrait;
}

$main = new Main;
$main->abc();
