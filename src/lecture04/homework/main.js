const getCurrentTime = () => {


    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();


    function setDate() { const now = new Date();

        if( hours> 12 ) hours= hours- 12; {
        
        var dh = ( hours * 30 ) + ( minutes * 0.5 );
        dh = parseInt( dh );
        var dm = minutes * 6;
        var ds = seconds * 6;

     
        document.querySelector('[data-hour]').style.WebkitTransform.innerHTML = "rotate(" + dh + "deg)";
        document.querySelector('[data-minute]').style.WebkitTransform.innerHTML = "rotate(" + dm + "deg)";
        document.querySelector('[data-second]').style.WebkitTransform.innerHTML = "rotate(" + ds + "deg)";



        }
    }
}