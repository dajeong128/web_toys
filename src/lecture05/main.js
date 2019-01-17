// const goods = [];

const instance = axios.create({
  baseURL: 'https://goods-204a7.firebaseio.com/'
})


// const data = {
//   'name': '123',
//   'price': 210000
// }
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

      // goods.push(data[key]);

      for (let id in optionList) {
        options.push(`
                <option value="${Object.keys(optionList).indexOf(id)}">
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
                <p class="goods-price">${data[key].price.toLocaleString()}원</p>
                <span class="goods-shippingPrice"> +배송료 ${data[key].shipping.price.toLocaleString()}원</span>
                <i class="fas fa-cart-plus" style="float:right; cursor:pointer;" onclick="keepInCart(event, ${Object.keys(data).indexOf(key)})"></i>
             </li>
            `)
    }
    ul.innerHTML = items.join('');

    // const dataKey = data[key];
    // const goodsValue = [
    //     dataKey.name,
    //     dataKey.provider,
    //     dataKey.price,
    //     optionList[id],
    //     optionListId.color,
    //     optionListId.size,
    //     optionListId.stock,
    //     dataKey.shipping.price
    //     ]
  });


const keepInCart = (e, id) => {
  console.log(id);
  // 1. by client 
  // const item = goods.filter(value => value.id === id);
  // // instance.post('cart.json', item[0])
  // //   .then(res => console.log(res))
  // //   .catch(err => console.error(err));

  // 2. by connect with server
  instance.get(`goods/${id}.json`)
    .then(res => {
      // 1. 
    //   res.data.options = e.target.parentElement.querySelector('select').value;

      // 2.
      const targetValue = e.target.parentElement.querySelector('select').selectedOptions[0].value;
      instance.get(`goods/${id}/options/${targetValue}.json`)
        .then((optionData) => {
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
            .catch(err => console.error(err));
        })
    })
    .catch(err => console.error(err));

  //   )
  //   .catch(err => console.error(err));
  // axios({
  //     method: 'post',
  //     url: 'https://goods-204a7.firebaseio.com/goods/getShoppingData',
  //     data: {goodsValue},
  //     success: function () {
  //         Toastify({
  //             text: "장바구니에 추가되었습니다.",
  //             duration: 3000,
  //             destination: "https://github.com/apvarun/toastify-js",
  //             newWindow: true,
  //             close: true,
  //             gravity: "top", // `top` or `bottom`
  //             positionLeft: false, // `true` or `false`
  //             backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  //         }).showToast();
  //     },
  //     error: function () {
  //         Toastify({
  //             text: "실패하였습니다.",
  //             duration: 3000,
  //             destination: "https://github.com/apvarun/toastify-js",
  //             newWindow: true,
  //             close: true,
  //             gravity: "top", // `top` or `bottom`
  //             positionLeft: false, // `true` or `false`
  //             backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  //         }).showToast();
  //     }
  // })

};





