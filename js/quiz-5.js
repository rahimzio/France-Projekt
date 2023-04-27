
/*sixed quizz*/
let questions = [
    {"question":"Je ... grande",
     "answer-1":" devenira",
     "answer-2":" devenirer",
     "answer-3":" deveniras",
     "answer-4":" devenirai",
     "right-answer":4,
    },
  
  
    {"question":"Tu ... seul?",
     "answer-1":" allerais",
     "answer-2":" irais",
     "answer-3":" alleras",
     "answer-4":" allera",
     "right-answer":2,
    },
  
  
    {"question":"Elle ... pour nous",
     "answer-1":" chanterai",
     "answer-2":" chanteras",
     "answer-3":" chanterais",
     "answer-4":" chantera",
     "right-answer":4,
    },
  
  
    {"question":"Elles ... se maquiller",
    "answer-1":" aimerons",
    "answer-2":" aimerer",
    "answer-3":" aimerez",
    "answer-4":" aimeront",
    "right-answer":4,
   },
  
  
   {"question":"Nous ... l`ecole",
     "answer-1":" aimeronz",
     "answer-2":" aimerons",
     "answer-3":"aimerais",
     "answer-4":" aimerez",
     "right-answer":2,
    },
  
  
    {"question":"C`est qoui vous ... ?",
     "answer-1":" jouerez",
     "answer-2":" jouerai",
     "answer-3":" jouerons",
     "answer-4":" joueront",
     "right-answer":1,
    },
  
  
    {"question":"C`est quoi tu ... ?",
     "answer-1":" manges",
     "answer-2":" mangeras",
     "answer-3":" mangerai",
     "answer-4":" mangera",
     "right-answer":2,
    },
  
  
    {"question":"Vous ... le sport",
     "answer-1":" aodorerai",
     "answer-2":" adoreront",
     "answer-3":" adorerons",
     "answer-4":" adorerez",
     "right-answer":4,
    },
  
  
    {"question":"Ils ... crepe!",
     "answer-1":"va detester",
     "answer-2":"détesteront",
     "answer-3":" detesterez",
     "answer-4":" detesterons",
     "right-answer":2,
    },
  
  
    {"question":"Tu ... l`ecole",
     "answer-1":"amais",
     "answer-2":"aimerai",
     "answer-3":"aimeras",
     "answer-4":"aimerais",
     "right-answer":3,
    },
  
  ];
  
  
  

let currentquestion = 0;

let correctanswers = 0;

function init(quiznumber){

document.getElementById('all-questions').innerHTML = questions.length;



showquestion(quiznumber);

}


function showquestion(quiznumber){
let localquestion = questions[currentquestion];

if(currentquestion >= questions.length){
/*document.getElementById('content').innerHTML = '';*/
if( correctanswers >= questions.length/2 ){
document.getElementById('card-head').style = '';
document.getElementById('card-body').style = 'display: none';
document.getElementById('question-text-div').style = 'display: none';
document.getElementById('endsatz').innerHTML = `Sehr gut gemacht! Du hast es geschafft, von ${questions.length} Fragen, ${correctanswers} richtig zu beantworten!`;
}
else{
document.getElementById('card-head').style = '';
document.getElementById('card-body').style = 'display: none';
document.getElementById('question-text-div').style = 'display: none';
document.getElementById('endsatz').innerHTML = `Ohje lern lieber noch mal bisschen und guck dir die grammatik nochmal richtig an. Von ${questions.length} fragen, hast du leider nur ${correctanswers} richtig beantworten`;
}
}
else{
let percent = (currentquestion + 1)/questions.length;
percent = percent * 100;


document.getElementById('progress-bar').innerHTML =`${percent}%`;
document.getElementById('progress-bar').style = `width: ${percent}%;`;

document.getElementById ('currentnum').innerHTML = currentquestion + 1;

document.getElementById('question-text').innerHTML = localquestion['question'];
document.getElementById('answer-1').innerHTML = localquestion['answer-1'];
document.getElementById('answer-2').innerHTML = localquestion['answer-2'];
document.getElementById('answer-3').innerHTML = localquestion['answer-3'];
document.getElementById('answer-4').innerHTML = localquestion['answer-4'];
}
}


function answer(selection){
let localquestion = questions[currentquestion];
let currentnum = selection.slice(-1);
let rightanswer = "answer-"+localquestion['right-answer'];

if(currentnum == localquestion['right-answer']){
document.getElementById(selection).parentNode.classList.add('bg-success');
correctanswers ++;
}else{
document.getElementById(rightanswer).parentNode.classList.add('bg-success');
document.getElementById(selection).parentNode.classList.add('bg-danger');
}

document.getElementById('next-button').disabled = false;
}

function nextquestion(){
currentquestion ++;
removebackground();
showquestion();

document.getElementById('next-button').disabled = true;

}

function removebackground(){
document.getElementById('answer-1').parentNode.classList.remove('bg-success');
document.getElementById('answer-1').parentNode.classList.remove('bg-danger');
document.getElementById('answer-2').parentNode.classList.remove('bg-success');
document.getElementById('answer-2').parentNode.classList.remove('bg-danger');
document.getElementById('answer-3').parentNode.classList.remove('bg-success');
document.getElementById('answer-3').parentNode.classList.remove('bg-danger');
document.getElementById('answer-4').parentNode.classList.remove('bg-success');
document.getElementById('answer-4').parentNode.classList.remove('bg-danger');


}


function restart(){
currentquestion = 0;
correctanswers = 0;

document.getElementById('card-head').style = 'display: none';
document.getElementById('card-body').style = '' ;
document.getElementById('question-text-div').style = '';


init();
}