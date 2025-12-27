import { ref, type Ref } from 'vue'
import { fetchProjects } from '@/api/projects'
import type { Project } from '@/types/index'

/**
 * Logic Layer (Composable):
 * Encapsulates stateful logic around a feature.
 * Manages reactive state and exposes simple methods to the view.
 */
export function useProjects() {
    const projects: Ref<Project[]> = ref([])
    const error: Ref<string | null> = ref(null)

    /**
     * Loads the projects list and updates state.
     */
    const getProjects = () => {
        try {
            projects.value = fetchProjects()
        } catch (err: unknown) {
            if (err instanceof Error) {
                error.value = err.message
            } else {
                error.value = 'An unexpected error occurred while fetching projects.'
            }
        }
    }

    return {
        projects,
        error,
        getProjects,
    }
}
