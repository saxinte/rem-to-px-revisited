# REM to PX Browser Function using Sass

This Sass function converts [REM] values to pixels when needed. But instead of generating the CSS property twice (with both PX and REM units) in the same CSS file, it provide a way to generate the right unit in the right compiled CSS file.

The goal of this function is to generate two CSS files:
- A CSS file containing REM values
- A CSS file containing PX values

## Pros
- Easy to maintain: Just edit your code once, and two separate stylesheets will be generated.
- Easy to read: Your final CSS is clear and without unused properties.
- Lower file size: Your final CSS is lighter.
- Faster to develop: Just type u() to generate the final units.

## Cons
- Needs a hack in the <head> to serve the right stylesheet.

## How to use it
All the informations you need to know are hosted on the David Walsh's blog:
http://davidwalsh.name/rem-px-browser-function-sass

[REM]: http://caniuse.com/#feat=rem