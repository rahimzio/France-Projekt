
/*fourth quizz*/
let questions = [
    {"question":"J'... la glace",
     "answer-1":"avait aimer",
     "answer-2":"avais aimer",
     "answer-3":"avait aimé",
     "answer-4":"avais aimé",
     "right-answer":4,
    },
  
  
    {"question":"Vous ... seul?",
     "answer-1":" êtait aller",
     "answer-2":"êtiez allés",
     "answer-3":"êtions allés",
     "answer-4":"êtais allés",
     "right-answer":2,
    },
  
  
    {"question":"Elles ... pour nous",
     "answer-1":"avaient aimé",
     "answer-2":"avais aimé",
     "answer-3":"avait aimé",
     "answer-4":"aviez aimé",
     "right-answer":1,
    },
  
  
    {"question":"Elle ... se maquiller",
    "answer-1":"étaient allés",
    "answer-2":"étaiez allés",
    "answer-3":"était alles",
    "answer-4":"étais allés",
    "right-answer":3,
   },
  
  
   {"question":"Nous ...a l`ecole",
     "answer-1":"étais allé",
     "answer-2":"étions allés",
     "answer-3":"étiez allé",
     "answer-4":"étaient allé",
     "right-answer":2,
    },
  
  
    {"question":"C`est qoui vous ... ?",
     "answer-1":"avais joué",
     "answer-2":"avions joué",
     "answer-3":"aviat joué",
     "answer-4":"aviez joué",
     "right-answer":4,
    },
  
  
    {"question":"C`est quoi qu'il ... ?",
     "answer-1":"avais mangé",
     "answer-2":"avait mangé",
     "answer-3":"avais mangas",
     "answer-4":"avaits mangé",
     "right-answer":2,
    },
  
  
    {"question":"Vous ... le sport",
     "answer-1":"aodorais",
     "answer-2":"adorions",
     "answer-3":" avions adoré",
     "answer-4":"adoraient",
     "right-answer":3,
    },
  
  
    {"question":"Ils ... crepe!",
     "answer-1":"vont detesté",
     "answer-2":"avaient detesté",
     "answer-3":"avais detesté",
     "answer-4":"avait detesté",
     "right-answer":2,
    },
  
  
    {"question":"Tu ... l`ecole?",
     "answer-1":"avais aimé",
     "answer-2":"va aimer",
     "answer-3":"avaient aimé",
     "answer-4":"avait aimé",
     "right-answer":1,
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