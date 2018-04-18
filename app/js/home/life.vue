<template>
    <panel title="生活服务" :class="$style.panel">
        <ul :class="$style.content">
            <li :class="$style.item" v-for="item in items" :key="item.src">
                <router-link to="/">
                    <img :src="item.src" :alt="item.text">
                    <span>{{item.text}}</span>
                    <span v-if="item.update">{{item.update}}</span>
                </router-link>
            </li>
        </ul>
    </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    data() {
        return {
            items: [{
                src: '//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135',
                text: '惠加油',
                update: ''
            },{
                src: '//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132',
                text: '小白信用',
                update: '全新升级'
            },{
                src: '//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135',
                text: '信用卡还款',
                update: ''
            },{
                src: '//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135',
                text: '卡转让',
                update: ''
            },{
                src: '//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135',
                text: '定期还款',
                update: ''
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
            @include flex(row);
            box-sizing: border-box;
            padding-bottom: 40px;
            .item {
                width: 20%;
                text-align: center;
                a {
                    display: inline-block;
                    width: 100%;
                }
                img {
                    width: 90px;
                    height: 90px;
                }
                span {
                    display: block;
                    margin-top: 12px;
                    color: #666;
                    font-size: 26px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    &:nth-child(3) {
                        color: #FF801A;
                    }
                }
            }
        }
    }
</style>


