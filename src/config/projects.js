import { marked } from 'marked';
import matter from 'gray-matter';

// Cette liste sera bientôt générée automatiquement !
const PROJECTS_LIST = [
    'UsineDuFutur',
    'EnsimElec',
    'Portfolio',
    'FormulePolytechniqueMontreal',
    'RestaurationCaravane'
];

/**
 * Corrige les chemins d'images relatifs dans le contenu Markdown pour qu'ils pointent vers le bon dossier de projet.
 * @param {string} content - Le contenu HTML ou Markdown.
 * @param {string} projectId - L'ID du projet.
 * @returns {string} - Le contenu avec les chemins d'images corrigés.
 */
const fixImagePaths = (content, projectId) => {
    // Cette regex va trouver les chemins d'images relatifs (ex: ./image.png ou images/cover.jpg)
    // dans les attributs src="" et les URLs de markdown ![alt](./image.png)
    return content.replace(/(\(|=)('|")?(\.\/)([^"')]+)('|")?\)/g, `$1$2/projects/${projectId}/$4$5)`);
};


/**
 * Charge et parse la configuration de tous les projets depuis leurs fichiers index.md.
 * @returns {Promise<Array<Object>>} - Une promesse qui résout un tableau d'objets projet.
 */
export const getProjects = async () => {
    const projectsPromises = PROJECTS_LIST.map(async (projectId) => {
        try {
            const response = await fetch(`/projects/${projectId}/index.md`);
            if (!response.ok) {
                console.warn(`Projet ${projectId} non trouvé, ignoré.`);
                return null;
            }
            const markdownWithMeta = await response.text();
            
            // On utilise gray-matter pour séparer le frontmatter du contenu
            const { data: frontmatter, content } = matter(markdownWithMeta);

            // On corrige les chemins d'images dans le contenu
            const contentWithFixedPaths = fixImagePaths(content, projectId);
            
            // On convertit le contenu markdown en HTML
            const htmlContent = marked(contentWithFixedPaths);

            return {
                id: projectId,
                title: frontmatter.title || 'Projet sans titre',
                date: frontmatter.date || '',
                // On corrige aussi le chemin de l'image de couverture
                cover: frontmatter.cover ? fixImagePaths(frontmatter.cover, projectId).replace(/(\(|\))/g,'') : '',
                tags: frontmatter.tags || [],
                content: htmlContent,
            };
        } catch (error) {
            console.error(`Erreur lors du chargement du projet ${projectId}:`, error);
            return null;
        }
    });

    // On attend que toutes les promesses soient résolues et on filtre les projets nuls (non trouvés)
    const projects = (await Promise.all(projectsPromises)).filter(Boolean);
    
    // On trie les projets par date, du plus récent au plus ancien
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    return projects;
};