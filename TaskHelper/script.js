const startPos = new Array("Sounds like you're off to a good start, I'm happy for you!", "Sounds great, let's keep it going!", "Off to a strong start, let's go!!!");
const startNeu = new Array("aaaa","aaaaaa","aaaaaaaa");
const startNeg = new Array("Even just starting is an achievement, don't be so hard on yourself!", );
const midPos = new Array("aaaa","aaaaaa","aaaaaaaa");
const midNeu = new Array("aaaa","aaaaaa","aaaaaaaa");
const midNeg = new Array("Any progress is good progress, you're doing amazing!");
const endPos = new Array("You're almost");
const endNeu = new Array("aaaa","aaaaaa","aaaaaaaa");
const endNeg = new Array("You've got this, just a bit more to go", "Maybe a break is in order, ");

const result = document.getElementById("result-paragraph");
const btn = document.getElementById("submit");


var myNodelist = document.getElementsByTagName("LI");
var i;

btn.addEventListener('click', () => {


    if (prog.value<20) {
        if (feel.value="good") {
            result.innerHTML = startPos[Math.random()*(startPos.length-1)];
          } 
          if (feel.value="neutral") {
            result.innerHTML = startNeu[Math.random()*(startNeu.length-1)];
          } 
          if (feel.value="bad") {
            result.innerHTML = startNeg[Math.random()*(startNeg.length-1)];
          } 
      } 

      if (20<prog.value<80) {
        if (feel.value="good") {
            result.innerHTML = midPos[Math.random()*(midPos.length-1)];
          } 
          if (feel.value="neutral") {
            result.innerHTML = midNeu[Math.random()*(midNeu.length-1)];
          } 
          if (feel.value="bad") {
            result.innerHTML = midNeg[Math.random()*(midNeg.length-1)];
          } 
      } 

      if (prog.value<20) {
        if (feel.value="good") {
            result.innerHTML = endPos[Math.random()*(endPos.length-1)];
          } 
          if (feel.value="neutral") {
            result.innerHTML = endNeu[Math.random()*(endNeu.length-1)];
          } 
          if (feel.value="bad") {
            result.innerHTML = endNeg[Math.random()*(endNeg.length-1)];
          } 
      } 
      


})

document.getElementById("submit").addEventListener("click", clear);

function clear() {
    console.log("yes")
    document.getElementById("form").reset();
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
