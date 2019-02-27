const watch = require('watch');
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

var rootPath = path.resolve(__dirname, '..', '..');
console.log("Current root path:\n", rootPath);

var filePath004 = path.resolve(rootPath, 'data-vis', 'src');

watch.watchTree(filePath004, function (f, curr, prev) {
  if (typeof f == "object" && prev === null && curr === null) {
    shell.exec('./scripts/push.sh');
  } else if (prev === null) {
    shell.exec('./scripts/push.sh');
  } else if (curr.nlink === 0) {
    shell.exec('./scripts/push.sh');
  } else {
    shell.exec('./scripts/push.sh');
  }
});