<template>
    <div :class="$style.header">
        <span :class="$style.left">
            <router-link to="/register">
                <em>注册</em>
            </router-link>&nbsp;|&nbsp;
            <router-link to="/login">
                <em>登录</em>
            </router-link>
        </span>
        <btn :class="$style.btnDownload">APP下载</btn>
    </div>
</template>

<script>
import Btn from '../core/btn.vue'
export default {
    components: {
        Btn
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    line-height: 100px;
    color: #666;
    font-size: 32px;
    // background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    background-color: #fff;
    background-size: auto 50%;
    z-index: 100;
    .left {
        display: inline-block;
        // margin: 35px 0 0 24px;
        margin: 17px 0 0 18px;
        height: 30px;
        line-height: 30px;
        font-size: 28px;
        color: #666;
        a {
            color: #666;
        }
    }
    .btnDownload {
        float: right;
        margin: 28px 24px 0 0;
        padding: 0;
        min-width: 120px;
        height: 56px;
        line-height: 56px;
        border-radius: 2px;
        border-width: 0;
        color: #fff;
        font-size: 24px;
        background: #F04752;
    }
}
</style>


