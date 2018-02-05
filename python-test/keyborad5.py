from getch import getch

print "Push any key. (ESC : exit)"

while True:
    key = ord(getch())
    if key == 27: # ESC
        key = ord(getch())
        if key == 91:
            key = ord(getch())
            if key == 65:
                print 'top'
            elif key == 66:
                print 'bottom'
            elif key == 67:
                print 'right'
            elif key == 68:
                print 'left'
        else:
            break
    elif key == 13: # Enter
        print "Enter"
        pass
    else:
        print "You pressed: %s (%d)" % (chr(key), key)
        if chr(key) == "x":
            print "exit."
            break
