<script setup lang="ts">
    import Socials from '../common/Socials.vue';

</script>

<template>
    <footer>
        <div class="container">
            <Socials :hasText="true" />

            <span class="last-updated">Last updated {{ new Date().getFullYear() }}</span>
        </div>
    </footer>
</template>