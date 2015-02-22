var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var extension = "."+process.argv[3];
var filtered_list;
fs.readdir(dirPath, function(err, list){
  filtered_list = list.filter(function(item){
    return path.extname(item) === extension;
  });
  console.log(filtered_list.join('\n'));
});
