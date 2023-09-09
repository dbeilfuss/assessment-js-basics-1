///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

// Apple Acres Picked on each day
const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

// Apple Price per Pound
const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

///-------------///

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0;

// This extra variable is an array, populated with all the Apple Acre Arrays.
// This will allow us to quickly reference all apple acre types at once.
let allAcres = [fujiAcres, galaAcres, pinkAcres];

// Using a for loop, we add up the acres of each Apple type one at a time
for (let i = 0; i < allAcres.length; i++) {
  // Using a second loop, we add we add the acres from each day to totalAcres
  for (
    let dayOfHarvest = 0;
    dayOfHarvest < allAcres[i].length;
    dayOfHarvest++
  ) {
    totalAcres = totalAcres + allAcres[i][dayOfHarvest];
  }
}

// return the requested solution
console.log(totalAcres);

// return the plain english solution
console.log(
  `There were ${totalAcres} total acres of apples harvested over the course of ${fujiAcres.length} days.`
);

///-------------///

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// Calculate the average acres - we simply divide the totalAcres by the total number of days worked
const daysWorked = fujiAcres.length;
let averageDailyAcres = totalAcres / daysWorked;

// return the requested solution
console.log(averageDailyAcres);

// return the plain english solution
console.log(`An average of ${averageDailyAcres} acres were harvested per day.`);

///-------------///

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE

// calculate the number of days it will take to harvest all remaining acres.
while (acresLeft > 0) {
  // Add one day remaining
  days++;

  // Subtract the daily average from the remaining acres
  acresLeft -= averageDailyAcres;
}

// return the requested solution
console.log(days);

// return the plain english solution
console.log(
  `At that rate, it will take ${days} days to harvest the remaining acres.`
);

///-------------///

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

let tonsPerAcre = 6.5;

// Create an array containing each apple type
let allTons = [fujiTons, galaTons, pinkTons];

// Using a for loop, we calculate the tons of each apple type one at a time
for (let i = 0; i < allTons.length; i++) {
  // Using a second loop, and referencing the allAcres variable we created in Problem 1, we will calculate the number of tons harvested each day
  for (
    let dayOfHarvest = 0;
    dayOfHarvest < allAcres[i].length;
    dayOfHarvest++
  ) {
    // Look up how many acres were harvested that day
    let acres = allAcres[i][dayOfHarvest];

    // calculate how many tons were harvested that day
    let tons = acres * tonsPerAcre;

    // record the data
    allTons[i].push(tons);
  }
}

// return the requested solution
console.log(allTons);

// return the plain english solution
console.log(`Fiji Apples: Tons Harvested each Day: ${fujiTons}`);
console.log(`Gala Apples: Tons Harvested each Day: ${galaTons}`);
console.log(`Pink Apples: Tons Harvested each Day: ${pinkTons}`);

///-------------///

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

poundsPerTon = 2000;

// Create an array containing each apple type
let allPounds = [fujiPounds, galaPounds, pinkPounds];

// Using a for loop, we calculate the pounds harvested of each Apple type one at a time
for (let i = 0; i < allPounds.length; i++) {
  // Variable to store the total pounds of each apple type
  let totalPounds = 0;

  // Using a second loop, and referencing the allTons variable we created in Problem 4, we will calculate the number of pounds harvested per apple type
  for (let dayOfHarvest = 0; dayOfHarvest < allTons[i].length; dayOfHarvest++) {
    // Look up how many tons were harvested that day
    let tons = allTons[i][dayOfHarvest];

    // calculate how many pounds were harvested that day
    let pounds = tons * poundsPerTon;

    // record the day to totalPounds
    totalPounds += pounds;
  }

  // Record the data
  allPounds[i] = totalPounds;
}

// The directions specifically direct that the data be stored in the variables given above.
fujiPounds = allPounds[0];
galaPounds = allPounds[1];
pinkPounds = allPounds[2];

// return the requested solution
console.log(allPounds);

// return the plain english solution
console.log(`Fiji Apples: Pounds Harvested: ${fujiPounds}`);
console.log(`Gala Apples: Pounds Harvested: ${galaPounds}`);
console.log(`Pink Apples: Pounds Harvested: ${pinkPounds}`);

///-------------///

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = 0;
let galaProfit = 0;
let pinkProfit = 0;

// Create an array containing each apple type
let allProfit = [fujiProfit, galaProfit, pinkProfit];

///-------------///

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
