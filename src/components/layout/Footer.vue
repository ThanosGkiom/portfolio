<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
    name: "AppFooter",
});

const lastUpdated = ref();

fetch("https://api.github.com/repos/ThanosGkiom/portfolio/commits?per_page=1").then((res) => res.json()).then((data) => {
    lastUpdated.value = data[0].commit.committer.date;
});

</script>

<template>
    <footer class="footer container">
        <p>
            &copy; {{ new Date().getFullYear() }} Thanos Gkiomisis
        </p>

        <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>

        <p>
            Last updated: {{ new Date(lastUpdated).toLocaleDateString("en-GB") }}
        </p>
    </footer>
</template>
