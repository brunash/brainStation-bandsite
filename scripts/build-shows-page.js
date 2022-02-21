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
    console.log(error);
})



function displayShows(arr) {
        
        let show = document.createElement("li")
        show.classList.add("shows__table")
        // show.addEventListener( "click",(event) => {
        // show.classList.toggle("shows__table--active");
        // console.log("clicked", show)
    // })

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
        // button.addEventListener('click', () => {
        //     console.log("hit")
        // })
        
        showsList.appendChild(show);
        show.appendChild(dateHeading);
        show.appendChild(dateNum);
        show.appendChild(venueHeading);
        show.appendChild(venueName);
        show.appendChild(locationHeading);
        show.appendChild(locationName);
        show.appendChild(button);
     }

// 8th try
// document.querySelectorAll('shows__table').addEventListener('click', result);

// function result() {
//     // let changeColor = document.querySelectorAll('shows__table');
//     // changeColor.classList.toggle('shows__list--active')

//     let changeColor = document.querySelectorAll('shows__table');

//     for(let x of changeColor) {
//         x.classList.toggle('shows__list--active');
//     }
// }

// let n = document.querySelectorAll("shows__table")
// n.addEventListener('click',() => {
//         n.classList.toggle("shows__table--active");  
//         } )
// first option:
// let listItem = document.querySelectorAll(".shows__table");
// listItem.addEventListener('click', () => {
//  listItem.classList.toggle("shows__table--active"),
//       console.log("click")
// })

//second option :
// document.querySelectorAll('.shows__table').addEventListener('click', changeColor);
// function changeColor() {
//     this.style.backgroundColor = "red";
//     return false
// }
//third option :
// let listItem = document.querySelectorAll(".shows__table")
// listItem.forEach((listItem) => {
//     listItem.addEventListener('click', (e) => {
//         listItem.classList.toggle(".shows__table--active")
//         console.log("clicked")
//     })
// })

// 4th option
// let listItem = document.querySelectorAll(".shows__table");
// function toggleClass(listItem) {
//   for (let i = 0; i < listItem.length; i++) {
//     listItem[i].addEventListener('click', function (e) {
//       e.preventDefault();
//       listItem[i].classList.toggle("shows__table--active");
//       console.log("clicked");
//     });
//   }}
//5th

// let listItem = document.querySelectorAll(".shows__table");
// listItem.addEventListener('click', changeColor, false)
// function changeColor(e) {
//     listItem.classList.toggle('shows__table--active')
// }
