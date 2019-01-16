const instance = axios.create({
  baseURL: 'https://goods-204a7.firebaseio.com/'
})

instance.get('cart.json')
  .then(res => {
    const data = res.data;
    const dataValue = Object.keys(data);
    console.log(dataValue.length);

    for (var i = 0; i < dataValue.length; i++) {
      if (dataValue.length > 0) {
        const addList = document.createElement("div")
        const contents = document.querySelector('.goods-contents');
        addList.className = 'shoppingCartList';

        contents.appendChild(addList)
      }
    }

    const items=[];

    const value = Object.values(data)
    // console.log(Object.values(value));
    value.forEach( value => console.log(value) );
  
    // value.forEach (items.push)

    // // const list = document.querySelector('.shopping-cart-list')
    // for (var i = 0; i < dataValue.length; i++) {
    //   if (dataValue.length > 0) {
        
        
    //     const product = [];
    //     // var newProduct = {
    //     //   product_id: null,
    //     //   product_color: null,
    //     //   product_size: null,
    //     //   product_qty: 0,
    //     //   product_price: 0.00,
    //     // };
    //     // newProduct.product_id = productID;
    //     // newProduct.product_desc = product_desc;
    //     // newProduct.product_qty = qty;
    //     // newProduct.product_price = price;


    //     // products.push(newProduct);
    //   }
    // }


    // list.innerHTML = items.join('');


  })


