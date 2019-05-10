<?php
include 'vendor/autoload.php';
include 'src/t.php';

use PHPUnit\Framework\TestCase;

class MyTest extends TestCase
{
    public function test000()
    {
        $this->assertEquals(3, add(1, 2));
        $this->assertEquals(102, add(100, 2));
        $this->assertEquals(3.7, add(1.5, 2.2));
        $this->assertEquals(-1, add(1, -2));
    }
}
