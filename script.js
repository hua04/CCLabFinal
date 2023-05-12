const startPos = new Array("Sounds like you're off to a good start, I'm happy for you!", "Sounds great, let's keep it going!", "Off to a strong start, let's go!!!");
const startNeu = new Array("Proud of you for getting started!","Starting is the hardest part, and you're already through it!","Can't wait to see what you'll achieve!");
const startNeg = new Array("Even just starting is an achievement, don't be so hard on yourself!", "Keep at it, you've got this.", "Stick with it! The only way through is through");
const midPos = new Array("Glad to hear things are going well!","You're doing great, I'm so proud of you.","That's awesome, glad to hear it");
const midNeu = new Array("Slow and steady, you've got this!","You've got this.","You're doing great!");
const midNeg = new Array("Any progress is good progress, you're doing amazing!", "Don't be so hard on yourself, I'm sure you're doing great!", "Do you think a break would help?");
const endPos = new Array("Finishing strong! You've got this", "Congrats! I'm glad you're happy with what you've acomplished", "That's awesome! Can't wait to see the finished product");
const endNeu = new Array("Almost there, let's go!","The finished product is going to be so cool!","Almost there, you're doing great!");
const endNeg = new Array("You've got this, just a bit more to go", "You've acomplished so much, treat yourself to a little break?", "Don't be so hard on yourself, I'm sure this will be great");

const result = document.getElementById("result-paragraph");
const btn = document.getElementById("submit");

// timer functionality
const timerSubmit = document.getElementById("timer-submit");
const timerReset = document.getElementById("timer-reset");
const tHr = document.getElementById("timer-hour");
const tMin = document.getElementById("timer-min");
const tSec = document.getElementById("timer-sec");
const timerDisplay = document.getElementById("timer-display");

var time;
var timerSec, timerMin, timerHr; 

//Gets response from arrays based on inputed values
btn.addEventListener('click', () => {
  console.log(prog.value);
  console.log(feel.value);
  if (prog.value<3) {
    if (feel.value==="good") {
        result.innerHTML = startPos[Math.floor(Math.random()*(startPos.length-1))];
      } 
      if (feel.value==="neutral") {
        result.innerHTML = startNeu[Math.floor(Math.random()*(startNeu.length-1))];
      } 
      if (feel.value==="bad") {
        result.innerHTML = startNeg[Math.floor(Math.random()*(startNeg.length-1))];
      } 
  } 

  if (prog.value<=7&&prog.value>=3) {
    if (feel.value==="good") {
        result.innerHTML = midPos[Math.floor(Math.random()*(midPos.length-1))];
      } 
      if (feel.value==="neutral") {
        result.innerHTML = midNeu[Math.floor(Math.random()*(midNeu.length-1))];
      } 
      if (feel.value==="bad") {
        result.innerHTML = midNeg[Math.floor(Math.random()*(midNeg.length-1))];
      } 
  } 

  if (prog.value>8) {
    if (feel.value==="good") {
        result.innerHTML = endPos[Math.floor(Math.random()*(endPos.length-1))];
      } 
      if (feel.value==="neutral") {
        result.innerHTML = endNeu[Math.floor(Math.random()*(endNeu.length-1))];
      } 
      if (feel.value==="bad") {
        result.innerHTML = endNeg[Math.floor(Math.random()*(endNeg.length-1))];
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
    if(timerSubmit.style.display === "none"){
      playSound();
    }
    
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
  timerReset.style.display = "inline";
  time = setInterval(countdown, 1000);
})

timerReset.addEventListener('click', () => {
  console.log("clicked");
 
  timerDisplay.classList.remove("blinktext");

  timerSubmit.style.display = "inline";
  tHr.style.display = "inline";
  tMin.style.display = "inline";
  tSec.style.display = "inline";
  timerDisplay.style.display = "none";
  timerReset.style.display = "none";
  timerHr = 0;
  timerMin =0;
  timerSec =0;
  
  
  
})


var myNodelist = document.getElementsByTagName("LI");
var i;


function clearList(){
  console.log()
  let element = document.getElementById("myUL");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}

}

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
    var close = document.getElementsByClassName("close");
    var t = document.createTextNode(inputValue);
    
    li.appendChild(t);
    if (inputValue === '') {
      
    } else {
      document.getElementById("myUL").appendChild(li);
      
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
  span.className = "close";
  li.appendChild(span);
  
  var close = document.getElementsByClassName("close");
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  } 
// Stores data in local storage
window.addEventListener('beforeunload', function() {
  const myUL = document.getElementById("myUL");
  const listItems = myUL.getElementsByTagName("li");
  const items = [];
  for (let i = 0; i < listItems.length; i++) {
    items.push(listItems[i].textContent);
  }
  localStorage.setItem("myListItems", JSON.stringify(items));
});

// Load data from local storage when page is reloaded
window.addEventListener('load', function() {
  const myUL = document.getElementById("myUL");
  const savedItems = localStorage.getItem("myListItems");
  if (savedItems) {
    const items = JSON.parse(savedItems);
    for (let i = 0; i < items.length; i++) {
      const li = document.createElement("li");
      const t = document.createTextNode(items[i]);
      li.appendChild(t);
      var span = document.createElement("SPAN");
  span.className = "close";
  li.appendChild(span);
  
  var close = document.getElementsByClassName("close");
  
      myUL.appendChild(li);
    }
  }
});