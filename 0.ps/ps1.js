// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38



// Sample Output : Today is : Tuesday.
var date = new Date();
var today = date.getDay();
if (today == 0) {
   console.log("Today is : Sunday");
} else if (today == 1) {
   console.log("Today is : Monday ");
} else if (today == 2) {
   console.log("Today is : Tuesday");
} else if (today == 3) {
   console.log("Today is : Wednesday ");
} else if (today == 4) {
   console.log("Today is : Thursday");
} else if (today == 5) {
   console.log("Today is : Friday ");
} else if (today == 6) {
   console.log("Today is : Saturday  ");
} else {
   console.log("Nothing happend");
}

// Another way to solve it
var date = new Date();
var dateDay = date.getDay();
var dateName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var result = dateName[dateDay];
console.log("Today is :" + result);





// Current time is : 10 PM : 30 : 38
var cdate = new Date();
var chours = cdate.getHours();
var cmin = cdate.getMinutes();
var csec = cdate.getSeconds();
if (chours >= 12) {
   chours = chours - 12;
   console.log("current time is: " + chours + " pm" +": " + cmin +" " + csec);
} else {
   console.log("current time is: " + chours + " am" +": " + cmin +" " + csec);
}


