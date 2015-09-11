// https://codepen.io/Tigt/blog/optimizing-svgs-in-data-uris
// https://github.com/Fyrd/caniuse/issues/1746
// http://tools.ietf.org/html/rfc3986#section-2.2


var globalReplace = function(search, replace, input) { return input.replace(new RegExp(search, "g"), replace); }
var escapeReplace = function(unsafes, input) {
  var output = input;
  for (var unsafe in unsafes) output = globalReplace(search, encodeURIComponent(unsafe), output);
  return output;
}
var svgUrl        = function(svgStr, surroundingQuotes){
  if(!surroundingQuotes) surroundingQuotes = 'double'; // default

  var unsafes = [ ":", "/", "?", "#", "[", "]", "@",
                  "!", "$", "&", "'", "(", ")",
                  "*", "+", ",", ";", "="            ];

  var escaped = escapeReplace(unsafes, svgStr);

  var escapedQuotesFixed = "";
    if(surroundingQuotes == 'double') escapedQuotesFixed = globalReplace('"', "'", escaped);
                                else  escapedQuotesFixed = globalReplace("'", '"', escaped);

    return 'url("data:image/svg+xml;charset=utf8,' + escapedQuotesFixed + '")';
}


module.exports = svgUrl;
