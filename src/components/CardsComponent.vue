<template>
    <div class="mt-5 bg-cardcomponent text-white"> 
    <section>
    <div class="row container-fluid pt-3 ">
        <h2 >Film</h2>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-3 justify-content-center">
        <CardFilm/>
    </div>
   </section>
   <section>
    <div class="row container-fluid pt-3">
        <h2>Serie Tv</h2>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 gap-3 justify-content-center">
        <CardTv/>
    </div>
</section>
</div>
</template>

<script>
    import CardFilm from './CardFilm.vue';
    import CardTv from './CardTv.vue';
    import { store } from '../store/store';
    export default {
        name: 'FilmList',
        components: {CardFilm, CardTv},
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
.bg-cardcomponent{
    background-color: black;
}
</style>