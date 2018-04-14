<template>
    <panel title="白条福利" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.title">
                <img :src="item.img" :alt="item.title">
                <div>
                    <h4>{{item.title}}</h4>
                    <p>{{item.text}}</p>
                </div>
                <span>{{item.goto}}</span>
            </div>
        </section>
    </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    data() {
        return {
            items: [{
                img: '//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
                title: '开通白条',
                text: '送188元礼包',
                goto: '立即开通'
            },{
                img: '//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120',
                title: '白条闪付',
                text: '新手享158元礼包',
                goto: '随机立减'
            },{
                img: '//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
                title: '白条提额',
                text: '金融app专享提额礼包',
                goto: '去提额'
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
    >h4 {
        border-bottom: 1px solid #ddd;
    }
    .content {
        @include flex;
        .item {
            @include flex(row);
            height: 140px;
            align-items: center;
            &::after {
                margin-left: 136px;
                content: ' ';
                width: 100%;
                // height: 1px;
                background: #eee;
                height: 1px;
                // border-bottom: 1px solid #eee;
            }
            &:last-child::after {
                background: #fff;
                // border-color: #fff;
            }
            img {
                flex: 0 88px;
                margin: 0 32px;
                height: 88px;
                width: 88px;
            }
            div {
                flex: 2;
                h4 {
                    line-height: 1.8;
                    color: #333;
                    font-size: 32px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                p {
                    color: #999;
                    font-size: 24px;
                    line-height: 1.1;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
            span {
                flex: 1;
                margin-right: 32px;
                height: 88px;
                line-height: 84px;
                text-align: right;
                color: #ff801a;
                font-size: 28px;
                padding: 0 36px 0 20px;
                background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
                background-size: 18px 30px;
            }
        }
    }
}
</style>


