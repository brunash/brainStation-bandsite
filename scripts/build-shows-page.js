let showUrl = "https://project-1-api.herokuapp.com/showdates";
let apiKey = "140e0e9d-192a-48d2-8cb6-a66dd900036b";
let showsArray = [];
let showsList = document.querySelector(".shows__list");

axios
.get(showUrl + "?api_key=" + apiKey)
.then((response) => {
    showsArray = response.data;
    displayShows(showsArray);
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
        dateNum.innerText = arr.date;

        let venueHeading = document.createElement('h5');
        venueHeading.innerText = "Venue"

        let venueName = document.createElement('p');
        venueName.innerText = arr.place;  
        //venue 
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

showsArray.forEach((show) => {
    displayShows(show);
    console.log(show)
})






 // {
    //     date: "Mon Sept 06 2021",
    //     venue: "Ronald Lane",
    //     location: "San Francisco, CA"
    // },
    // {
    //     date: "Tue Sept 21 2021 ",
    //     venue: "Pier 3 East",
    //     location: "San Francisco, CA"
    // },
    // {
    //     date: "Fri Oct 15 2021",
    //     venue: "View Lounge",
    //     location: "San Francisco, CA"
    // },
    // {
    //     date: "Sat Nov 06 2021 ",
    //     venue: "Hyatt Agency",
    //     location: "San Francisco, CA"
    // },
    // {
    //     date: "Fri Nov 26 2021",
    //     venue: "Moscow Center",
    //     location: "San Francisco, CA"
    // },
    // {
    //     date: "Wed Dec 15 2021",
    //     venue: "Press Club",
    //     location: "San Francisco, CA"
    // },