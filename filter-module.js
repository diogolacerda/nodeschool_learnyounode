var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, extension, callback){
  fs.readdir(dirPath, function(err, list){
    if(err){
      return callback(err);
    }

    filtered_list = list.filter(function(item){
      return path.extname(item) === "."+extension;
    });

    callback(null, filtered_list)
  });
}
