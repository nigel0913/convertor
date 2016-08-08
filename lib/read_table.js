var path = require('path');
var xlsx = require('xlsx');

var Table = require('./table');

function readTable(name, filepath, done) {
  var workbook = xlsx.readFile(filepath);
  var sheet = workbook.Sheets.Main;

  if (!sheet)
    return done(new Error(`Can not find Main sheet in ${filepath}`));

  var table = new Table();
  table.classname = name;


}
