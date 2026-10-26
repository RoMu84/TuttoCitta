# Registro delle versioni

## 1.7 — ottobre 2026

**Una variante che non esiste.** La 1.6 attribuiva al fascicolo *Lodi - Provincia di Milano* del 1998/99 due
varianti di copertina, identiche all'interno e diverse nel sommario ridotto. Non è così: l'esemplare
ritenuto la variante errata, proveniente da un'altra raccolta, era privo di copertina, e i rimandi
sbagliati (pagine 57 e 119) stanno nella miniatura della copertina stampata a pagina 3, che li porta in
tutti gli esemplari, anche in quelli con la copertina giusta. La copertina è una sola. Sono tolte la
sezione che ne parlava nella pagina della Lombardia, la nota del fascicolo in `fascicoli_lungo.csv` e quella
in `lombardia_fascicoli.csv`.

**Nomi e dati.** Chioggia ha una sola grafia: la tavola comprende sempre Sottomarina ed è indicizzata come
Chioggia, quindi la dicitura «Chioggia/Sottomarina» dei fascicoli di Venezia dal 1990/91 non è un comune
nuovo. Francavilla nel fascicolo Chieti - Pescara del 1990/91 è la stessa tavola di Francavilla al Mare.
Corsico compariva due volte nel fascicolo milanese del 1983/84. `comuni_per_fascicolo.csv` scende da 1.497
a 1.495 righe. Di *Rieti - Orvieto - Viterbo 83*, non in raccolta ma consultato, sono ora registrate le tre
città cartografate. Catania 2008/09 ha l'anno di copertina, 2009, come Palermo; e lo hanno sei fascicoli
del 1999/2000 — Genova, Bergamo, Brescia, Cremona, Lodi - Provincia di Milano Sud, Ancona — riconosciuti
ora come copertina gialla del 1999/2000: i fascicoli accertati di cui non si conosce l'anno in copertina
scendono da 92 a 85. La copertina di Vicenza 2007 rimandava a un'immagine inesistente e non si vedeva. In
`roma_fascicoli.csv` Roma 2013/14 ha ora anche il secondo numero della foliazione, 184 (185), come la pagina.

**Le pagine regionali.** Ogni pagina ha in fondo a «Le città cartografate» una ricerca dei comuni per
fascicolo: si sceglie l'annata, poi il fascicolo, e si leggono i comuni cartografati con i capoluoghi in
maiuscolo; per un fascicolo che non è in raccolta la pagina lo dice invece di mostrare un elenco vuoto. La
tabella dei fascicoli segue ora i raggruppamenti provinciali della matrice, una colonna per
raggruppamento, con la sigla in testa (MN, CO-SO, CO (CO-LC), Pr. MI Nord (MB - Pr. MI Nord)…); ogni
colonna si stringe e si riapre con un clic, e sul computer un pulsante rimpicciolisce la tabella fino a
mostrarla per intero. Su tablet e telefono la tabella diventa un elenco di schede, una per raggruppamento,
e nessuna pagina regionale richiede più lo scorrimento laterale. La nota delle pagine incomplete si
riduce in testa alla prima frase, con la nota intera in un riquadro che si apre a richiesta. La pagina
completa della Sardegna ha le stesse sigle, le schede e la ricerca.

**Una sola regola per tutte.** Le venti pagine regionali prendono ora il testo dal foglio di lavoro della
regione, comprese Abruzzo, Basilicata, Friuli - Venezia Giulia e Molise che lo tenevano altrove. I comuni che
entrano nella cartografia prima di entrare nell'elenco delle vie sono indicati regione per regione, con il
numero di annate di anticipo, solo dove il dato è certo: era una frase scritta a mano per Policoro, ora la
si ricava dai dati, e compare in tredici regioni.

Il censimento di dettaglio conta 2.011 fascicoli, 11.318 righe di cartografia e 5.789 titoli (5.850 righe
con le traduzioni). Il censimento dei fascicoli resta invariato: 1.990 fascicoli accertati.

## 1.6 — ottobre 2026

**Tutte e venti le regioni in dettaglio.** Alle sedici della 1.5 si aggiungono Trentino - Alto Adige,
Piemonte, Lombardia ed Emilia - Romagna, con lo stesso modello di pagina e gli stessi tre file di dati.
Il censimento di dettaglio conta ora 2.011 fascicoli, 11.316 righe di cartografia e 5.789 titoli di
articoli: 5.850 righe, perché i titoli di Bolzano e di Aosta compaiono anche nella traduzione tedesca o
francese. Nella 1.5 i 29 titoli francesi della Valle d'Aosta erano stati contati due volte: i titoli
erano 3.958, non 3.987.

**Quattro regioni con qualcosa di proprio.** Il Trentino - Alto Adige è bilingue solo in parte: Bolzano ha
rubriche in italiano e tedesco, Trento soltanto in italiano, e il file degli articoli porta la lingua di
ogni titolo. Il Piemonte ha l'unica edizione straordinaria del censimento, Torino 2010 per l'ostensione
della Sindone, descritta in una tabella accanto all'edizione regolare della stessa annata. Piemonte e
Lombardia hanno rubriche che si dividono in due quando il fascicolo copre una provincia nuova: Novara e
Verbano Cusio Ossola, Biella e Vercelli, Como e Lecco, Lodi e la provincia di Milano. L'Emilia - Romagna ha la Repubblica di San Marino fra le località cartografate.

**Tutte le pagine sono annunciate.** Le pagine delle regioni di cui la raccolta non possiede tutti i
fascicoli restano incomplete e lo dichiarano in apertura, ma entrano ora nella mappa del sito e sono
aperte ai motori di ricerca, insieme alla pagina «La raccolta» che le elenca. A «La raccolta» rimandano
«Le regioni in dettaglio» e «Come contribuire».

**Il numero dei fascicoli in raccolta si conta da sé.** È il numero dei fascicoli delle pagine regionali
che hanno una copertina e sono spogliati, oggi **1.312**: «Come contribuire» e «La raccolta» lo danno
esatto, l'introduzione e il PDF in forma arrotondata, «oltre 1.300». Si ricalcola a ogni rigenerazione, e
non è più scritto a mano in nessuna pagina. «Come contribuire» ha una sezione nuova sullo stato della
raccolta.

**Annate di transizione.** Quando in un'annata convivono due serie di copertine o due layout, la tabella
dei fascicoli mostra un quadrato di colore per ciascuno, nella colonna dell'annata e in quella delle
tavole. Ne guadagnano anche pagine già pubblicate: la Liguria nel 1993/94, la Toscana nel 2004/05; e
nell'85/86 e nell'88/89 di Campania, Lazio, Puglia e Sicilia il colore dell'annata è ora quello della
serie ordinaria e non quello delle copertine «edifici».

**Il formato del 2009/10.** Il layout *anni dieci* va sempre col formato ridotto, 140 × 212 mm, e
viceversa. Sei fogli regionali davano in 226 × 274 mm alcuni fascicoli 2009/10 di quel layout, e sono
corretti: Napoli, Roma e dintorni, Genova, Ancona, Bari - BAT, Lecce, Palermo e Catania. In Veneto,
Toscana ed Emilia - Romagna era invece sbagliato il layout: Venezia, Treviso, Verona, Vicenza, Firenze e
dintorni, Pisa, Lucca - Massa - Carrara e Ferrara sono, nel 2009/10, ancora *fine duemila* nel formato
grande, come dicono lo sfondo delle mappe e la copertina; la riforma cartografica arriva per loro col
2010/11. Le pagine verificano ora queste regole su ogni fascicolo.

**Trento 84 ha foliazione `16 (18)`.** Terza e quarta di copertina portano entrambe contenuto, cosa che
altrove accade solo nel layout *metà duemila*. L'introduzione ne dà conto come unica eccezione nota.

**Nomi e note.** Il titolo stampato del fascicolo di Forlì delle annate 1981-1983 è *Forlì - Ravenna - San
Marino*, e non *Ravenna - Forlì - San Marino*: cambia la colonna `denominazione` di `fascicoli_lungo.csv`,
e le celle in cui la denominazione differisce dal nome di censimento scendono da 261 a 258. Il fascicolo
*Lodi - Provincia di Milano* del 1998/99 ha una nota sulle due varianti di copertina, identiche
all'interno, che differiscono solo nel sommario. Nell'indice delle località diverse grafie dello stesso
luogo sono uniformate — Cherasco, San Mauro Torinese, Venaria Reale, Borgonovo Val Tidone, Fiorenzuola
d'Arda, Monticelli d'Ongina, Granarolo dell'Emilia, Lugo, Pavullo nel Frignano, e i due lidi di Comacchio,
Lido di Pomposa e Lido degli Scacchi — e `comuni_per_fascicolo.csv` scende da 1.506 a 1.497 righe.

**Nuovi fascicoli in raccolta.** Fra gli altri Trento 91 e 94, Cuneo 86 e Vercelli 86, Parma 2005 e
2008, Napoli 2012/13 e 2013/14. Le loro pagine e il mese di aggiornamento entrano anche in
`aggregati_per_annata.csv`, che cambia nella colonna `pagine_totali` di quattro annate.

Il censimento dei fascicoli resta invariato: 1.990 fascicoli accertati, con la sola correzione della
denominazione di Forlì.

## 1.5 — settembre 2026

**Sedici regioni in dettaglio.** Abruzzo, Basilicata, Calabria, Campania, Friuli - Venezia Giulia, Lazio,
Liguria, Marche, Molise, Puglia, Sardegna, Sicilia, Toscana, Umbria, Valle d'Aosta e Veneto hanno ora una
pagina ciascuna, costruita sullo stesso modello: la tabella dei fascicoli con copertina, formato, layout,
foliazione, mese di aggiornamento e note; i layout della regione con i loro anni di copertina; la griglia
delle città cartografate annata per annata; l'indice degli articoli della rubrica dal 1990/91 al
1997/98. Sono 1.231 fascicoli, 5.627 righe di cartografia e 3.987 titoli, in tre file di dati per
regione. Le pagine delle regioni di cui la raccolta non possiede tutti i fascicoli lo dichiarano in
apertura e rimandano a «Come contribuire».

**La Sardegna ha due pagine.** Quella della 1.3, con rubriche, contenuti e cartografia tavola per tavola,
si chiama ora *Sardegna - la raccolta completa in dettaglio* e sta fra «Le regioni in dettaglio»; accanto
a lei c'è la pagina sul modello delle altre regioni, raggiunta dalla pagina «La raccolta». I suoi file di
dati hanno il prefisso `sardegna-raccolta`, perché i nomi `sardegna_*.csv` restano quelli della 1.3. I
titoli degli articoli sardi hanno ora una fonte sola, con l'occhiello di rubrica davanti al titolo e due
titoli che mancavano.

**1.990 fascicoli accertati.** Il totale scende di cinque rispetto alla 1.4 per tre scoperte. Il fascicolo
*Pesaro - Urbino* dell'annata 1998/99, di cui non si sospettava l'esistenza, è accertato. Le cinque linee
di Piemonte e Puglia arrivate al 2014 — Asti, Cuneo, Torino, Bari e Lecce — hanno 33 fascicoli e non 34:
nel 2014/15 la loro cartografia è inclusa nelle Pagine Gialle, e l'ultimo fascicolo, del 2013/14, porta
già in copertina la data 14/15. Allo stesso modo, nel 1999/2000 il TuttoCittà di Biella e Vercelli è
rilegato dentro le Pagine Gialle, e la cella che lo dava per fascicolo accertato è corretta. Nel
1999/2000 la matrice identifica quindi 39 fascicoli contro i 42 del bilancio SEAT, e i totali dichiarati
del 1998/99 e delle ultime cinque annate sono riallineati: resta un solo scostamento su trentaquattro
annate.

**Due colonne nuove in `fascicoli_lungo.csv`.** `ambito` dice se il fascicolo copriva la provincia
intera, i soli dintorni del capoluogo o la sola provincia senza il capoluogo, indipendentemente dal
titolo, che per le grandi città non è un indizio affidabile. `nota` porta la spiegazione di una cella
quando serve: l'etichetta del Rieti - Viterbo del 1984, i fascicoli rilegati nelle Pagine Gialle.

**Due regole sul conto delle pagine.** Nei fascicoli a copertina grossa la pagina 1 è la prima dopo la
seconda di copertina; in quelli a copertina sottile la copertina stessa è la pagina 1. Un numero fra
parentesi accanto alla foliazione — `24 (25)` — segnala che la terza di copertina, e nel layout *metà
duemila* anche la quarta, porta contenuto proprio del fascicolo. Le tabelle mostrano ora la forma
completa, i file di dati la separano nelle colonne `pagine_totali` e `pagine_comprese_copertine`, e
l'introduzione le spiega in una sezione propria.

**Nomi di linea cambiati.** `Bari` è ora `Bari (Bari - Barletta Andria Trani dal 2009/2010)` e la linea di
Rieti è `Rieti - Viterbo (Rieti - Orvieto - Viterbo 82, 83)`. Il nome di linea è la chiave della colonna
`fascicolo`: chi incrocia i dati con la 1.4 deve tenerne conto.

**Correzioni.** L'indice delle località non spezza più i nomi con una virgola fra parentesi, che
producevano due luoghi inesistenti, «VENEZIA (Marghera» e «Mestre)». La nota sotto la tabella dei layout
dichiarava assenti annate che nella tabella ci sono, in Calabria, Campania e Liguria. Diverse grafie dello
stesso comune sono uniformate — Genzano di Roma, Civita Castellana, Castellammare di Stabia, Marina di
Massa, Chianciano Terme — e ai comuni cartografati fuori dalla provincia del loro fascicolo è stata
aggiunta la sigla.

**Il sito.** L'introduzione si intitola ora «Introduzione» e si apre con un sommario; le tabelle più larghe
della pagina si possono trascinare col mouse. La raccolta dell'autore supera ora i 1.300 esemplari.

## 1.4 — agosto 2026

**Il trentanovesimo fascicolo ha un nome.** È **La Spezia**, che rientra nel perimetro dall'annata
2010/2011 dopo esserne uscito con la 1998/1999, e resta fino alla fine. La scoperta chiude una delle
questioni aperte del censimento e porta il totale da 1.990 a 1.995 fascicoli accertati; i totali
dichiarati delle cinque annate finali salgono da 38 a 39 e tornano a coincidere con gli accertati.
L'accertamento viene dal portfolio dell'illustratore delle copertine, dove compaiono quelle delle
ultime due annate; le annate 2010/2011 e 2012/2013 si ricavano dalla regolarità della serie. Il bando
del concorso *Passione Italia* del 2010, che dichiarava 39 copertine e che la ricostruzione aveva
giudicato inattendibile, era dunque esatto.

**Il fascicolo di Rieti-Viterbo del 1984 non comprendeva Orvieto.** Un esemplare datato 84 mostra in
copertina il solo titolo *Rieti - Viterbo*: la presenza di Orvieto nella denominazione si limita ai
fascicoli datati 82 e 83. Si chiude così la seconda delle questioni aperte, e la denominazione già
registrata per l'annata 1983/84 risulta confermata.

**Speciale: Roma città.** Una pagina nuova dedicata non a una regione ma a una singola città, la più
riccamente cartografata della collana: 34 annate con copertine, formato, layout e foliazione, il
dettaglio della cartografia con numero di tavole, quadri d'unione, sfondi e modifiche annata per annata,
l'indice dei 113 articoli della rubrica dal 1990/91 al 1996/97 e il confronto fra pagine e tavole. Tre
file di dati nuovi la accompagnano.

**Tabella dei fascicoli della Sardegna.** La pagina di dettaglio si apre ora con le 48 copertine della
regione, affiancate annata per annata, con formato, layout, foliazione, mese di aggiornamento e note, e
con il colore delle tavole di ciascuna annata.

**Tabella dei layout.** Una pagina nuova descrive i quattordici layout riconosciuti nel censimento —
due in più rispetto alla 1.3 — con annate, caratteristiche e note fascicolo per fascicolo. La sezione
dei layout della pagina sarda vi rimanda e ne riporta gli anni di copertina.

**Inserti speciali e Stradario SEAT.** Due pagine nuove: la prima documenta i due inserti staccabili,
quello del 1984 sui primi 54 articoli della Costituzione e l'opuscolo dell'Agenzia del Territorio
allegato fra il 2010 e il 2011; la seconda descrive lo Stradario SEAT, la rubrica cartografica delle
Pagine Gialle da cui i TuttoCittà derivano, venduta anche in edicola come volumetto autonomo.

**Il sito riorganizzato.** Le pagine sono raccolte in tre sezioni — «Evoluzione dei fascicoli»,
«Edizioni regione per regione», «Le regioni in dettaglio» — raggiungibili da un'intestazione con menu a
tendina. Una pagina «Licenza» dedicata espone per esteso i termini d'uso e il significato della clausola
di attribuzione. Le pagine più lunghe hanno un sommario interno. Su schermo piccolo le tabelle scorrono
con la prima colonna bloccata e le righe di altezza uniforme.

**Correzioni ai dati sardi.** Il confronto incrociato fra il censimento e il nuovo repertorio delle
copertine ha corretto nove valori: quattro foliazioni, un titolo di articolo troncato, lo scambio di due
layout e le denominazioni di copertina di sei fascicoli, che riportano gli anni per esteso. Nessuna
correzione muove i totali per annata.

## 1.3 — agosto 2026

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
