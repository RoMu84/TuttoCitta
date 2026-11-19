# Cerca una provincia

Scegli una regione e una provincia: compare una tabella con tutti i fascicoli pubblicati per la
provincia selezionata. Le province sono quelle attuali: per una provincia nata più tardi, come Prato,
le annate precedenti rimandano al fascicolo in cui erano i suoi comuni.

Il colore della cella indica il tipo di copertina; tutte le tipologie di copertina sono visualizzabili
nella [pagina Copertine](copertine.md).

Per ciascuna casella rappresentante un fascicolo è riportato l'anno di copertina quando questo è noto.  
x indica che sebbene sia accertata l'esistenza del fascicolo, l'anno di copertina non è noto con precisione.  
? indica che la pubblicazione è probabile ma non è confermata.  
Le celle vuote indicano che il fascicolo non è pubblicato.

<div class="cerca-raccolta">
<label>Regione <select id="pc-regione"><option value="">scegli…</option><option value="abruzzo">Abruzzo</option><option value="basilicata">Basilicata</option><option value="calabria">Calabria</option><option value="campania">Campania</option><option value="emilia-romagna">Emilia - Romagna</option><option value="friuli-venezia-giulia">Friuli - Venezia Giulia</option><option value="lazio">Lazio</option><option value="liguria">Liguria</option><option value="lombardia">Lombardia</option><option value="marche">Marche</option><option value="molise">Molise</option><option value="piemonte">Piemonte</option><option value="puglia">Puglia</option><option value="sardegna">Sardegna</option><option value="sicilia">Sicilia</option><option value="toscana">Toscana</option><option value="trentino-alto-adige">Trentino - Alto Adige</option><option value="umbria">Umbria</option><option value="valle-daosta">Valle d'Aosta</option><option value="veneto">Veneto</option></select></label>
<label>Provincia <select id="pc-provincia" disabled><option value="">—</option></select></label>
</div>
<div id="pc-esito" aria-live="polite"></div>

<script>
(function(){
  var R = document.getElementById('pc-regione'), P = document.getElementById('pc-provincia'),
      E = document.getElementById('pc-esito'), D = null;
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  R.addEventListener('change', function(){
    P.innerHTML = '<option value="">—</option>'; P.disabled = true; E.innerHTML = ''; D = null;
    if (!R.value) return;
    P.innerHTML = '<option value="">caricamento…</option>';
    fetch('../assets/province-censimento/' + R.value + '.json').then(function(r){ return r.json(); })
      .then(function(d){
        D = d;
        P.innerHTML = '<option value="">scegli…</option>' + d.province.map(function(p){
          return '<option>' + esc(p) + '</option>'; }).join('');
        P.disabled = false;
      }).catch(function(){ P.innerHTML = '<option value="">dati non disponibili</option>'; });
  });
  P.addEventListener('change', function(){
    E.innerHTML = '';
    if (!P.value || !D) return;
    var celle = D.P[P.value] || [];
    if (!celle.length) { E.innerHTML = '<p class="cr-nota">Nessun fascicolo per questa provincia.</p>'; return; }
    var per = {}, ordine = [], accertati = 0;
    celle.forEach(function(c){
      if (!per[c[0]]) { per[c[0]] = {}; ordine.push(c[0]); }
      per[c[0]][c[1]] = c;
      if (c[2] !== '?') accertati++;
    });
    ordine.sort(function(a, b){ return a - b; });
    var h = '<div class="scorri"><table class="' + 'matrice a-schede"><thead><tr><th>fascicolo</th>'
      + D.annate.map(function(a){ return '<th>' + esc(a) + '</th>'; }).join('') + '</tr></thead><tbody>';
    ordine.forEach(function(ri){
      h += '<tr><td class="nome">' + esc(D.righe[ri]) + '</td>';
      D.annate.forEach(function(a, ai){
        var c = per[ri][ai];
        if (!c) h += '<td></td>';
        else if (!c[3]) h += '<td>' + esc(c[2]) + '</td>';
        else h += '<td style="background:' + c[3] + (c[4] ? ';color:#fff' : '') + '">' + esc(c[2]) + '</td>';
      });
      h += '</tr>';
    });
    h += '</tbody></' + 'table></div>'
      + '<p><strong>Numero totale dei fascicoli accertati: ' + accertati + '</strong></p>'
      + '<p class="cr-rimando">Tutti i fascicoli della regione: <a href="regioni/' + D.slug + '.html">'
      + esc(D.regione) + '</a></p>';
    E.innerHTML = h;
    if (window.schedeMatrice) window.schedeMatrice(E.querySelector('table'));
  });
})();
</script>
