import { createApp } from 'vue';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import store from './store';

import App from './App.vue';

const app = createApp(App);

library.add(faTimes, faCheck);

app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
