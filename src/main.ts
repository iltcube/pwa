import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('Доступно обновление. Перезагрузить?')) {
      updateSW()
    }
  },
  onOfflineReady() {
    console.log('Приложение готово к работе офлайн')
  },
})

const app = createApp(App)

app.use(router)

app.mount('#app')
