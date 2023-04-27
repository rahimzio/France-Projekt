function swipe(){
  let element = document.getElementById("menu-links").classList;
  element.add("opener");
  element.remove("none");
  document.body.style.overflowY = "hidden";
}

 function removemenu(){
   document.getElementById('menu-links').classList.remove("opener");
   document.body.style.overflowY = "scroll";

   let element = document.getElementById("menu-links").classList;
   element.add("none");
 }

function display(){
  let übungen = document.getElementById('content-übungen') ;
  let g = document.getElementById('content-grammtik');

  g.innerHTML += `
  <div class="content-display" id="content-grammtik">
               
  <div class="mini-row-js">
      <span>present</span>
 <a href="/grammatik/present.html"> <img class="cast übungscontainer-img-js" src="/img/grammatik2.jpg"> </a>
  </div>
  <div class="mini-row-js">
      <span>passé composé</span>
 <a href="/grammatik/passecompose.html"><img class="cast übungscontainer-img-js" src="/img/französischbilder (1).jpg"></a>
  </div>
  <div class="mini-row-js">
      <span>imparfait</span>
 <a href="/grammatik/imparfait.html"> <img class="cast übungscontainer-img-js"  src="/img/grammatik8.jpg"> </a>
  </div>
   
  `;

  übungen.innerHTML += `
  <div class="mini-row-js">
  <span>present</span>
<a href="/übungen/übungen-present.html"> <img class="cast grammatikconatiner-img-js" src="/img/grammatik2.jpg"> </a>
</div>
<div class="mini-row-js">
  <span>passé composé</span>
<a href="/übungen/übungen-passecompose.html"><img class="cast grammatikconatiner-img-js"  src="/img/französischbilder (1).jpg"></a>
</div>
<div class="mini-row-js">
  <span>imparfait</span>
<a href="/übungen/übungen-imparfait.html"> <img  class="cast grammatikconatiner-img-js"src="/img/grammatik8.jpg"> </a>
</div>

`;
}




let count = 0;
function swap1(){
  let g = document.getElementById('content-grammtik');
 

if(even(count)== 0 ){

  g.innerHTML = `
<div class="mini-row-js">
      <span>plus-que-parfait</span>
<a href="/grammatik/plusque-parfait.html">  <img class="cast übungscontainer-img-js" src="/img/grammatik3.jpg"> </a>
  </div>
  <div class="mini-row-js">
      <span>futur composé</span>
 <a href="/grammatik/future-compose.html"> <img class="cast übungscontainer-img-js" src="/img/grammatik5.jpg"> </a>
  </div>
  <div class="mini-row-js">
      <span>futur simple</span>
 <a href="/grammatik/future-simple.html"> <img class="cast übungscontainer-img-js" src="/img/grammatik1.jpg"></a>
  </div>`;
}
else{
g.innerHTML=`<div class="content-display" id="content-grammtik">
               
<div class="mini-row-js">
    <span>present</span>
<a href="/grammatik/present.html"> <img class="cast übungscontainer-img-js" src="/img/grammatik2.jpg"> </a>
</div>
<div class="mini-row-js">
    <span>passé composé</span>
<a href="/grammatik/passecompose.html"><img class="cast übungscontainer-img-js" src="/img/französischbilder (1).jpg"></a>
</div>
<div class="mini-row-js">
    <span>imparfait</span>
<a href="/grammatik/imparfait.html"> <img class="cast übungscontainer-img-js"  src="/img/grammatik8.jpg"> </a>
</div>
`;
}
count ++;
}


let count1 = 0;
function swap(){
  let übungen = document.getElementById('content-übungen') ;

if(even(count1)== 1){

  übungen.innerHTML = `
  <div class="mini-row-js">
  <span>present</span>
<a href="/übungen/übungen-present.html"> <img class="cast grammatikconatiner-img-js" src="/img/grammatik2.jpg"> </a>
</div>
<div class="mini-row-js">
  <span>passé composé</span>
<a href="/übungen/übungen-passecompose.html"><img class="cast grammatikconatiner-img-js"  src="/img/französischbilder (1).jpg"></a>
</div>
<div class="mini-row-js">
  <span>imparfait</span>
<a href="/übungen/übungen-imparfait.html"> <img  class="cast grammatikconatiner-img-js"src="/img/grammatik8.jpg"> </a>
</div>

`;
}
else if(even(count1)== 0){
übungen.innerHTML=`
<div class="mini-row-js">
  <span>plus-que-parfait</span>
<a href="/übungen/übungen-plusqueparfait.html"> <img class="cast grammatikconatiner-img-js" src="/img/grammatik3.jpg"> </a>
</div>
<div class="mini-row-js">
  <span>futur composé</span>
<a href="/übungen/übungen-futurecompose.html"> <img class="cast grammatikconatiner-img-js" src="/img/grammatik5.jpg"> </a>
</div>
<div class="mini-row-js">
  <span>futur simple</span>
<a href="/übungen/übungen-futuresimple.html"> <img class="cast grammatikconatiner-img-js" src="/img/grammatik1.jpg"></a>
</div>`;
}
count1 ++;
}

function even(char){
  let nummer = char % 2;
  return nummer;
}

function opacity(num){
  let button = document.getElementById("button-"+ num);
  setTimeout(button.classList.add("click"),
  600
    )
}