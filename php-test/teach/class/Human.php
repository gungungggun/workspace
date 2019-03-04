<?php

class Human {

    protected $name;

    protected $gender;

    public function __construct($name = "nanashi", $gender) {
        $this->setName($name)
            ->setGender($gender);
    }

    public function say($gobi = "...") {
        if ($this->gender == "man") {
            $a = "僕は";
        } else {
            $a = "私は";
        }
        $this->say2($gobi, $a);
    }

    protected function say2($gobi, $a) {
        echo $a . $this->name . "です" . $gobi;
        echo "\n";
    }

    public function setName($name) {
        $this->name = $name;
        return $this;
    }

    public function setGender($gender) {
        $this->gender = $gender;
        return $this;
    }
}
