const instance = axios.create({
  baseURL: 'https://goods-204a7.firebaseio.com/'
})

instance.get('cart.json')
  .then(res => {
    // debugger;
    const data = res.data;
    const dataValue = Object.keys(data);
    /*데이터의 갯수*/
    // console.log(dataValue.length);

    /*post 데이터 수만큼 shoppingCartList div 추가 */
    // for (var i = 0; i < dataValue.length; i++) {
    //   if (dataValue.length > 0) {
    // const addList = document.createElement("div")
    // const contents = document.querySelector('.goods-contents');
    // addList.className = 'shoppingCartList';
    // const shoppingCartList = document.querySelector('.shoppingCartList')
    // contents.appendChild(addList)

    /* 장바구니데이터 노출 */
    var value = Object.values(data)
    // console.log(value);


    var getdata = [];
    var dataPrice = [];

    for (var i = 0; i < dataValue.length; i++) {
      if (dataValue.length > 0) {
        getdata.push(`
            <div class ="shoppingCartList">
              <div class = "cardList">
                
                <p>상품명 : ${value[i].name}</p>
                <p>색깔 : ${value[i].options.color} / 사이즈 : ${value[i].options.size} </p>
                <p>가격 : ${value[i].price.toLocaleString()}원<br><span style = "color:grey; font-size: 13px;">+배송료 ${value[i].shipping.price.toLocaleString()}원</span></p>
                </div>
              <div class="input">
                <input class="quantity" type="number" min="1" max="100" value="1"> 
                <i class="fas fa-trash-alt" onclick="removeItem(event)"></i>
              </div>
            </div>
           `)
        var addTotal = dataPrice.push(value[i].price)
        var reducer = (accumulator, currentValue) => accumulator + currentValue;

        /*가져온데이터정보*/
        // console.log(getdata)

        var goodsContents = document.querySelector('.goods-contents')
        dataString = getdata.join('')
        goodsContents.innerHTML = dataString;
      }
    }
    /*금액누적*/
    // console.log(dataPrice.reduce(reducer));

    var total = document.querySelector('.total');
    var price = [];
    price.push(`
        <div class="grandTotal">
          <p>합계 ${dataPrice.reduce(reducer).toLocaleString()}원</p>
        </div>
      `)

    var totalPrice = document.querySelector('.total');
    totalPrice.innerHTML = price;

    //   }
  }
  )
const removeItem = (e) => {
  axios
    instance.delete('cart.json', value)
    .then(function (response) {
      Toastify({
        text: "장바구니에서 삭제되었습니다.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        positionLeft: false, // `true` or `false`
        backgroundColor: "linear-gradient(to right, #f03141, #fe7406)",
      }).showToast();

      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  // const removeItem = (e)=> {
  //   instance.delete(`goods.json`)
  //   .then(res => {
  //   Toastify({
  //     text: "장바구니에서 삭제되었습니다.",
  //     duration: 3000,
  //     destination: "https://github.com/apvarun/toastify-js",
  //     newWindow: true,
  //     close: true,
  //     gravity: "top", // `top` or `bottom`
  //     positionLeft: false, // `true` or `false`
  //     backgroundColor: "linear-gradient(to right, #f03141, #fe7406)",
  //   }).showToast();


    // e.target.parentElement.parentElement.remove();

    // function deleteData(item, url) {
    //   return fetch(url + '/' + item, {
    //     method: 'delete'
    //   })
    //   .then(response => response.json());
    // }
    // console.log(cardList)


//   })
// }



