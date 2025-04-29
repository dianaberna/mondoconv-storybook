# Mondoconv Storybook

Benvenuto/a nel progetto **Mondoconv UI Kit** realizzato con **Lit** + **Storybook**.

Questo repository contiene i componenti principali del design system Mondoconv, documentati, accessibili e pronti per essere integrati nei progetti frontend.

Storybook visitabile nella GithubPages [https://dianaberna.github.io/mondoconv-storybook/](https://dianaberna.github.io/mondoconv-storybook/)
---

## 📚 Contenuti

- Componenti Atomici:
  - Button
  - Link
  - Accordion
  - Modal
  - Tabs
  - Dropdown
  - Card
  - Carousel
- Esempi di utilizzo tramite Storybook Stories
- Accessibilità migliorata (ARIA attributes, keyboard navigation)
- Struttura responsiva per mobile e desktop
- Componente iconografico completo

---

## 🚀 Installazione

Per avviare il progetto Storybook in locale:

```bash
npm install
npm run storybook
```

---

## 🛠️ Script automatico per la gestione delle Icone

Per facilitare la gestione dinamica delle icone e delle relative stories, è disponibile uno script automatizzato:

### 📂 Script disponibile

- `updateIconsAndStories.js`

### 🔄 Funzionalità

- Genera automaticamente l'elenco completo delle icone disponibili
- Aggiorna le storie di Storybook relative alle icone
- Mantiene la lista delle icone sempre sincronizzata con gli asset SVG

### 🚀 Come eseguire

```bash
npm run update-icons
```