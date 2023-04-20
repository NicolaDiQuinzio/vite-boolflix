import {reactive} from 'vue';

export const store = reactive({
    filmList: [],
    tvList: [],
    baseUrl: 'https://api.themoviedb.org/3',
    baseUrlimg: 'https://image.tmdb.org/t/p/w320/',
    endPointPopular: '/movie/popular',
    endPointFilm: '/search/movie',
    endPointTv: '/search/tv',
    search: {
     query: '',
 api_key: 'ed199fc4590579b5b8a269a94862314b',
        
    }
})