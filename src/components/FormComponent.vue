<template>
    <div class="col d-flex align-items-center justify-content-center">
         <form @submit.prevent="setSearch" class="d-flex align-items-center">
            <input class="m-2 p-1" type="text" placeholder="" v-model.trim="store.search.query">
            <button type="submit" class="btn btn-danger">Cerca</button>
         </form>
    </div>

</template>


<script>
import { store } from '../store/store';
export default {
    name: 'FormComponent',
    data() {
        return {
            store
        }
    },
    methods: {
        setSearch() {
            this.$emit('searchChangeFilm')
            this.$emit('searchChangeTv')
        }
    }
}
</script>