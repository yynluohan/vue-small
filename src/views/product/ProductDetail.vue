<template>
  <div>
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

  const createHtml = (text) => {
    return {
      __html: text
    }
  }

  export default {
    components : {
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
