# TuttoCittà — ricostruzione della storia editoriale (1981-2014)

Censimento delle edizioni locali del fascicolo cartografico **TuttoCittà**, supplemento delle Pagine
Gialle pubblicato da SEAT Pagine Gialle S.p.A. dal 1981 al 2014, poi confluito nel volume unico
*Pagine Bianche Pagine Gialle Tuttocittà*.

**1.990 fascicoli accertati** — 1.989 edizioni ordinarie più 1 straordinaria — su 34 annate,
20 regioni e 115 raggruppamenti provinciali.

Registrazione della testata: Tribunale di Torino n. 3026 del 1981. Stampatore: ILTE, Moncalieri.

---

## Perché questa risorsa esiste

TuttoCittà non è mai stato in vendita: era distribuito gratuitamente a complemento delle Pagine
Gialle. Per questo non ha un catalogo commerciale, e nei cataloghi bibliotecari è descritto sotto una
notizia unica che comprende tutte le edizioni locali senza dichiararne la consistenza — la scheda SBN
IT\ICCU\TO0\0655071 ne è l'esempio. Il risultato è che il numero e la distribuzione geografica dei
fascicoli non risultano da nessuna fonte pubblica. Questo dataset colma quella lacuna partendo dagli
esemplari fisici.

## Struttura

```
dati/
  fascicoli_lungo.csv          una riga per fascicolo e annata — la forma adatta al riuso
  fascicoli_matrice.csv        la matrice come nel foglio originale
  copertine_per_annata.csv     tipi di copertina, conteggi, colore delle tavole
  totali_per_annata.csv        totali per annata e note editoriali
  aggregati_per_annata.csv     calendario editoriale e foliazione
  attributi_grafici_per_annata.csv   sfondo delle mappe, cornice, foto dello stradario
  comuni_per_fascicolo.csv     indice delle località mappate, per decennio
  <regione>_fascicoli.csv      censimento di dettaglio: un fascicolo per riga
  <regione>_cartografia.csv    censimento di dettaglio: una città cartografata per riga
  <regione>_articoli.csv       censimento di dettaglio: un titolo della rubrica per riga
                               — venti regioni; per la Sardegna il prefisso è sardegna-raccolta
  roma_*.csv                   Speciale: Roma città — fascicoli, cartografia, articoli
  sardegna_*.csv               la Sardegna completa: fascicoli, sezioni, contenuti, cartografia
pagine/
  index.md                     introduzione e chiavi di lettura: annate, foliazione, stati
  raccolta.md                  la raccolta, e le pagine di dettaglio delle regioni
  <regione>.md                 censimento di dettaglio di una regione
  sardegna-completo.md         la Sardegna, unica regione di cui la raccolta ha tutti i fascicoli
  roma.md                      Speciale: Roma città
  copertine.md                 galleria delle copertine, annata per annata
  sezioni.md                   la scaletta interna del fascicolo nelle tre serie classiche
  tavole.md                    l'evoluzione delle tavole cartografiche
  tabella-layout.md            i quattordici layout di impaginazione
  inserti.md, stradarioseat.md gli inserti staccabili e lo Stradario SEAT
  note-editore.md              le due note con cui l'editore presentò e riformò il prodotto
  questioni-aperte.md          ciò che non sappiamo, con l'invito a segnalare
  come-contribuire.md          segnalare un fascicolo, cedere o donare fascicoli
  cerca-fascicoli.md           interrogazione del censimento dal browser
  cerca-localita.md            interrogazione dell'indice delle località
  regioni/<regione>.md         una tabella per regione
CONTROLLI.md                   rapporto di integrità generato dai dati
```

### Campi di `fascicoli_lungo.csv`

| campo | contenuto |
|---|---|
| `regione` | regione amministrativa |
| `fascicolo` | nome di censimento, che identifica il fascicolo lungo tutta la sua storia e può coprire più province |
| `denominazione` | titolo in vigore in quella singola annata, quando l'editore lo cambiò |
| `annata` | annata editoriale per anno di copertina, da `81/82` a `14/15` |
| `stato` | `pubblicato`, `probabile_non_confermato`, `non_pubblicato` |
| `anno_copertina` | anno riportato in copertina; vuoto se il fascicolo è accertato ma il dato è ignoto |
| `tipo_copertina` | tipo di copertina, ricavato dall'incrocio fra annata e anno di copertina |
| `tipo_edizione` | `ordinaria` oppure `straordinaria` per le edizioni commemorative fuori perimetro |
| `colore_esadecimale` | colore con cui la cella è codificata nel foglio originale |
| `ambito` | `intero`, `dintorni` o `provincia`: se il fascicolo copriva la provincia intera, i soli dintorni del capoluogo o la sola provincia senza il capoluogo; non dipende dal titolo |
| `nota` | spiegazione della cella, quando serve — per esempio i fascicoli rilegati dentro le Pagine Gialle |

## Convenzioni di lettura

**L'indicizzazione è per anno di copertina, non per anno civile.** Il ciclo editoriale si apriva a
febbraio e si chiudeva a gennaio dell'anno successivo. L'annata `81/82` comprende quindi fascicoli
che riportano in copertina sia `81` sia `82`. Le **serie iniziali** sono quelle il cui fascicolo
dell'annata 1981/82 s'intitola *TuttoCittà 81*, le **serie tardive** quelle che s'intitolano
*TuttoCittà 82*. Il Piemonte chiudeva di norma l'annata: i suoi fascicoli dell'annata 1999/2000
portano in copertina il 2000.

**Un'anomalia nelle annate 1997/98 e 1998/99.** I fascicoli con copertina grigia non riportano un anno
sul frontespizio ma solo la finestra d'uso, sempre di dodici mesi, prima con inizio e scadenza («nov
1997 - ott 1998») e poi con la sola scadenza («da utilizzare fino a…»). Sono 77 casi, e per essi il
campo `anno_copertina` non trascrive un dato stampato né deriva dalla finestra: è un'attribuzione
convenzionale secondo la posizione nel ciclo, come per gli altri fascicoli.

Un fascicolo non corrisponde a una provincia: molte edizioni coprivano gruppi di province, e i
raggruppamenti cambiarono nel tempo. Nell'annata 1997/98 gli 87 fascicoli coprivano tutte le 103
province allora esistenti.

## Metodo e limiti

I dati derivano da una collezione privata di oltre 1.300 esemplari, da dati incrociati con altri
raccoglitori e dalle regolarità editoriali riscontrate nelle pubblicazioni dal 1981 al 1997, che in
quel periodo sono sufficientemente stabili da permettere la ricostruzione delle annate mancanti.

Tre limiti vanno dichiarati.

**Lo stato `non_pubblicato` non è sempre un'attestazione documentaria.** In molti casi riflette la
ricostruzione basata sulle regolarità editoriali. È una posizione falsificabile: il ritrovamento di un
esemplare comporta l'aggiornamento del dato, non una difesa della ricostruzione.

**L'annata 1998/1999 resta la più incerta di tutto il ciclo.** Fra i 87 fascicoli del 1997/98 e i 42
del 1999/2000 — questi ultimi documentati dal bilancio d'esercizio 1998 della SEAT Pagine Gialle — il numero
intermedio non è determinabile: sta fra 44 e 70 — il minimo è il numero dei fascicoli accertati, il
massimo scende da 87 perché di diciassette
edizioni è accertato che non furono pubblicate — e le fonti d'epoca non lo dichiarano. Vedi
`pagine/questioni-aperte.md`.

**Resta un solo scostamento su trentaquattro annate, e non è un errore.** Nel 1999/2000 la matrice
identifica 39 fascicoli contro i 42 documentati dal bilancio d'esercizio 1998 della SEAT Pagine Gialle: i tre di
differenza sono edizioni la cui esistenza è certa e la cui identità non è nota. Lo scostamento misura
dunque ciò che ancora manca, e va letto come un'informazione.

**L'incertezza residua è quasi tutta concentrata in due annate.** Delle 21 celle marcate come
pubblicazione probabile non confermata, 11 stanno nell'annata 1998/1999 e 10 nella 1999/2000.

Il rapporto certifica inoltre che **nessuna correzione è applicata fuori dai dati**: l'intero pacchetto
si rigenera dai soli fogli di origine, senza interventi a mano sui file prodotti.

**Le edizioni straordinarie stanno fuori dalla matrice.** Una matrice a una riga per raggruppamento non
può ospitare due edizioni della stessa città nella stessa annata: le commemorative sono quindi
registrate come righe distinte con `tipo_edizione = straordinaria`. Al momento è documentata una sola
occorrenza, l'edizione speciale di Torino del 2010 per l'ostensione della Sindone. Non è noto se le
edizioni di questo tipo partecipassero al concorso fotografico che assegnava le copertine o avessero
copertina predefinita dall'editore.

## Il censimento di dettaglio

Al censimento dei fascicoli si affianca un **censimento di dettaglio**, che descrive l'organizzazione
interna dei fascicoli regione per regione. Riguarda **sedici regioni** — Abruzzo, Basilicata, Calabria,
Campania, Friuli - Venezia Giulia, Lazio, Liguria, Marche, Molise, Puglia, Sardegna, Sicilia, Toscana,
Umbria, Valle d'Aosta e Veneto — più **Roma**, la città più riccamente cartografata della collana.

Per ciascuna regione tre file registrano i fascicoli, con copertina, formato, layout, foliazione e mese
di aggiornamento; le città cartografate, una riga per città e per fascicolo; i titoli degli articoli
della rubrica dal 1990/91 al 1997/98. In tutto sono 2.011 fascicoli, 11.282 righe di cartografia e 5.850
titoli. Le pagine delle regioni di cui la raccolta non possiede tutti i fascicoli lo dichiarano: le celle
dei fascicoli mancanti sono segnate come lacune, non come assenze.

La **Sardegna**, unica regione di cui la raccolta possieda tutti i fascicoli accertati, ha anche una
descrizione più fine, pagina per pagina: i quattro file `sardegna_*.csv` registrano 48 fascicoli, 872
occorrenze di sezione riconducibili a 63 rubriche, i titoli di contenuto e le righe di cartografia con
numero di tavole, pagine occupate e collocazione dell'elenco delle vie.

Tre avvertenze per chi riusa questi file. La **foliazione** è scritta nella forma `24 (25)` quando la
terza di copertina — nel layout *metà duemila* anche la quarta — porta contenuto proprio del fascicolo:
i due numeri stanno in `pagine_totali` e `pagine_comprese_copertine`, e la regola è spiegata
nell'introduzione. Ogni comune ha nei file la **provincia della sua prima comparsa**, che per Crotone, Prato
o Barletta è quella da cui la provincia nuova si è staccata. Nei file sardi, infine, il campo
`nome_normalizzato` delle sezioni svolge per le rubriche la funzione che il nome di censimento svolge per
i fascicoli, e il campo `origine` distingue le righe rilevate da quelle dedotte per regola.

## Riproducibilità

I file in `dati/` sono generati automaticamente dal foglio di lavoro originale, senza trascrizione
manuale e senza correzioni esterne: il colore di riempimento di ogni cella viene convertito nel tipo di
copertina corrispondente, le edizioni straordinarie sono riconosciute dal nome del fascicolo, e i
controlli di integrità sono ricalcolati a ogni rigenerazione. Le trentaquattro intestazioni di annata
vengono verificate una per una contro la sequenza attesa: una divergenza interrompe l'elaborazione
invece di propagarsi nei dati.

## Citazione

Mura, Roberto (2026). *TuttoCittà: ricostruzione della storia editoriale (1981-2014)*, versione 1.5.
Zenodo. DOI: [10.5281/zenodo.21820762](https://doi.org/10.5281/zenodo.21820762)

## Licenza

Dati, tabelle e testi: **CC BY 4.0**. Attribuzione: Roberto Mura.

**Le riproduzioni delle copertine non sono coperte da questa licenza** e non sono incluse nel
deposito con DOI: i diritti sul disegno di copertina appartengono all'editore. Dove presenti, sono
riprodotte a bassa risoluzione a fini di identificazione documentaria, con contatto per la rimozione.

## Come pubblicare e conservare

1. **Zenodo** (zenodo.org) — deposito con DOI, gratuito, gestito dal CERN. Caricare `dati/`, le pagine e `CONTROLLI.md`, **non le immagini**. I metadati sono già pronti in `zenodo.json`. Da questo momento la ricerca è citabile e non dipende più dalla sopravvivenza di alcun sito.
2. **GitHub Pages** — versione consultabile e indicizzata. Il repository contiene già le pagine markdown; attivare Pages dalle impostazioni. La cronologia documenta ogni aggiornamento.
3. **Internet Archive** — caricare lo stesso pacchetto come terza copia indipendente.
4. **Wikipedia** — citare il DOI Zenodo come fonte nella voce *TuttoCittà*, invece di inserire i dati direttamente.

## Come contribuire

Le segnalazioni più utili riguardano gli esemplari elencati in `pagine/questioni-aperte.md`. Per ogni
fascicolo servono: città o raggruppamento, anno riportato in copertina, mese e anno del colophon se
presenti, e se possibile una fotografia della copertina e del colophon.

La raccolta è inoltre in costante ampliamento e accoglie donazioni o cessioni di fascicoli, che
consentono un esame completo e non solo la verifica di un singolo dato. Le due modalità sono descritte
in `pagine/come-contribuire.md`.
