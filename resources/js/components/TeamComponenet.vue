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
import { useRouter } from "vue-router";

import psis from "../../../public/img/team_logo/818.png";
var logopsis = psis;
import persib from "../../../public/img/team_logo/471.png";
var logopersib = persib;
import persebaya from "../../../public/img/team_logo/684.png";
var logopersebaya = persebaya;
import psm from "../../../public/img/team_logo/724.png";
var logopsm = psm;
import bali from "../../../public/img/team_logo/472.png";
var logobali = bali;
import rans from "../../../public/img/team_logo/853.png";
var logorans = rans;
import persita from "../../../public/img/team_logo/817.png";
var logopersita = persita;
import pss from "../../../public/img/team_logo/493.png";
var logopss = pss;
import borneo from "../../../public/img/team_logo/473.png";
var logoborneo = borneo;
import bhayangkara from "../../../public/img/team_logo/777.png";
var logobhayangkara = bhayangkara;
import persija from "../../../public/img/team_logo/778.png";
var logopersija = persija;
import persisolo from "../../../public/img/team_logo/842.png";
var logopersisolo = persisolo;
import arema from "../../../public/img/team_logo/748.png";
var logoarema = arema;
import madura from "../../../public/img/team_logo/685.png";
var logomadura = madura;
import persik from "../../../public/img/team_logo/775.png";
var logopersik = persik;
import barito from "../../../public/img/team_logo/819.png";
var logobarito = barito;
import dewa from "../../../public/img/team_logo/846.png";
var logodewa = dewa;
import persikabo from "../../../public/img/team_logo/820.png";
var logopersikabo = persikabo;

function logo(id) {
  if (id == "471") {
    return logopersib;
  } else if (id == "818") {
    return logopsis;
  } else if (id == "684") {
    return logopersebaya;
  } else if (id == "724") {
    return logopsm;
  } else if (id == "472") {
    return logobali;
  } else if (id == "853") {
    return logorans;
  } else if (id == "817") {
    return logopersita;
  } else if (id == "493") {
    return logopss;
  } else if (id == "473") {
    return logoborneo;
  } else if (id == "777") {
    return logobhayangkara;
  } else if (id == "778") {
    return logopersija;
  } else if (id == "842") {
    return logopersisolo;
  } else if (id == "748") {
    return logoarema;
  } else if (id == "685") {
    return logomadura;
  } else if (id == "775") {
    return logopersik;
  } else if (id == "819") {
    return logobarito;
  } else if (id == "846") {
    return logodewa;
  } else if (id == "820") {
    return logopersikabo;
  }
}

const store = useStore();

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