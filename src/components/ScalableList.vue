<template>
  <div>
    <ul v-for="item in list" class='list-continer'>
      <li>
        <line-item
          :url="item.url"
          :title="item.title"
          :subtitle="item.subtitle"
          :style="item.style"
        >
      </line-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import LineItem from './listItems/LineItem';
  export default {
    props:['list','style'],
    components: {
      LineItem
    }
  }
</script>

<style>
  .list-continer {
    display: flex;
    flex-wrap: wrap;
    height:100%;
    overflow-y: scroll;
  }
</style>
