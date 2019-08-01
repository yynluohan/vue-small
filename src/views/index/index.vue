<template>
	<div>
		<div class='header'>
			<div class='left'>
				<img :src="shop.logo" alt='logo'/>
				<span>{{shop.title}}</span>
			</div>
			<div class='right'>
				<router-link
					class="zui-icon zui-icon-SEARCH_1"
					:to="{
						name: 'searchResult'
					}">
				</router-link>
			</div>
		</div>
		<div class='content'>
			<view-box>
				<swiper
				  :list="shopBanner"
					:loop="true"
					:auto="true"
					:height="'200px'"
				>
				</swiper>
			</view-box>
		</div>
		<!-- <scalable-list
			:list="scalableList"
			:style="styleStyle"
		>
		</scalable-list> -->
	</div>
</template>

<script>
	require('./index.less')

	import { shop,shopBanner,scalableList } from '../../data/data.js';
	import { Swiper,ViewBox } from 'vux';
	import LineItem from '../../components/listItems/LineItem';
	import ScalableList from '../../components/ScalableList';

	// const styleStyle = {
	// 	width:'50%',
	// 	border: '1px solid red'
	// }

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
