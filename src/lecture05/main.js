const instance = axios.create({
    baseURL: 'https://goods-204a7.firebaseio.com/'
})


const data = {
    'name': '123',
    'price': 210000
}
// instance.post('goods.json', data)
instance.get('goods.json')
    .then(res => {
        const data = res.data;
        const contents = document.querySelector('goods-contents');
        const ul = document.querySelector('.goods-items')
        const items = [];


        for (let key in data) {
            let options = [];
            let optionList = data[key].options
            for (let id in optionList) {
                options.push(`
                <option>
                    ${optionList[id].color} ${optionList[id].size} ${optionList[id].stock}
                </option>
                `)
            }
            items.push(`
            <li>
                <img src="https://picsum.photos/200/300/?random">
                <p class="goods-name">${data[key].name}</p>
                <select>
                ${options.join('')};
                </select>
                <p class="goods-seller">${data[key].provider}</p>

                <i class="fas fa-cart-plus" style="float:right; cursor:pointer;" onclick="keepInCart(event)"></i>
             </li>
            `)
        }
        ul.innerHTML = items.join('');

        const dataKey = data[key];
        const goodsValue = [
            dataKey.name,
            dataKey.provider,
            dataKey.price,
            optionList[id],
            optionListId.color,
            optionListId.size,
            optionListId.stock,
            dataKey.shipping.price
            ]
    });

function openCartList() {
    window.open("http://localhost:3006/src/lecture05/shoppingCart/shoppingCart.html");
}


const keepInCart = e => {

    axios({
        method: 'post',
        url: 'https://goods-204a7.firebaseio.com/goods/getShoppingData',
        data: {goodsValue},
        success: function () {
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
        },
        error: function () {
            Toastify({
                text: "실패하였습니다.",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                positionLeft: false, // `true` or `false`
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            }).showToast();

        }
    })

};
           
    



