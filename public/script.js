console.log("welcome to socket");
var socket = io();
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
   socket.emit("from_client");
})

socket.on('from_server', () => {
    let div = document.getElementById("from_server");  //selecting the div
    let p = document.createElement("p"); // creating the p tag
    p.textContent = "Recieved an event from the server"; // assined value in p tag
    div.appendChild(p); // adding a p tag as child of div.

})