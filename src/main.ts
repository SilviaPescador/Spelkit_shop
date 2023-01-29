import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faFacebook, faInstagram)



createApp(App).use(store).use(router).mount('#app')
