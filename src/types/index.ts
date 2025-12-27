export interface Tag {
    name: string
}

export interface Skill {
    name: string
    category: SkillCategory['title']
}

export interface SkillCategory {
    title: string
    skills: Skill[]
}

export interface Project {
    title: string
    description: string
    year: number
    link: string
    tags?: Tag[]
}
