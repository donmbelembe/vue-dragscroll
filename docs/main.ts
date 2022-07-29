import { createApp } from 'vue'
import App from './App.vue'
import { dragscroll } from '../src/main'

const app = createApp(App)
app.directive('dragscroll', dragscroll);
app.mount('#app')
