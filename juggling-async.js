var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function logResults() {
  for(var i=0; i < results.length; i++){
    console.log(results[i]);
  }
}

function httpCall(index){
  url = process.argv[2 + index]
  http.get(url, function(response){
    response.pipe(bl(function(err, data){
      if(err){
        return console.error(err);
      }

      results[index] = data.toString();
      count++;

      if(count == 3){
        logResults();
      }
    }));
  });
}

for(var i=0; i<3; i++){
  httpCall(i);
}
