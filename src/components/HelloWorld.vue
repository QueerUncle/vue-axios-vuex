<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <li @click = "vuexFn">vuex事件测试</li>
      <li>{{$store.state.count}}</li>
      <li @click = "axiosfN">axios_CLIAK</li>
      <li @click = "echartsFN">echarts</li>
    </ul>
    <ul>
      <li v-for="(item,index) in arr">{{item.title}}</li>
    </ul>
    <div class = "boxDiv">
      <span>奥术大师大奥术大师大所大所大所多奥术大师大所大所大所多奥术大师大所大所大所多萨达所大所大所大所大所多萨达所大所大所大撒所多撒大大撒所大所多撒大所大所大所多撒多</span>
    </div>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import api from '../../static/util/api.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[],
    }
  },
  mounted(){

  },
  methods:{
    vuexFn(){

      this.$store.commit('increment')

      console.log(this.$store.state.count);

    },
    echartsFN(){

        this.$router.push('/echarts');
    },
//    axiosfN(){
//
//        let url = '/api/resources/aggregator/home/resources';
////        let url = 'api/resources/aggregator/home/filter';
//
//        let method = 'get';
////        let method = 'post';
//
//        let params = {
//              pageNo:0,
//              pageSize:10,
//        };
////      let params = {
////        s:{
////
////          pageNo:0,
////          pageSize:10,
////          applyScene:'CBim',
////          status:1,
////          tags:[
////            {
////              categoryId:1958
////            }
////          ]
////        },
////        t:1958
////
////      };
//
//        api.fetch(url,method,params)
//          .then( (e) =>{
//
//              console.log('正确 ++++++++++++返回数据',e)
//          })
//          .catch( (err) =>{
//
//            console.log('错误 ++++++++++++返回数据',err)
//
//          })
//
////      this.$ajax.get('../../static/js/text-list.json')
////      .then((e) =>{
////          console.log(e);
////          this.arr = e.data;
////      })
////        .catch((err) =>{
////
////            console.log(err)
////
////        })
//
//
//    }
    axiosfN(){

      let paramslibName = {
              pageNo:0,
              pageSize:10,

      };

      let params = {
        pageNo:0,
        pageSize:10,

      };

      api.aggregatorRes(paramslibName,(e) =>{

            console.log('返回数据',e)
      })
      api.getLib(params,(e) =>{
          console.log('返回库',e)

      })
      let p = {
        s:{
          pageNo:0,
          pageSize:10,
          applyScene:'CBim',
          status:1,
          tags:[
            {
              categoryId:1958
            }
          ]
        },
        t:1958
      };
      api.aggregatorFilter(p,(e) =>{
        console.log('返资源',e)

      })

      let objas = {
            arr:[380],
            libName:'做法库111'
          }

      api.publishResource(objas,(e) =>{

          console.log('lallalalala',e)
      })

//
//      let Aa = {
//          id:281,
//          name:"lize测试库11",
//
//          resourceTemplate:{
//            id:134
//          },
//          sequence:0,
//          status:0,
//          visibility:0
//      }
//
//      api.updateLib(Aa,(e) =>{
//
//          console.log('修改库',e)
//      })
//      let PK = 283
//      api.deleteLib(PK,(e) =>{
//
//          console.log('删除数据',e)
//
//      })



    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 0.1rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .boxDiv{
    width:100%;
    height:80px;
    background: pink;
  }
  .boxDiv span{

    font-size: 31px;

  }
</style>
