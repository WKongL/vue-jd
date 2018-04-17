<template>
    <div :class="$style.header">
        <span :class="$style['icon-back']" @click="back"></span>
        <h4 :class="$style.title">{{title}}</h4>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    methods: {
        back() {
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .header {
        position: relative;
        width: 100%;
        height: 90px;
        line-height: 90px;
        text-align: center;
        font-size: 34px;
        color: #616161;
        border-bottom: 1px solid #ddd;
        background: #f9f9f9;
        .icon-back {
            position: absolute;
            top: 24px;
            left: 24px;
            width: 44px;
            height: 44px;
            background-position: 0 -126px;
            background-repeat: no-repeat;
            background-image: url(//plogin.m.jd.com/st_new/img/iconBg.png);
            background-size: 100% auto;
        }
        .title {
            position: absolute;
            top: 0;
            left: 10%;
            width: 80%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    
</style>



