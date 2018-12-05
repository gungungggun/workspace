<?php

include('./vendor/autoload.php');
include('./step002/jihan.php');

use PHPUnit\Framework\TestCase;

class JihanTest extends TestCase
{
    // inputValue()の検証 returnの型
    public function test001()
    {
        $res = inputValue();
        $this->assertInternalType('array', $res);
    }

    // inputValue()の検証 returnの中身
    public function test002()
    {
        // $_SERVER['argv']に引数を設定する
        $_SERVER['argv'][1] = 'コーラ';
        $_SERVER['argv'][2] = '200';

        $res = inputValue();

        $this->assertEquals($res[0], 'コーラ');
        $this->assertEquals($res[1], 200);

        //$this->assertInternalType('string', $res[0]);
        //$this->assertInternalType('int', $res[1]);
    }

    // calc()の検証
    public function test003()
    {
        $otsuri = calc('コーラ', 200);
        //$this->assertEquals(0, $otsuri);

        $otsuri = calc('カルピス', 200);
        //$this->assertEquals(0, $otsuri);
    }

    // outpitValue()の検証
    public function test004()
    {
        $this->expectOutputRegex('/.*コーラ.*/');
        $this->expectOutputRegex('/.*200.*/');
        $otsuri = outputValue('コーラ', 200);
    }
}
