// Declare and assign the variables below
let nameOfShuttle = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKilometer = .621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfShuttle);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilometer);
// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(nameOfShuttle + " will take " + daysToMars + " days to reach Mars!")
// Calculate a trip to the moon below
let milesToMoon = distanceToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(nameOfShuttle + " will take " + daysToMoon + " days to reach the moon!");
