const instance = axios.create({
  baseURL: 'https://goods-204a7.firebaseio.com/goods/getShoppingData'
})

instance.get('goods.json')
  .then(res => {
    const data = res.data;
  }
