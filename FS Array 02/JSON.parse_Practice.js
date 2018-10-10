let a = {dylan: 'cool',
        jeff: 'cooler'};
let b = JSON.parse(JSON.stringify(a));
b.sophie = 'radical';
console.log(a);
console.log(b);
