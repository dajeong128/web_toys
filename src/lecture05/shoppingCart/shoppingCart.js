const goodsContents = document.querySelector('.goods-contents')
const totalPrice = document.querySelector('.total');
let totalSum = 0;
let getdata = [];

const instance = axios.create({
  baseURL: 'https://goods-204a7.firebaseio.com/'
})

instance.get('cart.json')
  .then(res => {
    // debugger;
    const data = res.data;
    const dataValue = Object.keys(data);
    console.log(data);
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

    var dataPrice = [];

    for (var i = 0; i < dataValue.length; i++) {
      if(data[i]) {
        if (dataValue.length > 0) {
          getdata.push(`
              <div class ="shoppingCartList">
                <div class = "cardList">
                  <p>상품명 : ${value[i].name}</p>
                  <p>색깔 : ${value[i].options.color} / 사이즈 : ${value[i].options.size} </p>
                  <p class="price">가격 : ${value[i].price.toLocaleString()}원<br><span style = "color:grey; font-size: 13px;">+배송료 ${value[i].shipping.price.toLocaleString()}원</span></p>
                  </div>
                <div class="input">
                  <input class="quantity" type="number" min="1" max="100" value="1"> 
                  <i class="fas fa-trash-alt" onclick="removeItem(event, ${dataValue[i]}, ${i})"></i>
                </div>
              </div>
             `)
          var addTotal = dataPrice.push(value[i].price)
          var reducer = (accumulator, currentValue) => accumulator + currentValue;
  
          /*가져온데이터정보*/
          // console.log(getdata)
  
          dataString = getdata.join('')
          goodsContents.innerHTML = dataString;
        }
      }
    }
    /*금액누적*/
    // console.log(dataPrice.reduce(reducer));

    totalSum = dataPrice.reduce(reducer);
    var price = [];
    price.push(`
        <div class="grandTotal">
          <p>합계 ${totalSum.toLocaleString()}원</p>
        </div>
      `)

    totalPrice.innerHTML = price;

    //   }
  }
  )
const removeItem = (e, key, index) => {
    const target = e.target.parentElement.parentElement;
    const currentPrice = e.target.parentElement.parentElement.querySelector('.price')
      .innerText.split('+')[0].match(/\d/gi).join('');

    instance.delete(`cart/${key}.json`)
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

        target.remove();
        totalSum = totalSum - parseInt(currentPrice);
        totalPrice.innerHTML = `
          <div class="grandTotal">
            <p>합계 ${totalSum.toLocaleString()}원</p>
          </div>
        `
        // getdata = getdata.filter((_, i) => !(i === index));
        // goodsContents.innerHTML = getdata.join('');
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


    // function deleteData(item, url) {
    //   return fetch(url + '/' + item, {
    //     method: 'delete'
    //   })
    //   .then(response => response.json());
    // }
    // console.log(cardList)


//   })
// }



