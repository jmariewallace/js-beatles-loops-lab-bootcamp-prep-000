// add solution here
function theBeatlesPlay(musicians, instruments) {
  var theBand = []
  for (let i = 0; i < musicians.length; i++) {
    theBand.push(musicians[i] + " " + "plays" + " " + instruments[i])
  }
  return theBand
}

function johnLennonFacts(facts) {
  var editedFacts = []
  var i = 0
  while (i < facts.length) {
   editedFacts.push(facts[i] + "!!!")
   i++
  }
  return (editedFacts)
}
 
function iLoveTheBeatles(n) {
  var text = []
  var i = 0
  do {
    text += "I love the Beatles!"
    i++
  }
  while (i < 15)
  return text
}
