/*
Google maps javascript file for coordinates to Dr. Dzitzer's office. Refer to div map element in index.js file.
*/

function initMap() {
    
navigator.geolocation.getCurrentPosition( function (position) {
    
    //User location is set to Dr. Dzitzer's office.
    var userLocation = {
        lat: 39.316654,
        lng: -74.586919
    }
    
    //console.log(userLocation); //print out userLocation for testing purposes
    
    var map = new google.maps.Map(document.getElementById("map"), {
        center: userLocation,
        zoom: 15.5,
        scrollWheel: true
    });
    
    var marker = new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "Dr. Dzitzer's Office"
    });
    
});
    
};
    
initMap(); //call the google map