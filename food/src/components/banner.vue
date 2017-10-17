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
import { swiper, swiperSlide } from 'vue-awesome-swiper' // vue-awesome-swiper 2.6之后的版本需要手动安装样式文件swiper.css

export default {
	data() {
		return {
			bannerSwiperOption: {
        		pagination: '.swiper-pagination',
				slidesPerView: 'auto',
				autoplay: 3000,
				bulletActiveClass: 'cur-pagination',
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

<style lang="scss">
@import '../style/global.scss';
@import '../style/swiper-3.4.2.min.css';

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
	.cur-pagination {
		background-color: $colorYellow;
		opacity: 1;
	}
}
</style>