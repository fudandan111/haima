<template>
    <div class="category">
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="big-title">
                <h1>{{item.id}}</h1>
                <div class="title">
                    <h2>{{item.title}}</h2>
                    <p class="mark">{{item.mark}}</p>
                </div>
            </div>
            <p class="des">{{item.des}}</p>
            <p class="detail">查看详情>></p>
        </div>
    </div>
</template>
<style scoped lang="scss">
.category {
    height: 700px;
    margin:30px auto;
    padding: 0 150px;
    .item {
        width: 526px;
        height: 170px;
        float: left;
        border-bottom: solid 1px #E3E3E6;
        margin: 30px 20px;
        .big-title {
            display: flex;
            h1 {
                color: #E3E3E6;
                font-size: 50px;
                margin-right: 15px;
            }
            .title {
                padding-top: 10px;
                .mark {
                    color: #E3E3E6;
                    font-size: 12px;
                    font-weight: bold;
                }
            }
        }
        .des {
            color: #45454D;
            font-size: 13px;
        }
        .detail {
            font-size: 14px;
            margin-top: 20px;
            color: #1769FF;
        }
    }
    div.item:nth-of-type(5), div.item:nth-of-type(6) {
        border-bottom: solid 1px transparent;
    }
}
</style>
<script>
export default {
    // 数据
	data() {
		return {
			list: [],
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
                .get('/data/cooperation/information.json', { params })
                .then( ({data}) => {
                    // 存储数据
					this.list = data;
					console.log(data);
                });
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
        }
    }
}
</script>