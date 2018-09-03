<template>
    <div class="left-bottom-box">
      <div class="left-bottom-box-div">
        <span class="left-bottom-box-div-span">部门编码
          <span class="left-bottom-box-div-span-er">*</span></span>
        <input type="text" v-model="bianma" class="left-bottom-div-input">
      </div>
      <div class="left-bottom-box-div">
        <span class="left-bottom-box-div-span">部门名称
          <span class="left-bottom-box-div-span-er">*</span></span>
        <input type="text" v-model="name" class="left-bottom-div-input">
      </div>
      <div class="left-bottom-box-div">
        <span class="left-bottom-box-div-span">部门简称
          <span class="left-bottom-box-div-span-er">*</span></span>
        <input type="text" v-model="jian" class="left-bottom-div-input">
      </div>
      <div class="left-bottom-box-div">
        <span class="left-bottom-box-div-span">显示顺序
          <span class="left-bottom-box-div-span-er">*</span></span>
        <input type="text" v-model="shun" class="left-bottom-div-input">
      </div>
      <div class="left-bottom-box-div">
        <span class="left-bottom-box-div-span">上级
          <span class="left-bottom-box-div-span-er">*</span></span>
        <input type="text" v-model="shang" class="left-bottom-div-input">
      </div>
      <div class="left-bottom-box-div">
        <span class="left-bottom-box-div-span-san">描述
          <span class="left-bottom-box-div-span-er">*</span></span>
        <textarea class="left-bottom-div-input-yi" v-model="miao"></textarea>
      </div>
    <div class="bottom">
      <p class="bottom-btn">
        <img src="../../img/save.png" alt="">&nbsp;保存
      </p>
    </div>
    </div>
</template>

<script>
    export default {
        name: "serial",
      data(){
          return{
            bianma:"123123",
            name:"鸿合科技2",
            jian:"123123",
            shun:"123123",
            shang:"部门:鸿合科技财务部",
            miao:"123123"
          }
      }
    }
</script>

<style scoped>
  .left-bottom-box {

  }
  .left-bottom-box-div {
    text-align: right;
    margin-top: 10px;
    position: relative;
  }

  .left-bottom-box-div-span {
    font-size: 12px;
    color: #8f8e8e;
  }
  .left-bottom-box-div-span-san{
    font-size: 12px;
    color: #8f8e8e;
    position: absolute;
    top: 0;
    left: 24px;
  }

  .left-bottom-box-div-span-er {
    color: red;
  }

  .left-bottom-div-input {
    width: 340px;
    height: 30px;
    border-radius: 3px;
    border: 1px solid #eeeeee;
    padding-left: 12px;
    outline: none;
    color: #666666;
    font-size: 12px;
    margin-left: 18px;
  }
.left-bottom-div-input-yi{
  width: 340px;
  height: 90px;
  border-radius: 3px;
  border: 1px solid #eeeeee;
  padding-left: 12px;
  outline: none;
  color: #666666;
  font-size: 12px;
  margin-left: 18px;
}

  .bottom-btn {
    margin-top: 10px;
    padding: 8px 10px;
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
  .bottom-btn:hover{
    background-color: #f9f9f9;
    box-shadow:0px 1px 4px 1px #e4e4e4;
    transition: box-shadow 0.5s,background-color 0.5s;
  }

  .bottom {
    display: flex;
  }
</style>
