for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

let counter = 1;
while (counter <= 5) {
  console.log(counter);
  counter++;
}

let keepLooping = true;
let ii = 0;
while (keepLooping === true) {
  console.log("IIteration", ii);
  keepLooping = Math.random() < 0.1;
  ii++;
}

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let iii = 0; iii < foods.length; iii++) {
  console.log(foods[1]);
}
