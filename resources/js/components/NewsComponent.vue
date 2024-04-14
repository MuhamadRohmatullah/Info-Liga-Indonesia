<template>
  <headerComponent />
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-3 mt-2" v-for="(element, index) in news" :key="index">
        <a :href="element.url" class="link">
          <div class="card" v-if="index <= 3">
            <div class="card-body text-center">
              <img :src="imgrl" alt="gambar" style="width: 50%" />
            </div>
            <div class="card-title text-center px-2">
              <h5 class="fw-bold">{{ element.title }}</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  
  </div>
</template>
<script setup>
import headerComponent from "./HeaderComponent.vue";
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import imgUrl from "../../../public/img/Liga_1.svg";

const imgrl = imgUrl;

const store = useStore();

const news = computed(() => {
  return store.getters.getBerita;
});

onBeforeMount(() => {
  store.dispatch("getNews");
});
</script>
<style>
.gbr {
  padding: 50px;
  width: auto;
  height: auto;
  border: 2px solid black;
}

.card {
  border-radius: 0;
  height: 100%;
}

.spotlight {
  padding: 150px;
  width: auto;
  height: auto;
  border: 2px solid black;
}

.lainnya {
  color: black;
  text-decoration: none;
}

.lainnya:hover {
  color: blue;
  cursor: pointer;
  text-shadow: 2px;
}

.link {
  text-decoration: none;
}
</style>