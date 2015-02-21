var sum = 0;
var params = process.argv.filter(function(param){
  return !isNaN(param);
});

for(var i=0; i < params.length; i ++){
  sum += parseFloat(params[i]);
}

console.log(sum);
