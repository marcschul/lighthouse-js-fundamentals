const judgeVegetable = (list, chars) => {
  let winnerValue = 0;
  let winner = '';

  for (let i = 0; i < list.length; i++) {
    if (list[i][chars] > winnerValue) {
      winnerValue = list[i][chars];
      winner = list[i].submitter;
    }
  }
  return winner;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));