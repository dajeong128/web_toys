
function solution(a, b) {
    // if (a=2) {
    //     b<28;
    //     return answer 
    // }
    // if else (a=0) {
    //     a + 2,
    //     b < 31;
    // } else {
    //     b<30;
    // }
    var theDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    var answer = ''
    var totalDate = 0;
    if (a === 1) {
        totalDate = b;
    } else {
        for (var i = 1; i <= a - 1; i++) {
                if (i - 1 === 2) {
                    totalDate += 28;
                } else {
                    if (i < 8) {
                        if ((i - 1) % 2 === 0) {
                            totalDate += 30;
                        } else {
                            totalDate += 31;
                        }                    
                    } else {
                        if ((i - 1) % 2 === 0) {
                            totalDate += 31;
                        } else {
                            if (i - 1 === 8) {
                                totalDate += 31;                            
                            } else {
                                totalDate += 30;
                            }
                        }
                    }
                }
            }        
    }

    totalDate = totalDate + b;
    console.log(totalDate);
    if (totalDate % 7 - 2 < 0) {
        answer = theDays[totalDate % 7 + 4];        
    } else {
        answer = theDays[totalDate % 7 - 2];
    } 
    
    return answer
}   





// function solution(a, b) {
//     if ((a%2 === 0)===true) {
//         b<30
//     }
//     function getAnswer() {
//         var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
//         var theDay = new Date('2016-5-01').getDay();
//         var answer = week[theDay];
        
//         return answer;
//     }
// }
// console.log(getAnswer())
// // 목요일