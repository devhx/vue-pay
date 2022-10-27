<script setup>
import { onMounted } from 'vue'
import { Divider,Button,Notify,Dialog } from 'vant';

onMounted(()=>init())

function init(){
   Notify('xxxxxxxxxxxxxxxxxxxxxxxxxxx');
}

function payAction(){
   Dialog.confirm({
      title: '支付',
      message:'确定支付吗？',
      })
      .then(() => {
         // on confirm
      })
      .catch(() => {
         // on cancel
      });
}
</script>
 
<template>
   <div class="home width">
      <div class="head-wrap">
         <div class="time-tips">
            <div class="flex-start-center">
               <div class="time-icon"></div>
               <div class="cr-main ml-12 fs-24">等待支付</div>
            </div>
            <p class="fs-12 cr-main mt-20">The transaction will close in 5:00 minutes,please pay in time！</p>
         </div>

         <div class="bg-line"></div>
         <div class="panel">
           <div class="head-txt fs-30">1USDT</div>
           <div class="center-txt fs-12 center">
            <div>
               <span class="cr-black2">product name:</span>
               <span class="cr-black">fFL2115751</span>
            </div>
            <Divider  :style="{ color: '#b8b8b8',padding: '0 16px'}"></Divider>
            <div>
               <span class="cr-black2">transaction number：</span>
               <span class="cr-black">fFL2115751</span>
            </div>
           </div>
           <div class="footer-txt cr-grey3 fs-12 center">only supported USDT（TRC-20）</div>
         </div>
      </div>
      <div class="bottom-wrap">
         <Button type="primary" class="btn" block @click="payAction">立即支付</Button>
      </div>
   </div>
</template>
 
<style lang='scss' scoped>
 .home{
   .head-wrap{
      width: 100%;
      height: 32%;
      background-color: #5c93ff;
      padding: 0 24px;
      box-sizing: border-box;
      position: relative;
      .panel{
         width: 70%;
         height: 100%;
         background-color: #fff;
         border-radius: 0 0 4px 4px;
         box-shadow: 0 3px 6px 1px rgb(0 0 0 / 8%);
         position: absolute;
         left: 50%;
         bottom: -88.5%;
         transform: translateX(-50%);
         padding: 4px;
         box-sizing: border-box;
         .head-txt{
            color: red;
            font-weight: bolder;
            margin: 20px auto;
            text-align: center;
         }
         .footer-txt{
            width: 100%;
           position: absolute;
           left: 50%;
           bottom: 8%;
           transform: translateX(-50%);
         }
      }
      .bg-line{
         width: 80%;
         height: 14px;
         border-radius: 14px;
         background-color: #2e6ee9;
         position: absolute;
         bottom: 8%;
         left: 50%;
         transform: translateX(-50%);
      }
      .time-tips{
         position: absolute;
         top: 50%;
         left: 34px;
         transform: translateY(-50%);
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: flex-start;
         .time-icon{
            width: 34px;
            height: 33px;
            background: url('~@/assets/images/time.png') no-repeat;
            background-size: 100% 100%;
         }
      }
   }
   .bottom-wrap{
      width: 100%;
      height: calc(100% - 32%);
      box-sizing: border-box;
      position: relative;
      .btn{
         font-size: 22px;
         width: 80%;
         border-radius: 22px;
         margin: 0 auto;
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
         bottom: 30%;
         box-shadow: 0 3px 6px 1px rgb(92 147 255 / 30%);
         background-color: #5c93ff;
      }
   }
 }
</style>