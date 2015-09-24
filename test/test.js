'use strict';

var             chai = require('chai')
   ,         Promise = require('bluebird')
   ,              fs = require('fs')
   , inlineUrlEscape = require('../index');
Promise.promisifyAll(fs);

describe('inline url escape', function () {

  it('correctly encodes string with characters deemed safe by encodeURIComponent', function (done) {
    return Promise.all([
      fs.readFileAsync('./test/fixtures/svg-1.svg',     'utf8'),
      fs.readFileAsync('./test/fixtures/svg-1.svg.enc', 'utf8')
    ])
    .then(function(datas) {
      var input    = datas[0];
      var expected = datas[1];

      var output   = inlineUrlEscape(input);
      return chai.expect(output).to.equal(expected);
    })
    .nodeify(done);

    var strOutput = inlineUrlEscape(strInput);
    console.log('test');
  });

});
