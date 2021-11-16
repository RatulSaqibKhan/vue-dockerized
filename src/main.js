import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'

createApp(App).use(VuesticPlugin, {
  colors: {
    // Custom colors
    bodyColor: '#34495e',
    navColor: '#043db3',
  }
}).use(router).mount('#app')
