'use strict';

//console.log('Hello World');

let username = prompt('what is your name?');
alert('Welcome ' + username + '! Please answer the following five questions yes/no or y/n');


function a1(){
  let answerOne = prompt('Do I like peanuts?').toLowerCase();
  if(answerOne === 'yes' || answerOne === 'y'){
    //console.log('you are correct! I like peanuts');
    alert('you are correct! I like peanuts');
  }
}
a1();

function a2(){
  let answerTwo = prompt('Do I live in South Dakota?').toLowerCase();

  if(answerTwo === 'no' || answerTwo === 'n'){
    //console.log('Also correct, no one lives there');
    alert('Also correct, no one lives there');
  }
}
a2();

function a3(){
  let answerThree = prompt('Do I wish I was a Narwhal?').toLowerCase();

  if(answerThree === 'yes' || answerThree ==='y'){
    //console.log('answerThree: ' + answerThree);
    alert('yes, I want to be a Narwhal');
  }
}
a3();

function a4(){
  let answerFour = prompt('Do I have a pet fish?').toLowerCase();

  if(answerFour === 'yes' || answerFour === 'y'){
    //console.log('I do have a pet fish. His name is Squirt')
    alert('I do have a pet fish. His name is Squirt');
  }
}
a4();

function a5(){
  let answerFive = prompt('Have I ever tried green eggs and ham?').toLowerCase();

  if(answerFive === 'no' || answerFive === 'n'){
    //console.log('answerFive: ' + answerFive);
    alert('Correct, I have never tried green eggs and ham');
  }
}
a5();

let answer = 8
let attempts = 4
let answer = false
for (let i = 0; i< attempts; i++) {
  let questionSix = prompt('guess a number');
  let numbers = ['5','6','7','8','9','10'](questionSix);
  if (numbers === answer) {
    alert('correct')
    answer = true
    
  }
}

alert('Thank you ' + username + ' for answering those five About Me guessing game questions!');
