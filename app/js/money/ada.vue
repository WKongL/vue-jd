<template>
    <panel title="信用卡还款" :class="$style.panel">
        <section :class="$style.content">
            <router-link to="/money">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270" alt="">
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
        width: 100%;
        a {
            width: 100%;
            display: inline-block;
            img {
                width: 100%;
                height: 230px;
            }
        }
    }
}
</style>


