//get reference to the container div existing in the html file
const container = document.querySelector("#container");

//create new div and store it in variable
const content = document.createElement("div");
//add a class to div
content.classList.add("content");
//add text to div
content.textContent = "This is text-content!";

//append the div to the parent node
container.appendChild(content);


const paragraph = document.createElement("p");
paragraph.classList.add("redParagraph");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);


const h3 = document.createElement("h3");
h3.classList.add("blueH3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);


const innerContent = document.createElement("div");
innerContent.classList.add("innerContent");
innerContent.style.backgroundColor = "pink";
innerContent.style.border = "2px solid black";


const innerH1 = document.createElement("h1");
innerH1.classList.add("h1InsideDiv");
innerH1.textContent = "I'm in a div!";

innerContent.appendChild(innerH1);


const innerParagraph = document.createElement("p");
innerParagraph.classList.add("innerParagraph");
innerParagraph.textContent = "ME TOO!";

innerContent.appendChild(innerParagraph);


container.appendChild(innerContent);