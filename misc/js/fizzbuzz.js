function divBy(number, divisor) {
  if (number % divisor == 0) {
    return true
  }
}

function checkFizzinass(number) {
   if (divBy(number, 15)) {
     console.log("fizzbuzz");
   } else if (divBy(number, 5)) {
     console.log("buzz");
   } else if (divBy(number, 3)) {
     console.log("fizz");
   } else {
    console.log(":(", number);
   }
}

input = process.argv[2];

checkFizzinass(input);
