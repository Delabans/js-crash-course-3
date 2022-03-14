// let i=0;
// do {
//  console.log(i);
// i++;
// } while (i < 10);

// while (i < 10);

// console.log("****************");

// while (i < 10)
// console.log(i);
// i++;
// }
// // break and continue
// for (let i = 0; i < 10; i++) {
//  if (i === 5) {
//     console.log("five");
//     continue;
//   }
//   console.log(i);
// }

// function
 function myself() {
     console.log("My naames john doe");

 } 

 myself("Emmanuel");
 myself("Bans");
 myself("codecoast")

 function add (x,y) {
     let sum = x * y;
     console.log(sum)
    
 }

 multiplication(5 , 6);
 multiplication(7 , 8);

 // function with return value
 function add(x , y) {
     let sum = x + y;
     return sum;
 }

 let result = add(10 , 15);
 let newResult = result *2;
 console.log(newResult);

 // arrow function
 let divide = (a , b)
 let multiply= (a , b ) => {
     let sum = 1 * b;
     return sum;
 };
 console.log(divide(10,5));
 console.log(multiply(10 , 5))

 // higher order function
 // is a function that takes a function as a parameter
 let numbers =[1,2,3,4,5,6,7,8,9,10];

 let squares = numbers.map(numbers) = numbers * numbers;
 let adition= numbers.map(number) = number + number;
 console.log(adition)
 
 let five = numbers.find(num) = num=== 5;
 console.log(five);

 // string
 let  sentence = "The quick brown fox jumps over the lazy dog";
 console.log(sentence.lenght);
 // console.log(sentence.chartcode(10));
 console.log(sentence.concat("from concatenation"));
 console.log(sentence.endwith("dog"));
 console.log(sentence.include)("hardworing");
 console.log(sentence.indexof("brown"));
 console.log(sentence.indexof("o"));
 console.log(sentence.lastindexof("o"));
 console.log(sentence.padstart(10));
 console.log(sentence.padend(10));
 console.log(sentence.repeat(2));
 console.log(sentence.replace("lazy","hardworking"));
 console.log(sentence.slice(20, 30));
 console.log(sentence.substring(20, 30));
 console.log(sentence.slpit("@"));
 console.log(sentence.toUpperCase());
 console.log(sentence.toLowerCase());