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