let startNumber = 100;
let numberLimit = 1000;
let largestPalindrome = 0;

for (i = startNumber; i < numberLimit; i++) {
  for (n = startNumber; n < numberLimit; n++) {
    let product = i * n;
    let temp = product;
    let reversed = 0;
    while(temp != 0) {
      let nextDigit = temp % 10;
      reversed = reversed * 10 + nextDigit;
      temp = Math.floor(temp / 10);
    }
    if (product === reversed && product > largestPalindrome) {
      largestPalindrome = product;
    }
  }
}

print(largestPalindrome);
