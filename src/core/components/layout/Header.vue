<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMenuStore } from '@/core/store/menu';
import Socials from '@/core/components/common/Socials.vue';

const menuStore = useMenuStore();
const { isMenuOpen } = storeToRefs(menuStore);

</script>

<template>
    <header :class="{ 'menu__open': isMenuOpen }">
        <div class="container">
            <Socials />

            <router-link to="/">
                <picture>
                    <source media="(prefers-color-scheme: dark)" srcset="@/assets/images/logo_dark.svg">
                    <source media="(prefers-color-scheme: light)" srcset="@/assets/images/logo_light.svg">
                    <img src="@/assets/images/logo_light.svg" alt="Logo" class="logo">
                </picture>
            </router-link>

            <nav class="header-nav">
                <ul>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/projects">Projects</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </nav>

            <button @click="menuStore.toggleMenu" class="menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
</template>