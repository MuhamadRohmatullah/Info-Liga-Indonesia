<template>
    <headerComponent/>
    <div class="container">
    <div class="card my-2">
       <table class="table table-striped">
            <thead>
                <tr>
                    <th class="judul"><v-icon icon="mdi-medal-outline" style="color: white"/></th>
                    <th class="judul">Club</th>
                    <th class="judul text-center">Tanding</th>
                    <th class="judul">M</th>
                    <th class="judul">D</th>
                    <th class="judul">K</th>
                    <th class="judul">Point</th>
                    <th class="judul">SG</th>
                    <th class="judul">Laga terakhir</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in jadwal" :key="index">
                    <td v-if="data.position == 1 || data.position == 2"><span id="topT"></span>*{{data.position}}</td>
                    <td v-else-if="data.position == 16 || data.position == 17 || data.position == 18"><span id="botT"></span>{{data.position}}</td>
                    <td v-else-if="data.position == 2 || data.position == 3 || data.position == 4">*{{data.position}}</td>
                    <td v-else>{{data.position}}</td>
                    <td>{{data.club}}</td>
                    <td class="text-center">{{data.matches}}</td>
                    <td>{{ data.win }}</td>
                    <td>{{ data.draw }}</td>
                    <td>{{ data.lose }}</td>
                    <td>{{ data.points }}</td>
                    <td>{{ data.goals }}</td>
                    <td>{{ data.form }}</td>
                </tr>
            </tbody>
       </table>
       <div class="row">
           <div class="col">
              <h6 class="mt-2 ms-2"><span id="topT"></span>AFC CUP</h6>
           </div>
            <div class="col">
              <h6>* Championship series</h6>
           </div>
           <div class="col">
              <h6><span id="botT"></span>Degradasi</h6>
           </div>
            
       </div>
       
       </div>
    </div>
</template>
<script setup>
import {computed, onMounted, ref, onBeforeMount} from 'vue';
import {useStore} from 'vuex';
import headerComponent from './HeaderComponent.vue';

const model = defineModel();
const store = useStore();


const not = computed(()=>{
    return store.getters.getNote
})

const jadwal = computed(()=>{
    return store.getters.getJad
})

onBeforeMount(()=>{
    console.log('COmponent mounted !');
    store.dispatch('getJadwal');
})

</script>
<style scoped>
#topT{
   padding: 2px;
   margin-left: 0;
    background: rgb(8, 202, 8);
}

#botT{
    padding: 2px;
    margin-left: 0;
    background: rgb(202, 37, 8);
}

.judul{
    background: rgb(0, 81, 255) !important;
    color:white;
}

*{
    color: black;
}

</style>