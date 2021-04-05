function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
};


 document.getElementById("a").addEventListener("click", function() {
   document.getElementById("audio").play();
 });

 document.getElementById("b").addEventListener("click", function() {
   document.getElementById("audio2").play();
});

$("a").click(function (e){
  e.preventDefault();
  var goTo = this.getAttribute("href");
  setTimeout(function(){
    window.location = goTo
  },4000);
});




// who wins div

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
