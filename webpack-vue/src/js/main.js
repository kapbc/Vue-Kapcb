import Vue from 'vue';
// import Demo from '../vue/demo';
import DemoComponent from '../vue/demoComponent'

// const demo = new Vue({
//   el: '#demo',
//   // 这里定义的template在编译的时候会被vue复制到在html页面中挂载的元素下
//   // 即会被复制到index.html中的<div id="demo"></div>里面
//   template: `
//     <div>
//     <h2>这是main.js中的template</h2>
//     {{ message }}
//     <button @click="btnClick">按钮</button>
//     </div>
//   `,
//   data: {
//     message: 'Hello Webpack!'
//   },
//   methods: {
//     btnClick() {
//       alert('button click!');
//     }
//   }
// });

// const demoComponent = {
//   template: `
//     <div>
//     <h2>这是main.js中的demoComponent中的template</h2>
//     {{ message }}
//     <button @click="btnClick">按钮</button>
//     </div>
//   `,
//   data() {
//     return {
//       message: 'Hello Webpack!',
//     }
//   },
//   methods: {
//     btnClick() {
//       alert('button click!');
//     }
//   },
// };

new Vue({
  el: '#demo',
  template: '<demoComponent/>',
  components: {
    demoComponent: DemoComponent,
  }
});