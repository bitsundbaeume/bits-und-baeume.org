import re
import glob
import yaml


target_path = "presse2022.yml"

files = glob.glob("*.jpg")
files.sort()

res = []

for fname in files:

    fname = fname.strip()

    #d = {
        #"path": f"",
        #"tn_path": f"/assets/images/galleries/konferenz2022/presse/thumbnails/{fname}",
        #"alt": f"",
    #}

    res.append(f"- path: /assets/images/galleries/konferenz2022/presse/{fname}")
    res.append(f"  tn_path: /assets/images/galleries/konferenz2022/presse/thumbnails/{fname}")
    res.append(f"  alt: Bits und Bäume conference image")

res.append("")



with open(target_path, "w") as myfile:
    myfile.write("\n".join(res))
