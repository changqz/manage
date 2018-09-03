<template>
  <div id="max">

    <div class="box">

      <header id="header">
        <div class="header-div">组织结构</div>
      </header>
      <div class="center">
        <div class="center-div">
          <div class="center-div-top">
            <span class="center-div-top-span center-div-top-span-yi">组织结构</span>
            <span class="center-div-top-span center-div-top-span-er">自定义字段</span>
          </div>
          <div class="center-div-bottom">
            <div class="center-div-bottom-left">
              <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>
            <div class="center-div-bottom-right">
              <router-view/>
            </div>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
    import store from "../../store"
    export default {
        name: "hite-vision",
      data(){
          return{
            data: [
              {
                label: '鸿合科技2',
                children: [
                  {
                    label: '鸿合科技-信息部',
                    children: [
                    {
                      label: '鸿合科技信息部',
                    children: [{
                        label:'flag'
                    }]
                    },
                    {
                      label: '123'
                    },
                    {
                      label: '123'
                    },
                    {
                      label: '123'
                    },
                  ]
                  },
                  {
                    label: '鸿合科技-财务部',
                    children: [
                      {
                        label:'鸿合科技财务部',
                        children:[
                          {
                            label: '123123',
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          }
                        ]
                      },

                    ]
                  },
                  {
                    label: '鸿合科技-财务部',
                    children: [
                      {
                        label:'鸿合科技财务部',
                        children:[
                          {
                            label: '123123',
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          }
                        ]
                      },

                    ]
                  },
                  {
                    label: '鸿合科技-财务部',
                    children: [
                      {
                        label:'鸿合科技财务部',
                        children:[
                          {
                            label: '123123',
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          }
                        ]
                      },

                    ]
                  },
                  {
                    label: '鸿合科技-财务部',
                    children: [
                      {
                        label:'鸿合科技财务部',
                        children:[
                          {
                            label: '123123',
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          }
                        ]
                      },

                    ]
                  },
                  {
                    label: '鸿合科技-财务部',
                    children: [
                      {
                        label:'鸿合科技财务部',
                        children:[
                          {
                            label: '123123',
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          }
                        ]
                      },

                    ]
                  },
                  {
                    label: '鸿合科技-财务部',
                    children: [
                      {
                        label:'鸿合科技财务部',
                        children:[
                          {
                            label: '123123',
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          },
                          {
                            label: '123123'
                          }
                        ]
                      },

                    ]
                  },
                ]
              }

              ],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          }
      },
      methods:{
        handleNodeClick(data,$treeNodeId) {
          this.$store.state.xia = $treeNodeId.id;
          console.log(this.$store.state.xia)
        }
      },
      created(){

      },
      store
    }
</script>

<style scoped>
  #max {
    width: 100%;
    height: 615px;
    background-color: #f4f4f4;
    padding-top: 30px;
  }

  .box {
    width: 80%;
    margin: 0 auto;
    box-shadow: 0px 1px 5px 1px #dddddd;
  }

  #header {
    width: 100%;
    height: 36px;
    background-color: #fafafa;
    line-height: 36px;
  }

  .header-div {
    width: 96%;
    margin: 0 auto;
    color: #797979;
    font-size: 14px;
  }

  .center {
    width: 100%;
    background-color: #ffffff;
    padding: 15px 0;
  }

  .center-div {
    width: 93%;
    margin: 0 auto;
  }

  .center-div-top {
    width: 100%;
    box-shadow: 1px 1px 2px -1px #dddddd;
  }

  .center-div-top-span {
    display: inline-block;
    padding: 4px 14px;
    font-size: 14px;
    background-color: #eeeeee;
    border-radius: 5px 5px 0 0;
    cursor: pointer;
    color: #727272;
  }

  .center-div-top-span-er {
    background-color: white;
    color: #828282;
  }
  .center-div-top-span-er:hover{
    background-color: #eeeeee;
  }

  .center-div-bottom {
    width: 100%;
    margin-top: 9px;
    display: flex;
  }

  .center-div-bottom-left {
    width: 243px;
    height: 435px;
    overflow-y: auto;
  }


  /*左侧*/

  .center-div-bottom-right {
    margin-left: 20px;
    border-left: 1px solid #e4e4e4;
    flex: 1;
  }
</style>
