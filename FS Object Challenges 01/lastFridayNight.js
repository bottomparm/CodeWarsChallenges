// According to the song, Katy Perry "maxed our credit cards".

// Define a function, lastFridayNight, takes an array of transactions.

// lastFridayNight should return the total amount she spent last Friday night.

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];

function lastFridayNight(arr){
    let total = 0;
    for (i=0; i < arr.length; i++){
        total += arr[i]["amount"];
        // console.log(arr[i]["amount"]);    
    }

    return total;

}



console.log(lastFridayNight(transactions)); // => 10512