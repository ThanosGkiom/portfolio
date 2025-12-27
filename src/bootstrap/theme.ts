import { useThemeStore } from '@/stores/theme'

export function setupTheme() {
    const themeStore = useThemeStore()

    // Initial sync
    document.documentElement.setAttribute('data-theme', themeStore.theme)

    // Ongoing sync
    themeStore.$subscribe((mutation, state) => {
        document.documentElement.setAttribute('data-theme', state.theme)
    })
}