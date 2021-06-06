const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (arr) {
  let newArr = [];

  for (let station of arr) {
    let acceptable = 0;

    for (let value of station) {
      if (value === 'community centre' || value === 'school') {
        acceptable++;
      } else if (value >= 20) {
        acceptable++;
      } else {
        acceptable += 0;
      }
    }

    if (acceptable === 2) {
      newArr.push(station[0]);
    } else {
      acceptable += 0;
    }
  }
  return newArr;
}

console.log(chooseStations(stations));