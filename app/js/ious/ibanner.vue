<template>
    <article>
        <slider :items="items" :cname="$style.slider"></slider>
    </article>
</template>

<script>
import Slider from '../core/slider.vue'
export default {
    data() {
        return {
            items: [{
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
            },{
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
            },{
                href: 'home',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320'
            }]
        }
    },
    components: {
        Slider
    }
}
</script>

<style lang="scss" module>
@import '../../css/layout.scss';
.slider {
    margin-top: 120px;
    height: 272px;
    img {
        width: 100%;
        height: 272px;
    }
}
</style>


