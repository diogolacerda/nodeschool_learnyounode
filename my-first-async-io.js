var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, function(err, buffer){
  var str = buffer.toString();
  console.log(str.split('\n').length -1);
});
