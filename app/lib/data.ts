import { projectData } from './project_data';

export async function fetchProjectById(id: string) {

    const project = projectData.find(project => project.id === id);
    return project;
}