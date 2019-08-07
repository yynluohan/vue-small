<template>
  <div>
    <ul class='list-continer'>
      <li v-for="item in list">
        <router-link
          :to="{
            name: 'productDetail',
            params:{id:item.id || ''}
          }"
        >
          <line-item
            :url="item.url"
            :title="item.title"
            :subtitle="item.subtitle"
          >
          </line-item>
        </router-link>
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
    },
    mounted() {
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
