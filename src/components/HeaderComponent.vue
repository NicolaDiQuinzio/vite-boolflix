<template>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src="../assets/img/Netflix_Logo_PMS.png" alt="Netflix Logo">
                </div>
            </div>
        </div>
</template>

<script>
import { store } from '../store/store';
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

    img {
        max-width: 200px;
    }
    input {
        border-radius: 5px;
    }
</style>