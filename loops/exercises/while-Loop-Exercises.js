//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard,
//and the third for the altitude the shuttle reaches.
let startFuelLevel = 0;
let numAstronauts = 0;
let shuttleAlt = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');
startFuelLevel = input.question("Please enter positive value between 5000-30000. ");
startFuelLevel = Number(startFuelLevel);
while (startFuelLevel < 5000 || startFuelLevel > 30000){
  startFuelLevel = input.question("Invalid input. Please enter positive value between 5000-30000. ");
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numAstronauts = input.question("How many astronauts aboard? ");
numAstronauts = Number(numAstronauts);
while (numAstronauts > 7 ) {
  numAstronauts = input.question("Error. Capacity cannot exceed 7. ")
}

  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard.
// Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

shuttleAlt = input.question("Shuttle Altitude: ");
let output = "The shuttle gained an altitude of ${shuttleAlt} km.";

if (shuttleAlt >= 2000) {
output = "Orbit achieved!";
}