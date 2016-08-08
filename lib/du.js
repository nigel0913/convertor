var fs = require('fs');
var path = require('path');
var dust = require('dustjs-linkedin');
dust.config.whitespace = true;

function loadTemplate(name) {
  var template = fs.readFileSync(path.join(__dirname, '../templates', `${name}.dust`)).toString();
  var compiledTemplate = dust.compile(template, name);
  dust.loadSource(compiledTemplate);
}

['typescript', 'class', 'namespace', 'global'].forEach(x => {loadTemplate(x);});

var table = {};
table.tablename = 'hello.xlsx';
table.classname = 'hello';
table.fields = [
  {name: 'ID', type: 'number', comment: 'ID'},
  {name: 'groupID', type: 'any', comment: '组'}
];

var typescript = {tablelist: []};
typescript.tablelist.push(table);

dust.render('typescript', typescript, (err, out) => {
  console.log(out);
});
