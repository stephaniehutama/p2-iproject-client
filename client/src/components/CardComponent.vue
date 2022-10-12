<script>
export default {
    props: ['movie']
}
</script>

<template>
    <div class="row m-2">
        <div class="col-4">
            <div class="card" style="width: 18rem; height: 38rem">
                <img :src="movie.image" class="card-img-top" style="height: 350px" alt="..." />
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">{{movie.fullTitle}}</h5>
                    <p class="card-text">
                        Starring: {{movie.crew}}
                        <br>
                        Rating: {{movie.imDbRating}} || {{movie.imDbRatingCount}} votes
                    </p>
                    <a href="#" class="btn" id="button">Rent</a>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>