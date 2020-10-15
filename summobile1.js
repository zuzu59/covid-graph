function summobile(someData, nbSum) {

  var moveSum = [];

  for (var i = nbSum; i < someData.length; i++){
    sum = someData[i].v - someData[i-nbSum].v;
    moveSum.push([i,sum]);
  }
  return moveSum
}


