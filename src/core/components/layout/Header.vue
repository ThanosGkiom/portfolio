<script setup lang="ts">
import Socials from '@/core/components/common/Socials.vue'

const toggleMenu = () => {
    console.log('TEST')
}
</script>

<template>
    <header>
        <div class="container">
            <Socials />

            <router-link to="/">
                <picture>
                    <source media="(prefers-color-scheme: dark)" srcset="@/assets/images/logo_dark.svg">
                    <source media="(prefers-color-scheme: light)" srcset="@/assets/images/logo_light.svg">
                    <img src="@/assets/images/logo_light.svg" alt="Logo" class="logo">
                </picture>
            </router-link>

            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/projects">Projects</router-link>
                <router-link to="/contact">Contact</router-link>
            </nav>

            <!-- <button @click="toggleMenu" class="menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button> -->
        </div>
    </header>
</template>