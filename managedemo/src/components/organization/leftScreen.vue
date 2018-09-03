<template>
    <div class="left-box">

      <div class="left-top-header">
        <div class="left-top-header-top">
          <p class="left-top-header-top-btn-yi" v-if="del">
            <img src="../../img/delete.png" alt="">
            <span>删除</span>
          </p>
          <p class="left-top-header-top-btn" v-if="ins">
            <img src="../../img/add.png" alt="">
            <span>创建分部</span>
          </p>
          <p class="left-top-header-top-btn" v-if="insFen">
            <img src="../../img/add.png" alt="">
            <span>创建部门</span>
          </p>
        </div>
      </div>
      <div class="left-bottom">
        <router-view/>
      </div>
    </div>
</template>

<script>
  import store from "../../store"
    export default {
        name: "left-screen",
      data(){
          return{
            del:false,
            ins:true,
            insFen:false
          }
      },
      methods:{
          zhi(){
            if (this.$store.state.xia == "1"){
                this.del=false,
                this.ins=true,
                this.insFen=false
            }else {
              this.del=true,
                this.ins=true,
                this.insFen=true
            }
          }
      },
      store,
      created(){
          let _this = this;
        setInterval(function () {
          _this.zhi();
          },500)

      }
    }
</script>

<style scoped>
  .left-box {
    width: 100%;
  }

  .left-top-header {
    border-bottom: 1px solid #e4e4e4;
  }

  .left-top-header-top {
    padding: 10px 0;
    margin-left: 16px;
    display: flex;
  }
  .left-top-header-top-btn-yi {
    padding: 0 10px 0 6px;
    font-size: 14px;
    align-items: center;
    color: #6a6a6a;
    display: flex;
    border: 1px solid #d0d0d0;
    cursor: pointer;
    background-color: #ffffff;
    transition: box-shadow 0.5s,background-color 0.5s;
    margin-left: 3px;
  }
  .left-top-header-top-btn-yi:hover{
    background-color: #f9f9f9;
    box-shadow:0px 1px 4px 1px #e4e4e4;
    transition: box-shadow 0.5s,background-color 0.5s;
  }
  .left-top-header-top-btn {
    padding: 0 10px 0 0;
    font-size: 14px;
    align-items: center;
    color: #6a6a6a;
    display: flex;
    border: 1px solid #d0d0d0;
    cursor: pointer;
    background-color: #ffffff;
    transition: box-shadow 0.5s,background-color 0.5s;
    margin-left: 3px;
  }
  .left-top-header-top-btn:hover{
    background-color: #f9f9f9;
    box-shadow:0px 1px 4px 1px #e4e4e4;
    transition: box-shadow 0.5s,background-color 0.5s;
  }

  .left-bottom {
    width: 100%;
    display: flex;
    justify-content: center;
  }


</style>
