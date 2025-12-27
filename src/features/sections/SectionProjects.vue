<script setup lang="ts">
import { useProjects } from "@/composables/useProjects";
import ProjectCard from "@/features/projects/ProjectCard.vue";

const { projects, getProjects } = useProjects();

// Load projects immediately (synchronous)
getProjects();
</script>

<template>
    <section id="work" class="section-work section">
        <div class="container">
            <header class="section__header">
                <h2 class="section__title">Selected Work</h2>
            </header>

            <div class="projects-grid">
                <TransitionGroup name="stagger-list" appear>
                    <ProjectCard
                        v-for="(project, index) in projects"
                        :key="project.title"
                        :project="project"
                        :style="{ '--delay': `${index * 100}ms` }"
                    />
                </TransitionGroup>
            </div>
        </div>
    </section>
</template>
