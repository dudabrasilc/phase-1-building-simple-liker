// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//grab node with modal id to make the error disappear from screen
document.querySelector('#modal').className = "hidden"

//grab the like buttons HTML collection with the class name
const collection = document.getElementsByClassName("like");

//transform the HTML collection to an array so we can iterate with the buttons + add an event listener for each button
Array.from(collection).forEach(likeButton => {
  likeButton.addEventListener("click", (e) => {
    mimicServerCall()
    .then(data => {
      // grab the event target node and change its text content to full heart once the click event is triggered
      // if heart is red, make heart empty again
      if (e.target.textContent === FULL_HEART) {
        e.target.textContent = EMPTY_HEART;
        e.target.removeAttribute("activated-heart");
      } else {
        e.target.textContent = FULL_HEART;
        e.target.className = "activated-heart";
      }})
    .catch(error => {
      // display the error modeal removing the .hidden class
      document.querySelector('#modal').removeAttribute("class")
      // hide the error modal after 3s
      setTimeout(() => {
        document.querySelector('#modal').className = "hidden"
      }, 3000)
    })
  })
})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
