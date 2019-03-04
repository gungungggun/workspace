<?php
include("Human.php");

class Teacher extends Human {

    public function say($gobi = "...") {
        if ($this->gender == "man") {
            $a = "わたくしは";
        } else {
            $a = "私は";
        }
        $this->say2($gobi, $a);
    }

    public function gekido() {
        echo "ぷんぷん！"."\n";
    }
}

$teacher1 = new Teacher("gun", "man");
$teacher1->gekido();
$teacher1->say();
