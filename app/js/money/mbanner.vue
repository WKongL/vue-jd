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
                href: '/money',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400'
            },{
                href: '/money',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t18787/96/583735472/19041/545127d6/5a976b05N1a6a412a.jpg?width=750&height=400'
            },{
                href: '/money',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400'
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
    height: 340px;
    img {
        width: 100%;
        height: 340px;
    }
}
</style>


