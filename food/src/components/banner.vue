<template>
	<section>
		<swiper class="swiper-box" :options="bannerSwiperOption">
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
//				pagination: '.swiper-pagination',
//				slidesPerView: 1,
//				autoplay: 5000,
//				paginationClickable: true,
//				spaceBetween: 30,
//				loop: true
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

<style lang="scss">
@import '../style/global.scss';

.swiper-box {
	width: 100%;
	height: 100%;
	margin: 0 auto;
	.swiper-item {
		height: px2rem(300px);
		text-align: center;
		font-size: 18px ;
		background: #fff;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
		}
	}
}
</style>