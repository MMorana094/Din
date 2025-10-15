// Din/projects-data.js
// Questo file contiene i dati dei progetti.
// Ogni progetto ha un id, un titolo, un anno, un ruolo, una descrizione, un'immagine di anteprima e una categoria.
// Le categorie sono definite in projects-categories.js.
// Assicurati che gli id dei progetti corrispondano agli id delle categorie in projects-categories.js.
// Non modificare gli id dei progetti, ma puoi aggiungere nuovi progetti seguendo lo stesso schema.
// Per aggiungere un nuovo progetto, copia e incolla uno degli oggetti esistenti e modifica i campi come necessario.
// Ricorda di aggiornare anche la categoria se necessario.
// Gli id dei progetti devono essere univoci e non devono contenere spazi o caratteri speciali.
// Gli id delle categorie devono essere in minuscolo e senza spazi.
// Le immagini di anteprima devono essere URL validi o 'blank' se non disponibili.
// Non modificare le categorie esistenti, ma puoi aggiungerne di nuove in projects-categories.js.
// Assicurati che le categorie siano coerenti con quelle utilizzate nei progetti.
// Non modificare il formato degli oggetti, ma puoi aggiungere nuovi campi se necessario.
// Gli id dei progetti devono essere in minuscolo e senza spazi.
// Le immagini di anteprima devono essere URL validi o 'blank' se non disponibili.
// Non modificare le categorie esistenti, ma puoi aggiungerne di nuove in projects-categories.js.
// Assicurati che le categorie siano coerenti con quelle utilizzate nei progetti.
// Non modificare il formato degli oggetti, ma puoi aggiungere nuovi campi se necessario.
// Gli id dei progetti devono essere in minuscolo e senza spazi.
// Le immagini di anteprima devono essere URL validi o 'blank' se non disponibili.
// Non modificare le categorie esistenti, ma puoi aggiungerne di nuove in projects-categories.js.

// Esempio di progetto:
// {
//   id: 'nome-progetto',
//   title: 'Titolo del Progetto',
//   year: '2023 - 2024',
//   role: 'Ruolo nel Progetto',
//   desc: 'Descrizione del progetto.',
//   thumb: 'https://example.com/immagine.png', // URL dell'immagine di anteprima
//   category: 'categoria' // ID della categoria
// }
// Assicurati che gli id dei progetti corrispondano agli id delle categorie in projects-categories.js.
// Non modificare gli id dei progetti, ma puoi aggiungere nuovi progetti seguendo lo stesso schema.
// Per aggiungere un nuovo progetto, copia e incolla uno degli oggetti esistenti e modifica i campi come necessario.
// Ricorda di aggiornare anche la categoria se necessario.
// Gli id dei progetti devono essere univoci e non devono contenere spazi o caratteri speciali.
// Gli id delle categorie devono essere in minuscolo e senza spazi.
// Le immagini di anteprima devono essere URL validi o 'blank' se non disponibili.
const PROJECTS = [
  {
    id: 'green-radio',
    title: 'Green Radio – Fuga dal GRA',
    year: '2024 - 2025',
    role: 'Regia · Montaggio',
    desc: '`Un racconto di resistenza, sogni e libertà ai margini dell’asfalto. Una storia animata da voci ribelli, piume leggere e stormi in fuga.` Una fuga poetica, tra realtà e immaginazione, da un mondo urbanizzato verso una natura dimenticata. Un racconto visivo e sonoro ispirato dalla potenza del paesaggio e dalla libertà degli uccelli.',
    thumb: 'https://giadamuci.my.canva.site/website/_assets/media/f713f6ee01dca1998383aefed7b47f45.png',
    category: 'documentario' // 👈 MODIFICATO: usa l'id
  },
  {
    id: 'prova',
    title: 'prova',
    year: '2023 - 2026',
    role: 'Regia · Montaggio',
    desc: 'prova.',
    thumb: 'blank',
    category: 'cortometraggio' // 👈 MODIFICATO: usa l'id
  }
];
