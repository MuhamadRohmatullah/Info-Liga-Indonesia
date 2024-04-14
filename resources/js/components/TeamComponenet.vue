<template>
  <headerComponent />
  <div class="row mt-3">
    <div
      class="col-12 col-xl-8 my-1"
      v-for="(team, index) in teams"
      :key="index"
    >
      <div class="card mb-2 shadow-sm p-2 ms-2" @click="goToCLub(team.team_id)">
        <div class="row">
          <div class="col-3">
            <img :src="logo(team.team_id)" alt="" style="width: 100px" />
          </div>
          <div class="col-7">
            <h5><v-icon icon="mdi-shield-outline" />{{ team.team_name }}</h5>
            <h5><v-icon icon="mdi-stadium-variant" /> {{ team.team_venue }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import headerComponent from "./HeaderComponent.vue";
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";

onBeforeMount(() => {
  store.dispatch("getTeam");
});

const teams = computed(() => {
  return store.getters.getTeams;
});

const router = useRouter();

function goToCLub(arg) {
  router.push({ name: "club" });
  store.dispatch("getClub", arg);
  store.dispatch("getPlayer", arg);
}
</script>
<style scoped>
.card {
  border-radius: 0;
  cursor: pointer;
}

.card:hover {
  background-color: rgba(231, 223, 223, 0.938);
}
</style>