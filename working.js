var host = window.document.location.host.replace(/:.*/, "");
var ws = new WebSocket("ws://" + host + ":3000");
b1 = document.getElementById("box1");
b2 = document.getElementById("box2");
b3 = document.getElementById("box3");
var playing = false;

function change() {
  b1.style.setProperty("--gradient-colour", "white");
  b2.style.setProperty("--gradient-colour", "white");
}
function changeback() {
  b1.style.setProperty("--gradient-colour", "var(--shades)");
  b2.style.setProperty("--gradient-colour", "var(--shades)");
}
ws.onmessage = function (message) {
  if (message.data == "48" && !playing) {
    playing = true;
    var a = new Audio();
    a = new Audio("./sounds/box1.mp3");
    a.play();
    b1.style.setProperty("--gradient-colour", "var(--shades)");
    a.onended = function () {
      console.log("finished");
      playing = false;
      b1.style.setProperty("--gradient-colour", "white");
    };
  }
  if (message.data == "49" && !playing) {
    playing = true;
    var a = new Audio();
    a = new Audio("./sounds/box2.mp3");
    a.play();
    b2.style.setProperty("--gradient-colour", "var(--shades)");
    a.onended = function () {
      playing = false;
      b2.style.setProperty("--gradient-colour", "white");
    };
  }
  if (message.data == "50" && !playing) {
    playing = true;
    var a = new Audio();
    a = new Audio("./sounds/box3.mp3");
    a.play();
    b3.style.setProperty("--gradient-colour", "var(--shades)");
    a.onended = function () {
      playing = false;
      b3.style.setProperty("--gradient-colour", "white");
    };
  }
  if (playing) {
    window.alert("Please wait untill current song finishes playing");
  }
};
