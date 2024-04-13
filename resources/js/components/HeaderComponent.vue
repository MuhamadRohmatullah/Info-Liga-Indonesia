<template>
  <nav class="navbar navbar-expand-lg bg-primary" id="navigasi">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img :src="imgrl" alt="" style="width: 50px; color: white!importan" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="mx-5">
            <router-link to="/" class="nav-link">Beranda</router-link>
          </li>
          <li class="mx-5 nav-item">
            <router-link to="/klasemen" class="nav-link">Klasemen</router-link>
          </li>
          <li class="mx-5">
            <router-link to="/news" class="nav-link">Berita</router-link>
          </li>
          <li class="mx-5">
            <router-link to="/jadwal" class="nav-link">Jadwal</router-link>
          </li>
          <li class="mx-5">
            <router-link to="/teams" class="nav-link">Teams</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script setup>
import imgUrl from "../../../public/img/logo2.png";

const imgrl = imgUrl;
</script>

<style scoped>
* {
  font-family: "Pavanam", sans-serif;
  color: white !important;
  font-weight: 500;
}
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.534);
  align-items: center;
}

.onfocus {
  background-color: rgba(255, 255, 255, 0.534);
  align-items: center;
}
</style>