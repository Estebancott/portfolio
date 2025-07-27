// generate-projects-list.js
import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'public', 'projects');
const configFilePath = path.join(process.cwd(), 'src', 'config', 'projectsConfig.js');

try {
    const directories = fs.readdirSync(projectsDirectory, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    const fileContent = `// Ce fichier est auto-généré. Ne pas modifier manuellement.\nexport const PROJECTS_LIST = ${JSON.stringify(directories, null, 4)};\n`;

    fs.writeFileSync(configFilePath, fileContent, 'utf8');

    console.log(`✅ La liste des projets a été mise à jour dans ${configFilePath}`);

} catch (error) {
    console.error('❌ Erreur lors de la génération de la liste des projets:', error);
    process.exit(1); // Arrête le processus en cas d'erreur
}