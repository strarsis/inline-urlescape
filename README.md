inline-urlescape
================
URL-escapes SVG file strings so it can be used in a data URI.


Installation
------------
````
npm install --save inline-urlescape
````

Usage
-----
````
var inlineUrlescape = require('inline-urlescape');

var testSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path fill="#804D35" d="M35 254.6l9.7 28.8 211 1.7 12-34L35 255"/><path fill="#2F2B33" d="M40 288c1.3 1.2 221 0 221 0s5.3-6.4-50.2-10c-34.4.8-55.7 6-55.7 6s-25-6-47-6c-91 4-69 8.8-68 10z"/><path fill="#EE304E" d="M15.2 187.8s20.3-30 36.2-35.4c3.6 1.2 189 1.5 198.3 1.2 26.8 5.8 23.5 24 31.6 26.4 1.8-.3 11 79.6-19.8 77.6-1.3 2.5-50.6 4-55.7 4.5s-21.4 10-43 13c-4.6 1-78.7 0-78.7 0s-34-4-55-26c-1-2 0-9-13-60z"/><ellipse cx="151.3" cy="128.9" fill="#FFEDC3" rx="109.8" ry="76.8"/><path fill="#00B8C3" d="M43 114.6c0-49 58-81 107-82 82.7-2 106.5 68.2 105.3 67.6C133.3 44.7 43 114.6 43 114.6z"/><path fill="#FCEE21" d="M44.3 117.7c43.7-26 94-35.7 144.5-30.4 16 1.7 32 5 47.6 9.8 4.5 2 9 3 13.4 5l3.5 2c-1 0 .3 0 .6 1 4 2 8-4.2 3-6.2-22-10-46-14.6-69-17-51-6.5-103 4.5-148 31-4 2.3-1 9 4 6.3zm72.4-84.4s9-4.8 10.4-3.8 2-2.3 2-2.3l9-2h11l1-2.3s12-1 13 2c0 4 15.7 4 15 10-2.5 8-12 2-13 4-11.4 6-17 0-17 0l-13 4-1-7s-3 5-8 5.3c-17.3 4-9-8.5-9-8.5zm-100.5 155C6 189.3-7 221 24 227.3c10.4-2.6 40 2 36-13s-33.8-24.2-44-26zm267.4-7s5-1 8 4 4.7 22.2 4 27.6-.6 10-13.8 11-18.8-9-19.8-8-14.2 1-14.2 1-7.4-7 1.3-12c4-3 4-8 4-8s5-12 9-14 22-2 22-2z"/><path fill="none" stroke="#000" stroke-miterlimit="10" d="M68 167.3c11 12 91 71 170.3-5.6m-73 45.6c2 36.4-1.3 65.6-1.3 65.6"/><ellipse cx="157.1" cy="213.4" rx="1" ry="3"/><ellipse cx="159.7" cy="238.7" rx="1.2" ry="3.3"/><ellipse cx="157.2" cy="262.7" rx="2" ry="3.4"/><path fill="none" stroke="#000" stroke-miterlimit="10" d="M139 188.5c15.7 5.5 38 0 38 0"/><ellipse cx="182.5" cy="119.1" fill="#FFF" transform="matrix(.81 -.587 .587 .81 -35.153 129.678)" rx="26.7" ry="30.5"/><ellipse cx="126.5" cy="119.1" fill="#FFF" transform="matrix(.884 .467 -.467 .884 70.21 -45.287)" rx="26.7" ry="30.5"/><circle cx="138.6" cy="117.9" r="3.3"/><circle cx="170.6" cy="117.9" r="3.3"/><path d="M134.7 172.4c3.4-3.5 7.7-3.2 7.7-3.2s24.2-.2 25.5.3 2 3 2 4.2c-1 1.4-5 10.7-7 13.3-2 1.8-9 0-9 0s-4-1-5-1.8c-.7-.3-3.4 0-4-.2s-11.5-10.6-12-12.3"/><path fill="#FFF" d="M149 172.3c-.2-1-1-1.7-1.8-1.5l-3 .5c-.8 0-1.3 1-1.2 2 .2 1 1 1.7 1.8 1.5l3-.5c1 0 1.4-1 1.2-2zm9 1.5c.2-.8-.3-1.6-1-1.8l-4.2-.8c-.7 0-1.5.4-1.6 1.2v.3c-.3.8.2 1.6 1 1.8l4 .8c.8 0 1.6-.4 1.7-1.2zm9-.4c0-1-.8-1.7-1.6-1.6l-5 .4c-.8 0-1.4 1-1.3 1.8 1 1 1 1.7 2 1.6l5-.4c1 0 2-1 2-1.8z"/></svg>';

svgUrl(testSvg);
  => %3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 300 300'%3E%3Cpath fill%3D'%23804D35' d%3D'M35 254.6l9.7 28.8 211 1.7 12-34L35 255'%2F%3E%3Cpath fill%3D'%232F2B33' d%3D'M40 288c1.3 1.2 221 0 221 0s5.3-6.4-50.2-10c-34.4.8-55.7 6-55.7 6s-25-6-47-6c-91 4-69 8.8-68 10z'%2F%3E%3Cpath fill%3D'%23EE304E' d%3D'M15.2 187.8s20.3-30 36.2-35.4c3.6 1.2 189 1.5 198.3 1.2 26.8 5.8 23.5 24 31.6 26.4 1.8-.3 11 79.6-19.8 77.6-1.3 2.5-50.6 4-55.7 4.5s-21.4 10-43 13c-4.6 1-78.7 0-78.7 0s-34-4-55-26c-1-2 0-9-13-60z'%2F%3E%3Cellipse cx%3D'151.3' cy%3D'128.9' fill%3D'%23FFEDC3' rx%3D'109.8' ry%3D'76.8'%2F%3E%3Cpath fill%3D'%2300B8C3' d%3D'M43 114.6c0-49 58-81 107-82 82.7-2 106.5 68.2 105.3 67.6C133.3 44.7 43 114.6 43 114.6z'%2F%3E%3Cpath fill%3D'%23FCEE21' d%3D'M44.3 117.7c43.7-26 94-35.7 144.5-30.4 16 1.7 32 5 47.6 9.8 4.5 2 9 3 13.4 5l3.5 2c-1 0 .3 0 .6 1 4 2 8-4.2 3-6.2-22-10-46-14.6-69-17-51-6.5-103 4.5-148 31-4 2.3-1 9 4 6.3zm72.4-84.4s9-4.8 10.4-3.8 2-2.3 2-2.3l9-2h11l1-2.3s12-1 13 2c0 4 15.7 4 15 10-2.5 8-12 2-13 4-11.4 6-17 0-17 0l-13 4-1-7s-3 5-8 5.3c-17.3 4-9-8.5-9-8.5zm-100.5 155C6 189.3-7 221 24 227.3c10.4-2.6 40 2 36-13s-33.8-24.2-44-26zm267.4-7s5-1 8 4 4.7 22.2 4 27.6-.6 10-13.8 11-18.8-9-19.8-8-14.2 1-14.2 1-7.4-7 1.3-12c4-3 4-8 4-8s5-12 9-14 22-2 22-2z'%2F%3E%3Cpath fill%3D'none' stroke%3D'%23000' stroke-miterlimit%3D'10' d%3D'M68 167.3c11 12 91 71 170.3-5.6m-73 45.6c2 36.4-1.3 65.6-1.3 65.6'%2F%3E%3Cellipse cx%3D'157.1' cy%3D'213.4' rx%3D'1' ry%3D'3'%2F%3E%3Cellipse cx%3D'159.7' cy%3D'238.7' rx%3D'1.2' ry%3D'3.3'%2F%3E%3Cellipse cx%3D'157.2' cy%3D'262.7' rx%3D'2' ry%3D'3.4'%2F%3E%3Cpath fill%3D'none' stroke%3D'%23000' stroke-miterlimit%3D'10' d%3D'M139 188.5c15.7 5.5 38 0 38 0'%2F%3E%3Cellipse cx%3D'182.5' cy%3D'119.1' fill%3D'%23FFF' transform%3D'matrix(.81 -.587 .587 .81 -35.153 129.678)' rx%3D'26.7' ry%3D'30.5'%2F%3E%3Cellipse cx%3D'126.5' cy%3D'119.1' fill%3D'%23FFF' transform%3D'matrix(.884 .467 -.467 .884 70.21 -45.287)' rx%3D'26.7' ry%3D'30.5'%2F%3E%3Ccircle cx%3D'138.6' cy%3D'117.9' r%3D'3.3'%2F%3E%3Ccircle cx%3D'170.6' cy%3D'117.9' r%3D'3.3'%2F%3E%3Cpath d%3D'M134.7 172.4c3.4-3.5 7.7-3.2 7.7-3.2s24.2-.2 25.5.3 2 3 2 4.2c-1 1.4-5 10.7-7 13.3-2 1.8-9 0-9 0s-4-1-5-1.8c-.7-.3-3.4 0-4-.2s-11.5-10.6-12-12.3'%2F%3E%3Cpath fill%3D'%23FFF' d%3D'M149 172.3c-.2-1-1-1.7-1.8-1.5l-3 .5c-.8 0-1.3 1-1.2 2 .2 1 1 1.7 1.8 1.5l3-.5c1 0 1.4-1 1.2-2zm9 1.5c.2-.8-.3-1.6-1-1.8l-4.2-.8c-.7 0-1.5.4-1.6 1.2v.3c-.3.8.2 1.6 1 1.8l4 .8c.8 0 1.6-.4 1.7-1.2zm9-.4c0-1-.8-1.7-1.6-1.6l-5 .4c-.8 0-1.4 1-1.3 1.8 1 1 1 1.7 2 1.6l5-.4c1 0 2-1 2-1.8z'%2F%3E%3C%2Fsvg%3E
````

````
.test {
  background: url(data:image/svg+xml;charset=utf8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 300 300'%3E%3Cpath fill%3D'%23804D35' d%3D'M35 254.6l9.7 28.8 211 1.7 12-34L35 255'%2F%3E%3Cpath fill%3D'%232F2B33' d%3D'M40 288c1.3 1.2 221 0 221 0s5.3-6.4-50.2-10c-34.4.8-55.7 6-55.7 6s-25-6-47-6c-91 4-69 8.8-68 10z'%2F%3E%3Cpath fill%3D'%23EE304E' d%3D'M15.2 187.8s20.3-30 36.2-35.4c3.6 1.2 189 1.5 198.3 1.2 26.8 5.8 23.5 24 31.6 26.4 1.8-.3 11 79.6-19.8 77.6-1.3 2.5-50.6 4-55.7 4.5s-21.4 10-43 13c-4.6 1-78.7 0-78.7 0s-34-4-55-26c-1-2 0-9-13-60z'%2F%3E%3Cellipse cx%3D'151.3' cy%3D'128.9' fill%3D'%23FFEDC3' rx%3D'109.8' ry%3D'76.8'%2F%3E%3Cpath fill%3D'%2300B8C3' d%3D'M43 114.6c0-49 58-81 107-82 82.7-2 106.5 68.2 105.3 67.6C133.3 44.7 43 114.6 43 114.6z'%2F%3E%3Cpath fill%3D'%23FCEE21' d%3D'M44.3 117.7c43.7-26 94-35.7 144.5-30.4 16 1.7 32 5 47.6 9.8 4.5 2 9 3 13.4 5l3.5 2c-1 0 .3 0 .6 1 4 2 8-4.2 3-6.2-22-10-46-14.6-69-17-51-6.5-103 4.5-148 31-4 2.3-1 9 4 6.3zm72.4-84.4s9-4.8 10.4-3.8 2-2.3 2-2.3l9-2h11l1-2.3s12-1 13 2c0 4 15.7 4 15 10-2.5 8-12 2-13 4-11.4 6-17 0-17 0l-13 4-1-7s-3 5-8 5.3c-17.3 4-9-8.5-9-8.5zm-100.5 155C6 189.3-7 221 24 227.3c10.4-2.6 40 2 36-13s-33.8-24.2-44-26zm267.4-7s5-1 8 4 4.7 22.2 4 27.6-.6 10-13.8 11-18.8-9-19.8-8-14.2 1-14.2 1-7.4-7 1.3-12c4-3 4-8 4-8s5-12 9-14 22-2 22-2z'%2F%3E%3Cpath fill%3D'none' stroke%3D'%23000' stroke-miterlimit%3D'10' d%3D'M68 167.3c11 12 91 71 170.3-5.6m-73 45.6c2 36.4-1.3 65.6-1.3 65.6'%2F%3E%3Cellipse cx%3D'157.1' cy%3D'213.4' rx%3D'1' ry%3D'3'%2F%3E%3Cellipse cx%3D'159.7' cy%3D'238.7' rx%3D'1.2' ry%3D'3.3'%2F%3E%3Cellipse cx%3D'157.2' cy%3D'262.7' rx%3D'2' ry%3D'3.4'%2F%3E%3Cpath fill%3D'none' stroke%3D'%23000' stroke-miterlimit%3D'10' d%3D'M139 188.5c15.7 5.5 38 0 38 0'%2F%3E%3Cellipse cx%3D'182.5' cy%3D'119.1' fill%3D'%23FFF' transform%3D'matrix(.81 -.587 .587 .81 -35.153 129.678)' rx%3D'26.7' ry%3D'30.5'%2F%3E%3Cellipse cx%3D'126.5' cy%3D'119.1' fill%3D'%23FFF' transform%3D'matrix(.884 .467 -.467 .884 70.21 -45.287)' rx%3D'26.7' ry%3D'30.5'%2F%3E%3Ccircle cx%3D'138.6' cy%3D'117.9' r%3D'3.3'%2F%3E%3Ccircle cx%3D'170.6' cy%3D'117.9' r%3D'3.3'%2F%3E%3Cpath d%3D'M134.7 172.4c3.4-3.5 7.7-3.2 7.7-3.2s24.2-.2 25.5.3 2 3 2 4.2c-1 1.4-5 10.7-7 13.3-2 1.8-9 0-9 0s-4-1-5-1.8c-.7-.3-3.4 0-4-.2s-11.5-10.6-12-12.3'%2F%3E%3Cpath fill%3D'%23FFF' d%3D'M149 172.3c-.2-1-1-1.7-1.8-1.5l-3 .5c-.8 0-1.3 1-1.2 2 .2 1 1 1.7 1.8 1.5l3-.5c1 0 1.4-1 1.2-2zm9 1.5c.2-.8-.3-1.6-1-1.8l-4.2-.8c-.7 0-1.5.4-1.6 1.2v.3c-.3.8.2 1.6 1 1.8l4 .8c.8 0 1.6-.4 1.7-1.2zm9-.4c0-1-.8-1.7-1.6-1.6l-5 .4c-.8 0-1.4 1-1.3 1.8 1 1 1 1.7 2 1.6l5-.4c1 0 2-1 2-1.8z'%2F%3E%3C%2Fsvg%3E);
}
````


Credits
-------
Authors, users and commenters of the following pages (and thanks to many more):
- https://codepen.io/Tigt/blog/optimizing-svgs-in-data-uris
- https://github.com/Fyrd/caniuse/issues/1746#issuecomment-133416565

If I forgot to mention participants, feel free to contact me and I will add you to the list. :wink:


Optimization
------------
Q: There is extraneous whitespace in the output, how can I optimize?

This module does one job and does it well, it URL-escapes a text file (notably a SVG file) 
in an efficient manner (and as an alternative to base64) for safe usage in a data uri. 
Optimization of the SVG should be performed before escaping with this tool, 
using another tool like svgo or in a build step (e.g. gulp-svgmin to optimized SVG intermediary files.).


Integration
-----------
Q: How can I use this in sass (libsass) to inline a SVG file in my (S)CSS (for a background image)?

This is possible with eyeglass (probably also with sassport), I am planning/working on an eyeglass module that uses this module and accepts a file path to the svg asset to include inline.


Testing
-------
One could assume that properly encoding a text file like this should ensure compatibility with all browsers and clients, the unsafe characters are escaped according to URL spec (see Credits).
But according to the articles (see Credits) this module is based on, some browsers, notably Internet Explorer, may have issues where other browsers parse/show the image properly.
So any testing would probably involve negative tests with SVG specimen or ways of usage causing trouble in specific browsers.
Maybe a test setup involving selenium with different browser and version combinations and screenshot diff?
