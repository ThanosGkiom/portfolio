<script setup lang="ts">
import { fetchSkills } from "@/api/skills";
import type { SkillCategory } from "@/types";

const allSkills = fetchSkills();

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: allSkills.filter((item) => item.category === "Frontend"),
    },
    {
        title: "Backend",
        skills: allSkills.filter((item) => item.category === "Backend"),
    },
    {
        title: "Tools",
        skills: allSkills.filter((item) => item.category === "Tools"),
    },
    {
        title: "Soft Skills",
        skills: allSkills.filter((item) => item.category === "Soft Skills"),
    },
];
</script>

<template>
    <section id="skills" class="section-skills section">
        <div class="container">
            <header class="section__header">
                <h2 class="section__title">Skills & Expertise</h2>
            </header>

            <div class="section-skills__grid">
                <article
                    v-for="category in skillCategories"
                    :key="category.title"
                    class="section-skills__category"
                >
                    <h3 class="section-skills__category-title">
                        {{ category.title }}
                    </h3>
                    <ul class="section-skills__list">
                        <li
                            v-for="skill in category.skills"
                            :key="skill.name"
                            class="section-skills__item"
                        >
                            {{ skill.name }}
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    </section>
</template>
