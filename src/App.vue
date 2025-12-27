<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
    <div class="app-layout">
        <Header />

        <!-- Main Content -->
        <div class="main-content">
            <RouterView />
        </div>

        <Footer />
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/app";
</style>
