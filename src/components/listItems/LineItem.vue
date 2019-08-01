<template>
  <div class='container' :style="styleStyle">
    <img :src="url" alt="" class="image" :style="urlStyle"/>
    <div :style="titleStyle">{{title}}</div>
    <div :style="subtitleStyle">{{subtitle}}</div>
  </div>
</template>

<script>
  export default {
    // props: {
    //   url: '',
    //   title: '',
    //   subtitle: '',
    //   styleStyle:{},
    //   urlStyle: {},
    //   titleStyle: {},
    //   subtitleStyle: {}
    // },
    props:['url','title','subtitle','styleStyle','urlStyle','titleStyle','subtitleStyle'],
    //组件创建之前
    beforeCreate() {
      console.log('111')
    },
    //组件创建完毕
    created(){

    },
    // 组件挂载之前
    beforeMount(){

    },
    //组件挂载之后
    mounted() {
      const propsData = {...this._props}
      console.log('222',this._props,propsData,propsData.titleStyle)
      // this.title = '555'
    },
    // 组件更新之前
    beforeUpdate(){

    },
    // 组件更新完毕
    updated(){

    },
    // 组件销毁之前
    beforeDestroy(){

    },
    // 组件销毁完毕
    destroyed(){

    }
  }
</script>

<style>
  .container {
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  .container .image {
    width:45%;
  }
</style>
