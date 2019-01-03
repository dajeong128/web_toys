setInterval(function(){
    var date = new Date();
    updateTime(date);
    updateClock(date);
  }, 1000);
  
  function updateClock(date){
    var secHand = document.querySelector(".sec-hand").style;
    var minHand = document.querySelector(".min-hand").style;
    var hrHand = document.querySelector(".hr-hand").style;
    
    secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
    minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
    hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
  }
  
  function updateTime(date){
    var timeDiv = document.querySelector("#time");
    timeDiv.innerHTML.hidden = true;
  }