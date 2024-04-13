import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from "vuetify/lib/framework.mjs";
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';

export default createVuetify({
    components,
    directives,
    icons:{
        defaultSet: 'mdi',
    },
})