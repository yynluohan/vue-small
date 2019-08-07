<template>
  <div>
    <TopBar
      :type="'PopupHeader'"
      :title="'产品详情'"
    ></TopBar>
    <view-box>
      <div class="swiper-images">
        <swiper
          :list="[{
            img: productInfoData.cover
            }]"
          :loop="true"
          :auto="true"
          :height="'200px'"
        >
        </swiper>
      </div>
      <div class="product-info">
        <div class="product-info-name">{{productInfoData.name}}</div>
        <div class="product-info-number">
          <div class="product-info-price">{{productInfoData.price}}</div>
          <div class="product-info-originPrice">原价：{{productInfoData.originPrice}}</div>
        </div>
        <div class="product-info-free">运费：{{productInfoData.free}}</div>
      </div>
      <div v-html="productInfoData.des"></div>
    </view-box>
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
    },

  }

</script>

<style scoped>
  .swiper-images .vux-slider .vux-swiper .vux-swiper-item a .vux-img{
    background-size:contain;
  }

  .product-info {
    background-color: #fff;
    padding:1em;
    margin-bottom: 0.5em;
  }

  .product-info-name {
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
  }

  .product-info-number {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 0;
  }

  .product-info-price {
    color: rgba(194, 131, 36, 1);
    font-size: 20px;
  }

  .product-info-originPrice {
  	color: rgba(166, 166, 166, 1);
  	font-size: 12px;
    text-decoration: line-through;
  }

  .product-info-free {
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
  }

</style>
