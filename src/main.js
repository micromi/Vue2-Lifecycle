// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 模块化加载
import Vue from 'vue';
import App from './App';

// console.log(Vue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  // template: '<App/>',
  components: { App },
  data() {
    return {
      number: 1,
      arr: [10, 12, 13],
    };
  },
  methods: {
    getLists() {
      // console.log('getLists函数执行了...');
      // return 'getLists函数执行了...';
      // setTimeout(() => { // 模拟异步数据
      //   this.arr = [14, 15, 16, 17];
      //   console.log('created: ', document.querySelectorAll('li').length);
      //   this.$nextTick(() => {
      //     console.log('nextTick: ', document.querySelectorAll('li').length);
      //   });
      // }, 10);
      // setTimeout(() => { // 模拟异步数据
      //   this.arr = [24, 25, 26, 27, 28];
      //   console.log('created: ', document.querySelectorAll('li').length);
      //   this.$nextTick(() => {
      //     console.log('nextTick: ', document.querySelectorAll('li').length);
      //   });
      // }, 1000);
    },
    init() {
      // do something
      this.number = 2;
      return 'init函数执行了';
    },
  },
  // 在实例初始化之后，数据监测，计算属性，方法，watch/event事件回调之前被调用
  beforeCreate() {
    console.log('beforeCreate 钩子执行...');
    console.log(this.number); // 数据，方法读取不到
    // console.log(this.init()); // 直接报错
  },
  // 数据观测，属性和方法的运算， watch/event 事件回调,$el属性目前不可见
  // 异步数据的请求适宜在created的钩子中调用，初始化
  created() {
    // console.log('cteated 钩子执行...');
    // console.log(this.number);
    // console.log(this.init());
    // console.log(this.$el); // undefined
    // // this.getLists(); // 异步数据，先执行mounted，后执行created
  },
  // 在挂载开始之前被调用：相关的render函数首次被调用
  beforeMount() {
    // console.log('beforeMount 钩子执行...');
    // console.log(this.number);
    // console.log(this.$el); // <div id="app"></div>
  },
  // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
  // 挂载完成，模板中的html已经渲染到页面中，此时一般可做一些ajax操作
  // 初始数据的dom渲染完毕，可以获取到dom
  mounted() {
    // console.log('mounted 钩子执行...');
    // console.log(this.number);
    // console.log(this.$el); // 渲染后结构
    // console.log('mounted: ', document.querySelectorAll('li').length);
    // this.getLists(); // 异步数据，先执行mounted，后执行created
  },
  // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
  // 在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程
  beforeUpdate() {
    // console.log('beforeUpdate 钩子执行...');
    // this.number = 10;
    // console.log('beforeUpdate：', document.querySelectorAll('li').length);
    // this.init();
    // console.log(this.number);
  },
  // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  // 组件 DOM 已经更新，现在可以执行依赖于 DOM 的操作(不建议在此操作dom,因为异步数据事件队列的缘故)
  // 数据更新完毕:如果对数据做统一的处理在update钩子中处理即可，
  // 如果想区分不同的数据更新，同时对dom操作，使用nextTick函数处理，
  // 如果不对dom操作，可以使用watch对数据更新后操作
  updated() {
    // console.log('updated 钩子执行...');
    // console.log('updated: ', document.querySelectorAll('li').length);
    // console.log(this.number);
  },
  // 对具体某个数据变化可做处理
  watch: {
    arr() {
      // console.log('arr数组变化了...');
    },
  },
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() {
    console.log('beforeDestroy 钩子执行...');
    console.log(this.number);
  },
  // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
  destroyed() {
    console.log('destroyed 钩子执行...');
    console.log(this.number);
  },
});

console.log(vm); // vue实例
// vm.$destroy();
