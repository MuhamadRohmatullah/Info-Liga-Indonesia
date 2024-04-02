import { createStore } from "vuex";
import axios from "axios";

export default createStore({

    state:{
        note : "",
        jadwal : {}
    },
    getters:{
        getNote(state){
            return state.note
        },
        getJad(state){
            return state.jadwal;
        }
    },
    actions:{
         getData(context){
            context.commit('ADD_DATA', 'Menyala');
         },
         getJadwal: async(context)=>{
            let response = await axios.get('https://ligaindonesia-api.vercel.app/api/v1/standings');
            context.commit('ADD_JADWAL', response.data);
         }
    },
    mutations:{
        ADD_DATA(state, payload){
            state.note = payload
        },
        ADD_JADWAL(state, payload){
            state.jadwal = payload.data;
            console.log(state.jadwal);
        }
    }

})