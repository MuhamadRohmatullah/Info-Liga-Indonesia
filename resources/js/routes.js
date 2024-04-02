import ExampleComponent from './components/ExampleComponent.vue';
import MainComponent from './components/MainComponent.vue';
import TestComponent from './components/HeaderComponent.vue';

export const routes = [
   
    {
        path : '/',
        name : 'home',
        component : MainComponent
    },
    {
        path : '/test',
        name : 'test',
        component : TestComponent
    }
]