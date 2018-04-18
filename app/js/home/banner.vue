<template>
    <article>
        <slider :items="items" :cname="$style.slider"></slider>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="item.href">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from '../core/slider.vue'
export default {
    data() {
        return {
            items: [{
                href: '/',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t17743/102/1419735038/76755/d0974387/5ac97f30N0b690c0c.jpg?width=750&height=320'
            },{
                href: '/',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t19312/120/1491793773/20501/1418b8e1/5acca7a9N834a25cd.jpg?width=750&height=320'
            },{
                href: '/',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t17563/178/1535133925/21514/32387a90/5acca83eN5e543b33.png?width=750&height=320'
            },{
                href: '/',
                src: '//img12.360buyimg.com/jrpmobile/jfs/t18226/13/1535397401/47712/a718c277/5acca863Na29ab547.jpg?width=750&height=320'
            }],
            enters: [{
                href: '/',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                title: '优惠券'
            },{
                href: '/',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                title: '领红包'
            },{
                href: '/',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                title: '抢钢镚'
            },{
                href: '/',
                img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                title: '白条提额'
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
    img {
        width: 100%;
    }
}
.list {
    @include flex(row);
    background: #fff;
    padding-top: 40px;
    margin-bottom: 20px;
    justify-content: space-around;
    .item {
        text-align: center;
        width: 160px;
        height:144px;
        a {
            text-decoration: none;
        }
        img {
            display: inline-block;
            height: 90px;
            width: 90px;
        }
        h4 {
            margin-top: 12px;
            color: #666;
            font-size: 26px;
        }
    }
}
</style>


