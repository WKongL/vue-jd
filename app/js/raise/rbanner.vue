<template lang="html">
    <panel title="轮播图" :class="$style.panel">
        <section :class="$style.content">
            <swiper :options="options" :not-next-tick="options.notNextTick">
                <swiper-slide>百万白条券免费送，速来领取！</swiper-slide>
                <swiper-slide>签到领流量，1元500M！</swiper-slide>
            </swiper>
        </section>
    </panel>
</template>

<script>
import Panel from '../core/panel.vue'
import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
    data() {
        return {
            options: {
                direction: 'vertical',
                autoplay: true,
                loop: true,
            }
        }
    },
  components: {
      Panel,
      swiper,
      swiperSlide
  }
}
</script>

<style lang="scss">
    .swiper-container-vertical {
        height: 72px;
        .swiper-slide {
            font-family: PingFangSC-Medium;
            font-size: 28px;
            color: #333;
            background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) no-repeat;
            background-position: 95% 53%;
            background-size: 14px 24px;
        }
    }
</style>


<style lang="scss" module>
    .panel {
        margin-top: 120px !important;
        >h4 {
            display: none;
        }
        .content {
            padding-left: 178px;
            height: 72px;
            line-height: 72px;
            overflow: hidden;
            background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) center left no-repeat;
            background-size: 138px 68px;
        }
    }
</style>
