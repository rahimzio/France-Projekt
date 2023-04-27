/*fived quizz*/
let questions = [
    {"question":"J'... la glace",
     "answer-1":"a aimer",
     "answer-2":"avais aimer",
     "answer-3":"as aimé",
     "answer-4":"ai aimé",
     "right-answer":4,
    },
  
  
    {"question":"Vous ... seul?",
     "answer-1":" êtes allés",
     "answer-2":" es allé",
     "answer-3":" sont allé",
     "answer-4":"êtais allé",
     "right-answer":1,
    },
  
  
    {"question":"Elles ... pour nous",
     "answer-1":" ont travaillé",
     "answer-2":" avez travaillé",
     "answer-3":" avons travaillé",
     "answer-4":" ont travaillé",
     "right-answer":4,
    },
  
  
    {"question":"Elle ... se maquiller",
    "answer-1":" êtes allée",
    "answer-2":" est allée",
    "answer-3":"était allée",
    "answer-4":"es allée",
    "right-answer":2,
   },
  
  
   {"question":"Nous ...a l`ecole",
     "answer-1":" es allé",
     "answer-2":" est alle",
     "answer-3":" sommes allés",
     "answer-4":" sont allés",
     "right-answer":3,
    },
  
  
    {"question":"C`est qoui vous ... ?",
     "answer-1":"êtes  joués",
     "answer-2":"etais joués",
     "answer-3":"avais joués",
     "answer-4":"avez joué",
     "right-answer":4,
    },
  
  
    {"question":"C`est quoi qu'il ... ?",
     "answer-1":"ais mange",
     "answer-2":"a mangé",
     "answer-3":"as mangas",
     "answer-4":"ai mangé",
     "right-answer":2,
    },
  
  
    {"question":"Vous ... le sport",
     "answer-1":"sommes aodoré",
     "answer-2":"etes adoré",
     "answer-3":"avez adoré",
     "answer-4":"est adoré",
     "right-answer":3,
    },
  
  
    {"question":"Ils ... crepe!",
     "answer-1":"on deteste",
     "answer-2":"ont detesté",
     "answer-3":"ons deteste",
     "answer-4":"sont detesté",
     "right-answer":2,
    },
  
  
    {"question":"Tu ... l`ecole?",
     "answer-1":"as aimé",
     "answer-2":"a aimer",
     "answer-3":"ai aimé",
     "answer-4":"ais aimé",
     "right-answer":1,
    },

    {"question":"Shogufa ... l`ecole?",
     "answer-1":"as pas",
     "answer-2":"a pas",
     "answer-3":"ai pas",
     "answer-4":"ais pas",
     "right-answer":2,
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