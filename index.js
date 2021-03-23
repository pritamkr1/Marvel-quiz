var readlineSync = require('readline-sync');
var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.bgBlue('\nWElCOME TO MARVEL QUIZ\n'))
//console.log(chalk.bgGreen.bold('Pritam Kumar'))
let yourName = readlineSync.question('Please! Enter your good name? ');
console.log(`WELCOME! MR.${yourName}`);

var score = 0;
let questions = [{
   qun: chalk.bgBlue(' 1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? '),
   a: 'a. 2005',
   b: 'b. 2008',
   c: 'c. 2010',
   d: 'd. 2012',
   rightAns: 'b' 
},{
  qun: chalk.bgBlue(' 2. What is the name of Thor’s hammer? '),
   a: 'a. Vanir',
   b: 'b. Mjolnir',
   c: 'c. Aesir',
   d: 'd. Norn',
   rightAns: 'b' 
},{
  qun: chalk.bgBlue(' 3. In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film? '),
   a: 'a. That he wants to study The Hulk',
   b: 'b. That he knows about S.H.I.E.L.D.',
   c: 'c. That they are putting a team together',
   d: 'd. That Thaddeus owes him money',
   rightAns: 'c' 
},{
  qun: chalk.bgBlue(' 4. What is Captain America’s shield made of? '),
   a: 'a. Adamantium',
   b: 'b. Vibranium',
   c: 'c. Promethium',
   d: 'd. Carbonadium',
   rightAns: 'b'
},{
  qun: chalk.bgBlue(' 5. The Flerkens are a race of extremely dangerous aliens that resembles what?'),
   a: 'a. cats',
   b: 'b. Ducks',
   c: 'c. Reptiles',
   d: 'd. Raccoons',
   rightAns: 'a'
}];


  let userHighScore = [{
    name:'Pritam Kumar',
    yourScore: 15
  }];

function playQuiz(){
  var ask = readlineSync.keyInYN(`Would you like to play, MARVEL QUIZ Mr.${yourName}.\n`)
  var yourAns = ask;
  if(yourAns === "y"){
    console.log(`That's Great MR.${yourName}\n`)
    console.log(chalk.bgBlue('RULES FOR THE GAME\n'))
    console.log('a. All question are compulsory to attend')
    console.log('b. Total number of question is 5')
    console.log('c. Each right answer will give you 3 point and worng answer take 2 point from it.\n')
    console.log(chalk.bgBlue('Good Luck!!\n'))
  }else{
    console.log(`\nThank you!! MR.${yourName}\n`)
  }

}
playQuiz();

function askQuestion(){
  for(i=0; i<questions.length; i++){
    let currentQuiz = questions[i].qun;
    let optionA = questions[i].a;
     let optionB = questions[i].b;
      let optionC = questions[i].c;
       let optionD = questions[i].d;
  //Now show question to user
  console.log(chalk.bgBlue.bold(chalk.bgBlue.bold(`${currentQuiz} \n`)));
  console.log(optionA);
  console.log(optionB);
  console.log(optionC);
  console.log(optionD);
  var yourAnswer = readlineSync.question(chalk.red.bold(`\n what is your answer for this question MR.${yourName} \n`));
    if(yourAnswer.toLowerCase() === questions[i].rightAns){
      score = score + 3;
      console.log(chalk.green(`\nWOW! You are right. \n your score is ${score}\n`))
    }else{
      score = score - 2;
      console.log(chalk.red(`\nOhh! you are worng \n your score is ${score}\n`));    }
  }
  console.log(`\nThanks for playing MR.${yourName}\n`)
  scoreTable();
}
askQuestion();

function scoreTable(){
  if(score === userHighScore[0].yourScore){
    console.log(`\nCongratulations! MR.${yourName}. your score is ${score}\n Now! you are the top player of the MARVEL QUIZ\n`)
  }else{
    console.log(`\nBetter Luck Next Time! Have a great day! ${yourName}\n your Score is ${score}`)
  }
}