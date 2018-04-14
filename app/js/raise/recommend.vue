<template>
    <panel title="In货推荐" :class="$style.panel">
        <section :class="$style.content" >
            <div :class="$style.item" v-for="list in lists" :key="list.img">
                <img :src="list.img" alt="">
                <div :class="$style.list">
                    <div :class="$style.product" v-for="item in list.items" :key="item.title">
                        <img :src="item.img" alt="">
                        <p :class="$style.title">{{item.title}}</p>
                        <p :class="$style.price">{{item.price}}<span>起</span></p>
                        <div :class="$style.progress">
                            <div :class="$style.wrapper">
                                <div :class="$style.inner" :style="{width: item.percent+'%'}"></div>
                            </div>
                            <span>{{item.percent}}%</span>
                        </div>
                        <span v-if="item.choice" :class="$style.choice">精选</span>
                    </div>
                </div>
            </div>
        </section>
    </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    data() {
        return {
            lists: [{
                img: '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
                items: [{
                    img: '//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
                    title: '双响炮蓝牙音箱',
                    price: '29.00',
                    percent: 172,
                    choice: true
                },{
                    img: '//img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
                    title: '脑波相机',
                    price: '998.00',
                    percent: 259,
                    choice: false
                }]
            },{
               img: '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
                items: [{
                    img: '//img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
                    title: '智能电动牙刷',
                    price: '19.00',
                    percent: 481,
                    choice: false
                },{
                    img: '//img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
                    title: '烟草加热电子烟',
                    price: '258.00',
                    percent: 105,
                    choice: false
                }] 
            },{
               img: '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
                items: [{
                    img: '//img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
                    title: '赖公高淮封藏老酒',
                    price: '99.00',
                    percent: 199,
                    choice: false
                },{
                    img: '//img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
                    title: '泗洪花雕醉蟹',
                    price: '58.00',
                    percent: 222,
                    choice: false
                }] 
            }]
        }
    },
    components: {
        Panel
    }
}
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .panel {
        .content {
            @include flex;
            .item {
                margin-bottom: 40px;
                img {
                    width: 100%;
                    height: 170px;
                }
                .list {
                    @include flex(row);
                    .product {
                        position: relative;
                        margin: 0 2%;
                        width: 46%;
                        height: 396px;
                        box-sizing: border-box;
                        background: rgba(0, 0, 0, 0.02);
                        text-align: center;
                        img {
                            margin: 40px auto 20px;
                            width: 180px;
                            height: 180px;
                        }
                        .title {
                            font-family: PingFangSC-Medium;
                            font-size: 0.7rem;
                            color: #444;
                        }
                        .price {
                            height: 48px;
                            line-height: 48px;
                            font-size: 36px;
                            color: #FF3232;
                            &:before {
                                content: "\FFE5";
                                font-size: 28px;
                            }
                            span {
                                margin-left: 4px;
                                font-family: PingFangSC-Semibold;
                                font-size: 20px;
                                color: #999;
                            }
                        }
                        .choice {
                            position: absolute;
                            top: 0;
                            left: 0;
                            padding: 4px 8px;
                            font-family: PingFangSC-Medium;
                            font-size: 20px;
                            color: #ff0000;
                            text-align: center;
                            background-image: linear-gradient(-35deg, #C1C1C1 0, #ACACAC 100%);
                        }
                        .progress {
                            @include flex(row);
                            margin-top: 16px;
                            padding: 0 20px;
                            align-items: center;
                            justify-content: space-around;
                            height: 30px;
                            line-height: 30px;
                            .wrapper {
                                width: 144px;
                                height: 10px;
                                background: #F6E6E6;
                                border-radius: 22px;
                                .inner {
                                    width: 10%;
                                    max-width: 100%;
                                    height: 10px;
                                    background: linear-gradient(270deg, #F55 1%, #FF9C31 100%);
                                    border-radius: 22px;
                                }
                            }
                            span {
                                font-size: 24px;
                                color: #999;
                            }
                        }
                    }
                }
            }
        }
    }
</style>


