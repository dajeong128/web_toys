const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const timeElement = document.querySelector('[data-time]');
    timeElement.innerHTML = `${hours}:${minutes < 10 ? '0'+ minutes : minutes} `;
}

const getRandomBackgroundImage = () => {
    const API_KEY = 'dfa9e6b341b86ac6237a878db165b95cf795d10b567d0bda40c114fd2d7e36d0';
    fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&query=landscape&orientation=landscape`)
    .then(res=>res.json())
    .then(data => {
        const bgImg = data.urls.full;
        const bg = document.querySelector('[data-bg]');
        bg.style.background = `url(${bgImg})center center / cover no-repeat`;
       
    });
}

const init = () => {
    const nameInput = document.querySelector('[data-name] input')
    const nameContainer = document.querySelector('[data-name]')
    const name = localStorage.getItem('name');
    if (name && name.length > 0) {
        nameContainer.innerHTML = `<h1>${name}</h1>`
        // <button data-remove type='button'>삭제</button>;
        // const removeBtn = document.querySelector ('[data-remove]');
        // removeBtn.addEventListener('click', ()=>{
        //     localStorage.removeItem('name')
        //     ;
            // })
    } else {
        nameInput.addEventListener('keydown', (e)=> {
            if (e.key === 'Enter') {
                localStorage.setItem('name', nameInput.value);
                nameContainer.innerHTML = `<h1>${nameInput.value}</h1>`;

            }
        })
    }
}

init ();
getCurrentTime();
getRandomBackgroundImage();

function newItem() {
    const item = document.getElementById("input").value;
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    document.getElementById("input").value = "";
    ul.appendChild(li);

    li.onclick = removeItem;
  }
  
  document.body.onkeyup = function(ev) {
    if (ev.keyCode == 13) {
      newItem();
    }
  };
  
  function removeItem(ev) {
    ev.target.parentElement.removeChild(ev.target);
  }


  var close = document.getElementsByClassName("close");

for (const i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//   var myNodelist = document.getElementsByTagName("LI");

// for (const i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }


