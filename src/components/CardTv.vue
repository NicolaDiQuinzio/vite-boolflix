<template>
    <div class="col cards-decoration  mt-3 p-0" v-for="card in store.tvList">
         <div class="text-center">
            <img :src="url" :alt="card.title" />
            <h5>{{ card.name }}</h5>
            <p>{{ card.original_name }}</p>
            <p><span :class="'fi fi-' + card.original_language + ' fis'"></span></p>
            <p>{{ card.vote_average }}</p>
        </div>
    </div>
</template>

<script>
    import {store} from '../store/store'
    import "flag-icons/css/flag-icons.min.css";
    export default {
        name: 'CardTv',
        data() {
            return {
                store,
                
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.cards-decoration{
    background-color: gray;
    height: 320px;
}
</style>