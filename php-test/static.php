<?php

class Test {
    public function aaa () {
        echo 'aaa';
    }

    public static function bbb () {
        $self = new Test;
        $self->aaa();
    }
}

Test::bbb();
