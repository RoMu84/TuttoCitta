# Registro delle versioni

## 1.3 — agosto 2026

**Il trentanovesimo fascicolo ha un nome.** È **La Spezia**, che rientra nel perimetro dall'annata
2010/2011 dopo esserne uscito con la 1998/1999, e resta fino alla fine. La scoperta chiude una delle
questioni aperte del censimento e porta il totale da 1.990 a 1.995 fascicoli accertati; i totali
dichiarati delle cinque annate finali salgono da 38 a 39 e tornano a coincidere con gli accertati.
L'accertamento viene dal portfolio dell'illustratore delle copertine, dove compaiono quelle delle
ultime due annate; le annate 2010/2011 e 2012/2013 si ricavano dalla regolarità della serie. Il bando
del concorso *Passione Italia* del 2010, che dichiarava 39 copertine e che la ricostruzione aveva
giudicato inattendibile, era dunque esatto.

**Censimento di dettaglio della Sardegna.** Una pagina e quattro file nuovi descrivono l'organizzazione
interna dei fascicoli di un'intera regione, l'unica di cui la raccolta possieda tutti i fascicoli
accertati: 48 fascicoli con foliazione, layout e formato, 872 occorrenze di sezione riconducibili a 63
rubriche, 1.839 titoli di contenuto e 463 righe di cartografia. La pagina mostra la vita delle rubriche
annata per annata, l'ingresso e l'uscita delle città dalla cartografia, i cambiamenti annotati nelle
tavole, l'indice degli articoli delle rubriche provinciali dal 1990 al 1997 e la periodizzazione dei
dodici layout.

**Una regola dell'impaginazione degli anni ottanta.** Fra il 1982/83 e il 1989/90 la città la cui tavola
unica occupa due pagine affrontate non ha un elenco delle vie in pagina propria, perché l'elenco sta nei
margini esterni della tavola. La regola è verificata senza eccezioni sulle 78 righe-città delle otto
annate ed è dichiaratamente falsificabile.

**Pagine nuove.** «Le sezioni dei fascicoli» descrive la scaletta interna nelle tre serie classiche degli
anni ottanta e novanta. «Come contribuire» raccoglie, in una pagina propria, i due modi di contribuire al
censimento: segnalare un fascicolo posseduto oppure cederlo o donarlo.

**Correzioni ai dati.** Il conteggio dei raggruppamenti provinciali in copertina al PDF passa da 116 a
115: il 116 comprendeva anche l'edizione speciale di Torino per la Sindone, che non è un raggruppamento
in più. Nell'annata 2005/2006 la copertina «2005 arancione» risulta ora su 28 fascicoli anziché 29,
coerentemente con il totale dell'annata.

**Riproducibilità.** Due valori del pacchetto 1.2 non erano riproducibili dai fogli di origine e sono
stati corretti alla fonte: una denominazione dell'annata 81/82 e due grafie di una stessa località,
unificate. Da questa versione l'affermazione che l'intero pacchetto si rigenera dai soli fogli di origine
è vera alla lettera. La galleria delle copertine legge inoltre le immagini direttamente dal foglio di
lavoro anziché da un'esportazione HTML intermedia, e la loro numerazione non dipende più dall'esportazione.

## 1.2 — agosto 2026

**Nuova sezione sulla riforma del 2009/2010.** La pagina delle tavole documenta ora anche il secondo
grande cambiamento della cartografia: la riduzione del fascicolo al formato tascabile, da 226 × 274 a
140 × 212 mm, il rifacimento integrale delle tavole con il passaggio dello sfondo dal grigio cromatico
al rosa, l'estensione dell'area cartografata nei capoluoghi e l'inserimento delle vie e piazze
periferiche di più recente formazione. Il confronto è illustrato da due immagini dei fascicoli di
Bologna 2008/2009 e 2009/2010.

**Navigazione.** Il menu comprende ora il registro delle versioni; nella homepage lo strumento di
ricerca è distinto dalle pagine descrittive.

## 1.1 — agosto 2026

**Denominazione per annata.** Il file `dati/fascicoli_lungo.csv` ha una colonna nuova,
`denominazione`, che riporta il titolo in vigore in quella singola annata, mentre il nome di censimento
continua a identificare il fascicolo lungo tutta la sua storia. Differisce dal nome di censimento in 234
celle su 1.990. Copre sia le variazioni di raggruppamento — Como diventa Como-Lecco dall'annata 95/96,
Cagliari acquisisce Carbonia-Iglesias e Medio Campidano dalla 09/10, Bari diventa Bari-Barletta Andria
Trani dalla 10/11 — sia le variazioni di suffisso delle dieci città maggiori, che seguono l'ingresso e
l'uscita dalla serie edifici. Il criterio è documentato in `CONTROLLI.md`.

**Indice delle località ampliato.** `dati/comuni_per_fascicolo.csv` passa da 1.430 a 1.480 righe e da
1.012 a 1.061 località. L'ampliamento riguarda soprattutto gli anni duemila e duemiladieci, la cui
copertura sale rispettivamente da 395 a 525 e da 171 a 333 località. Sono state inoltre unificate due
località registrate in due grafie diverse.

**Correzioni.** Nove nomi di località contenevano refusi, ora corretti. Il quadro d'unione di Firenze 86
è attribuito all'annata 1986/87 anziché alla 1985/86. La durata della serie edifici è precisata in
quattro o cinque annate secondo l'appartenenza alla serie iniziale o tardiva. Il numero massimo di
fascicoli possibili per l'annata 1998/1999 scende da 87 a 70, perché di diciassette edizioni è accertato
che non furono pubblicate.

**Contenuti nuovi nella documentazione.** Le due note dell'editore del 1981 e del 1990, con trascrizione
integrale; la riforma cartografica delle dieci città maggiori del 1985/86; il principio dei distretti
telefonici che spiega perché alcuni comuni compaiano in fascicoli di province diverse.

## 1.0 — agosto 2026

Prima pubblicazione. Censimento di 1.990 fascicoli accertati su 34 annate, 20 regioni e 115
raggruppamenti provinciali, con tipo di copertina, calendario editoriale, attributi grafici, indice
delle località e rapporto di integrità.
