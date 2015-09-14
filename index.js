// https://codepen.io/Tigt/blog/optimizing-svgs-in-data-uris
// https://github.com/Fyrd/caniuse/issues/1746
// https://tools.ietf.org/html/rfc3986#section-2.2

var strReplaceAll  = require('str-replace-all');
var replaceEscaped = function(unsafes, input) {
  var output = input;
  unsafes.forEach(function(unsafe) { output = strReplaceAll(unsafe, encodeURIComponent(unsafe), output); });
  return output;
}

var inlineUrlescape  = function(svgStr){
  var unsafes = [ ":", "/", "?", "#", "[", "]", "@",
                  "!", "$", "&", "(", ")",
                  "*", "+", ",", ";", "=",
                  "<", ">"                           ];
  var escapedStr = replaceEscaped(unsafes, svgStr);

  var escapedStrQuotes = strReplaceAll('"', "'", escaped);
    // only ' is allowed unencoded in a URL

  return escapedStrQuotes;
}


module.exports = inlineUrlescape;
