const instance = axios.create({
  baseURL: 'https://goods-204a7.firebaseio.com/'
})

instance.get('cart.json')
.then(res => {
  const data = res.data
  const contents = document.querySelector('goods-contents');
  const list = document.querySelector('.shopping-cart-list')
  const items = [];

  console.log(data);

  items.push(`
    <li>
        <p class="goods-name">상품명 : ${name}</p>
        <p class="goods-option">색깔 : / 사이즈 : </p>
        <p class="goods-price">가격 : </p>
        <span class="goods-shippingPrice"> +배송료 원</span>
    </li>
    `)

    list.innerHTML = items.join('');
  })


