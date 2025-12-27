<script setup lang="ts">
import type { Project } from '@/types/index'

defineProps<{
    project: Project
}>()
</script>

<template>
    <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-card">
        <div class="project-card__content">
            <header class="project-card__header">
                <h3 class="project-card__title">{{ project.title }}</h3>
                <span class="project-card__year">{{ project.year }}</span>
            </header>
            <p class="project-card__description">{{ project.description }}</p>

            <div v-if="project.tags" class="project-card__tags">
                <span v-for="tag in project.tags" :key="tag.name" class="project-card__tag">
                    {{ tag.name }}
                </span>
            </div>
        </div>
        <div class="project-card__arrow">→</div>
    </a>
</template>
