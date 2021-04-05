function newTitle() {
  var a = Math.random() * 2 ;
if ( a > 1){
  document.getElementById("target").innerHTML = "ALIEN WINS";
    playSound.play();
  document.getElementById("aliengif").style.borderColor="red";
  document.getElementById("predgif").style.borderColor = "#555";

} else{
    document.getElementById("target").innerHTML = "PREDATOR WINS";
    playSound1.play();
    document.getElementById("predgif").style.borderColor="blue";
    document.getElementById("aliengif").style.borderColor="#555";
  };
  console.log(a);
  };

var playSound =  new Audio("sounds/a2.mp3");
var playSound1 = new Audio ("sounds/p3.mp3");
