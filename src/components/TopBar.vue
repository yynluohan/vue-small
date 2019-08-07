<template>
  <div>
    <div class="header-content">
      <div class="header-icon" @click="onClick()">
        <x-icon type="ios-arrow-left"></x-icon>
        <span>返回</span>
      </div>
      <div class="header-title">{{title}}</div>
      <div class="header-right"></div>
    </div>
    <div class="header-footer"></div>
  </div>
</template>

<script>
  import { Icon } from 'vux';

  export default {
    name: 'TopBar',
    props:['path','title','isShowBack'],
    components: {
      Icon
    },
    methods: {
      onClick() {
        this.$router.back()
      }
    }
  }

</script>

<style scoped>
  .header-content{
    background-color: #fff;
    padding: 1em 0;
    position: fixed;
    z-index: 999;
    width:100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }

  .header-footer {
    height: 52px;
  }

  .header-icon {
    display: flex;
    align-items: center;
    width:15%;
  }

  .header-title {
    width:70%;
    text-align: center;
  }

  .header-right {
    width:15%;
  }

</style>
