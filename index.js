// add solution here
function theBeatlesPlay(musicians, instruments){
  const musicArr = []
  
  for(var i = 0; i<musicians.length; i++){
    var arrContent = musicians[i] + " plays "+ instruments[i]
    musicArr.push(arrContent)
  }
  return musicArr
}