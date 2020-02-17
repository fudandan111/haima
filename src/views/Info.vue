<template>
	<div class="info">
		<div class="title">
			<!-- 搜索框 -->
			<span>城市选择</span>
			<div class="search">
				<el-input placeholder="请输入" ref="getValue"></el-input>
				<div @click="submit">搜索</div>
			</div>
			<!-- 热门城市 -->
			<div class="hotcity">
				<ul>
					<li class="hot">热门城市</li>
					<li @click="changeUrl('/data/info/beijing.json')">北京</li>
					<li @click="changeUrl('/data/info/wuhan.json')">武汉</li>
					<li @click="changeUrl('/data/info/chengdu.json')">成都</li>
					<li @click="changeUrl('/data/info/shanghai.json')">上海</li>
					<li @click="changeUrl('/data/info/chongqing.json')">重庆</li>
				</ul>
			</div>
		</div>
		<div class="shop" v-for="(item,index) in data" :key="index">
			<div class="left">
				<h2>{{item.title}}</h2>
				<div class="shopaddress">
					<p class="add">门店地址: </p>
					<p class="address">{{item.address}}</p>
				</div>
				<p class="tel"><span>门店客服: </span><span class="gray">{{item.tel}}</span></p>
				<p class="time"><span>营业时间: </span><span class="gray">{{item.time}}</span></p>
				<p class="map">查看地图导航 ></p>
			</div>
			<img :src=item.img alt="">
		</div>
	</div>
</template>
<style lang="scss" scoped>
.info {
	.title {
		display: flex;
		padding: 30px 160px;
		span {
			padding: 0 10px;
		}
		.search {
			width: 250px;
			height: 26px;
			display: flex;
			div {
				background: #e7e7e7;
			}
		}
		.hotcity {
			ul {
				display: flex;
				margin-left: 30px;
				font-size: 14px;
				li {
					margin: 0 20px;
					cursor: pointer;
				}
				.hot {
					color: #1769FF;
				}
			}
		}
	}
	.shop {
		display: flex;
		width: 1100px;
		margin: 20px auto;
		background: #FAFAFA;
		.left {
			width: 400px;
			padding: 40px 30px;
			font-size: 14px;
			.shopaddress {
				margin: 20px 0;
				.address {
					color: gray;
				}
			}
			.tel {
				margin: 30px 0 15px 0;
			}
			.time {
				margin-bottom: 30px;
			}
			.map {
				color: #1769FF;
				font-size: 16px;
			}
			.gray {
				color: gray;
				margin-left: 5px;
			}
		}
		img {
			width: 600px;
			height: 300px;
		}
	}
}
</style>
<script>
export default {
	data() {
		return {
			data: [],
			url: '/data/info/beijing.json'
		}
	},
	// 方法
    methods: {
        // 获取数据
        getData() {
            // 获取数据
            let { params } = this.$route;
            // 获取数据
            this.$http
                .get(this.url, { params })
                .then( ({data}) => {
                    // 存储数据
					this.data = data;
					console.log(data);
                });
		},
		// 改变url
		changeUrl(url) {
			this.url = url;
			// 获取数据
			let { params } = this.$route;
			// 获取数据
			this.$http
				.get(this.url, { params })
				.then( ({data}) => {
					// 存储数据
					this.data = data;
				});
		},
		//搜索
		submit() {
			if(this.$refs.getValue.currentValue == '北京') {
				this.changeUrl('/data/info/beijing.json')
			}else if (this.$refs.getValue.currentValue == '武汉') {
				this.changeUrl('/data/info/wuhan.json')
			}else if (this.$refs.getValue.currentValue == '成都') {
				this.changeUrl('/data/info/chengdu.json')
			}else if (this.$refs.getValue.currentValue == '上海') {
				this.changeUrl('/data/info/shanghai.json')
			}else if (this.$refs.getValue.currentValue == '重庆') {
				this.changeUrl('/data/info/chongqing.json')
			} else {
				this.changeUrl('/data/info/none.json')
			}
		} 
    },
    // 组件创建完成
    created() {
        // 获取数据
		this.getData();
    },
    // 监听器
    watch: {
        // 路由
        $route() {
            // 获取数据
			this.getData();
			// 改变数据
			this.changeUrl();
        }
    }
}
</script>
