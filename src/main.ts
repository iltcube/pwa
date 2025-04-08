import { createApp } from 'vue'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    // Показываем пользователю сообщение о доступном обновлении
    if (confirm('Доступна новая версия приложения. Обновить?')) {
      updateSW()
    }
  },
  onOfflineReady() {
    console.log('Приложение готово для работы оффлайн')
  }
})

createApp(App).mount('#app')
