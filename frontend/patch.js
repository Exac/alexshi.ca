// https://github.com/angular/angular-cli/issues/1548#issuecomment-386871992
// https://gist.github.com/niespodd/1fa82da6f8c901d1c33d2fcbb762947d
const fs = require('fs');
const realtorca = require('realtorca');
const f = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

fs.readFile(f, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/node: false/g, "node: {request: true, fs: true, realtorca: true, global: 'true, crypto: true, tls: 'true, net: true, process: true, module: false, clearImmediate: false, setImmediate: false}");

  fs.writeFile(f, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
