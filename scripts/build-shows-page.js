let showUrl = "https://project-1-api.herokuapp.com/showdates";
let apiKey = "140e0e9d-192a-48d2-8cb6-a66dd900036b";
let showsList = document.querySelector(".shows__list");

axios
.get(showUrl + "?api_key=" + apiKey)
.then((response) => {
    showsArray = response.data;
    showsArray.forEach((show) => {
    displayShows(show);
    })
 })
.catch(error => {
})

function displayShows(arr) {
        
        let show = document.createElement("li")
        show.classList.add("shows__table")
        show.addEventListener( "click",(event) => {
        show.classList.toggle("shows__table--active");
    })
        let dateHeading = document.createElement('h5');
        dateHeading.classList.add("shows__heading--small")
        dateHeading.innerText = "Date";
    
        let dateNum = document.createElement("h3");
        dateNum.classList.add("shows__date")
        dateNum.innerText = new Date(Number(arr.date)).toDateString();

        let venueHeading = document.createElement('h5');
        venueHeading.classList.add("shows__heading--small")
        venueHeading.innerText = "Venue"

        let venueName = document.createElement('p');
        venueName.classList.add("shows__venue-location")
        venueName.innerText = arr.place;  
        
        let locationHeading = document.createElement('h5');
        locationHeading.classList.add("shows__heading--small")
        locationHeading.innerText = "Location";

        let locationName = document.createElement('p');
        locationName.classList.add("shows__venue-location")
        locationName.innerText = arr.location;

        let button = document.createElement('button');
        button.classList.add("shows__button")
        button.innerText = "Buy Tickets";
        
        showsList.appendChild(show);
        show.appendChild(dateHeading);
        show.appendChild(dateNum);
        show.appendChild(venueHeading);
        show.appendChild(venueName);
        show.appendChild(locationHeading);
        show.appendChild(locationName);
        show.appendChild(button);
     }
    


    
