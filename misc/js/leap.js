function solutionOne(year) {
  if (year % 400 == 0) {
    console.log("yes! " + year + " is a leap year.");
  } else if (year % 4 == 0) {
    if (year % 100 != 0) {
      console.log("yes! " + year + " is a leap year.");
    } else {
      console.log("nope " + year + " is not a leap year.");
    }
  } else {
    console.log("nope " + year + " is not a leap year.");
  }
}

function solutionTwo(year) {
  if (year % 400 == 0 || (year % 4 == 0) && (year % 100 != 0)) {
    console.log("yes! " + year + " is a leap year.");
  } else {
    console.log("nope " + year + " is not a leap year.");
  }
}

input = process.argv[2];
solutionOne(input);
solutionTwo(input);
