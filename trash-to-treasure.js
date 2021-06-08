const smartGarbage = (trash, bins) => {
  bins.recycling++;
  return bins;
};

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));