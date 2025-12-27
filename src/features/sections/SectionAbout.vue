<script setup lang="ts">
import { onMounted, ref } from 'vue'
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

const mapContainer = ref<HTMLDivElement | null>(null)

// skg coordinates
const location = {
    lat: 40.58145397054495,
    lng: 22.953153232544235,
    zoom: 9,
}

onMounted(async () => {
    if (!mapContainer.value) return

    const map = leaflet
        .map(mapContainer.value, {
            zoomControl: false,
            attributionControl: false,
            scrollWheelZoom: false
        })
        .setView([location.lat, location.lng], location.zoom)

    leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        })
        .addTo(map)

    leaflet.control.attribution({
        position: 'topright'
    }).addTo(map);


    leaflet
        .circleMarker([location.lat, location.lng], {
            radius: 40,
            fillColor: '#628141',
            color: '#628141',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3,
        })
        .addTo(map)
})
</script>

<template>
    <section id="home" class="section section-about">
        <div class="container">
            <div class="section-about__map-wrapper">
                <div ref="mapContainer" class="section-about__map"></div>
            </div>

            <div class="section-about__container">
                <img src="@/assets/images/me.webp" alt="Thanos (Me)" class="section-about__me">


                <div class="section-about__content">
                    <p class="section-about__text">
                        I'm <span class="section-about__highlight">Thanos</span>, a full-stack developer
                        based in Thessaloniki, Greece. I specialize in building modern, optimized, and performant web
                        applications.
                    </p>
                    <p class="section-about__text">
                        With over 2 years of experience in web development, I've worked on projects ranging from
                        digital media websites to e-commerce platforms. I believe in writing maintainable, semantic code
                        and creating interfaces that are both responsive and performant.
                    </p>
                    <p class="section-about__text">
                        When I'm not coding, you can find me playing video games, going to the gym, or enjoying the
                        Greek lifestyle.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
