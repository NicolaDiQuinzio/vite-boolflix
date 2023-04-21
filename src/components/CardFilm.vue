<template>
    <div class="col cards-decoration  mt-3 p-0" v-for="card in store.filmList">
     <div class="reverse-card">
        <div class="front-cover">
            <img class="img-fluid h-100 w-100" :src="store.baseUrlimg + card.poster_path " alt="">
        </div>
   
         <div class="text-white text-center back-cover  ">
            <p>Titolo:{{ card.title }}</p>
            <p>Titolo originale:{{ card.original_title }}</p>
            <p>Lingua:<span :class="'fi fi-' + card.original_language + ' fis'"></span></p>
            <p>Voto:<i class="fa-solid fa-star" v-for="star in Math.round(card.vote_average / 2)" ></i> </p>
            <small>{{ card.overview }}</small>
        </div>

     </div>
    </div>
</template>

<script>
    import {store} from '../store/store'
    import "flag-icons/css/flag-icons.min.css";
    export default {
        name: 'CardFilm',
        
        data() {
            return {
                store,
                
            }
        },
        mounted() {

    },

    }
</script>

<style lang="scss" scoped>
.cards-decoration{
  width: 260px;
  height: 345px;
}

.reverse-card {
  position: relative;
  width: 100%;
  height: 100%;
}
.front-cover,.back-cover {
  position: absolute;
  width: 100%;
  height: 100%;
 }

p {
  font-size: 11px;
}
small{
    font-size: 10px;
} 
.reverse-card .front-cover {
opacity: 1;
transition: opacity 1s ease-in-out;
}

.reverse-card:hover .front-cover {
opacity: 0;
}

.reverse-card .back-cover {
opacity: 0;
transition: opacity 1s ease-in-out;
}

.reverse-card:hover .back-cover {
opacity: 1;
}
</style>