<template>
    <transition name="reg-fade">
        <div :class="$style.userReg">
            <p-header title="注册"></p-header>
            <section :class="$style['reg-content']">
                <form :class="$style.formContent">
                    <ul>
                        <li>
                            <label for="phone" :class="$style.area">+86</label>
                            <input type="text" v-model="phoneQuery" name="phone" placeholder="请输入手机号">
                            <i :class="$style['icon-clear']" v-show="phoneQuery" @click="phoneClear"></i>
                        </li>
                        <li>
                            <button :class="$style.captch" @click.prevent.stop><i :class="$style['icon-captch']"></i><span>点击完成验证</span></button>
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    </transition>
</template>

<script>
import PHeader from '../public/pheader.vue'
export default {
    data() {
        return {
            phoneQuery: ''
        }
    },
    methods: {
        phoneClear() {
            this.phoneQuery = '';
        }
    },
    components: {
        PHeader
    }
}
</script>

<style lang="scss">
    .reg-fade-enter-active, .reg-fade-leave-active {
        transition: all 0.3s;
    }
    .reg-fade-enter, .reg-fade-leave-to {
        transform: translate3d(100%, 0, 0)
    }
</style>

<style lang="scss" module>
    @import '../../css/element.scss';
    .userReg {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: 999;
        background: #f7f7f7;
        .reg-content {
            padding: 30px;
            ul {
                @include flex;
                li {
                    @include flex(row);
                    align-items: center;
                    margin-top: 30px;
                    padding: 0 10px;
                    height: 90px;
                    line-height: 90px;
                    box-sizing: border-box;
                    background-color: #fff;
                    .area {
                        display: inline-block;
                        width: 124px;
                        text-align: right;
                        font-size: 28px;
                        &::after{
                            content: '';
                            height: 0;
                            width: 0;
                            display: inline-block;
                            border-left: 8px solid transparent;
                            border-right: 8px solid transparent;
                            border-top: 10px solid #ABABAB;
                            margin: 0 17px 0 10px;
                            padding-top: 2px;
                        }
                    }
                    input {
                        font-family: PingFang-SC-Regular;
                        width: 380px;
                        border: 0;
                        font-size: 28px;
                        outline: 0;
                        &::placeholder {
                            color: #ccc;
                        }
                    }
                    .icon-clear {
                        width: 40px;
                        height: 40px;
                        background-image: url(//plogin.m.jd.com/st_new/img/iconBg.png);
                        background-repeat: no-repeat;
                        background-size: 100% auto;
                    }
                    &:nth-child(2) {
                        height: 90px;
                        border-radius: 2px;
                        box-sizing: border-box;
                        border: 1px solid #409eff;
                        .captch {
                            height: 100%;
                            width: 100%;
                            padding: 0;
                            text-align: left;
                            border: 0;
                            box-sizing: border-box;
                            color: #409eff;
                            background-color: #fff;
                            font-size: 28px;
                            .icon-captch {
                                display: inline-block;
                                margin-top: 21px;
                                padding: 0 8px 0 18px; 
                                height: 44px;
                                width: 44px;
                                vertical-align: top;
                                background-image: url(//h5.360buyimg.com/jcap/img/init.gif);
                                background-repeat: no-repeat;
                                background-size: 44px 44px;
                                background-position: 8px 0;
                            }
                            span {
                                font-family: PingFang-SC-Regular;
                                display: inline-block;
                                height: 100%;
                                vertical-align: top;
                                line-height: 88px;
                            }
                        }
                    }
                }
            }
            
        }
    }
</style>


