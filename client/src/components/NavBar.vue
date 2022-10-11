<script>
export default {

}
</script>

<template>
    <!-- NavBar -->
    <div class="sticky-top">
        <nav class="navbar d-flex justify-content-between navbar-light" style="width:100%">
            <div class="col-2 ps-1">
                <a class="navbar-brand" href="#">
                    <img src="/movie-rental.png" style="height: 2rem" alt="logo" />
                </a>
            </div>
            <div class="navbar-nav col-7">
                <div class="row d-flex justify-content-center">
                    <a class="nav-link px-4 text-center col-2" href="#" id="link">Movies</a>
                    <a class="nav-link px-4 text-center col-2" href="#" id="link">Tv Shows</a>
                </div>
            </div>
            <div class="col-2 d-flex justify-content-end">
                <a class="nav-link link-light" id="link" href="#">Logout</a>
            </div>
        </nav>
    </div>
</template>