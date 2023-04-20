<template>
    <div class="col card-decoration2 mt-3 p-0" v-for="card in store.filmList">
        <div class="text-center">
            <img :src="url" :alt="card.title" />
            <h5>{{ card.title }}</h5>
            <p>{{ card.original_title }}</p>
            <p><span :class="'fi fi-' + card.original_language + ' fis'"></span></p>
            <p>{{ card.vote_average }}</p>
        </div>
    </div>
</template>

<script>
import { store } from '../store/store';
import "flag-icons/css/flag-icons.min.css";
export default {
    name: 'CardFilm',
    
    data() {
        return {
            store,
           
        }
    },
    mounted() {
        
    }

}
</script>

<style lang="scss" scoped>
.card-decoration2 {
    background-color: lightgray;
    height: 320px;
}
</style>