document.addEventListener("DOMContentLoaded", () => {
    console.log("welcome to socket");
var socket = io();
// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//    socket.emit("from_client");
// })

// socket.on('from_server', () => {
//     let div = document.getElementById("from_server");  //selecting the div
//     let p = document.createElement("p"); // creating the p tag
//     p.textContent = "Recieved an event from the server"; // assined value in p tag
//     div.appendChild(p); // adding a p tag as child of div.

// })

let input = document.getElementById("chat_box");
let msgList = document.getElementById("msg_list");
let send = document.getElementById("send");

send.addEventListener("click", () => {
let msg = input.value;
socket.emit('new_msg', {
    message: msg 
});
input.value = "";   // after send the message empty the send box.
});

socket.on('msg_rcvd', (data) => {
    let msg = document.createElement("li");
    msg.textContent = data.message;
    msgList.appendChild(msg);
})
})


