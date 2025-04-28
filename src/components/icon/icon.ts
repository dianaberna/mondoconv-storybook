// src/components/icon/icon.ts
import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getIconSvg, IconType } from './iconSvgs';

// Definizione delle dimensioni disponibili
export type IconSize = 'small' | 'medium' | 'large';

// Interfaccia delle props del componente
export interface IconProps {
  type: IconType;
  size?: IconSize;
}

/**
 * Componente icon - Renderizza un'icona SVG 
 * @param props - Props del componente
 * @returns Template Lit HTML con l'icona renderizzata
 */
export const icon = (props: IconProps): TemplateResult => {
  const { type, size = 'medium' } = props;
  
  try {
    // Ottieni l'SVG dal registro
    const svgContent = getIconSvg(type);
    
    if (!svgContent) {
      console.error(`Icona non trovata: ${type}`);
      return html`<span class="icon-error">!</span>`;
    }
    
    // Crea un elemento div temporaneo per parsare l'SVG
    const temp = document.createElement('div');
    temp.innerHTML = svgContent;
    const svgElement = temp.querySelector('svg');
    
    // Configura gli attributi dell'SVG in base alle props
    if (svgElement) {
      // Mappa le dimensioni in base alla size
      const sizeMap = {
        small: '16px',
        medium: '24px',
        large: '32px'
      };
      
      // Applica attributi di stile
      svgElement.setAttribute('width', sizeMap[size]);
      svgElement.setAttribute('height', sizeMap[size]);
      
      // Restituisci l'SVG come HTML usando unsafeHTML
      return html`${unsafeHTML(svgElement.outerHTML)}`;
    }
  } catch (error) {
    console.error(`Errore nel caricamento dell'icona: ${type}`, error);
    return html`<span class="icon-error">!</span>`;
  }
  
  return html``;
};

/**
 * Factory per creare funzioni di esportazione icone
 * @param iconName - Nome dell'icona da esportare
 * @returns Funzione che renderizza l'icona specificata
 */
export const createIconExport = (iconName: IconType): (() => TemplateResult) => {
  return () => icon({ type: iconName });
};