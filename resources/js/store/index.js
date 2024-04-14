import { createStore } from "vuex";
import axios from "axios";

export default createStore({

    state:{
        note : "",
        jadwal : {},
        news : {},
        matchday : {},
        nextmatch : {},
        teams : {},
        club : {},
        player : {}
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
        },
        getTeams(state){
            return state.teams;
        },
        getClub(state){
            return state.club;
        },
        getPlayer(state){
            return state.player;
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
         },
         getTeam: async(context)=>{
            let response = await axios.get('https://ligaindonesia-api.vercel.app/api/v1/teams');
            context.commit('ADD_TEAM', response.data);
         },
         getClub: async(context, payload)=>{
            let response = await axios.get('https://ligaindonesia-api.vercel.app/api/v1/team/profile/'+payload);
            context.commit('ADD_CLUB', response.data);
         },
         getPlayer: async(context, payload)=>{
            let response = await axios.get('https://ligaindonesia-api.vercel.app/api/v1/team/players/'+payload);
            context.commit('ADD_PLAYER', response.data);
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
        },
        ADD_TEAM(state, payload){
            state.teams = payload.data;
            console.log(state.teams)
        },
        ADD_CLUB(state, payload){
            state.club = payload.data;
            console.log(state.club)
        },
        ADD_PLAYER(state, payload){
            state.player = payload.data;
            console.log(state.player);
        }
    }

})