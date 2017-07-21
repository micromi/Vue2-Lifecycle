<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>开发技术栈</h2>
        
        <template v-for="technology in technologyList">
          <h3>{{ technology.title}}</h3>
          <ul>
            <li v-for="item in technology.list">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!technology.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      
      <div class="banner-show">
        <a href="javascript:;">
          <img src="../assets/banner.jpg">
        </a>
      </div>

      <div class="index-board-list">
        <div
        class="index-board-item"
        v-for="(item, index) in boardList"
        :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">详情</router-link>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  created() {
    // ajax请求数据，渲染页面
  },
  data() {
    return {
      technologyList: {
        frontend: {
          title: '前端技术',
          list: [
            {
              name: 'HTML',
              url: '##',
            },
            {
              name: 'CSS',
              url: '##',
            },
            {
              name: 'Javascript',
              url: '##',
              hot: true,
            },
            {
              name: 'jQuery',
              url: '##',
            },
          ],
        },
        backend: {
          title: '后端技术',
          last: true,
          list: [
            {
              name: 'PHP',
              url: '##',
            },
            {
              name: 'JAVA',
              url: '##',
              hot: true,
            },
            {
              name: 'Python',
              url: '##',
            },
            {
              name: 'C++',
              url: '##',
            },
          ],
        },
      },
      newsList: [
        {
          id: 1,
          title: '新闻条目1新闻条目1新闻条目1新闻条目1',
          url: '##',
        },
        {
          id: 2,
          title: '新闻条目2新闻条目2新闻条目2新闻条目2',
          url: '##',
        },
        {
          id: 3,
          title: '新闻条3新闻条3新闻条3',
          url: '##',
        },
        {
          id: 4,
          title: '新闻条4广告发布',
          url: '##',
        },
      ],
      boardList: [
        {
          title: '前瞻技术',
          description: '前瞻技术引领着技术革新',
          id: 'car',
          toKey: 'analysis',
          saleout: false,
        },
        {
          title: '积极传播',
          description: '积极传播，更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false,
        },
        {
          title: '学无止境',
          description: '永远保持最前端的学习速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true,
        },
        {
          title: '勇攀高峰',
          description: '勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false,
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.banner-show {
  width: 900px;
  height: 506px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.banner-show img {
  width: 100%;
}
</style>
