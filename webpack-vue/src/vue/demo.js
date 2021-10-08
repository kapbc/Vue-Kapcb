export default {
  template: `
    <div>
    <h2>这是demo.js中的demoComponent中的template</h2>
    {{ message }}
    <button @click="btnClick">按钮</button>
    </div>
  `,
  data () {
    return {
      message: 'Hello Webpack!',
    }
  },
  methods: {
    btnClick () {
      alert('button click!')
    }
  },
}