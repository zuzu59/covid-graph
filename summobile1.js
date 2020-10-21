function summobile(someData, nbSum) {

  var moveSum = [];

  for (var i = nbSum; i < someData.length; i++){
    sum = someData[i].v - someData[i-nbSum].v;
    if (sum < 0) sum = 0 
    moveSum.push([someData[i].k,sum]);
  }
  return moveSum
}


