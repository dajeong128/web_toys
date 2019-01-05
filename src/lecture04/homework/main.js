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
  
