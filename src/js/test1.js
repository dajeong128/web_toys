


    function getAnswer() {
        
        var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
        var theDay = new Date('2016-2-29').getDay();
        var answer = week[theDay];
        
        return answer;
    }

console.log(getAnswer())
// 목요일