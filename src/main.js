import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faCaretRight, faTrashAlt, faPlus} from '@fortawesome/free-solid-svg-icons'

library.add(
    faCaretRight,
    faTrashAlt,
    faPlus,
);

createApp(App).mount('#app')
