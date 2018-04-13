<template>
    <panel title="众筹新品" :class="$style.panel">
        <section :class="$style.content">
            <router-link to="/" :class="$style.more">更多尖货</router-link>
            <slider :options="options" :items="items" cname="product-slider"></slider>
        </section>
    </panel>
</template>

<script>
import Panel from '../core/panel.vue'
import Slider from '../core/slider.vue'
export default {
    data() {
        return {
            items:[{
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t19063/263/1067257870/16513/d7360e92/5ab85da9N8af17d57.jpg?width=335&height=421'
            },{
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t12637/325/2370404484/14164/523e69a7/5ab85dd5Ndaf12da2.jpg?width=335&height=421'
            },{
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t17317/55/1066024964/35575/444c5252/5ab85ddeNaa593024.jpg?width=335&height=421'
            },{
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t16600/39/1049384083/42815/1727a973/5ab85debN56037cfc.jpg?width=335&height=421'
            },{
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421'
            }],
            options: {
                slidesPerView: 2.3,
                spaceBetween: 30,
                freeMode: true,
            }
        }
    },
    components: {
        Panel,
        Slider
    }
}
</script>

<style lang="scss" module>
.panel {
    .content {
        position: relative;
        padding-bottom: 40px;
        .more {
            position: absolute;
            top: -112px;
            right: 28px;
            height: 112px;
            line-height: 110px;
            padding: 0 32px;
            color: #999;
            font-size: 28px;
            background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
            background-size: 18px 28px;
        }
    }
}
</style>

<style lang="scss">
.product-slider {
    .swiper-container {
        box-sizing: border-box;
        padding: 0 24px;
        .swiper-slide {
            a {
                display: inline-block;
                width: 100%;
                img {
                    display: block;
                    width: 100%;
                    height: 314px;
                }
            }
        }
    }
}
</style>


