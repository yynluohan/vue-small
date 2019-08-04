<template>
  <div>
    <TopBar
      :type="'PopupHeader'"
      :title="'产品详情'"
    ></TopBar>
    <view-box>
      <swiper
        :list="[{
          img: productInfoData.cover
          }]"
        :loop="true"
        :auto="true"
        :height="'200px'"
      >
      </swiper>
    </view-box>
    <div v-html="productInfoData.des"></div>
  </div>
</template>

<script>
  import { productInfoData } from '../../data/data';
  import { Swiper,ViewBox } from 'vux';
  import TopBar from '../../components/TopBar';

  export default {
    components : {
      TopBar:TopBar,
      Swiper,
      ViewBox
    },
    data() {
      return {
        productInfoData: productInfoData,
      }
    }
  }
</script>
