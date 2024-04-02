<template>
 
    <div class="container">
    <div class="card">
       <table class="table">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Club</th>
                    <th>Match</th>
                    <th>M</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Points</th>
                    <th>Goals</th>
                    <th>Form</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in jadwal" :key="index">
                    <td>{{data.position}}</td>
                    <td>{{data.club}}</td>
                    <td>{{data.matches}}</td>
                    <td>{{ data.win }}</td>
                    <td>{{ data.draw }}</td>
                    <td>{{ data.lose }}</td>
                    <td>{{ data.points }}</td>
                    <td>{{ data.goals }}</td>
                    <td>{{ data.form }}</td>
                </tr>
            </tbody>
       </table>
       </div>
    </div>
</template>
<script setup>
import {computed, onMounted, ref} from 'vue';
import {useStore} from 'vuex';
const count = ref(0);
const a = 'attention please !';

const model = defineModel();
const store = useStore();


const not = computed(()=>{
    return store.getters.getNote
})

const jadwal = computed(()=>{
    return store.getters.getJad
})

function attention(){
    for(let i=0; i<=5; i++){
         console.log(a+i);
    }
}

function increment(){
    count.value++
}

function respon(){
    console.log('emmit succesfull !');
}

const com = computed(() =>{ return parseInt(count.value)})

function tes(){
    console.log('testssss');
}

onMounted(()=>{
    console.log('COmponent mounted !');
    store.dispatch('getJadwal');
})

console.log(jadwal)



</script>