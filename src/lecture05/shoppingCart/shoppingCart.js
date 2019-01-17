const instance = axios.create({
  baseURL: 'https://goods-204a7.firebaseio.com/'
})

instance.get('cart.json')
  .then(res => {
    // debugger;
    const data = res.data;
    const dataValue = Object.keys(data);
    console.log(dataValue.length);

    /*post 데이터 수만큼 shoppingCartList div 추가 */
    for (var i = 0; i < dataValue.length; i++) {
      if (dataValue.length > 0) {
        // const addList = document.createElement("div")
        // const contents = document.querySelector('.goods-contents');
        // addList.className = 'shoppingCartList';
        // const shoppingCartList = document.querySelector('.shoppingCartList')

        // contents.appendChild(addList)

        /* 장바구니데이터 노출 */
        var value = Object.values(data)

        var getdata = [];
        
        for (var i = 0; i < dataValue.length; i++) {
          if (dataValue.length > 0) {        
            getdata.push(`
            <div class ="shoppingCartList">
              <p>${value[i].name}</p><br>
              <p>색깔 : ${value[i].options.color} + / + 사이즈 : ${value[i].options.size} </p>
              <p>가격 : ${value[i].price}</p>
              <p>+배송료 ${value[i].shipping.method}</p>
            </div>
           `)
          }

        console.log(getdata)
        var goodsContents = document.querySelector('.goods-contents')
        dataString = getdata.join('')
        goodsContents.innerHTML = dataString;
        }
      } 
    }
  })


