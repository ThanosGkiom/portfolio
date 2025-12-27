<script setup lang="ts">
import SectionSkills from '@/features/sections/SectionSkills.vue'
import SectionAbout from '@/features/sections/SectionAbout.vue'
import SectionContact from '@/features/sections/SectionContact.vue'
// import SectionProjects from '@/features/sections/SectionProjects.vue'

defineOptions({
    name: 'AppHome',
})
</script>

<template>
    <main class="home-view">
        <!-- About Section -->
        <SectionAbout />

        <!-- Skills Section -->
        <SectionSkills />

        <!-- Projects Section
        <SectionProjects /> -->

        <!-- Contact Section -->
        <SectionContact />
    </main>
</template>

<style lang="scss">
@use '@/assets/scss/pages/home';
</style>
