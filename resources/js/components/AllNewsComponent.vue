<template>
  <headerComponent />
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6 mt-2" v-for="(element, index) in news" :key="index">
        <a :href="element.url" class="link">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <img :src="imgrl" alt="gambar" style="width: 90%" />
                </div>
                <div class="col">
                  <h5 class="fw-bold">{{ element.title }}</h5>
                </div>
              </div>
            </div>
            <div class="card-title text-center px-2"></div>
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

const store = useStore();

const news = computed(() => {
  return store.getters.getBerita;
});

import imgUrl from "../../../public/img/Liga_1.svg";

const imgrl = imgUrl;
onBeforeMount(() => {
  store.dispatch("getNews");
});
</script>
<style scoped>
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

.link {
  text-decoration: none;
}
</style>