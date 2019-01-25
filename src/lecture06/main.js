    /*
    12시간 단위로 표시되는 시계가 있습니다. 오전일 경우 `AM`, 오후일 경우 `PM`으로 표시되며, 시간은 "시:분:초"로 표시됩니다.
    예를 들어, 오전 11시 27분 35초일 경우 "AM 11:27:35" 로 표시가 되며, 오후 8시 20분 4초일 경우 "PM 08:20:04" 로 표시가 됩니다.
    이제부터, 우리는 시계에 표시된 시간에서 N초 후의 시간을 구하려고 합니다. **단, N초 후의 시간 표시를 12시간 단위에서 24시간 단위 표시로 변경하려고 합니다.**
    24시간 단위로 표시되므로 오전과 오후를 나타내는 "AM", "PM"과 같은 문자열은 표시되지 않으며, "시:분:초"만 표시됩니다.

    예를 들어,

    - 12시간 단위 시계로 표시된 "PM 01:00:00" 에서 10초 후의 시간을 24시간 단위 표시로 변경하면 "13:00:10" 로 표시하게 됩니다.
    - 12시간 단위 시계로 표시된 "PM 11:59:59" 에서 1초 후의 시간을 24시간 단위 표시로 변경하면 "00:00:00" 로 표시하게 됩니다.

    12시간 단위로 표시된 현재 시각과 N이 매개변수로 주어졌을 때, N초 후의 시간 표시를 24시간 단위 표시로 변경하는 함수를 만들어주세요.

    # 요구사항
    - 현재 시각은 길이가 11인 문자열로 주어집니다(예, "PM 04:05:06"). 오전/오후는 AM/PM으로 표시하고, 시/분/초는 모두 두자리 숫자입니다.
    - 결과의 시/분/초는 모두 두자리 숫자로 해서 길이가 8인 문자열을 반환해주세요. (예, 16:05:06)
    - N은 200,000 이하인 자연수입니다.
    - Date 관련 클래스를 사용하지 않고 구현해주세요.
    - 결과 검증에 사용한 코드와 데이터도 포함해주세요.
    - 매개변수에 대한 검증은 필요하지 않습니다.

    # 평가기준
    - 로직 이해도 / 테스트셋에 대한 올바른 결과 생성
    - 코드 구성 / 코드 가독성 (불필요한 주석은 없는 것을 선호합니다)

    # 입출력 예
    | 시각 | N | 답 |
    |—|—|—|
    | PM 01:00:00 | 10 | 13:00:10 |
    | PM 11:59:59 | 1 | 00:00:00 |
    | AM 12:10:00 | 40 | 00:10:40 |
    | AM 05:24:03 | 102392 | 09:50:35 |
    */


const showTime = document.querySelector('.time');
const time = 'PM 01:12:34';
// console.log(time);
const N = 10;
const pmAm = time.slice(0,2);
const timeHour = Number(time.slice(2,5));
const timeMinute= Number(time.slice(6,8));
const timeSecond = Number(time.slice(time.length-2));
// console.log(timeMinute);
// console.log(timeHour);

// console.log(pmAm);
// console.log(titmeSecond);
const SecondAddN = timeSecond+ N;
if (SecondAddN > 60) {
    Number(timeMinute) +1;
}
// console.log(SecondAddN);

if (pmAm == 'PM') {
    var timeHourResult = timeHour + 12;
    console.log(timeHourResult);
}


if (timeSecond => 60) {
    var mResult = timeMinute + 1;
    var sResult = timeSecond - 60;
    console.log(timeSecond);
    console.log(sResult);
}

if (timeMinute => 60) {
    var hResult = timeHour + 1;
    var mResult = timeMinute - 60;
}


if (timeHour > 24) {
    var hResult = timeHour - 24;
}

const answer = `${hResult}:${mResult}:${sResult}`

showTime.innerHTML = answer;