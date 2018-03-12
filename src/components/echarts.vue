<!--
 -  2017/12/15  lize
 -->
<template>
  <div>

    <div>这里是echarts页面</div>

    <div id="echartContainer" style="width:100%; height:500px"></div>

    <!--科研机构-->
    <div id="kyjg" style="width: 100%;height: 400px;float: left;margin-top: 20px;"></div>

    <div id="map" style="width: 100%;height: 500px;float: left;margin-left: 50px;margin-top: 50px;"></div>

    <div style = "height:800px;">
      <iframe src="http://123.126.88.137:8080/cal" frameborder="0"    style = "width:100%;height:100%;" ></iframe>
    </div>

    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in items" :key="item">
          <!--<h3>{{ item }}</h3>-->
          <img :src="item.src" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>

</template>

<script>
  import echarts from 'echarts'
  import '../../static/js/shanxi1.js'


    export default {
        data () {
            return {
                items:[
                  {src:'../../static/phone/1.jpg'},
                  {src:'../../static/phone/2.jpg'},
                  {src:'../../static/phone/3.jpg'},
                  {src:'../../static/phone/4.jpg'},
                  {src:'../../static/phone/5.jpg'},
                ]
            }
        },
        mounted () {
          const myChart = echarts.init(document.getElementById('echartContainer'));
          let option3 = {
            backgroundColor:'#1A244C',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            /* legend: {
             data: ['2011年']
             },*/
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              position:'top',
              axisLine:{
                lineStyle:{
                  color:'#184CC3'
                }
              },
              axisLabel:{
                color:'#22EAF5'
              },
              type: 'value',
              boundaryGap: [0, 0.01],
              splitLine:{
                show:false
              }
            },
            yAxis: {
              name:'市级区域',
              nameTextStyle:{
                color:'#22E7F2',
                fontSize:'18',
              },
              nameGap:30,
              axisLine:{
                lineStyle:{
                  color:'#184CC3'
                }
              },
              axisLabel:{
                color:'#22EAF5'
              },
              type: 'category',
              data: ['渭南','铜川','商洛','安康','汉中','宝鸡','榆林','延安','咸阳','西安'],
            },
            series: [
              {
                name: '2011年',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230],
                label: {
                  normal: {
                    show: true,
                    position: 'right'
                  }
                },
                itemStyle: {
                  normal: {
                    color: function(params) {
                      var colorList = [ '#DC3B3B','#DC6E3B','#E6A73D','#7E9E3C','#3C9E58', '#3C9E9D','#3C699E','#6483A7','#888888','#134868' ].reverse();
                      return colorList[params.dataIndex]
                    },
                    label: { show: false }
                  }
                }
              }
            ]
          };



          myChart.setOption(option3);
          const myChart1 = echarts.init(document.getElementById('kyjg'));
          let option1 = {
            backgroundColor:'#18214A',
            title: {
              text: '科研机构数量分析',
              left:'center',
              textStyle:{
                color:'#1FD2DF'
              }
            },
            tooltip: {},
            legend: {
              data: ['西安', '咸阳'],
              left:'10%',
              top:'10%',
              orient:'vertical',
              textStyle:{
                color:'#f1f1f1'
              }
            },
            radar: {
              // shape: 'circle',
              name: {
                textStyle: {
                  color: '#ffffff',
                  borderRadius: 3,
                  padding: [3, 5]
                }
              },
              startAngle:0,
              radius:'50%',
              indicator: [
                { name: '高等院校', max: 6500},
                { name: '科研院所', max: 16000},
                { name: '科技中介', max: 30000},
                { name: '实验室', max: 38000},
                { name: '科技企业', max: 52000},
                { name: '军工单位', max: 25000}
              ],
              splitLine: {
                lineStyle: {
                  color: [
                    'rgba(160,162, 171, 1)'
                  ].reverse()
                }
              },
              splitArea: {
                // show: false
                areaStyle:{
                  color:'#484d61'
                }
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(168, 65, 78, 1)'
                }
              }
            },
            series: [{
              name: '西安 vs 咸阳',
              type: 'radar',
              data : [
                {
                  value : [4300, 10000, 28000, 35000, 50000, 19000],
                  name : '西安',
                  itemStyle: {
                    normal: {
                      color: '#44ccd6'
                    }
                  },
                  areaStyle: {
                    normal: {
                      opacity: 0.7
                    }
                  }
                },
                {
                  value : [5000, 14000, 28000, 31000, 42000, 21000],
                  name : '咸阳',
                  itemStyle: {
                    normal: {
                      color: '#cd5054'
                    }
                  },
                  areaStyle: {
                    normal: {
                      opacity: 0.7
                    }
                  }
                }
              ]
            }]
          };
          myChart1.setOption(option1);
          /*地图*/
          const myChart6 = echarts.init(document.getElementById('map'));




          let option6 = {
            backgroundColor:'#19234A',
            title : {
              text: '军民融合企业陕西分布数据图',
              left: 'center',
              top: 'top',
              textStyle:{
                color:'#22EBF6'
              }
            },
            tooltip : {
              trigger: 'item',
//              /*formatter : function (params) {
//               console.log(params);
//               var value = (params.value + '').split('.');
//               value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
//               + '.' + value[1];
//               return params.seriesName + '<br/>' + params.name + ' : ' + value;
//               }*/
            },
            visualMap: {
              type: 'continuous',
              min: 0,
              max: 100,
              text:['高','低'],
              realtime: false,
              calculable : true,
              color: ['#3859DC','#224F81','#142B50'],
              textStyle:{
                color:'#22EBF6'
              }
            },
            series : [
              {
                name: 'city',
                type: 'map',
                mapType: '陕西',
                roam: true,
                label:{
                  normal:{
                    show:true,
                    position:'top',
                    color:'#22ebf6'
                  }

                },
                itemStyle:{
                  emphasis:{
                    label:{show:true}
                  },
                  normal:{
                    color:'#3859DC',
                    areaColor:'#1A244B',
                    borderColor:'#22ebf6'
                  }
                },
                data:[
                  {name : '榆林市', value : 20},
                  {name : '延安市', value : 90},
                  {name : '铜川市', value : 13},
                  {name : '咸阳市', value : 5},
                  {name : '渭南市', value : 40},
                  {name : '宝鸡市', value : 60},
                  {name : '西安市', value : 80},
                  {name : '商洛市', value : 10},
                  {name : '汉中市', value : 50},
                  {name : '安康市', value : 60}
                ]
              }
            ]
          };
          myChart6.setOption(option6);


        }
    }
</script>

<style scoped lang="scss">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
