// 1. write Array
// 2. replace Array element
// 3.finding element's index number in array
// 4.finding Array Element index number
// 5.add Array Element in the end of the array
// 6.find Array length
// 7.add Element in the start of Array
// 8. remove Element form the start of Array
// 9.remove Element form the end of the Array
// 10.slice an Array


// 1.write array
var age = [10, 20, 30, 40, 50];
console.log(age);

// 2.replace 3rd element array element
var age = [10, 20, 30, 40, 50];
age[2] = "babu";
console.log(age);

// 3.finding element's index number in array
var age = [10, 20, 30, 40, 50];
console.log(age.indexOf(50));

// 4.finding Array Element index number
var age = [10, 20, 30, 40, 50];
console.log(age[2]);

// 5.add Array Element in the end of the array
var age = [10, 20, 30, 40, 50];
age.push("push");
console.log(age);

// 6.find Array length
var age = [10, 20, 30, 40, 50];
console.log(age.length);

// 7.add Element in the start of Array
var age = [10, 20, 30, 40, 50];
age.unshift("xyz");
console.log(age);

// 8. remove Element form the start of Array
var age = [10, 20, 30, 40, 50];
age.shift();
console.log(age);

// 9.remove Element form the end of the Array
var age = [10, 20, 30, 40, 50];
age.pop();
console.log(age);

// 10.slice an Array
var cName = ["Mahmudul", "hasan", "babu", "shipa", "sinan"];
var fterSlice = cName.slice(2);
console.log(fterSlice);
console.log(cName);

// 10.slice with two 
var two = ["html", "css", "javascript" , "react js"]
var twoslice = two.slice(1,4);
console.log(twoslice);
console.log(two)

