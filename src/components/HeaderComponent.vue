<template>
    <header class="pt-3">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src="../assets/img/Netflix_Logo_PMS.png" alt="Netflix Logo">
                </div>
            </div>
        </div>

    </header>
</template>

<script>
import { store } from '../store/store';
import axios from 'axios';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
header {
    background-color: transparent;

    img {
        max-width: 200px;
    }

    button {
        background-color: #e9292c;
        color: white;
        border-radius: 5px;
        border: 0;
        padding: .3rem .8rem;
    }

    input {
        border-radius: 5px;
    }
}
</style>