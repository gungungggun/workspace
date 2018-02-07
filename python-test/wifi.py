import subprocess

cmd = subprocess.Popen('/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | grep agrCtlRSSI', shell=True, stdout=subprocess.PIPE)

res = cmd.stdout
for line in res:
    if 'agrCtlRSSI' in line:
        spl = line.split('agrCtlRSSI: ')
        rssi = spl[1]
        print rssi
