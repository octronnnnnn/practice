//for and while loops

//for (let i = 0; i < 3; i++) {
//    alert(`number ${i}!`);
//}

//let i = 0;
//while (i < 3) {
//    alert(`number ${i}, but its a while loop now!`);
//    i++;
//}


//write a loop which prompts for a number greater than 100. If the visitor enters another number, ask them to input again.

//the loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.


//let num;
//do {
//    num = prompt("Enter number greater than 100"); 
//} while (num <= 100 && num);


//write the code which outputs prime numbers in the interval from 2 to n

let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
    for ( let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}

