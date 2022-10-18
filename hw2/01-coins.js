/** Exercise 01 - Coins **/

const calculateChange = (input) => {
  // Add your code here
  if (input > 10) {
    console.log("Error: the number is too large");
  } else {
    dollars = Math.floor(input % 10);
    Remainder = (input % 1).toFixed(2);
    quarter = Math.floor(Remainder / 0.25);
    Remainder = (Remainder % 0.25).toFixed(2);
    dimes = Math.floor(Remainder / 0.1);
    Remainder = (Remainder % 0.1).toFixed(2);
    nickel = Math.floor(Remainder / 0.05);
    Remainder = (Remainder % 0.05).toFixed(2);
    penny = Math.floor(Remainder / 0.01);
    console.log(
      "$",
      input,
      " ==> ",
      dollars,
      "dollar",
      quarter,
      "quarter",
      dimes,
      "dimes",
      nickel,
      "nickel",
      penny,
      "penny"
    );
  }
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
