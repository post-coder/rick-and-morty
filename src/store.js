// il file va inserito direttamente dentro la cartella src/

// questa è sintassi obbligatoria
import {reactive} from 'vue';
// questa sintassi ci genera un oggetto reactive, dalla variabile globale 'vue

// anche questa è sintassi obbligatoria
export const store = reactive({

  // fine della sintassi obbligatoria
  // da qua in poi possiamo indicare tutte le proprietà e i valori che vogliamo.
  // userName: "Gabriel",

  // prepariamo una variabile che conterrà le informazioni che riceviamo dalla chiamata API
  characters: [],


  // ci segnamo la chiamata API da fare
  APIcall: 'https://rickandmortyapi.com/api/character',

  // predispongo una proprietà che verrà aggiornata in base alla ricerca dell'utente
  characterName: "",

  characterStatus: "",

});

// questo codice ci genera un oggetto che:
// - viene reso disponibile in tutti i componenti della nostra app
// - viene reso REACTIVE (quindi soggetto a cambiamento e propagazione di questi cambiamenti)
// l'oggetto va creato dentro il parametro della funzione reactive(*qui dentro*)