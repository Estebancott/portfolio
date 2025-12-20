// src/config/projects.js
import { marked } from 'marked';
import matter from 'gray-matter';
import { PROJECTS_LIST } from './projectsConfig.js';

/**
 * Charge les projets selon la langue choisie.
 * @param {string} lang - 'fr' ou 'en'
 */
export const getProjects = async (lang = 'fr') => {
    const projectsPromises = PROJECTS_LIST.map(async (projectId) => {
        try {
            // Construction dynamique du nom de fichier : index.fr.md ou index.en.md
            const fileName = `index.${lang}.md`;
            
            const response = await fetch(`/projects/${projectId}/${fileName}`);
            
            if (!response.ok) {
                // Fallback optionnel : si la version anglaise n'existe pas, on essaie la française ?
                // Pour l'instant on log juste un warning.
                console.warn(`Projet ${projectId} : ${fileName} non trouvé.`);
                return null;
            }

            const markdownWithMeta = await response.text();
            const { data: frontmatter, content } = matter(markdownWithMeta);
            const htmlContent = await marked(content);

            return {
                id: projectId,
                title: frontmatter.title || 'Sans titre',
                date: frontmatter.date || '',
                cover: frontmatter.cover || '',
                tags: frontmatter.tags || [],
                content: htmlContent,
            };
        } catch (error) {
            console.error(`Erreur chargement projet ${projectId}:`, error);
            return null;
        }
    });

    const projects = (await Promise.all(projectsPromises)).filter(Boolean);
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    return projects;
};