# Controlli di integrità

Generati automaticamente dal foglio di lavoro. Ogni scostamento è un punto da verificare, non necessariamente un errore.

## Scostamenti fra il totale dichiarato nel foglio «Copertine» e i fascicoli accertati nella matrice

| annata | totale dichiarato | accertati in matrice | scostamento | totale marcato incerto |
|---|---|---|---|---|
| 99/00 | 42 | 40 | -2 | no |

Annate con scostamento: **1** su 34.

Uno scostamento positivo significa che la matrice registra più fascicoli del totale dichiarato: possibile doppio conteggio fra una riga di raggruppamento e le righe delle sue componenti nella stessa annata. Uno scostamento negativo significa che il totale dichiarato è una stima superiore a quanto la matrice attesti.

## Correzioni applicate dopo l'estrazione

**Nessuna.** Tutti i dati derivano direttamente dal foglio di origine: il pacchetto è riproducibile
partendo dalla sola fonte, senza interventi concordati fuori dai dati.

## Come è attribuita la copertina a ciascun fascicolo

Il tipo di copertina non è scritto nella matrice: viene dedotto incrociando l'anno riportato in
copertina, il colore-serie della cella e le tabelle del foglio «Copertine». I criteri si applicano in
quest'ordine, e nessuno è cablato a mano:

1. **corrispondenza esatta dell'etichetta d'anno.** Il foglio distingue deliberatamente `91` da `1991`, che sono copertine diverse: l'equivalenza fra le due forme è usata solo come ripiego.
2. **copertine «edifici»**, riservate al gruppo delle dieci città maggiori. Sono identificate dai colori-serie che la legenda assegna a quel gruppo, perché per queste copertine la discriminante era il solo anno in copertina e non l'annata: la stessa copertina «86 edifici» compare nell'annata 85/86 come serie tardiva e nella 86/87 come serie iniziale.
3. **copertine senza anno nel nome.** «Copertina grigia» non ha un anno perché i fascicoli che la portano non ne recavano alcuno in copertina, indicando soltanto il periodo di validità. È sempre candidata per la propria annata, e a scegliere è la famiglia cromatica della cella. Il criterio attribuisce 77 fascicoli, 35 nell'annata 97/98 e 42 nella 98/99.
4. **copertine di annata confinante.** Poiché il cambio di copertina avveniva spesso dentro l'annata e non fra due annate, la stessa copertina può risultare elencata sotto l'annata adiacente: è il caso di un fascicolo dell'annata 99/00 che reca in copertina il 2000/2001, elencato sotto la 00/01. Il criterio richiede corrispondenza esatta dell'etichetta e della famiglia cromatica, e un unico esito. Interviene in 2 celle.
5. **famiglia cromatica** della cella confrontata col nome della copertina.
6. **colore delle tavole**, dedotto dalle annate in cui il foglio ne dichiara uno solo. Così `#F6B26B` risulta «Grigio cromatico» dall'annata 05/06 e `#F9CB9C` «Rosa» dalla 10/11, e nell'annata 09/10 — l'unica mista — le due varianti si separano: quella con tavole rosa è il *formato ridotto*.
7. **numero dichiarato contro numero osservato** di celle per quel colore ed etichetta.
8. **coincidenza di conteggio fuori dall'etichetta.** Alcune copertine portano nel nome l'anno in cui lo stile fu introdotto e non l'anno dei fascicoli che le usano: «Copertina 2005 arancione/bianca» è impiegata da tre fascicoli che in copertina recano il 2006. Quando nessun candidato per etichetta corrisponde al numero osservato, si cerca in tutta l'annata l'unica copertina il cui numero dichiarato coincida. Nella versione attuale il criterio interviene in 3 celle su 3.944, tutte nell'annata 05/06.
9. **prevalenza**: a parità di tutto, la copertina dichiarata per il maggior numero di fascicoli. Nella versione attuale non interviene mai.

Al termine dei criteri **nessuna cella resta ambigua e nessuna resta senza copertina**: tutti i 1.884
fascicoli accertati di cui è noto l'anno di copertina hanno un tipo di copertina attribuito in modo
univoco. I restanti 106 accertati non ne hanno perché l'anno di copertina stesso non è noto.

I doppioni con nome identico dentro la stessa annata sono la stessa copertina elencata due volte, perché
in quegli anni il cambio di copertina avveniva all'interno dell'annata e non fra due annate consecutive.

## Fascicoli accertati privi dell'anno di copertina

Sono **106** celle: fascicolo la cui esistenza è accertata, ma di cui non è noto l'anno riportato in copertina.

## Celle marcate come probabili non confermate

Sono **21**:

- Calabria · Cosenza · annata 98/99
- Calabria · Reggio Calabria · annata 98/99
- Campania · Provincia di Napoli · annata 98/99
- Campania · Provincia di Napoli · annata 99/00
- Emilia - Romagna · Provincia di Bologna · annata 99/00
- Liguria · Imperia · annata 98/99
- Lombardia · Mantova · annata 98/99
- Lombardia · Mantova · annata 99/00
- Lombardia · Sondrio · annata 98/99
- Lombardia · Sondrio · annata 99/00
- Piemonte · Asti · annata 98/99
- Piemonte · Asti · annata 99/00
- Piemonte · Cuneo · annata 98/99
- Piemonte · Cuneo · annata 99/00
- Piemonte · Provincia di Torino · annata 98/99
- Piemonte · Provincia di Torino · annata 99/00
- Toscana · Provincia di Firenze (Prato - Provincia di Firenze dal 1995) · annata 99/00
- Trentino - Alto Adige · Trento · annata 98/99
- Trentino - Alto Adige · Trento · annata 99/00
- Veneto · Rovigo · annata 98/99
- Veneto · Rovigo · annata 99/00
