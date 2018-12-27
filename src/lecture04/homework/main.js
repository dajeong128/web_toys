const getCurrentTime = () => {




    const move = () => {     
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        if( hours> 12 ) hours= hours- 12; {
        
        var dh = ( hours * 30 ) + ( minutes * 0.5 );
        dh = parseInt( dh );
        var dm = minutes * 6;
        var ds = seconds * 6;

     
        document.querySelector('[data-hour]').style.WebkitTransform = "rotate(" + dh + "deg)";
        document.querySelector('[data-minute]').style.WebkitTransform = "rotate(" + dm + "deg)";
        document.querySelector('[data-second]').style.WebkitTransform = "rotate(" + ds + "deg)";

        var timer = setInterval( function(){ digital(); }, 1000);


        }
    }
}