<script>
import { mapActions, mapState } from 'pinia';
import CardComponent from '../components/CardComponent.vue';
import { useCounterStore } from '../stores/counter';
export default {
    components: { CardComponent },
    data() {
        return {
            search: ''
        }
    },
    computed: {
        ...mapState(useCounterStore, ['movies'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMovies']),
        getMovies() {
            this.fetchMovies(this.search)
        }
    },
    created() {
        this.fetchMovies()
    }
}
</script>

<template>
    <!-- MOVIES PAGE -->
    <div class="container-fluid " style="min-height:95vh">
        <div class="">
            <div class="d-flex py-5 justify-content-between">
                <h1 class="">MOVIES</h1>
                <div class="d-flex align-items-center">
                    <form @submit.prevent="getMovies" class="d-flex flex-row ">
                        <div class="">
                            <input type="text" class="form-control" id="search-engine" placeholder="Search">
                        </div>
                        <div class="ms-2">
                            <button type="submit" class="btn mb-3" id="button">Search</button>
                        </div>
                    </form>
                    <!-- </div> -->
                </div>
            </div>
            <div class="d-flex flex-wrap">
                <CardComponent v-for="movie in movies" :key="movie.id" :movie="movie" />
            </div>
        </div>
    </div>
    <!-- END MOVIES PAGE -->
</template>