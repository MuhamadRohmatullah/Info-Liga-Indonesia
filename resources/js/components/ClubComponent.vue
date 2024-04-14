<template>
  <headerComponent />
 
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