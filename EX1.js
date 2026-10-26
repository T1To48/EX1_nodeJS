const num = 60; // number to test the code

//array destructurer for less repeats
//and also to have dynamic ability to change values
const [two, three, five] = [2, 3, 5];

//arrow function that takes the divisions qauntity as argument
// and   prints the result to the screen using template literals
const print = (quantity) => console.log(`divides by: ${quantity} numbers`);

//arrow function that checks if the num divides by dig (2,3,5)
//  returns a boolean value
const doesDivide = (dig) => num % dig === 0;

//Program Main entry point
const main = () => {
  // array destructurer that contain boolean values 
  // according to every digit given if it divides without remainder
  const [divBy2, divBy3, divBy5] = [
    doesDivide(two),
    doesDivide(three),
    doesDivide(five),
  ];
  //print func that casts the boolean values to 0 or 1 and print their sum to show the correct result
  print(Number(divBy2) + Number(divBy3) + Number(divBy5));
};

//main func activation 
main();


//everything was written by 100% pure human power