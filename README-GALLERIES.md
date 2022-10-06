For some reason this 11ty stops with error if this fiel is present inside src (even with .eleventyignore activated).

# Steps for image publication:

(11ty tries to resize the images by itself but I am not content with the result. This way we have more control.)


- copy images from the source directory to the target dir e.g. /assets/images/gallery1
- run `rename.py` in that directory
- run `python generate_yaml.py` in that directory
- move the `python generate_yaml.py` in that directory
- run `mogrify -geometry "1500x1500>" -quality 95 *.jpg` (limit the biggest dimension to 1500px)
- create directory `thumbnails` and fill it with all images
- run `mogrify -geometry "x260>" -quality 80 *.jpg` (limit the height to 260px)
