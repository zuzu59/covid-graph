function meanmobile(someData, moveMean, nbMean) {

for (var i = nbMean; i < someData.length; i++)
{
  var sum = 0;
  for (var j = 1; j <= nbMean; j++) {
       sum = sum + someData[i-j][1];
  }
  mean = sum / nbMean
  moveMean.push([i,mean]);
}
return moveMean
}


