function developProperties(timeUnits) {
  let earnings = 0;
  let theaters = 0;
  let pubs = 0;
  let parks = 0;
  
  for (let i = 1; i <= timeUnits; i++) {
    if (i % 10 === 0) { // develop a Commercial Park every 10units of times
      parks++;
      earnings += 3000;
    } else if (i % 5 === 0) { // develop a Theatre every 5units of time
      theaters++;
      earnings += 1500;
    } else if (i % 4 === 0) { // develop a Pub every 4 time units
      pubs++;
      earnings += 1000;
    }
    console.log(earnings);
  }
     //0+0+0+1000+1500+1000+3000+1000=7500
  return `T:${theaters} P:${pubs} C:${parks} Earnings:$${earnings}`;
}

// console.log(developProperties(7)); 
// console.log(developProperties(8)); 
console.log(developProperties(13)); 
