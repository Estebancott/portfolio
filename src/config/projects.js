import { marked } from 'marked';
import matter from 'gray-matter';
import { PROJECTS_LIST } from './projectsConfig.js';

/**
 * Charge et parse la configuration de tous les projets depuis leurs fichiers index.md.
 * @returns {Promise<Array<Object>>} - Une promesse qui résout un tableau d'objets projet.
 */
export const getProjects = async () => {
    const projectsPromises = PROJECTS_LIST.map(async (projectId) => {
        try {
            // On récupère le fichier markdown du projet
            const response = await fetch(`/projects/${projectId}/index.md`);
            if (!response.ok) {
                console.warn(`Projet ${projectId} non trouvé, ignoré.`);
                return null;
            }
            const markdownWithMeta = await response.text();
            
            // On utilise gray-matter pour séparer le frontmatter du contenu
            const { data: frontmatter, content } = matter(markdownWithMeta);

            // On convertit le contenu markdown en HTML.
            // marked ne touche pas aux chemins, et Vite s'assure qu'ils sont corrects.
            const htmlContent = await marked(content);

            return {
                id: projectId,
                title: frontmatter.title || 'Projet sans titre',
                date: frontmatter.date || '',
                // Le chemin de la couverture est maintenant direct et correct.
                cover: frontmatter.cover || '',
                tags: frontmatter.tags || [],
                content: htmlContent,
            };
        } catch (error) {
            console.error(`Erreur lors du chargement du projet ${projectId}:`, error);
            return null;
        }
    });

    // On attend que toutes les promesses soient résolues et on filtre les projets nuls
    const projects = (await Promise.all(projectsPromises)).filter(Boolean);
    
    // On trie les projets par date, du plus récent au plus ancien
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    return projects;
};