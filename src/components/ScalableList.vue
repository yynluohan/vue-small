<template>
  <div>
    <ul class='list-continer'>
      <li v-for="item in list">
        <line-item
          :url="item.url"
          :title="item.title"
          :subtitle="item.subtitle"
        >
        </line-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import LineItem from './listItems/LineItem';

  export default {
    props:['list'],
    components: {
      LineItem
    },

    beforeMounted() {
      console.log('111====',this)
    },
    mounted() {
      console.log('3333====',this)
    }
  }
</script>

<!-- scoped表示css中的样式使用与当前组件元素 -->
<style scoped>
  .list-continer {
    display: flex;
    flex-wrap: wrap;
    height:100%;
    overflow-y: scroll;
  }

  .list-continer li {
    display: inline-block;
    width:50%;
  }

</style>
