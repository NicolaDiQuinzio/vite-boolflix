<template>
  <header>
   <HeaderComponent/>
</header>
  <main> 
    <Jumbotron/>
    <FormComponent @search-change-film="getFilms" @search-change-tv="getTvSeries"/>
    <CardsComponent/>
  </main>
  
</template>

<script>
import { store } from './store/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import FormComponent from './components/FormComponent.vue'
import CardsComponent from './components/CardsComponent.vue';
import Jumbotron from './components/Jumbotron.vue';
export default {
  name: 'App',
  components: { HeaderComponent, FormComponent, CardsComponent, Jumbotron, },
  data() {
    return {
      store
    }
  },
  methods: {

    // richiamo una API per ottenere la lista dei film più popolari e il risultato lo assegno alla proprietà "filmList" dello store. 
    getPopular() {
      const popularurl = store.baseUrl + store.endPointPopular;
      let options = {}
      let params = {}
      for (let key in store.search) {

        if (store.search[key]) {
          params[key] = store.search[key]
        }
      }

      if (Object.keys(params).length > 0) {
        options.params = params;
      }

      axios.get(popularurl, options).then((res) => {
        store.filmList = res.data.results
      })
    },

    //richiamo una API per ottenere la lista dei film, in base ai criteri di ricerca inseriti dall'utente nel componente"FormComponent" e il risultato viene assegnato alla proprietà "filmList" dello store.
    getFilms() {
      const filmurl = store.baseUrl + store.endPointFilm
      let options = {}
      let params = {}
      for (let key in store.search) {

        if (store.search[key]) {
          params[key] = store.search[key]

        }
      }
     if (Object.keys(params).length > 0) {
        options.params = params;
      }
      axios.get(filmurl, options).then((res) => {
        store.filmList = res.data.results
      })
    },
 // richiamo una API per ottenere la lista delle serie tv più popolari e il risultato lo assegno alla proprietà "tvList" dello store.
    getTvSeries() {
      const tvUrl = store.baseUrl + store.endPointTv
      let options = {}
      let params = {}
      for (let key in store.search) {

        if (store.search[key]) {
          params[key] = store.search[key]
        }
      }

      if (Object.keys(params).length > 0) {
        options.params = params;       
      }

      axios.get(tvUrl, options).then((res) => {
        store.tvList = res.data.results
        })
    }
  },
  mounted() {
    this.getPopular();
  }
}
</script>

<style lang="scss" scoped></style>