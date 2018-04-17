<template>
  <div :class="$style.myhome">我的主页</div>
</template>

<script>
export default {
    data() {
        return {
            user: ''
        }
    },
    created() {
        this._checkLogin();
    },
    methods: {
        _checkLogin() {
            if(!this.user) {
                this.$router.replace('/login')
                return
            }
        }
    }
}
</script>

<style lang="scss" module>
    .myhome {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: 500;
        background: #fff;
    }
</style>

