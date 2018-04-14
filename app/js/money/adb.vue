<template>
    <panel title="理财金购买" :class="$style.panel">
        <section :class="$style.content">
            <router-link to="/money">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240" alt="">
            </router-link>
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
.panel {
    >h4 {
        display: none;
    }
    .content {
        padding-bottom: 40px;
        width: 100%;
        height: 182px;
        box-sizing: border-box;
        img {
            width: 100%;
            height: 182px;
        }
    }
}
</style>


