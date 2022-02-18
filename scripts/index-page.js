let showUrl = 'https://project-1-api.herokuapp.com/comments'
const apiKey = "5a8c33e6-d2b3-4989-a443-2176585db786"
let inputComment = document.querySelector(".comments__wrap");

axios
.get(showUrl + "?api_key=" + apiKey)
.then((response) => {
    commentArray = response.data;
    commentArray.forEach((commentContainer) => {
    displayComment(commentContainer);
    console.log("something")
})
})
.catch(error => {
    console.log(error);
})

let commentArray = [
    // {
    // date: "12/20/2020",
    // name: "Miles Acosta",
    // comment: "I can t stop listening. Every time I hear one of their songs the vocals it givesme goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough."
    // },
    // {
    // date: "01/09/2021",
    // name: "Emilie Beach",
    // comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    // },{
    // date: "02/17/2021",
    // name: "Connor Walton",
    // comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    // }
    
    
];



function displayComment(arr) {
    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comments__posted-container");

    let roundLogo = document.createElement("div");
    roundLogo.classList.add("comments__grey-round-logo");

    let addedComments = document.createElement("div");
    addedComments.classList.add("comments__added");
    
    let nameDate = document.createElement("div");
    nameDate.classList.add("name-date");

    let nameUser = document.createElement("h4");
    nameUser.innerText = arr.name;

    let dateUser = document.createElement("p");
    dateUser.classList.add("comments__added-date")
    // dateUser.innerText = ;
    dateUser.innerText = new Date(Number(arr.timestamp)).toLocaleDateString();

    let commentUser = document.createElement("p");
    commentUser.innerText = arr.comment;

    inputComment.appendChild(commentContainer);
    commentContainer.appendChild(roundLogo);
    commentContainer.appendChild(addedComments);
    addedComments.appendChild(nameDate);
    addedComments.appendChild(commentUser);
    nameDate.appendChild(nameUser);
    nameDate.appendChild(dateUser);

}

commentArray.forEach((commentContainer) => {
    displayComment(commentContainer);
})

console.log(commentArray)

let formComment = document.querySelector(".comments__form")
let today = new Date;

formComment.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let nameInput = event.target.name.value;
    let commentInput = event.target.comment.value;
    console.log(nameInput)
    console.log(commentInput)

    if (nameInput && commentInput) {
      commentArray.unshift({
          name: nameInput,
          comment: commentInput,
          date: today.toLocaleDateString(),
      })
   
    displayComment(commentArray[0])
    }

    formComment.reset()
})

