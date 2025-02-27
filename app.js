// //Making changes in the js for writing a fucntion
// function logoutnumber(){
//     console.log(42);
// }
// //calling the function
// logoutnumber();

// //making a function that sums up the numbers given to it 
// function sumation(number1,number2,number3){
//     let sum =number1+number2+number3;
//     return sum;
// }

// let number1=100;
// let number2=200;
// let number3=300;

// let result = sumation(number1,number2,number3);
// console.log(result);

//creating a function that increments a given number when called4
// let number=10;
// function increments(){
//     number=number+1;  
// }
// increments();
// increments();
// increments();
// console.log(number);

//creating a function for the people counter 
let count=0;
let countEl=document.getElementById("count-el");
function incrementcount(){
    countEl.innerText=++count;
}

//ccreating a function that logs out the count when callled
let saved=document.getElementById("save-el")
function save(){
    saved.innerHTML+=count +"-";
    alert("The counter has been updated successfully to " + count);
}

//working with strings
// let string="You have three new notifications";
// console.log(string);
//concatenating two strings
// let myname="Krishna";
// let greeting="Hello, My name is ";
// let mygreeting= greeting+myname;
// console.log(mygreeting);

let welcomeEl= document.getElementById("welcome-el");
let myname="Krishna";
let welcome="You are welcome to the website made by ";

welcomeEl.innerText=welcome+myname;

//adding an emoji at the end of the string using another function;
function addEmoji(){
    let emoji="😊";
    welcomeEl.innerText+=emoji;
}

//creating a reset button function

function reset(){
    count=0;
    countEl.innerText=count;
    saved.innerHTML="Saved_Entries: ";
    welcomeEl.innerText=welcome+myname;
}