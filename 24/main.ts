let fruit = "Pineapple";
let upperCaseFruit = "PINEAPPLE"
let num1 = 10
let  num2 = 20

//MORE CONDITINAL TESTS

let colours =["red","blue","green"]
console.log("Is fruit equal to pineapple?")
console.log(fruit == "Pineapple")
console.log("\nIs fruit not equal to pineapple?")
console.log(fruit != "Pineapple")
console.log("\nIs PINEAPPLE equal to pineapple after converting to lower case?")
console.log(upperCaseFruit.toLowerCase() == "Pineapple")
console.log("\nIs PINEAPPLE equal not to pineapple after converting to lower case?")
console.log(upperCaseFruit.toLowerCase() != "Pineapple")
console.log("\nIs num1 equal to num2?")
console.log(num1 == num2)
console.log("\nIs num1 not equal to num2?")
console.log(num1!= num2)
console.log("\nIs num1 greater than num2?")
console.log(num1>num2)
console.log("\nIs num1 smaller than num2?")
console.log(num1<num2)
console.log("\nIs num1 greater than or equal to 5?")
console.log(num1>=num2)
console.log("\nIs num1 smaller than or equal to 5")
console.log(num1<=num2)
console.log("\nIs num1 not equal to 10 and num2 is greater than 10?")
console.log(num1!=10 && num2>10)
console.log("\nIs num1 equal to 10 && num2 is greater than 10?")
console.log(num1 == 10 && num2 > 20)
console.log("\nIs 20 greater than 50 || 20 is equal to 20?")
console.log(20>50 || 20==20)
console.log("\nIs 20 not greater than 50 || 20 is equal to 20?")
console.log(20!>50 || 20==20)
console.log("\nIs pink an element of array of colours?")
console.log(colours.includes("Pink"))
console.log("\nIs pink not an element of array of colours?")
console.log(!colours.includes("Pink"))
