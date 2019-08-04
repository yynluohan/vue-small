<template>
	<div>
		<div class='header'>
			<div class='left'>
				<img class='logo' :src="shop.logo" alt='logo'/>
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
		</div>
		<scalable-list
			:list="scalableList"
		>
		</scalable-list>
	</div>
</template>

<script>
	// require('./index.less')

	import { shop,shopBanner,scalableList } from '../../data/data.js';
	import { Swiper,ViewBox } from 'vux';
	import LineItem from '../../components/listItems/LineItem';
	import ScalableList from '../../components/ScalableList';

	export default {
		components: {
			Swiper,
			ViewBox,
			LineItem,
			ScalableList
		},
		data() {
			return {
				shop:shop,
				shopBanner: shopBanner,
				scalableList: scalableList,
				itemData: {
					title:'aaaa',
					subtitle:'22222',
					url: 'https://www.muaskin.com/images/p/80215db34eae42725af9b210aaf36bb4.png',
					styleStyle:{
						width:"120px",
					},
					titleStyle:{
						color: 'red',
						fontSize:'18px'
					}
				}
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
		/* padding-bottom: 50px; */
	}

</style>
