<template>
	<div>
		<div class='header'>
			<div class='left'>
				<img class='logo' :src="shop.avatar" alt='logo'/>
				<span>{{shop.title}}</span>
			</div>
			<div class='right'>
				<router-link
					class="zui-icon zui-icon-SEARCH_1"
					:to="{
						name: 'search'
					}">
				</router-link>
			</div>
		</div>
		<div class='content'>
			<swiper
			  :list="shopBanner"
				:loop="true"
				:auto="true"
				:height="'200px'"
			>
			</swiper>
			<div class="text">全部产品</div>
			<ScalableList
				:list="scalableList"
			>
			</ScalableList>
		</div>

	</div>
</template>

<script>

	import { shop,shopBanner,scalableList } from '../../data/data.js';
	import { Swiper,ViewBox } from 'vux';
	import LineItem from '../../components/listItems/LineItem';
	import ScalableList from '../../components/ScalableList';

	export default {
		components: {
			Swiper,
			ViewBox,
			LineItem,
			ScalableList:ScalableList,
		},
		data() {
			return {
				shop:shop,
				shopBanner: shopBanner,
				scalableList: scalableList,
			}
		}
	}
</script>

<style scoped>
	.header {
		width:100%;
		position: fixed;
		z-index: 999;
		background-color: #fff;
		display: flex;
		justify-content:space-between;
		padding: 0.5em;
	}

	.left,.right {
		display: flex;
		align-items: center;
	}

 .left span {
		margin-left: 0.5em;
	}

	.left img {
		width: 40px;
		height:40px;
		border-radius: 50%;
	}

	.content {
		padding-top: 54px;
	}

	.text {
		background-color: #fff;
    margin-top: 0.5em;
    margin: 0.3em 1% 0.2em 1%;
    padding: 0.5em;
    position: relative;
    top: 6px;
    border-bottom: 1px solid #f2f2f2;
		color: #818181;
	}

</style>
