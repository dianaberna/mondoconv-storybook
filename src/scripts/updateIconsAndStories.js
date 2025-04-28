// updateIconsAndStories.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Ottieni il percorso del file corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurazione dei percorsi
const svgFolderPath = path.join(__dirname, '../components/icon/iconedainserire');
const iconSvgsFilePath = path.join(__dirname, '../components/icon/iconSvgs.ts');
const storiesFilePath = path.join(__dirname, '../stories/icon.stories.ts');
const debugMode = false; // Imposta a true per debugging

// Funzione per verificare l'esistenza di file e cartelle
function checkPaths() {
  console.log('Verifico i percorsi...');
  
  // Verifica la cartella degli SVG
  if (!fs.existsSync(svgFolderPath)) {
    console.error(`ERRORE: La cartella "${svgFolderPath}" non esiste.`);
    console.log('Provo a crearla...');
    try {
      fs.mkdirSync(svgFolderPath, { recursive: true });
      console.log(`✅ Cartella SVG creata: ${svgFolderPath}`);
      console.log('Inserisci i tuoi file SVG in questa cartella e riesegui lo script.');
      process.exit(0);
    } catch (err) {
      console.error(`Non è stato possibile creare la cartella: ${err.message}`);
      return false;
    }
  }
  console.log(`✅ Cartella SVG trovata: ${svgFolderPath}`);
  
  // Verifica il file iconSvgs.ts
  const iconSvgsDir = path.dirname(iconSvgsFilePath);
  if (!fs.existsSync(iconSvgsDir)) {
    console.error(`ERRORE: La directory "${iconSvgsDir}" non esiste.`);
    console.log(`Provo a crearla...`);
    try {
      fs.mkdirSync(iconSvgsDir, { recursive: true });
      console.log(`✅ Directory "${iconSvgsDir}" creata con successo.`);
    } catch (err) {
      console.error(`Non è stato possibile creare la directory: ${err.message}`);
      return false;
    }
  }
  
  if (!fs.existsSync(iconSvgsFilePath)) {
    console.warn(`AVVISO: Il file "${iconSvgsFilePath}" non esiste.`);
    console.log('Verrà creato un nuovo file.');
  } else {
    console.log(`✅ File iconSvgs.ts trovato: ${iconSvgsFilePath}`);
  }
  
  // Verifica il file icon.stories.ts
  if (!fs.existsSync(storiesFilePath)) {
    console.warn(`AVVISO: Il file stories "${storiesFilePath}" non esiste.`);
    console.log('Lo script procederà solo con l\'aggiornamento delle icone.');
  } else {
    console.log(`✅ File icon.stories.ts trovato: ${storiesFilePath}`);
  }
  
  return true;
}

// Funzione per creare un template base per il file iconSvgs.ts
function getIconSvgsTemplate() {
  return `// src/components/icon/iconSvgs.ts

// Definizione inline degli SVG
export const svgIcons = {
};

// Tipo che elenca tutte le icone disponibili
export type IconType = keyof typeof svgIcons;

/**
 * Funzione per ottenere un'icona
 * @param iconName - Tipo di icona richiesto
 * @returns Stringa SVG
 */
export const getIconSvg = (iconName: IconType): string => {
  return svgIcons[iconName] || '';
};

/**
 * Restituisce un array con tutti i tipi di icone disponibili
 * @returns Array di IconType
 */
export function getAllIconTypes(): IconType[] {
  return Object.keys(svgIcons) as IconType[];
}`;
}

// Funzione per leggere tutti i file SVG dalla cartella
function readSvgFiles() {
  try {
    const files = fs.readdirSync(svgFolderPath);
    const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg');
    
    if (svgFiles.length === 0) {
      console.error('Nessun file SVG trovato nella cartella. Aggiungine alcuni e riprova.');
      process.exit(0);
    }
    
    console.log(`Trovati ${svgFiles.length} file SVG nella cartella:`);
    svgFiles.forEach(file => console.log(` - ${file}`));
    
    return svgFiles;
  } catch (error) {
    console.error('Errore nella lettura dei file SVG:', error);
    process.exit(1);
  }
}

// Funzione per elaborare il contenuto SVG in modo selettivo
function processSvgContent(content, iconName) {
  // Rimuovi eventuali commenti e formatta il contenuto
  let processedContent = content
    .replace(/<!--[\s\S]*?-->/g, '') // Rimuovi commenti
    .replace(/\n/g, ' ')             // Rimuovi newline
    .replace(/\s+/g, ' ')            // Riduci spazi multipli
    .trim();
    
  try {
    // Colori neri (considerati elementi principali/sfondo) da sostituire con currentColor
    const blackColors = [
      '#000', '#000000', 'black', 'rgb(0,0,0)', 'rgba(0,0,0,1)', 'hsl(0,0%,0%)'
    ];
    
    // Crea pattern regex per i colori neri (escape di caratteri speciali)
    const blackColorsPattern = blackColors
      .map(color => color.replace(/([()%,])/g, '\\$1')) // Escape dei caratteri speciali
      .join('|');
    
    // 1. Sostituisci solo gli attributi fill con colori neri
    const fillBlackRegex = new RegExp(
      `fill\\s*=\\s*["'](${blackColorsPattern})["']`, 
      'gi'
    );
    processedContent = processedContent.replace(fillBlackRegex, 'fill="currentColor"');
    
    // 2. Sostituisci solo gli attributi stroke con colori neri
    const strokeBlackRegex = new RegExp(
      `stroke\\s*=\\s*["'](${blackColorsPattern})["']`, 
      'gi'
    );
    processedContent = processedContent.replace(strokeBlackRegex, 'stroke="currentColor"');
    
    // 3. Sostituisci colori neri in attributi di stile inline
    processedContent = processedContent.replace(
      /style\s*=\s*["']([^"']*)["']/gi, 
      function(match, styleContent) {
        // Sostituisci solo fill:black con fill:currentColor
        let newStyleContent = styleContent.replace(
          new RegExp(`(^|;)\\s*fill\\s*:\\s*(${blackColorsPattern})`, 'gi'),
          '$1fill:currentColor'
        );
        // Sostituisci solo stroke:black con stroke:currentColor
        newStyleContent = newStyleContent.replace(
          new RegExp(`(^|;)\\s*stroke\\s*:\\s*(${blackColorsPattern})`, 'gi'),
          '$1stroke:currentColor'
        );
        return `style="${newStyleContent}"`;
      }
    );
    
    // 4. Per gli elementi che non hanno attributi di colore, aggiungi fill="currentColor" solo se non hanno già altri attributi di stile
    const svgElements = ['path', 'circle', 'rect', 'polygon', 'ellipse', 'line', 'polyline'];
    
    // Controlla la presenza di elementi principali per decidere come procedere
    let hasMainElements = false;
    let mainElementsCount = 0;
    
    // Prima scansione per contare quanti elementi hanno già colori neri applicati
    for (const element of svgElements) {
      const elemRegex = new RegExp(`<${element}[^>]*?(?:fill|stroke)\\s*=\\s*["'](${blackColorsPattern})["'][^>]*?>`, 'gi');
      const matches = processedContent.match(elemRegex);
      if (matches) {
        mainElementsCount += matches.length;
        hasMainElements = true;
      }
    }
    
    // Se non ci sono elementi neri principali, identifica l'elemento più grande come elemento principale
    if (!hasMainElements && mainElementsCount === 0) {
      console.log(`⚠️ Nessun elemento nero trovato in ${iconName}. Cercherò di identificare l'elemento principale.`);
      
      // Trova l'elemento path più grande (solitamente lo sfondo)
      // Questo è un approccio euristico - potrebbe non funzionare per tutti gli SVG
      let mainElementApplied = false;
      
      // Cerca path con attributi d lunghi (solitamente elementi più grandi/complessi)
      processedContent = processedContent.replace(
        /<path([^>]*?)d\s*=\s*["']([^"']{50,})["']([^>]*?)>/gi,
        (match, beforeD, dValue, afterD) => {
          // Applica solo al primo elemento path grande trovato
          if (!mainElementApplied) {
            // Verifica se non ha già un fill o uno stroke esplicito
            if (!match.includes('fill=') && !match.includes('stroke=')) {
              mainElementApplied = true;
              return `<path${beforeD}d="${dValue}"${afterD} fill="currentColor">`;
            }
          }
          return match;
        }
      );
      
      if (mainElementApplied) {
        console.log(`✅ Elemento principale identificato e impostato a currentColor in ${iconName}`);
      } else {
        console.warn(`⚠️ Non è stato possibile identificare automaticamente l'elemento principale in ${iconName}`);
      }
    }
    
    // Verifica per tag style ed elimina o modifica
    if (processedContent.includes('<style')) {
      console.warn(`⚠️ L'icona ${iconName} contiene tag <style>. Questi potrebbero causare problemi.`);
    }
    
    // Debug - salva file originale e processato per confronto
    if (debugMode) {
      saveDebugFiles(content, processedContent, iconName);
    }
    
  } catch (error) {
    console.warn(`⚠️ Problema durante l'elaborazione dell'SVG ${iconName}: ${error.message}`);
    console.warn('Utilizzo versione originale formattata');
  }
  
  return processedContent;
}

// Funzione di utilità per debug - salvare file SVG originale e modificato per confronto
function saveDebugFiles(originalContent, processedContent, iconName) {
  try {
    const debugDir = path.join(__dirname, 'debug_svg');
    if (!fs.existsSync(debugDir)) {
      fs.mkdirSync(debugDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(debugDir, `${iconName}_original.svg`), originalContent, 'utf8');
    fs.writeFileSync(path.join(debugDir, `${iconName}_processed.svg`), processedContent, 'utf8');
    console.log(`File di debug salvati per l'icona ${iconName}`);
  } catch (err) {
    console.warn(`Impossibile salvare file di debug: ${err.message}`);
  }
}

// Funzione principale per ricaricare completamente il file delle icone
function reloadIconsFile() {
  const svgFiles = readSvgFiles();
  
  // Crea le entry per le icone
  let iconEntries = '';
  const processedIcons = [];
  let errorCount = 0;
  
  for (const svgFile of svgFiles) {
    const filePath = path.join(svgFolderPath, svgFile);
    const iconName = path.basename(svgFile, '.svg')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');
    
    try {
      const svgContent = fs.readFileSync(filePath, 'utf8');
      
      // Verifica se il file SVG è valido
      if (!svgContent.includes('<svg') || !svgContent.includes('</svg>')) {
        console.error(`❌ Il file ${svgFile} non sembra essere un SVG valido.`);
        errorCount++;
        continue;
      }
      
      const processedContent = processSvgContent(svgContent, iconName);
      
      iconEntries += `
  // Icona ${iconName} (da ${svgFile})
  ${iconName}: \`${processedContent}\`,`;
      
      processedIcons.push({
        original: svgFile,
        name: iconName
      });
    } catch (error) {
      console.error(`❌ Errore nella lettura del file ${svgFile}:`, error);
      errorCount++;
    }
  }
  
  // Ottieni il template base
  let fileTemplate = getIconSvgsTemplate();
  
  // Inserisci le icone nel template
  fileTemplate = fileTemplate.replace(
    'export const svgIcons = {\n};',
    `export const svgIcons = {${iconEntries}
};`
  );
  
  // Scrivi il file completamente nuovo
  try {
    // Crea directory se non esiste
    const iconSvgsDir = path.dirname(iconSvgsFilePath);
    if (!fs.existsSync(iconSvgsDir)) {
      fs.mkdirSync(iconSvgsDir, { recursive: true });
    }
    
    fs.writeFileSync(iconSvgsFilePath, fileTemplate, 'utf8');
    
    if (errorCount > 0) {
      console.log(`\n⚠️ File ${iconSvgsFilePath} completato con ${processedIcons.length} icone, ma con ${errorCount} errori!`);
    } else {
      console.log(`\n✅ File ${iconSvgsFilePath} completamente ricaricato con ${processedIcons.length} icone!`);
    }
    
    console.log('\nIcone aggiunte:');
    processedIcons.forEach(icon => {
      console.log(` - ${icon.original} => ${icon.name}`);
    });
    
    return processedIcons;
  } catch (error) {
    console.error('Errore nella scrittura del file:', error);
    process.exit(1);
  }
}

// Funzione per aggiornare il file delle stories
function updateStoriesFile(icons) {
  if (!fs.existsSync(storiesFilePath)) {
    console.warn('File icon.stories.ts non trovato. Saltando l\'aggiornamento delle stories.');
    return;
  }
  
  if (icons.length === 0) {
    console.warn('Nessuna icona processata. Saltando l\'aggiornamento delle stories.');
    return;
  }
  
  try {
    console.log('\nAggiorno il file delle stories...');
    let storiesContent = fs.readFileSync(storiesFilePath, 'utf8');
    
    // Estrai i nomi delle icone
    const iconNames = icons.map(icon => icon.name);
    console.log(`Aggiornamento stories con ${iconNames.length} icone`);
    
    // 1. Aggiorna le opzioni nel control di tipo
    const argTypesRegex = /type: {\s*description:.*?\s*control: {\s*type: 'select',\s*options: \[(.*?)\],\s*}/s;
    const iconOptionsStr = iconNames.map(name => `'${name}'`).join(', ');
    
    if (argTypesRegex.test(storiesContent)) {
      storiesContent = storiesContent.replace(argTypesRegex, 
        `type: {
      description: 'Tipo di icona',
      control: {
        type: 'select',
        options: [${iconOptionsStr}],
      }`
      );
    } else {
      console.warn('Non è stato possibile trovare il pattern argTypes nel file icon.stories.ts');
    }
    
    // 2. Aggiorna la sezione AllIcons
    const allIconsRegex = /export const AllIcons = \(\) => html`[\s\S]*?<div style="display: grid;[\s\S]*?>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*`;/;
    
    const newIconsGrid = iconNames.map(iconName => `
      <div style="display: flex; flex-direction: column; align-items: center;">
        <div>\${icon({ type: '${iconName}' })}</div>
        <p>${iconName}</p>
      </div>`).join('');
    
    if (allIconsRegex.test(storiesContent)) {
      storiesContent = storiesContent.replace(allIconsRegex, 
        `export const AllIcons = () => html\`
  <div style="padding: 20px; font-size: 12px;">
    <h3>Galleria Icone</h3>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 20px;">${newIconsGrid}
    </div>
  </div>
\`;`
      );
    } else {
      console.warn('Non è stato possibile trovare la sezione AllIcons nel file icon.stories.ts');
    }
    
    // 3. Aggiorna anche il default.args per usare la prima icona disponibile (se ce ne sono)
    if (iconNames.length > 0) {
      const defaultArgsRegex = /Default\.args = {\s*type: '([^']*)' as IconType,/;
      if (defaultArgsRegex.test(storiesContent)) {
        storiesContent = storiesContent.replace(defaultArgsRegex, 
          `Default.args = {
  type: '${iconNames[0]}' as IconType,`
        );
      }
    }
    
    // Scrivi il file aggiornato
    fs.writeFileSync(storiesFilePath, storiesContent, 'utf8');
    console.log(`✅ File ${storiesFilePath} aggiornato con successo!`);
    
  } catch (error) {
    console.error('Errore nell\'aggiornamento del file delle stories:', error);
  }
}

// Funzione principale
async function main() {
  try {
    console.log('=== Script di aggiornamento icone SVG e stories ===');
    console.log('Nota: questo script svuoterà e ricaricherà tutte le icone ad ogni esecuzione.');
    
    if (!checkPaths()) {
      console.error('Verificare i percorsi e riprovare.');
      process.exit(1);
    }
    
    // Ricarica completamente il file delle icone
    const icons = reloadIconsFile();
    
    // Aggiorna il file delle stories
    updateStoriesFile(icons);
    
    console.log('\n🎉 Processo completato con successo!');
    console.log('Le icone precedenti sono state rimosse e sostituite con quelle nella cartella iconadainserire.');
    console.log('Solo gli elementi neri principali sono stati convertiti in currentColor per mantenere i dettagli.');
    
    if (debugMode) {
      console.log('\nModalità debug: i file originali e processati sono stati salvati nella cartella "debug_svg".');
    }
    
    console.log('\nOra puoi utilizzare queste icone nel tuo codice:');
    
    if (icons.length > 0) {
      console.log(`Esempio: getIconSvg("${icons[0].name}")`);
      console.log(`Per ottenere tutte le icone disponibili: getAllIconTypes()`);
    }
    
  } catch (err) {
    console.error('Si è verificato un errore imprevisto:', err);
    console.error('Stack trace:', err.stack);
    process.exit(1);
  }
}

// Avvia lo script
main();