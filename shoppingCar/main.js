const shoppingCar = new Vue({
  el: '#shopping-car',
  data() {
    return {
      disabled: false,
      books: [{
        id: 1,
        name: '算法导论',
        publishTime: '2009-09',
        price: 88.50,
        count: 1,
      },
        {
          id: 2,
          name: 'Effect Java',
          publishTime: '2017-04',
          price: 120.00,
          count: 1,
        },
        {
          id: 3,
          name: 'Java编程思想',
          publishTime: '2018-07',
          price: 229.50,
          count: 1,
        },
        {
          id: 4,
          name: 'Java核心技术',
          publishTime: '2019-09',
          price: 136.00,
          count: 1,
        },
        {
          id: 5,
          name: '并发编程的艺术',
          publishTime: '2016-03',
          price: 66.80,
          count: 1,
        }]
    };
  },
  methods: {
    _increaseCount(index) {
      this.books[index].count += 1;
    },
    _decreaseCount(index) {
      if (this.books[index].count > 1) {
        this.books[index].count -= 1;
      }
    },
    _getFinalPrice(price) {
      <!--数字的 toFixed(需要保留的位数)-->
      return '￥' + price.toFixed(2);
    },
    _remove(index) {
      this.books.splice(index, 1);
    }
  },
  /**
   * 过滤器会自动将参数传递到函数中来
   */
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      this.books.forEach((value => {
        totalPrice += value.price * value.count;
      }));
      return totalPrice;
    },
    totalPriceForIn: function () {
      let totalPrice = 0;
      for (const index in this.books) {
        totalPrice += this.books[index].price * this.books[index].count;
      }
      return totalPrice;
    },
    totalPriceForReduce() {
      return this.books.map((value) => {
        return value.price * value.count
      }).reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      })
    },
    totalPriceForReduceTwo() {
      return this.books.reduce(((previousValue, currentValue) => {
        return previousValue + currentValue.price * currentValue.count;
      }), 0);
    }
  },
});

/**
 * 函数式编程
 * filter中的回调函数有一个要求: 必须返回一个布尔值
 * true: 当返回值为true时, 函数内部会自动将这次回调的参数加入到新的数组中
 * false: 当返回值为false时, 函数内部会过滤掉当前元素
 */
const array = [10, 20, 30, 40, 100, 200, 300, 400, 70, 80, 30];
let number = array.filter((value) => {
  return value >= 100;
}).reduce(((previousValue, currentValue) => {
  console.log('previous value is : ' + previousValue + ' current value is : ' + currentValue);
  return previousValue + currentValue;
}));
console.log(number);

/**
 * 会遍历 array.length次
 * 第一次 previousValue : 0 , currentValue : 10
 * 第二次 previousValue : 就是第一次函数调用时的返回值 , currentValue : 20
 */
array.reduce((previousValue, currentValue) => {
  console.log('previousValue is : ' + previousValue + ' currentValue is : ' + currentValue);
  return previousValue;
}, 0);