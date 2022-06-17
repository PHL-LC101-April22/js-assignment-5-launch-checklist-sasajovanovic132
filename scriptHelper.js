// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const div = document.getElementById("missionTarget");
   // Here is the HTML formatting for our mission target div.
   /*
                 div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
                div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter}</li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance}</li>
                   <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;





}

function validateInput(testInput) {
    
         if(testInput === ''){
             return 'Empty'
         }else if(isNaN(Number(testInput))){
             return 'Not a Number'
         }else if(Number(testInput)){
             return "Is a Number"
         }       
    
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
 
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

       
       if ((validateInput(pilot.value) === 'Empty')|| (validateInput(copilot.value) === 'Empty')||(validateInput(fuelLevel.value) === 'Empty') || (validateInput(cargoLevel.value) === 'Empty')) {
          alert("Please enter all information");
          event.preventDefault();
       } else if (validateInput(fuelLevel.value)=== 'Not a Number' || validateInput(cargoLevel.value)=== 'Not a Number') {
          alert("Please Enter Valid Number");
          event.preventDefault();
       } else {
          document.getElementById("pilotStatus").innerHTML = `Pilot  ${pilot.value}  Ready`;
          document.getElementById("copilotStatus").innerHTML = `Co-pilot  ${copilot.value}  Ready`;
          if (fuelLevel.value <= 10000) {
             document.getElementById("faultyItems").style.visibility = "visible";
             document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
             document.getElementById("launchStatus").style.color = "red";
             document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
          } else {
             document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
          }
          if (cargoLevel.value >= 10000) {
             document.getElementById("faultyItems").style.visibility = "visible";
             document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
             document.getElementById("launchStatus").style.color = "red";
             document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
          } else {
             document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
          }
          if (cargoLevel.value <= 10000 && fuelLevel.value >= 10000) {
             document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
             document.getElementById("launchStatus").style.color = "green";
             document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
             document.getElementById("faultyItems").style.visibility = "hidden";
          }
         
          event.preventDefault();
       }
    });
       


}

 async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json();
     });

    return planetsReturned;
}

function pickPlanet(planets) {
    const missionDestination = Math.round(Math.random()*5);
    return planets[missionDestination];
}


 

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;



