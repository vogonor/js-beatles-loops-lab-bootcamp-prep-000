// add solution here
function theBeatlesPlay(musicians, instruments){
  const musicArr = []
  
  for(var i = 0; i<musicians.length; i++){
    var arrContent = musicians[i] + " plays "+ instruments[i]
    musicArr.push(arrContent)
  }
  return musicArr
}

function johnLennonFacts(johnFacts) {
  var jfact = ""
  var factsCount = 1 
  var newFacts = []
  while(factsCount < johnFacts.length){
    jFact = johnFacts[i] + "!!!"
    newFacts.push(jFact)
    
  }
  return newFacts
}






