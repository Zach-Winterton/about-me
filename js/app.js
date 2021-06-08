'use strict';

//console.log('Hello World');
let score = 0;

let username = prompt('what is your name?');
alert('Welcome ' + username + '! Please answer the following  questions');

let answerOne = prompt('Do I like peanuts?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y'){
  //console.log('you are correct! I like peanuts');
  alert('you are correct! I like peanuts');
  score++;
}

let answerTwo = prompt('Do I live in South Dakota?').toLowerCase();

if (answerTwo === 'no' || answerTwo === 'n'){
  //console.log('Also correct, no one lives there');
  alert('Also correct, no one lives there');
  score++;
}

let answerThree = prompt('Did I serve in the military?').toLowerCase();

if (answerThree === 'yes' || answerThree ==='y'){
  //console.log('answerThree: ' + answerThree);
  alert('yes, 4 years in the Marine Corps');
  score++;
}

let answerFour = prompt('Do I have a pet turtle?').toLowerCase();

if(answerFour === 'no' || answerFour === 'n'){
  //console.log('I do have a pet fish. His name is Squirt')
  alert('Correct, I do have a pet fish though. His name is Squirt');
  score++;
}

let answerFive = prompt('Do I have a wife & dog?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  //console.log('answerFive: ' + answerFive);
  alert('Correct, been with them both for 10 years now');
  score++;
}

alert('We will now play a guesing game. Pick a number between 1-15, I will prompt you if you guessed to high or to low. You will have four guesses.');

function a6(){
let remainingTrys = 4;
let answer = 7;

for (let i = 0; i < remainingTrys; i++){
  let questionSix = parseInt(prompt('Guess a number between 1-15'));
  if (questionSix === answer) {
    alert('That is correct!')
    score++;
    break;
    }
  else if (questionSix < answer) {
    alert('Too low');
    }
  else if (questionSix > answer) {
    alert('Too High');
    }
  if ( i === remainingTrys -1){
    alert(`Oops, looks like you ran out of trys. The correct number was ${answer}`);
    break;
    }
  }
}
a6();

function a7() {
  let countDown = 6;
  let correctAnswer = false;
  let countries = ['japan', 'australia', 'netherlands', 'guam'];

  while (countDown && !correctAnswer){
    let questionSeven = prompt(`Guess the countries I have been to. You have ${countDown} guesses`).toLowerCase();
    countDown--;
    for (let i = 0; i < countries.length; i++){
      if (questionSeven === countries[i]){
        correctAnswer = true;
      }
    }
  }
    
  if (correctAnswer) {
    alert(`Correct, all the countries I have been to are: ${countries}`);
    score++;
  }
  else {
    alert(`Looks like you ran out of guesses. The correct answers are: ${countries}`);
  }
}
a7();

alert(`You got ${score} out of 7`);

alert('Thank you ' + username + ' for answering those guessing game questions!');
