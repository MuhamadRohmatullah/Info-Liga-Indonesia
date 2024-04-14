<template>
  <headerComponent />
  <div class="container-fluid">
    <div class="card mt-1 shadow">
      <div class="card-body">
        <h2 class="fw-bold">Portal Informasi Liga 1 Indonesia</h2>
      </div>
    </div>
    <div class="card mt-1">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="item d-block w-100 text-center">
              <img :src="imgrl" alt="" style="width: 30%" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Liga 1 Info</h5>
              <p>Informasi seputar liga sepakbola di indonesia</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="item d-block w-100 text-center">
              <img :src="imgrl" alt="" style="width: 30%" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Klasemen Liga 1</h5>
              <p>Informasi klasemen sementara kompetisi Liga 1</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="item d-block w-100 text-center">
              <img :src="imgrl" alt="" style="width: 30%" />
            </div>
            <div class="carousel-caption d-none d-md-block">
              <h5>Berita Bola Liga 1</h5>
              <p>
                Informasi seputar club, pemain dan kompetisi yang sedang
                berjalan
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import headerComponent from "./HeaderComponent.vue";
import imgUrl from "../../../public/img/Liga_1.svg";

const imgrl = imgUrl;
</script>
<style scoped>
.card {
  border-radius: 0;
}

.item {
  padding-bottom: 100px;
  background-color: #50a7f8;
}

h2 {
  color: blue;
}
</style>
