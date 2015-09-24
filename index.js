// https://codepen.io/Tigt/blog/optimizing-svgs-in-data-uris
// https://github.com/Fyrd/caniuse/issues/1746
// https://tools.ietf.org/html/rfc3986#section-2.2

var strReplaceAll  = require('str-replace-all')
  , percEncChar    = require('percentage-encode-char');

var replaceWithSafe = function(unsafes, input) {
  var output = input;
  unsafes.forEach(function(unsafe) { output = strReplaceAll(unsafe, percEncChar(unsafe).toUpperCase(), output); });
  return output;
}

var inlineUrlescape  = function(svgStr){
  var unsafes = [ ":", "/", "?", "#", "[", "]", "@",
                  "!", "$", "&", "(", ")",
                  "*", "+", ",", ";", "=",
                  "<", ">"                           ];
  var escapedStr = replaceWithSafe(unsafes, svgStr);

  var escapedStrQuotes = strReplaceAll('"', "'", escapedStr);
          // only ' is allowed unencoded in a URL

  return escapedStrQuotes;
}


module.exports = inlineUrlescape;
