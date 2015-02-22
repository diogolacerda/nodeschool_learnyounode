var filterModule = require('./filter-module');
var dirPath = process.argv[2];
var extension = process.argv[3];

filterModule(dirPath, extension, function(err, list){
  if(err){
    return console.error(err);
  }

  console.log(list.join('\n'));
});
