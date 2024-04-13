import ExampleComponent from './components/ExampleComponent.vue';
import TestComponent from './components/HeaderComponent.vue';

export const routes = [
   
    {
        path : '/',
        name : 'home',
        component : () => import('./components/ExampleComponent.vue')
    },
    {
        path : '/klasemen',
        name : 'klasemen',
        component : () => import('./components/MainComponent.vue')
    },
    {
        path : '/news',
        name : 'news',
        component : () => import('./components/NewsComponent.vue')
    },
    {
        path: '/allNews',
        name : 'allNews',
        component :  () => import('./components/AllNewsComponent.vue')
    },
    {
        path: '/jadwal',
        name : 'jadwal',
        component :  () => import('./components/ScheduleComponent.vue')
    },
    {
        path: '/teams',
        name : 'teams',
        component :  () => import('./components/TeamComponenet.vue')
    },
    {
        path : '/club',
        name : 'club',
        component : () => import('./components/ClubComponent.vue'),
    }
]