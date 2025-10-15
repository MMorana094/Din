// project-categories.js
// Questo file contiene le categorie dei progetti.
// Ogni categoria ha un id, un titolo e una descrizione.
// Gli id delle categorie devono essere, univoci, senza caratteri speciali in minuscolo e senza spazi.
// Non modificare le categorie esistenti, ma puoi aggiungerne di nuove seguendo lo stesso schema.
// Assicurati che gli id delle categorie siano coerenti con quelli utilizzati nei progetti.
// Non modificare il formato degli oggetti, ma puoi aggiungere nuovi campi se necessario.

// Esempio di categoria:
// {
//   id: 'nome-categoria',
//   title: 'Titolo della Categoria',
//   description: 'Descrizione della categoria.'
// }
// Assicurati che gli id delle categorie siano coerenti con quelli utilizzati nei progetti.


const CATEGORIES = [
  { 
    id: 'documentario', 
    title: 'documentari - VISIONI TRA REALE E IMMAGINARIO',
    description: 'La realtà è fatta di mille sfumature, e il documentario è lo strumento con cui scelgo di esplorarle. I miei documentari raccontano storie vere, ma con uno sguardo personale, spesso visionario, dove la poesia si mescola al vissuto. Qui presento i progetti documentari che ho diretto e montato, e non solo, ognuno con un`anima propria e un messaggio profondo.',
    quote: 'Ogni frammento di realtà è una porta aperta sul sogno.'
  },
  { 
    id: 'Storie-brevi', 
    title: 'Storie brevi – Frammenti di mondi possibili',
    description: 'Che sia un cortometraggio, uno spot, un videoclip o un pupazzo in stop motion, ogni progetto è un piccolo universo, un racconto che prende forma tra intuizione e mestiere, tra gioco e precisione. In questa sezione raccolgo opere diverse per tecnica e linguaggio, ma tutte accomunate da uno sguardo personale, attento, leggero e sempre un po’ incantato.',
    quote: 'Anche una storia minuscola può contenere un intero universo.'
  },
  { 
    id: 'Collaborazioni', 
    title: 'Collaborazioni – Esperienze e percorsi condivisi',
    description: 'Nel corso degli anni, ho avuto l’opportunità di collaborare con artisti, registi e professionisti in progetti di ogni genere: dal cinema al documentario, dai videoclip alla televisione. Queste esperienze hanno arricchito il mio bagaglio professionale e umano, permettendomi di esplorare molteplici ruoli tecnici e creativi.',
    quote: 'Ogni collaborazione è un intreccio di visioni, una sinfonia di voci che costruisce un’opera condivisa.' 
  },
  { 
    id: 'Regia-televisiva', 
    title: 'Regia televisiva – Il ritmo della diretta',
    description: 'Lavorare in regia live significa entrare nel cuore pulsante del racconto visivo, dove ogni istante è irripetibile e ogni scelta tecnica diventa espressione narrativa. La televisione è stata per me una palestra di precisione, prontezza e sensibilità.',
    quote: 'In regia, il tempo non aspetta: ogni secondo è cinema che accade dal vivo.' 
  },
  { 
    id: 'Progetti-futuri', 
    title: 'Progetti Futuri – Visioni in attesa di nascere',
    description: 'Le storie che ancora non sono state raccontate sono quelle che fanno più rumore nel cuore. Alcuni progetti attendono il momento giusto per nascere, maturano lentamente, come semi sotto la terra. Tra questi, ce n’è uno che custodisco da tempo, e che un giorno, sono certa, prenderà vita: “Il Fazzoletto Bianco.”',
    quote: 'Alcune storie vivono a lungo dentro di noi, in silenzio, finché non trovano la loro luce.'
  }
];