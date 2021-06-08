const range = (start, end, step) => {
  const arr = [];
  
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }

  if (start > end) {
    return [];
  } 
  
  if (step < 0) {
    return [];
  }

  for (start; start <= end; start++) {
    start % step === 0 ?  arr.push(start) : null;
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));