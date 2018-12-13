// var req = new XMLHttpRequest();
// req.open('GET', 'http://www.mozilla.org/', true);
// req.onreadystatechange = function (aEvt) {
//   if (req.readyState === 4) {
//      if(req.status === 200)
//       dump(req.responseText);
//      else
//       dump("Error loading page\n");
//   }
// };
// req.send(null);

let data;
const req = new XMLHttpRequest();
req.open ('GET', 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&peopleNm=x', true);
req.onreadystatechange = function (aEvt) {
    if (req.readyState ===4) {
        if (req.status ===200) {
            data = JSON.parse(req.responseText);
            const person = data.peopleListResult.peopleList[0];
            console.log(person);
            const name = person.peopleNm;
            const nameEl = document.querySelector('[data-name] h1');
            nameEl.innerHTML = name;

            const role = person.repRoleNm;
            console.log(role);
            const roleEl = document.querySelector('[data-role] h2');
            roleEl.innerHTML = role;

            const filmos = person.filmoNames;
            console.log(filmos);
            const filmosEl = document.querySelector('[data-filmos] h3');
            filmosEl.innerHTML = filmos;

        }
    }
}
req.send();

function enterSearch() {
    if (event.keyCode == 13 ) {
        myFunction();
    } else if (event.type =='click') {
        myFunction();   
    }
}

function myFunction() {
    const x = document.getElementById(search).value; {
        if (x === name) {
            window.location.href = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&peopleNm="+"x";
        }
    } 
}

