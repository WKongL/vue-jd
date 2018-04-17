<template lang="html">
    <form :class="$style.formContent">
        <ul>
            <li :class="$style['input-container']">
                <label for="area" :class="$style.area">
                    <span>+86</span>
                </label>
                <input type="text" name="area" v-model="userQuery" placeholder="请输入手机号" >
                <i :class="$style['icon-clear']" v-show="userQuery" @click="userClear"></i>
                <button :class="$style.getpass" @click.prevent.stop>获取验证码</button>
            </li>
            <li :class="$style['input-container']">
                <input type="text" name="password" v-model="passQuery" placeholder="请输入收到验证码">
                <i :class="[$style['icon-clear'],$style.passclear]" v-show="passQuery" @click="passClear"></i>
            </li>
            <li :class="$style.buttonWrapper">
                <button :class="$style.login" @click.prevent.stop>登 录</button>
            </li>
            <li :class="$style.buttonWrapper">
                <button :class="$style.onekey" @click.prevent.stop>一键登录</button>
            </li>
        </ul>
    </form>
</template>

<script>
export default {
    data() {
        return {
            userQuery: '',
            passQuery: '',
        }
    },
    methods: {
        passClear() {
            this.passQuery = '';
        },
        userClear() {
            this.userQuery = '';
        }
    }
}
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .formContent {
        @include flex;
        li {
            width: 100%;
            background-color: #fff;
        }
        .input-container {
            @include flex(row);
            position: relative;
            align-items: center;
            height: 96px;
            padding: 0 10px;
            line-height: 96px;
            box-sizing: border-box;
            font-family: PingFang-SC-Regular;
            border-bottom: 2px solid #d7d7d7;
            
            .area {
                display: inline-block;
                width: 124px;
                text-align: right;
                span {
                    color: #333;
                    font-size: 28px;
                }
                &::after {
                    content: '';
                    display: inline-block;
                    margin: 0 17px 0 10px;
                    width: 0px;
                    height: 0px;
                    border-top: 10px solid #ABABAB;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-bottom: 8px solid transparent;
                }
            }
            .getpass {
                position: absolute;
                right: 0;
                width: 192px;
                height: 46px;
                line-height: 46px;
                outline: 0;
                border: 0;
                border-left: 1px solid #d7d7d7;
                font-size: 28px;
                color: #848689;
                box-shadow: none;
                background: #fff;
            }
            input {
                width: 180px;
                font-size: 28px;
                border: 0;
                outline: 0;
                &[name="password"] {
                    width: 476px;
                }
                &::placeholder {
                    color:#ccc;
                }
            }
            .icon-clear {
                height: 44px;
                width: 44px;
                background-image: url(//plogin.m.jd.com/st_new/img/iconBg.png);
                background-repeat: no-repeat;
                background-size: 100% auto;
                &.passclear {
                    float: right;
                }
            }
            .eye {
                position: absolute;
                right: 10px;
                width: 60px;
                height: 36px;
                background-repeat: no-repeat;
                background-size: 100% auto;
                &.showpass {
                    background-image: url(//plogin.m.jd.com/st_new/img/show_password.png);
                }
                &.hidepass {
                    background-image: url(//plogin.m.jd.com/st_new/img/hide_password.png);
                }
            }
        }
        .buttonWrapper {
            margin-top: 60px;
            &:nth-child(4) {
                margin-top: 20px;
            }
            button {
                @include btn($size: 28px,$radius:4px);
                width: 100%;
                height: 90px;
                box-sizing: border-box;
                border-radius: 2px;
                &.login {
                    color:#848689;
                    border: 0;
                    background-color: #eee;
                }
                &.onekey {
                    color: #f23030;
                    border: 1px solid #f23030;
                    background-color: #fff;
                }
            }
            
        }
    }
</style>
