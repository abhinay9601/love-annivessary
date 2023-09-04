let i = 0;
let text1 = "Hey! Shital Rawat(Abhinay's Wife)";
let text2 = " Remember I always love you❤️ | I am always with you my love ❤️";
let speed = 100;
let flag1 = true;
function typeWriter(text, para) {
  if (ok == 2) {
    clearInterval(typeInterval);
  }
  if (i < text.length) {
    if (text.charAt(i) == "|") {
      flag1 = false;
    } else {
      if (flag1) {
        document.getElementById(para).innerHTML += text.charAt(i);
      } else {
        document.getElementById("txt3").innerHTML += text.charAt(i);
      }
    }
    i++;
    speed = Math.random() * 50 + 100;
  } else {
    if (ok == 0) {
      i = 0;
    }
    ok += 1;
  }
  // document.getElementById("audio").play();
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
typeInterval = setInterval(function () {
  if (ok == 0) {
    typeWriter(text1, "txt1");
  } else if (ok == 1) {
    typeWriter(text2, "txt2");
  }
}, 75);
//};
