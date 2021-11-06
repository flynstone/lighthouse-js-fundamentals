const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];

// Fuction returning 
function chooseStations(stations) {
  // Store arrays that will return true
  const goodStations = [];

  for (const station of stations) {    
    // Store the second element in array [1] => [0] is = 1
    const capacity = station[1];

    if (capacity >= 20) {

      // Store the third element in array
      const type = station[2];
      // If the type is school or community centre
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }    
  }

  // Return function
  return goodStations;
}
console.log(chooseStations(stations));

