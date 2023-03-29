let desires = ["a warm embrace and nothing more", "taste your mouth", "something sweet", "melting in you", "a tender gaze", "a friendly smile", "a hot bath and a bottle of wine", "wanting", "feeling", "that endless summer night", "intimacy", "walking barefoot on the hot sand", "laying on the grass", "caressing my dog again", "feeling loved", "feeling safe"];

let alongYou = window.innerHeight;
let acrossYou = window.innerWidth;

window.addEventListener("load", event => {
  document.getElementById("reload").onclick = function() {
      location.reload(true);
  }
});

for (let i = 0; i < desires.length; i++){

  let newDesire = document.createElement("p");
  newDesire.innerText = desires[i];

  newDesire.style.top = getRandomNumber(50, innerHeight-200);
  newDesire.style.left = getRandomNumber(50, innerWidth-200);

  newDesire.addEventListener("click", function(){
      newDesire.classList.toggle("touched");
  });

  document.body.appendChild(newDesire);
}

function getRandomNumber(min,max){
  return Math.floor(Math.random() * max + min);
}
