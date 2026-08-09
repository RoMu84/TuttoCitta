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
pagine/
  index.md                     introduzione e convenzioni di lettura
  questioni-aperte.md          ciò che non sappiamo, con l'invito a segnalare
  regioni/<regione>.md         una tabella per regione
CONTROLLI.md                   rapporto di integrità generato dai dati
```

### Campi di `fascicoli_lungo.csv`

| campo | contenuto |
|---|---|
| `regione` | regione amministrativa |
| `fascicolo` | denominazione del fascicolo, che può coprire più province |
| `annata` | annata editoriale per anno di copertina, da `81/82` a `14/15` |
| `stato` | `pubblicato`, `probabile_non_confermato`, `non_pubblicato` |
| `anno_copertina` | anno riportato in copertina; vuoto se il fascicolo è accertato ma il dato è ignoto |
| `tipo_copertina` | tipo di copertina, ricavato dall'incrocio fra annata e anno di copertina |
| `tipo_edizione` | `ordinaria` oppure `straordinaria` per le edizioni commemorative fuori perimetro |
| `colore_esadecimale` | colore con cui la cella è codificata nel foglio originale |

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

I dati derivano da una collezione privata di oltre 1.200 esemplari, da dati incrociati con altri
raccoglitori e dalle regolarità editoriali riscontrate nelle pubblicazioni dal 1981 al 1997, che in
quel periodo sono sufficientemente stabili da permettere la ricostruzione delle annate mancanti.

Tre limiti vanno dichiarati.

**Lo stato `non_pubblicato` non è sempre un'attestazione documentaria.** In molti casi riflette la
ricostruzione basata sulle regolarità editoriali. È una posizione falsificabile: il ritrovamento di un
esemplare comporta l'aggiornamento del dato, non una difesa della ricostruzione.

**L'annata 1998/1999 resta la più incerta di tutto il ciclo.** Fra i 87 fascicoli del 1997/98 e i 42
del 1999/2000 — questi ultimi documentati dal bilancio d'esercizio 1998 della SEAT — il numero
intermedio non è determinabile: sta fra 42 e 87 e le fonti d'epoca non lo dichiarano. Vedi
`pagine/questioni-aperte.md`.

**Resta un solo scostamento su trentaquattro annate, e non è un errore.** Nel 1999/2000 la matrice
identifica 40 fascicoli contro i 42 documentati dal bilancio d'esercizio 1998 della SEAT: i due di
differenza sono edizioni la cui esistenza è certa e la cui identità non è nota. Lo scostamento misura
dunque ciò che ancora manca, e va letto come un'informazione.

**L'incertezza residua è quasi tutta concentrata in due annate.** Delle 21 celle marcate come
pubblicazione probabile non confermata, 11 stanno nell'annata 1998/1999 e 10 nella 1999/2000.

Il rapporto certifica inoltre che **nessuna correzione è applicata fuori dai dati**: l'intero pacchetto
si rigenera dal solo foglio di origine.

**Le edizioni straordinarie stanno fuori dalla matrice.** Una matrice a una riga per raggruppamento non
può ospitare due edizioni della stessa città nella stessa annata: le commemorative sono quindi
registrate come righe distinte con `tipo_edizione = straordinaria`. Al momento è documentata una sola
occorrenza, l'edizione speciale di Torino del 2010 per l'ostensione della Sindone. Non è noto se le
edizioni di questo tipo partecipassero al concorso fotografico che assegnava le copertine o avessero
copertina predefinita dall'editore.

## Riproducibilità

I file in `dati/` sono generati automaticamente dal foglio di lavoro originale, senza trascrizione
manuale e senza correzioni esterne: il colore di riempimento di ogni cella viene convertito nel tipo di
copertina corrispondente, le edizioni straordinarie sono riconosciute dal nome del fascicolo, e i
controlli di integrità sono ricalcolati a ogni rigenerazione. Le trentaquattro intestazioni di annata
vengono verificate una per una contro la sequenza attesa: una divergenza interrompe l'elaborazione
invece di propagarsi nei dati.

## Citazione

Mura, Roberto (2026). *TuttoCittà: ricostruzione della storia editoriale (1981-2014)*, versione 1.1.
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
