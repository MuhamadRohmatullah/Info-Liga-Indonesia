<template>
  <headerComponent />
  <div class="row justify-content-center mt-2">
    <div class="col-8 mt-1" v-for="(elm, index) in match" :key="index">
      <div class="card p-2 shadow text-center" style="width: 100%">
        <h5 class="fw-bold">{{ elm.date }}</h5>
        <h5 v-if="elm.date">Pekan {{ elm.gameweek }}</h5>
        <h5 v-if="elm.time == 'FT'" style="color: red">{{ elm.time }}</h5>
        <h5 v-else>{{ elm.time }}</h5>
        <h5 v-if="elm.home_club" class="fw-bold">
          {{ elm.home_club }} {{ elm.score }} {{ elm.away_club }}
        </h5>
        <h5 v-if="elm.venue">
          <v-icon icon="mdi-map-marker" />{{ elm.venue }}
        </h5>
      </div>
    </div>
  </div>
  <div class="row justify-content-center mt-4 mb-2">
    <div class="col-8 mt-1" v-for="(elmn, index) in nextmatch" :key="index">
      <div
        class="card p-2 shadow text-center mb-0"
        style="width : 100%, border : none"
      >
        <h5 class="fw-bold">{{ elmn.date }}</h5>
        <h5 v-if="elmn.date">Pekan {{ elmn.gameweek }}</h5>
        <h5>{{ elmn.time }}</h5>
        <h5 v-if="elmn.home_club" class="fw-bold">
          {{ elmn.home_club }} {{ elmn.score }} {{ elmn.away_club }}
        </h5>
        <h5 v-if="elmn.venue">
          <v-icon icon="mdi-map-marker" />{{ elmn.venue }}
        </h5>
      </div>
    </div>
  </div>
</template>
<script setup>
import headerComponent from "./HeaderComponent.vue";

import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const match = computed(() => {
  return store.getters.getMatch;
});

const nextmatch = computed(() => {
  return store.getters.getNextMatch;
});

onBeforeMount(() => {
  store.dispatch("getSchedule");
  store.dispatch("getNext");
});
</script>
<style scoped>
.card {
  border-radius: 0;
}
</style>