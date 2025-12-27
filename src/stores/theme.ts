import { ref } from 'vue'
import { defineStore } from 'pinia'

type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
    const theme = ref<Theme>('dark')

    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    return {
        theme,
        toggleTheme
    }
}, {
    persist: true,
})