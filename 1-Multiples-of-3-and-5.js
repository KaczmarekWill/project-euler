let maxNumber = 1000;
let multipleOne = 3;
let multipleTwo = 5;
let multiples = [];
let sumOfMultiples = 0;

for(i = 1; i < maxNumber; i++) {
  if (i % multipleOne  === 0 || i % multipleTwo === 0) {
    multiples.push(i);
  }
}

multiples.forEach(function(i) {
  sumOfMultiples += i;
});

print(sumOfMultiples);
