const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
//north === y++
//south === y--
//east === x++
// west === x--

// note, the expected result is in y, x coordinants (normally it's x-y)

function finalPosition (arr) {
  // newArr = [y, x]
  let newArr = [0, 0]

  for (let value of moves) {
    switch (value) {
      case 'north' :
        newArr[1]++
        break;
      case 'south' :
        newArr[1]--
        break;
      case 'east' :
        newArr[0]++
        break;
      case 'west' :
        newArr[0]--
        break;
      default: 
        null;
    }
  }
  return newArr;
}

console.log(finalPosition(moves));

// expected output: [-1, 4]