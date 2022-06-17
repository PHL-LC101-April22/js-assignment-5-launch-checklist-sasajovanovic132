/ Write your JavaScript code here!



window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
     
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        addDestinationInfo(this.window.document, pickPlanet(listedPlanets).name, pickPlanet(listedPlanets).diameter, pickPlanet(listedPlanets).star, pickPlanet(listedPlanets).distance, pickPlanet(listedPlanets).moons, pickPlanet(listedPlanets).image) 
    
 
    })

    
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel= document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
   
   
    formSubmission(window.document, pilotName, copilotName, fuelLevel,cargoMass);
   


  

});



