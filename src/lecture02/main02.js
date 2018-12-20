let data;

function getMoviePerson(searchValue) {
  // window.location.href = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=b0cac97aa508433ca9835e54ab51d7cd&peopleNm=' + searchValue;
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
      

       
        const strItem =  filmos.split('|')
        const size = 3;
        const filmosSort = [];

        var newArray = new Array(Math.ceil(strItem.length / size)).fill("").map(function() {
            return this.splice(0, size) }, strItem.slice());  
        
        for (i=0; i<newArray.length; i++) {
            filmosSort.push(strItem[i]);
        }  
        
        filmosEl.innerHTML = `${filmosSort}\n`
        console.log(newArray)
        // filmosEl.innerHTML = newArray;

        
    })
}

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById("searchInput");
searchBtn.addEventListener("click", findMoviePerson);
function findMoviePerson() {
  let searchValue = searchInput.value;
  getMoviePerson(searchValue);
}
searchInput.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    // findMoviePerson();
  }
})

const formEl = document.querySelector('[data-input-form]');
formEl.addEventListener('submit', function (e) {
    findMoviePerson();
    e.preventDefault();
})
