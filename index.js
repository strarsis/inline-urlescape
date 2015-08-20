// ported from SASS script to JavaScript from 
// http://codepen.io/Tigt/blog/optimizing-svgs-in-data-uris


var globalReplace    = function(search, replace, input) { return input.replace(new RegExp(search, "g"), replace); }
var globalReplaceMap = function(map, input) {
  var output = input;
  for (var search in map) output = globalReplace(search, map[search], output);
  return output;
}
var svgUrl           = function(svgStr, surroundingQuotes){
    if(!surroundingQuotes) surroundingQuotes = 'double'; // default
    var replaceMap = {
      '<': '%3C',
      '>': '%3E',
      '&': '%26',
      '#': '%23'
    }
   if(surroundingQuotes == 'double') replaceMap['"']  = "'";
                                else replaceMap['\''] = '"';
    var encoded = globalReplaceMap(replaceMap, svgStr);
    return 'url("data:image/svg+xml;charset=utf8,' + encoded + '")';
}


module.exports = svgUrl;
