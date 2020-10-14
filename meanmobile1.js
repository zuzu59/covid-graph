
var nbMean = 14;
var N = 100;
var someData = [];
var moveMean = [];

for (var i = 0; i < N; i++)
{
       someData.push([i,Math.random() * 100]);
}

for (var i = nbMean; i < N-1; i++)
{
  var sum = 0;
  for (var j = 1; j <= nbMean; j++) {
       sum = sum + someData[i-j][1];
  }
  mean = sum / nbMean
  moveMean.push([i,mean]);
}

