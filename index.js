// https://codepen.io/Tigt/blog/optimizing-svgs-in-data-uris
// https://github.com/Fyrd/caniuse/issues/1746
// http://tools.ietf.org/html/rfc3986#section-2.2

var escapeRegexp = require('escape-string-regexp');

var globalReplace = function(search, replace, input) { return input.replace(new RegExp(escapeRegexp(search), "g"), replace); }
var escapeReplace = function(unsafes, input) {
  var output = input;
  unsafes.forEach(function(unsafe) { output = globalReplace(unsafe, encodeURIComponent(unsafe), output); });
  return output;
}
var inlineEscape  = function(svgStr, surroundingQuotes){
  if(!surroundingQuotes) surroundingQuotes = 'double'; // default

  var unsafes = [ ":", "/", "?", "#", "[", "]", "@",
                  "!", "$", "&", "'", "(", ")",
                  "*", "+", ",", ";", "="            ];

  var escaped = escapeReplace(unsafes, svgStr);

  var escapedQuotesFixed = escaped;
    if(surroundingQuotes == 'double') escapedQuotesFixed = globalReplace('"', "'", escaped);
                                else  escapedQuotesFixed = globalReplace("'", '"', escaped);

    return escapedQuotesFixed;
}


module.exports = inlineEscape;
