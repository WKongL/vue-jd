<template>
    <panel title="精选推荐" :class="$style.panel">
        <section :class="$style.content">
            <router-link to="/" :class="$style.item" v-for="item in items" :key="item.key">
                <dl>
                    <dt>{{item.title}}<span>{{item.sub}}</span></dt>
                    <dd>{{item.rate}}</dd>
                    <dd>{{item.text}}</dd>
                </dl>
            </router-link>
        </section>
    </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    props: {
        items: {
            type: Array,
            default: []
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
        justify-content: space-around;
        &:after {
            position: relative;
            top: -218px;
            content: " ";
            display: block;
            width: 100%;
            height: 1px;
            background-color: #eee;
        }
        .item {
            position: relative;
            width: 50%;
            height: 218px;
            padding-left: 32px;
            box-sizing: border-box;
            &:nth-child(odd):after {
                content: " ";
                position: absolute;
                top: 50%;
                right: 0;
                margin-top: -68px;
                height: 136px;
                display: block;
                width: 1px;
                background-color: #eee;
            }
            dt {
                margin: 34px 0 16px;
                height: 42px;
                line-height: 42px;
                color: #333;
                font-size: 30px;
                font-weight: 700;
                span {
                    margin-left: 4px;
                    height: 34px;
                    line-height: 34px;
                    padding: 0 8px;
                    border: 1px solid #ff5155;
                    color: #ff5155;
                    vertical-align: 4px;
                    box-sizing: border-box;
                    font-size: 22px;
                    text-align: center;
                }
            }
            dd {
                &:nth-child(2) {
                    height: 58px;
                    line-height: 58px;
                    color: #ff5155;
                    font-weight: 700;
                    font-size: 44px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                &:nth-child(3) {
                    height: 34px;
                    line-height: 34px;
                    color: #999;
                    font-size: 24px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>


