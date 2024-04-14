import { createStore } from "vuex";
import axios from "axios";

export default createStore({

    state:{
        note : "",
        jadwal : {},
        news : {},
        matchday : {},
        nextmatch : {}
    },
    getters:{
        getNote(state){
            return state.note
        },
        getJad(state){
            return state.jadwal;
        },
        getBerita(state){
            return state.news;
        },
        getMatch(state){
            return state.matchday;
        },
        getNextMatch(state){
            return state.nextmatch;
        }
    },
    actions:{
         getData(context){
            context.commit('ADD_DATA', 'Menyala');
         },
         getJadwal: async(context)=>{
            let response = await axios.get('https://ligaindonesia-api.vercel.app/api/v1/standings');
            context.commit('ADD_JADWAL', response.data);
         },
         getNews: async(context)=>{
            let response = await axios.get('https://ligaindonesia-api.vercel.app/api/v1/news');
            context.commit('ADD_NEWS', response.data);
         },
         getSchedule: async(context)=>{
            let response = await axios.get('https://ligaindonesia-api.vercel.app/api/v1/matchday');
            context.commit('ADD_SCHEDULE', response.data);
         },
         getNext: async(context)=>{
            let response = await axios.get('https://ligaindonesia-api.vercel.app/api/v1/nextmatch');
            context.commit('ADD_NEXTSCHEDULE', response.data);
         }
    },
    mutations:{
        ADD_DATA(state, payload){
            state.note = payload
        },
        ADD_JADWAL(state, payload){
            state.jadwal = payload.data;
            console.log(state.jadwal);
        },
        ADD_NEWS(state, payload){
            state.news = payload.data;
            console.log(state.news[0]);
        },
        ADD_SCHEDULE(state, payload){
            state.matchday = payload.data;
        },
        ADD_NEXTSCHEDULE(state, payload){
            state.nextmatch = payload.data;
        }
    }

})