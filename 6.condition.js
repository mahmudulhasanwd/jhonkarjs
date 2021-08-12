// find day name

var date = new Date();
var today = date.getDay();

if (today == 0) {
   console.log("Today is sunday");
} else if (today == 1) {
   console.log("Today is Monday");
} else if (today == 2) {
   console.log('Today is Tuesday');
} else if (today == 3) {
   console.log('Today is Wednesday');
} else if (today == 4) {
   console.log('Today is Thrustday');
} else if (today == 5) {
   console.log('Today is Friday');
} else if (today == 6) {
   console.log('Today is Saturday');
} else {
   console.log('Today is notingday');
}


// result finding

var marks = 100;

if (marks >= 33 && marks <=39 ){
   console.log("You got d");
} else if (marks >=40 && marks <=49){
   console.log("You got c");
} else if (marks >= 50 && marks <=59) {
   console.log("you got b");
} else if (marks >= 60 && marks <=69) {
   console.log("you got a");
} else if (marks >= 70 && marks <= 79){
   console.log("you got a+");
} else if (marks >= 80 && marks <= 89) {
   console.log("you got a++");
} else if (marks >= 90 && marks <= 100){
   console.log("you got a+++");
} else if (marks < 0 || marks > 100) {
   console.log("wrong input");
} else {
   console.log("you got f");
}
