console.log("In external file");
// variables
var num = 90;
var name = "Google-Chrome"
console.log(num+" "+name);


// get the values or data from the ID
// document.getElementById('someText').innerHTML = "Hii Linus";

//get data from user in JS
// var age = prompt("What your age?");
// document.getElementById('someText').innerHTML = age;


// Numbers in JS
var num1 = 12;
var num2 = 90.2;
// Increment by 1
num1++;
// Decrement by 1
num2--;

console.log(num1 * num2);
console.log(num2 / num1);
console.log(num2 % num1);

/*
	 Functions in JS
	 1. create function
	 2. use it by calling by name of function
*/
function fun(){
	console.log("I am in js functon");
}

fun();

/*
Lets create a function that takes in a name and says Hello 
followed by {name}
For example:
	Name: Sunil
	Retrun: Hello Sunil.

*/
function returnName(name){
	var res = "Hello "+name;
	document.getElementById('someText').innerHTML = res;
}
var name = prompt("Enter name: ");
returnName(name);

// how do arguments works in functions
// addition of 2 numbers
function additionOfNum(n1,n2){
	var res = n1 + n2;
	console.log(res);
}
additionOfNum(20,50);
additionOfNum("hello ","there!!");

//  Loops
// While vs For 

// while loops

var loopnum = 0;
while(loopnum < 5){
	loopnum++;
	console.log(loopnum);
}

//for loop

for(loopnum = 1 ; loopnum <= 15; loopnum++){
	console.log(loopnum);
	if(loopnum == 12){
		break;
	}
}

// datatypes
