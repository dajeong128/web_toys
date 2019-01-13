
document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("contents"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("shoppingCartList"); 
  document.body.insertBefore(newDiv, currentDiv); 
}

const instance = axios.create({
  baseURL: 'https://goods-204a7.firebaseio.com/'
})




instance.get('cart.json')
  .then(res => {
    const data = res.data
      console.log(data);

    const contents = document.querySelector('goods-contents');
    // const list = document.querySelector('.shopping-cart-list')
    const items = [];
    items.push(`
    <li>
        <p class="goods-name">상품명 : </p>
        <p class="goods-option">색깔 : / 사이즈 : </p>
        <p class="goods-price">가격 : </p>
        <span class="goods-shippingPrice"> +배송료 원</span>
    </li>
    `)

    // list.innerHTML = items.join('');


  })

  
