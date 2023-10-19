//declare variables to hold references to each element that needs manipulation
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button")

//create function that runs in response to the addButton being clicked
function add () {
    //store current value of the input element
    const myItem = input.value;
    //set input value to empty string
    input.value = "";

    //create 3 new variables for the listItem, listText and listButton
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    //append the listText and listButton as children of the listItem
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listButton);
    listButton.textContent = "Delete";

    //append the listItem as a child of the list
    list.appendChild(listItem);

    //add event handle to listButton to remove the listItem on click
    listButton.addEventListener("click", () => {
        list.removeChild(listItem);
    });
    //focus input field
    input.focus();
}

button.addEventListener("click", add);