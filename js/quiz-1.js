
/*seconde quizz*/
let questions = [
    {"question":"Je ... grande",
     "answer-1":"va devenir",
     "answer-2":"allons devenir",
     "answer-3":"allez devenir",
     "answer-4":"vas devenir",
     "right-answer":4,
    },
  
  
    {"question":"Tu ... seul?",
     "answer-1":"allons aller",
     "answer-2":"vas alle",
     "answer-3":"vas aller",
     "answer-4":"allez aller",
     "right-answer":3,
    },
  
  
    {"question":"Elle ... pour nous",
     "answer-1":"va chantes",
     "answer-2":"va chanter",
     "answer-3":"va chante",
     "answer-4":"va chantons",
     "right-answer":2,
    },
  
  
    {"question":"Elles ... se maquiller",
    "answer-1":"vons aimer",
    "answer-2":"allez aimer",
    "answer-3":"vas aimer",
    "answer-4":"vont aimer",
    "right-answer":4,
   },
  
  
   {"question":"Nous ... l`ecole",
     "answer-1":"vont aimons",
     "answer-2":"allons aimer",
     "answer-3":"allez aimer",
     "answer-4":"vont aiment",
     "right-answer":2,
    },
  
  
    {"question":"C`est qoui vous ... ?",
     "answer-1":"allez jouer",
     "answer-2":"vont jouer",
     "answer-3":"allons jouer",
     "answer-4":"vas jouer",
     "right-answer":1,
    },
  
  
    {"question":"C`est quoi tu ... ?",
     "answer-1":"vas manges",
     "answer-2":"vas manger",
     "answer-3":"va manger",
     "answer-4":"va manges",
     "right-answer":2,
    },
  
  
    {"question":"Vous ... le sport",
     "answer-1":"vont aodorer",
     "answer-2":"alles adorer",
     "answer-3":"allons adorer",
     "answer-4":"allez adorer",
     "right-answer":4,
    },
  
  
    {"question":"Ils ... crepe!",
     "answer-1":"vas detester",
     "answer-2":"vont detester",
     "answer-3":"va detester",
     "answer-4":"allons detester",
     "right-answer":2,
    },
  
  
    {"question":"Tu ... l`ecole",
     "answer-1":"vont aimer",
     "answer-2":"va aimer",
     "answer-3":"vas aimer",
     "answer-4":"va aime",
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