const euro = [29.76, 41.85, 46.5];

const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []);

console.log(above30); // [ 41.85, 46.5 ]

let x = euro.reduce((acc, current) => {
    
})