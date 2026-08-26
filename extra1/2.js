let a = 72;
let b = 144;

let ab = 1;

let smallestNum;

for (let j = 1; j <= 10; j++) {
  let num = j;

  let primeNum = true;

  for (let i = num; i > 0; i--) {
    if (i == num || i == 1) continue;

    if (num < 0) {
      console.log("number must be positive ");
      continue;
    }
    if (num % i === 0) {
      primeNum = false;
      continue;
    }

    primeNum = true;
   
  continue;
}
 if (a < b) {
      smallestNum = a;
    } else {
      smallestNum = b;
    }
    if (smallestNum > num) {
      for (let m = 1; m > 0; m++) {
        if (a % num === 0 && b % num === 0 && primeNum) {
          ab *= num;
          a = a / num;
          b = b / num;
          console.log(ab, a, b);
          continue
        } 
        break
      }
    }
  }

