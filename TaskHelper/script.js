const startPos = new Array("Sounds like you're off to a good start, I'm happy for you!", "Sounds great, let's keep it going!", "Off to a strong start, let's go!!!");
const startNeu = new Array("Proud of you for getting started!","Starting is the hardest part, and you're already through it!","");
const startNeg = new Array("Even just starting is an achievement, don't be so hard on yourself!", "Keep at it, you've got this.", "Stick with it! The only way through is through");
const midPos = new Array("Glad to hear things are going well!","You're doing great, I'm so proud of you.","aaaaaaaa");
const midNeu = new Array("aaaa","aaaaaa","aaaaaaaa");
const midNeg = new Array("Any progress is good progress, you're doing amazing!");
const endPos = new Array("You're almost");
const endNeu = new Array("aaaa","aaaaaa","aaaaaaaa");
const endNeg = new Array("You've got this, just a bit more to go", "Maybe a break is in order, ");

const result = document.getElementById("result-paragraph");
const btn = document.getElementById("submit");

// timer functionality
const timerSubmit = document.getElementById("timer-submit");
const tHr = document.getElementById("timer-hour");
const tMin = document.getElementById("timer-min");
const tSec = document.getElementById("timer-sec");
const timerDisplay = document.getElementById("timer-display");

var time;
var timerSec, timerMin, timerHr; 

btn.addEventListener('click', () => {
  console.log(prog.value);
  console.log(feel.value);
  if (prog.value<3) {
    if (feel.value==="good") {
        result.innerHTML = startPos[Math.random()*(startPos.length-1)];
      } 
      if (feel.value==="neutral") {
        result.innerHTML = startNeu[Math.random()*(startNeu.length-1)];
      } 
      if (feel.value==="bad") {
        result.innerHTML = startNeg[Math.random()*(startNeg.length-1)];
      } 
  } 

  if (prog.value<=7&&prog.value>=3) {
    if (feel.value==="good") {
        result.innerHTML = midPos[Math.random()*(midPos.length-1)];
      } 
      if (feel.value==="neutral") {
        result.innerHTML = midNeu[Math.random()*(midNeu.length-1)];
      } 
      if (feel.value==="bad") {
        result.innerHTML = midNeg[Math.random()*(midNeg.length-1)];
      } 
  } 

  if (prog.value<8) {
    if (feel.value==="good") {
        result.innerHTML = endPos[Math.random()*(endPos.length-1)];
      } 
      if (feel.value==="neutral") {
        result.innerHTML = endNeu[Math.random()*(endNeu.length-1)];
      } 
      if (feel.value==="bad") {
        result.innerHTML = endNeg[Math.random()*(endNeg.length-1)];
      } 
  } 
  
 

})

document.getElementById("submit").addEventListener("click", clear);

function clear() {
    console.log("yes")
    document.getElementById("form").reset();
}
function playSound () {
	let ding = new Audio('ding.mp3');
	ding.play();
}

function initializeTimer(timerHr, timerMin, timerSec) {
  if (timerHr == "") {
    timerHr = 0;
  }

  if (timerMin == "") {
    timerMin = 0;
  }

  if (timerSec == "") {
    timerSec = 0;
  }

  timerDisplay.innerHTML = `${timerHr}:${timerMin}:${timerSec}`;
}

function countdown() {
  if (timerHr == 0 && timerMin == 0 && timerSec == 0) {
    playSound();
    clearInterval(time);
   
      timerDisplay.className = "blinktext";
    
    
    console.log("Time's up!");
    return;
  }

  timerSec -= 1;
  
  if (timerSec < 0 && timerMin > 0) {
    timerSec = 59;
    timerMin -= 1;
  }
  
  if (timerMin < 0 && hr > 0) {
    timerMin = 59;
    timerHr -= 1;
  }
  
  
  console.log(timerHr, timerMin, timerSec)

  initializeTimer(timerHr, timerMin, timerSec);
}

timerSubmit.addEventListener('click', () => {
  timerHr = Number(document.getElementById("timer-hour").value);
  timerMin = Number(document.getElementById("timer-min").value);
  timerSec = Number(document.getElementById("timer-sec").value);

  // set timer to input time
  initializeTimer(timerHr, timerMin, timerSec);
  timerSubmit.style.display = "none";
  tHr.style.display = "none";
  tMin.style.display = "none";
  tSec.style.display = "none";
  timerDisplay.style.display = "inline";
  time = setInterval(countdown, 1000);
})


var myNodelist = document.getElementsByTagName("LI");
var i;
var myNodelist = document.getElementsByTagName("LI");
var i;



for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  
 

  
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);



  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  } 
