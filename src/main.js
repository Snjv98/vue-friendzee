import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
// import "../src/assets/main.css"
import "../src/assets/main.css"


import { library } from '@fortawesome/fontawesome-svg-core'

import { faMagnifyingGlass, faImages, faLocationDot, faVideo, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

// import { fab } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faMagnifyingGlass, faImages, faLocationDot, faVideo, faEnvelope, faPhone)

createApp(App).use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
