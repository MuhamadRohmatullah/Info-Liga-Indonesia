<template>
  <headerComponent />
  <div @click="goToBack" class="backBtn">
    <v-icon icon="mdi-chevron-double-left" size="30px" /><span>Back</span>
  </div>
  <div class="card mt-2 mx-1">
    <div class="card-body fs-4">
      <blockquote class="blockquote">
        <v-icon icon="mdi-shield-outline" size="150px" class="mb-3" />
        <p>{{ club.description }}</p>
        <ul>
          <li>
            <p><v-icon icon="mdi-shield-outline" /> {{ club.team_name }}</p>
          </li>
          <li>
            <p><v-icon icon="mdi-calendar" /> {{ club.team_founded }}</p>
          </li>
          <li>
            <p><v-icon icon="mdi-stadium-variant" /> {{ club.team_venue }}</p>
          </li>
          <li>
            <p><v-icon icon="mdi-soccer" /> {{ club.game_play }}</p>
          </li>
          <li>
            <p><v-icon icon="mdi-check-bold" /> {{ club.game_win }}</p>
          </li>
          <li>
            <p><v-icon icon="mdi-minus-thick" /> {{ club.game_draw }}</p>
          </li>
          <li>
            <p><v-icon icon="mdi-close-thick" /> {{ club.game_lose }}</p>
          </li>
        </ul>
      </blockquote>
    </div>
  </div>

  <div
    class="row justify-content-center mt-4"
    style="background-color: blue; color: white; height: 30px"
  >
    <div class="col text-end">
      <v-icon icon="mdi-account-group-outline" size="35px" />
    </div>
    <div class="col">
      <h3 class="fw-bold">Pemain</h3>
    </div>
  </div>

  <div class="row mt-2">
    <div
      class="col-xl-3 mt-1 text-center"
      v-for="(element, index) in player"
      :key="index"
    >
      <div class="card">
        <div class="card-body">
          <h5>
            {{ element.player_name }}
          </h5>
          <div class="fw-bold">
            <v-icon icon="mdi-tshirt-crew-outline" />{{ element.player_number }}
          </div>
          <h5
            v-if="element.position == 'Goalkeeper'"
            style="color: red; font-weight: bold"
          >
            {{ element.position }}
          </h5>
          <h5
            v-else-if="element.position == 'Midfielder'"
            style="color: green; font-weight: bold"
          >
            {{ element.position }}
          </h5>
          <h5
            v-else-if="element.position == 'Forward'"
            style="color: red; font-weight: bold"
          >
            {{ element.position }}
          </h5>
          <h5
            v-else-if="element.position == 'Defender'"
            style="color: orange; font-weight: bold"
          >
            {{ element.position }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import headerComponent from "./HeaderComponent.vue";
import { useRouter } from "vue-router";

const store = useStore();

const club = computed(() => {
  return store.getters.getClub;
});

const player = computed(() => {
  return store.getters.getPlayer;
});

const router = useRouter();

function goToBack() {
  router.push({ name: "teams" });
}
</script>
<style scoped>
.card {
  border-radius: 0;
}

ul {
  list-style-type: none;
}

.backBtn {
  cursor: pointer;
}
.backBtn:hover {
  color: blue;
}
</style>