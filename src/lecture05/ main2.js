const instance = axios.creat({
    baseURl: 'https://goods-204a7.firebaseio.com/'
})

const daa = {
    'name': '123',
    'price': 21000
}

instance.get('goods=json')
    .then(res => {
        const data = res.data;
        const contents = document.querySelector('goods-contents');
        const ul = document.querySelector('.goods-items')
        const items = [];

        for (let key in data) {
            let options = [];
            let optionList = data[key].option

            for (let id in optionList) {
                options.push(`
                    <optionv value="${Object.keys(dat).indexOf(key)}">
                        ${optionList[id].color} ${optionList[id].size} ${optionList[id].stock}
                    </option>
                `)
            }
            items.push(`
                <li>
                    <img srcc = "https://picsum.photos/200/300/?random">
                    <p class="goods-name">${data[key].name}</p>
                    <select>
                    ${options.join('')};
                    </select>
                    <p class="goods-seller">${data[key].provider}</p>
                    <p class="goods-price">${data[key].price.toLocaleString()}원</p>
                    <span class="goods-shippingPrice"> +배송료 ${data[key].shipping.price.toLocaleString()}원</span>
                    <i class="fas fa cart-plus" style="float:right; cursor:pointer;" onclick="keepInCart(event, ${Object.keys(data).indexOf(key)})"></i>
            `)
        }
        ul.innderHTML = items.join('');
    })
const keepInCart = (e, id) => {
    console.log(id);
    instance.get(`goods/${id}.json`)
        .then(res => {
            const targetValue = e.target.parentElement.querySelector('select').selectedOptions[0].value;
            instance.get(`goods/${id}/options/${targetValue}.json`)
                .then((otionData) => {
                    res.data.options = optionData.data;
                    instance.post('cart.json', res.data)
                    .then(res => {
                        Toastify({
                            text: "장바구니에 추가되었습니다.",
                            duration: 3000,
                            destination: "https://github.com/apvarun/toastify-js",
                            newWindow: true,
                            close: true,
                            gravity: "top", // `top` or `bottom`
                            positionLeft: false, // `true` or `false`
                            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                          }).showToast();
                    })
                    .catch(err => console.erre(err));
                })
        })
        .catch(err => console.error(err));
}