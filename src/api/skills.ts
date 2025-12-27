import type { Skill } from '@/types/index'

/**
 * Service Layer:
 * Provides local mock data for skills.
 */

const skills: Skill[] = [
    {
        name: 'HTML5',
        category: 'Frontend',
    },
    {
        name: 'CSS3',
        category: 'Frontend',
    },
    {
        name: 'Sass',
        category: 'Frontend',
    },
    {
        name: 'JavaScript',
        category: 'Frontend',
    },
    {
        name: 'TypeScript',
        category: 'Frontend',
    },
    {
        name: 'Vue 3',
        category: 'Frontend',
    },

    {
        name: 'Laravel',
        category: 'Backend',
    },
    {
        name: 'PHP',
        category: 'Backend',
    },
    {
        name: 'MySQL',
        category: 'Backend',
    },
    {
        name: 'Node.js',
        category: 'Backend',
    },

    {

        name: 'Git',
        category: 'Tools',
    },
    {
        name: 'Figma',
        category: 'Tools',
    },
    {
        name: 'Antigravity',
        category: 'Tools',
    },
    {
        name: 'Gemini',
        category: 'Tools',
    },

    {
        name: 'Mentoring',
        category: 'Soft Skills',
    },
    {
        name: 'Problem Solving',
        category: 'Soft Skills',
    },
    {
        name: 'Adaptability',
        category: 'Soft Skills',
    },
]

export function fetchSkills(): Skill[] {
    return skills
}
