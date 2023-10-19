function alertHi () {
    alert("Hi");
}

//Method 2: Problem is still that we can only have 1 "onclick" property
const btn = document.querySelector("#btn");
btn.onclick = alertHi;

//Method 3: Best Method. Allows for multiple event listeners
const btnTwo = document.querySelector("#btnTwo");
btnTwo.addEventListener("click", () => {
    alert("Hello World");
})

//optimize Method 3 with use of predefined function
const alertHelloWorld = () => alert("Hello World");

const btnOptimized = document.querySelector("#btnOptimized");
btnOptimized.addEventListener("click", alertHelloWorld);

//get more information about the event by passing a parameter to the function we are calling. function (e) is a callback from addEventListener. e is an objet that referes to the event itself. Within that object you can acess many more informations about the events target (the DOM that was clicked)
btnOptimized.addEventListener("click", function (e) {
    console.log(e);
})

//change target style with callback function
btnOptimized.addEventListener("click", (e) => e.target.style.background = "lightblue");


//attaching listeners to groups of nodes
const buttons = document.querySelectorAll("#container button");

//use .forEach method to iterate through each button
buttons.forEach((e) => {
    //add a "click" listener for each button
    e.addEventListener("click", () => {
        alert(e.id);
    })
})
