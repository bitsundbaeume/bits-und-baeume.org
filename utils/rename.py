import re
import glob
import shutil

# kate: replace-tabs on; indent-width 4; indent-mode cstyle;

# just for debugging
try:
    from ipydex import IPS, activate_ips_on_exception
    activate_ips_on_exception()
except ImportError:
    pass

pattern_map = {
    "^.*SilkeMayer-(\d+)\.jpg$": "Bits-und-Baeume-SM-{:04d} CC-BY Silke Mayer.jpg",
    "^.*(\d+)-.* Christoph J Kellner.jpg$": "Bits-und-Baeume-CJK-{:04d} CC-BY Christoph J Kellner.jpg",
}


files = glob.glob("*.jpg")
files.sort()

rename_pairs = []

for p, new_name in pattern_map.items():
    pattern = re.compile(p)

    for f in files:
        match = pattern.match(f)
        if match:
            key = int(match.group(1))
            rename_pairs.append((f, new_name.format(key)))

for old, new in rename_pairs:
    shutil.move(old, new)
