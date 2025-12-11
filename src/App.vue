<script setup lang="ts">
import Header from './core/components/layout/Header.vue';
import Footer from './core/components/layout/Footer.vue';

</script>

<template>
	<Header />

	<main>
		<router-view />
	</main>

	<Footer />
</template>