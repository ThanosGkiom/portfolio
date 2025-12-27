import type { Project } from '@/types/index'

/**
 * Service Layer:
 * Provides local mock data for projects.
 */

const projects: Project[] = [
    {
        title: 'Portfolio',
        description: 'A personal portfolio website, built in one weekend.',
        year: 2025,
        link: 'https://github.com/ThanosGkiom/portfolio',
    },
]

export function fetchProjects(): Project[] {
    return projects
}
