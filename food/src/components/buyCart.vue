<template>
    <section class="cart_module">
        <section v-if="!foods.specifications.length" class="cart_button">
            <transition name="showReduce">
                <span @click="removeOutCart(foods.category_id, foods.item_id, foods.specfoods[0].food_id, foods.specfoods[0].name, foods.specfoods[0].price, '', foods.specfoods[0].packing_fee, foods.specfoods[0].sku_id, foods.specfoods[0].stock)" v-if="foodNum">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
                    </svg>
                </span>
            </transition>
            <transition name="fade">
                <!--<span class="cart_num" v-if="foodNum">{{foodNum}}</span>-->
            </transition>
            <svg class="add_icon" @touchstart="addToCart(foods.category_id, foods.item_id, foods.specfoods[0].food_id, foods.specfoods[0].name, foods.specfoods[0].price, '', foods.specfoods[0].packing_fee, foods.specfoods[0].sku_id, foods.specfoods[0].stock, $event)">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
            </svg>
        </section>
        <section v-else class="choose_specification">
            <section class="choose_icon_container">
                <transition name="showReduce">
                    <svg class="specs_reduce_icon" v-if="foodNum" @click="showReduceTip">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
                    </svg>
                </transition>
                <transition name="fade">
                    <!--<span class="cart_num" v-if="foodNum">{{foodNum}}</span>-->
                </transition>
                <span class="show_chooselist" @click="showChooseList(foods)">选规格</span>
            </section>
        </section>
    </section>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	
	created() {
		
	},
	
	computed: {
		
	},
	
	props: [
		'foods'
	],
	
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

</style>