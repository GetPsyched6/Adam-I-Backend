import * as fs from 'fs';
import * as path from 'path';

const replaceImports = (directory: string): void => {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      replaceImports(filePath);
    } else if (filePath.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/import\s+(.+?)\s+from\s+['"](.+?)['"]/g, (match, p1, p2) => {
        if (!p2.endsWith('.js')) return `import ${p1} from '${p2}.js'`;
        return match;
      });
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
};

const directoryPath = path.join(__dirname, '../dist');
replaceImports(directoryPath);
