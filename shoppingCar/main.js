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
        /**
         * 当数量减少为0时,禁用按钮点击,禁止交互
         */
        disabled: false,
      },
        {
          id: 2,
          name: 'Effect Java',
          publishTime: '2017-04',
          price: 120.00,
          count: 1,
          disabled: false,
        },
        {
          id: 3,
          name: 'Java编程思想',
          publishTime: '2018-07',
          price: 229.50,
          count: 1,
          disabled: false,
        },
        {
          id: 4,
          name: 'Java核心技术',
          publishTime: '2019-09',
          price: 136.00,
          count: 1,
          disabled: false,
        },
        {
          id: 5,
          name: '并发编程的艺术',
          publishTime: '2016-03',
          price: 66.80,
          count: 1,
          disabled: false,
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
        return;
      }
      this.books[index].disabled = true;
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
  watch: {}
})