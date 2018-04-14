<template>
    <panel title="更多福利" :class="$style.panel">
        <section :class="$style.content">
            <span>专享福利</span>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
        </section>
    </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
    components: {
        Panel
    }
}
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .panel {
        .content{
            @include flex(row);
            position: relative;
            justify-content: space-around;
            padding-bottom: 60px;
            span {
                position: absolute;
                padding: 0 24px;
                top: -112px;
                right: 20px;
                height: 112px;
                line-height: 110px;
                font-size: 28px;
                color: #999;
                background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
            }
            img {
                width: 33.33333%;
                height: 280px;
            }
        }
    }
</style>


