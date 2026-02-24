<script setup lang="ts">
import { reactive } from 'vue';

defineOptions({
    name: "AppFooter",
});

const lastUpdated = reactive({
    url: "",
    date: ""
});

fetch("https://api.github.com/repos/ThanosGkiom/portfolio/commits?per_page=1").then((res) => res.json()).then((data) => {
    lastUpdated.url = data[0].html_url;
    lastUpdated.date = data[0].commit.committer.date;
});

</script>

<template>
    <footer class="footer container">
        <p>
            &copy; {{ new Date().getFullYear() }} Thanos Gkiomisis
        </p>

        <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>

        <a :href="lastUpdated.url" target="_blank">
            Last updated: {{ new Date(lastUpdated.date).toLocaleDateString("en-GB") }}
        </a>
    </footer>
</template>
