// write number of less than 500 from 0 using while loop.
var num = 0;
while(num <= 500) {
   console.log(num);
   num++
}

// write Array element using while loop
var age = [10,20,30,40,50,60,70,80,90,100];
var ind = 0;
while(ind < age.length) {
   console.log(age[ind]);
   ind++
}

// another example
var name = ["babu", "hasan", "mahmudul", "shipa", "sinan"];
var indx = 0;
while(indx< name.length) {
   console.log(name[indx]);
   indx++
}

// findout odd even number using while loop
var i = 0;
while(i<=30) { 
   i++  
   // console.log(i);
   if (i%2 == 0) {
      console.log(i + ' is jura shonkha');
   } else {
      console.log(i + ' is bijura shonkha');
   }
}
