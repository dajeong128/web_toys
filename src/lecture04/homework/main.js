<<<<<<< HEAD
setInterval(function () {
  var date = new Date();
  updateTime(date);
  updateClock(date);
}, 1000);

function updateClock(date) {
  var secHand = document.querySelector(".sec-hand").style;
  var minHand = document.querySelector(".min-hand").style;
  var hrHand = document.querySelector(".hr-hand").style;

  secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}

function updateTime(date) {
  var timeDiv = document.querySelector("#time");
  timeDiv.innerHTML.hidden = true;
}
=======
setInterval(function(){
    var date = new Date();
    updateClock(date);
  }, 1000);
  
  function updateClock(date){
    var secHand = document.querySelector("[data-second]").style;
    var minHand = document.querySelector("[data-minute]").style;
    var hrHand = document.querySelector("[data-hour]").style;
    
    secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
    secHand.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
    hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
  }
  
>>>>>>> 216f0f1449c5c64d2d90eda371d22892ebf6fd92
