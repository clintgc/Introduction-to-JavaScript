/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

   HINT: no function required
*/
let votingAge = 19;
if (votingAge >= 18) {
  console.log(true, votingAge, " is old enough to vote.");
}


/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/
let num1 = 10;
let num2 = 20;

num1 = num2;
console.log(num1);




/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/
let birthYear = '1979';
console.log(parseInt(birthYear));




/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

/*
Long form of the multiply function vs streamlined

function multiply(a, b){
  return a * b;
}
console.log(multiply(2, 2));
*/

const multiply = (a,b) => (a*b);
console.log(multiply(2, 2));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(dogAge){
    dogAge = dogAge * 7;
    return dogAge;
}
console.log(dogYears(7));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(dogWeight, dogYears){
  if (dogYears < 1) {  
    if (dogYears >= 0.16 && dogYears <= 0.33) {
      return dogWeight * 0.1;
      } else if (dogYears >= 0.41 && dogYears <= 0.58) {
          return dogWeight * .05;
      } else if (dogYears >= 0.66) {
          return dogWeight * .04;
  } 
} else { 

    if (dogWeight < 5){
      return dogWeight * .05;
  } else if (dogWeight >= 6 && dogWeight <= 10) {
      return dogWeight * .04;
  } else if (dogWeight >= 11 && dogWeight <= 15) {
      return dogWeight * .03;
  } else if (dogWeight >= 15)
      return dogWeight * .02;
  }
}
  console.log(hungryDog(15, 1))



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Use the game function below to do the following:
  1. Receive a string that represents the user's choice (either "rock", "paper", or "scissors")
  2. Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
  3. Return whether the user won, lost, or tied based on these rules of the game described below
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/
var machineChoice = Math.floor(Math.random()*3);
function game(playerChoice, machineChoice){
  if (machineChoice === 0) {
    machineChoice = "scissors";
  } else if (machineChoice === 1) {
      machineChoice = "paper";
  } else if (machineChoice === 2) {
      machineChoice = "rock";
  } 
 console.log("The Machine chooses " + machineChoice);
  if (playerChoice === machineChoice) {
    return "it's a tie";
  }
  if (machineChoice === "paper") {
      return "you lose!";
  } else if (machineChoice === "scissors"){
        return "you win!";
      }  
}
console.log(game("rock", machineChoice));

  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(totalKM){
    let totalMiles = totalKM * 0.621371;
    return(totalMiles);
  }
console.log(miles(1));  

//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(totalCM){
    let totalFt = totalCM / 30.48;
    return(totalFt);
  }
console.log(feet(160));
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

function annoyingSong(startNum){
  for (let i = startNum; i > 0; i--){
    return `${startNum} bottles of soda on the wall, ${startNum} bottles of soda, take one down pass it around ${startNum - 1} bottles of soda on the wall`
  }
}
console.log(annoyingSong(5));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/
  
function grade(studentScore){
  if (studentScore < 60) {
    return "you got a F";
  } else if (studentScore >= 60 && studentScore <= 69) {
    return "you got a D";
  } else if (studentScore >= 70 && studentScore <= 79) {
    return "you got a C";
  } else if (studentScore >= 80 && studentScore <= 89) {
    return "you got a B";
  } else if (studentScore >= 90 && studentScore <= 100) {
    return "you got a A";
  }
}
console.log(grade(80));
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(wordString) {
  let n = wordString.toLowerCase();
   let wordCounter = 0;
   for( let i = 0; i < n.length; i++) {
     if (n[i].includes("a") || n[i].includes("o") || n[i].includes("u") || n[i].includes("e") || n[i].includes("i")){
     wordCounter++
      } 
   }
   return wordCounter;
}
console.log(vowelCounter("happie."))



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
