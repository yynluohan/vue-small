<template>
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
			<span>2</span>
		</div>
	</div>
</template>

<script>
	require('./index.less')

	import { shop } from '../../data/data.js';

	export default {
		components: {

		},
		data() {
			return {
				shop:shop,
			}
		}
	}
</script>
