<template>
	<div class="cooperation">
		<!-- banner -->
		<div class="banner">
			<img src="../../public/img/lastbanner.png" alt="">
			<h1>HIMO BUSINESS</h1>
			<span></span><span></span><span></span>
			<p>HIMO BUSINESS是海马体照相馆根据企业市场需求所增设的商务拍摄板块。</p>
			<p>致力于为企业提供“量身定制”的形象包装及福利方案，帮助企业对内宣传企业文化</p>
			<p>对外展示企业形象，打造更高端的企业品牌文化。</p>
		</div>
		<!-- 产品类别 -->
		<Category></Category>
		<!-- 合作企业 -->
		<div class="cooper_company">
			<h1>合作企业</h1>
			<div class="imgs">
				<img class="first" src="../../public/img/silde1.png" alt="">
				<img class="second" src="../../public/img/silde2.png" alt="">
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.cooperation {
	// banner
	.banner {
		width: 100%;
		height: 400px;
		position: relative;
		color: white;
		img {
			width: 100%;
			height: 400px;
		}
		span {
			width: 18px;
			height: 18px;
			display: inline-block;
			position: absolute;
			top: 170px;
			left: 680px;
		}
		span:nth-of-type(1) {
			background: #1369B4;
		}
		span:nth-of-type(2) {
			background: #3F4041;
			left: 710px;
		}
		span:nth-of-type(3) {
			background: #A4A4A4;
			left: 740px;
		}
		h1 {
			position: absolute;
			top: 100px;
			left: 550px;
			font-size: 45px;
			font-weight: 500;
		}
		p {
			position: absolute;
			top: 210px;
		}
		p:nth-of-type(1) {
			left: 450px;
		}
		p:nth-of-type(2) {
			left: 425px;
			top: 235px;
		}
		p:nth-of-type(3) {
			top: 260px;
			left: 550px;
		}
	}
	// 合作企业
	.cooper_company {
		height: 300px;
		h1 {
			text-align: center;
		}
		.imgs {
			width: 1000px;
			height: 200px;
			margin: 20px auto;
			position: relative;
			overflow: hidden;
			img:nth-of-type(1) {
				width: 1000px;
				height: 200px;
				position: absolute;
				top: 0;
				left: 0;
				animation: 10s movefirst infinite linear;
			}
			@keyframes movefirst {
				0% {
					left: 0;
				}
				100% {
					left: -1000px;
				}
			}
			img:nth-of-type(2) {
				width: 1000px;
				height: 200px;
				position: absolute;
				top: 0;
				left: 1000px;
				animation: 10s movesecond infinite linear;
			}
			@keyframes movesecond {
				0% {
					left: 1000px;
				}
				100% {
					left: 0;
				}
			}
		}
		.imgs:hover img {
			animation-play-state: paused;
		}
	}
}
</style>
<script>
// 引入category组件
import Category from '../components/Category.vue';
export default {
	// 注册组件
	components: { Category }
}
</script>
