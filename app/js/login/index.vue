<template>
    <transition name="login-fade">
        <div :class="$style.userlogin">
            <p-header title="登录"></p-header>
            <section :class="$style.content">
                <ul :class="$style.tab">
                    <li :class="$style['tab-item']" @click="selectClass(index)" v-for="(item,index) in switchs" :key="item.name">
                        <span :class="index === currentIndex?$style['active']:''">{{item.name}}</span>
                    </li>
                </ul>
                <div :class="$style['login-list']">
                    <user-login v-if="currentIndex === 0"></user-login>
                    <phone-login v-if="currentIndex === 1"></phone-login>
                    <div :class="$style.other">
                        <router-link to="/">
                            <i :class="[$style.icon,$style['icon-clock']]"></i>
                            <span>忘记密码</span>
                        </router-link>
                        <router-link to="/register">
                            <i :class="[$style.icon,$style['icon-reg']]"></i>
                            <span>手机快速注册</span>
                        </router-link>
                    </div>
                </div>
            </section>
        </div>
    </transition>
    
</template>

<script>
import PHeader from '../public/pheader.vue'
import UserLogin from './userLogin.vue'
import PhoneLogin from './phoneLogin.vue'
export default {
    data() {
        return {
            switchs: [
                {name: '账号密码登录'},
                {name: '短信验证码登录'},
            ], //表示选择了密码登录还是短信登录
            currentIndex: 0
        }
    },
    methods: {
        selectClass(index) {
            this.currentIndex = index;
        }
    },
    components: {
        PHeader,
        UserLogin,
        PhoneLogin
    }
}
</script>

<style lang="scss">
    .login-fade-enter-active, .login-fade-leave-active {
        transition: all 0.3s;
    }
    .login-fade-enter, .login-fade-leave-to {
        transform: translate3d(100%, 0, 0)
    }
</style>

<style lang="scss" module>
    @import '../../css/element.scss';
    .userlogin {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: 999;
        background: #fff;
        .content {
            .tab {
                @include flex(row);
                .tab-item {
                    width: 50%;
                    text-align: center;
                    line-height: 88px;
                    font-size: 28px;
                    border-bottom: 1px solid #d7d7d7;
                    .active {
                        padding: 26px 20px;
                        border-bottom: 4px solid #f23030;
                    }
                }
            }
            .login-list {
                padding: 0 40px 40px 40px;
                .other {
                    @include flex(row);
                    margin-top: 40px;
                    justify-content: space-between;
                    text-align: center;
                    a {
                        font-size: 0;
                        .icon {
                        display: inline-block;
                        width: 44px;
                        height: 44px;
                        vertical-align: top;
                        font-size: 24px;
                        background-repeat: no-repeat;
                        background-size: 100% auto;
                            &.icon-clock {
                                background-position: 0 -46px;
                                background-image: url(//plogin.m.jd.com/st_new/img/iconBg.png);
                            }
                            &.icon-reg {
                                background-position: 0 -84px;
                                background-image: url(//plogin.m.jd.com/st_new/img/iconBg.png);
                            }
                        }
                        span {
                            display: inline-block;
                            font-family: PingFang-SC-Regular;
                            height: 44px;
                            line-height: 44px;
                            vertical-align: top;
                            font-size: 24px;
                            color: #333;
                        }
                    }
                }
            }
        }
        
    }
</style>



