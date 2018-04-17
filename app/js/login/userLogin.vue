<template lang="html">
    <form :class="$style.formContent">
        <ul>
            <li :class="$style['input-container']">
                <label for="username">账号</label>
                <input type="text" name="username" v-model="userQuery" placeholder="用户名/邮箱/已验证手机" >
                <i :class="$style['icon-clear']" v-show="userQuery" @click="userClear"></i>
            </li>
            <li :class="$style['input-container']">
                <label for="password">密码</label>
                <input type="password" name="password" v-model="passQuery" placeholder="请输入密码" ref="passInput">
                <i :class="[$style['icon-clear'],$style.passclear]" v-show="passQuery" @click="passClear"></i>
                <i :class="[showPass?$style.showpass:$style.hidepass,$style.eye]" @click="toggleShowPass"></i>
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
            showPass: false
        }
    },
    methods: {
        passClear() {
            this.passQuery = '';
        },
        userClear() {
            this.userQuery = '';
        },
        toggleShowPass() {
            this.showPass = !this.showPass;
            if (this.showPass) {
                this.$refs.passInput.type = 'text';
            } else {
                this.$refs.passInput.type = 'password';
            }
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
            
            label {
                width: 120px;
                text-align: left;
                font-size: 28px;
                color: #333;
            }
            input {
                width: 360px;
                font-size: 28px;
                border: 0;
                outline: 0;
                &[name="password"] {
                    width: 300px;
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
