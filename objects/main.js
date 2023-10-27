//task 1
//create an empty object
let user = new Object();
//or
let user2 = {};

//add properties
user.name = "John";
user.surname = "Smith";

//change the value of a property
user.name = "Pete";

// remove a property
delete user.surname;


//task 2
//check if object is empty
function isEmpty (obj) {
    for (let key in obj) {
        //if loop starts there is at least one property in the object
        return false;
    }
    return true;
}

alert(isEmpty(user)); //returns false


//task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

//sum up all salaries and store in a variable
let salariesTotal = sumUpSalaries(salaries);

function sumUpSalaries (obj) {
    let sum;
    for (let key in obj) {
        sum += salaries[key];
    }
    return sum;
}

alert(salariesTotal);


//task 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

//write a function that multiples all numeric values in an object by 2
function multiplyNumeric (obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);