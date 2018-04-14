<template>
    <panel title="理财精选" :class="$style.panel">
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
                img: '//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
                title: '月度理财',
                text: '预期年化收益率4.50%',
                goto: '去赚钱'
            },{
                img: '//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
                title: '季度理财',
                text: '历史年化回报率5.50%',
                goto: '去赚钱'
            },{
                img: '//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
                title: '一年理财',
                text: '历史年化回报率5.80%',
                goto: '去赚钱'
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
                height: 1px;
                background: #eee;
            }
            &:last-child::after {
                // display: none;
                background: #fff;
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
                    color: #ff3232;
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


