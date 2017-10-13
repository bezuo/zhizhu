<template>
	<section>
		<swiper class="banner" :options="bannerSwiperOption">
			<swiper-slide class="swiper-item" 
				v-for="item in itemsBanner" 
				:key="item.id">
				<a :href="item.banner_url">
					<img :src="item.banner_img" />							
				</a>
			</swiper-slide>		
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data() {
		return {
			bannerSwiperOption: {
	        		pagination: '.swiper-pagination',
				slidesPerView: 'auto',
				autoplay: 3000,
				bulletActiveClass: 'cur-orange',
				paginationClickable: true,
				autoplayDisableOnInteraction: false
	       	},
		}
	},
	
	props: [
		'itemsBanner'
	],
	
	components: {
		swiper,
		swiperSlide,
	},
	
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.banner {
	.swiper-item {
		a {
			display: block;
			width: 100%;
			img {
				display:block;
				width: 100%;
			}
		}		
	}	
}
</style>