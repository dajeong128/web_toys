
    function getMoviePerson(searchValue) {
    fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&peopleNm=${searchValue}`)
        .then((response) => response.json())
        .then((data) => {
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
        })
    }







const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener("click", findMoviePerson);
const searchInput = document.getElementById("searchInput");
function findMoviePerson(){
    let searchValue = searchInput.value;
    getMoviePerson(searchValue);

}
// searchInput.addEventListener('keydown', function(e){
//     console.log(e.keyCode);
// })

const formEl = document.querySelector('[data-input-form]');
formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    findMoviePerson();
})


// if (keycode ==13) {
//     getMoviePerson(searchValue);
// }