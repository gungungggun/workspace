#!/usr/bin/python
# coding: utf-8

try:
    from msvcrt import getch
except ImportError:
    def getch ():
        import sys
        import tty
        import termios
        fd = sys.stdin.fileno()
        old = termios.tcgetattr(fd)
        try:
            tty.setraw(fd)
            return sys.stdin.read(1)
        finally:
            termios.tcsetattr(fd, termios.TCSADRAIN, old)

flag = True
while flag:
    key = ord(getch())
    print(key)
    if key == 113:
        print('q')
        flag = False
    else:
        print('else')

