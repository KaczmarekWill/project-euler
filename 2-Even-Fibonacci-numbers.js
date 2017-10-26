let maxValue = 4000000;
let firstValue = 1;
let secondValue = 1;
let nextValue = 0;
let evenValuedTerms = [];
let total = 0;

while (nextValue <= maxValue) {
  nextValue = firstValue + secondValue;
  if (nextValue % 2 === 0) {
    evenValuedTerms.push(nextValue);
  }
  firstValue = secondValue;
  secondValue = nextValue;
}

evenValuedTerms.forEach(function(i) {
  total += i;
});

print(total);
