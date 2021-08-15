const shoppingCar = new Vue({
  el: '#shopping-car',
  data() {
    return {
      books: [{
        id: 1,
        name: '算法导论',
        publishTime: '2009-09',
        price: 88.5,
        count: 1
      },
        {
          id: 2,
          name: 'Effect Java',
          publishTime: '2017-04',
          price: 120,
          count: 1
        },
        {
          id: 3,
          name: 'Java编程思想',
          publishTime: '2018-07',
          price: 229.5,
          count: 1
        },
        {
          id: 4,
          name: 'Java核心技术',
          publishTime: '2019-09',
          price: 136,
          count: 1
        },
        {
          id: 5,
          name: '并发编程的艺术',
          publishTime: '2016-03',
          price: 66.8,
          count: 1
        }]
    };
  },
  methods: {},
})