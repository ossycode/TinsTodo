
// Factory function to create blank project array list

export const projectLoad = () => {
    let projectsArray = [];
    let projectTitle = 'Personal'
    projectsArray.push({projectTitle});
    return {projectsArray, projectTitle}
}