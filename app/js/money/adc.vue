<template>
    <panel :class="$style.panel">
        <section :class="$style.content">
            <router-link to="/">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
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
    @import '../../css/element.scss';
    .panel {
        >h4 {
            display: none;
        }
        margin-bottom: -20px;
        .content{
            height: 102px;
            img {
                width: 100%;
                height: 102px;
            }
        }
    }
</style>


