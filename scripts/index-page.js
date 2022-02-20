let showUrl = 'https://project-1-api.herokuapp.com/comments'
const apiKey = "fda055af-558f-4983-90ba-5f9ff65e9b1f"
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

let commentArray = [];



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
    dateUser.classList.add("comments__added-date");
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



let formComment = document.querySelector(".comments__form")
let today = new Date();

formComment.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let nameInput = event.target.name.value;
    let commentInput = event.target.comment.value;
    axios
    .post(showUrl + "?api_key=" + apiKey, {
        name: nameInput,
        comment: commentInput,
        // timestamp: today.toLocaleDateString(),
        
    })
    .then((response) => {
        axios
        .get(showUrl + "?api_key=" + apiKey)
        .then((response) => {
            let comments = response.data;
            comments.innerText ="";
            commentContainer(comments);
            
            })
            
    })
    .catch((error) => {
        
});
    if (nameInput && commentInput) {
      commentArray.unshift({
          name: nameInput,
          comment: commentInput,
        //   date: today.toLocaleDateString(),
      })
   
    displayComment(commentArray[0])
    }
formComment.reset()
})

