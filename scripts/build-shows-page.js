let showUrl = "https://project-1-api.herokuapp.com/showdates";
let apiKey = "140e0e9d-192a-48d2-8cb6-a66dd900036b";
let showsList = document.querySelector(".shows__list");

axios
.get(showUrl + "?api_key=" + apiKey)
.then((response) => {
    showsArray = response.data;
    showsArray.forEach((show) => {
    displayShows(show);
    console.log("something")
})
})
.catch(error => {
    console.log(error);
})


function displayShows(arr) {
        
        let show = document.createElement("li")
        show.classList.add("shows__table")

        let dateHeading = document.createElement('h5');
        dateHeading.innerText = "Date";
    
        let dateNum = document.createElement("h3");
        dateNum.innerText = new Date(Number(arr.date)).toDateString();

        let venueHeading = document.createElement('h5');
        venueHeading.innerText = "Venue"

        let venueName = document.createElement('p');
        venueName.innerText = arr.place;  
        
        let locationHeading = document.createElement('h5');
        locationHeading.innerText = "Location";

        let locationName = document.createElement('p');
        locationName.innerText = arr.location;

        let button = document.createElement('button');
        button.innerText = "Buy Tickets";
        button.addEventListener('click', () => {
            console.log("hit")
        })
        
               



        showsList.appendChild(show);
        show.appendChild(dateHeading);
        show.appendChild(dateNum);
        show.appendChild(venueHeading);
        show.appendChild(venueName);
        show.appendChild(locationHeading);
        show.appendChild(locationName);
        show.appendChild(button);
     }
