# Cerca i dati editoriali disponibili

Cerca una provincia e visualizza tutti i dati editoriali finora noti e disponibili per i fascicoli
pubblicati della provincia selezionata. L'assenza di alcuni dati per un determinato fascicolo è dovuta
al fatto che quel fascicolo non è presente nella raccolta.

<div class="cerca-raccolta">
<label>Regione <select id="de-regione"><option value="">scegli…</option><option value="abruzzo">Abruzzo</option><option value="basilicata">Basilicata</option><option value="calabria">Calabria</option><option value="campania">Campania</option><option value="emilia-romagna">Emilia - Romagna</option><option value="friuli-venezia-giulia">Friuli - Venezia Giulia</option><option value="lazio">Lazio</option><option value="liguria">Liguria</option><option value="lombardia">Lombardia</option><option value="marche">Marche</option><option value="molise">Molise</option><option value="piemonte">Piemonte</option><option value="puglia">Puglia</option><option value="sardegna">Sardegna</option><option value="sicilia">Sicilia</option><option value="toscana">Toscana</option><option value="trentino-alto-adige">Trentino - Alto Adige</option><option value="umbria">Umbria</option><option value="valle-daosta">Valle d'Aosta</option><option value="veneto">Veneto</option></select></label>
<label>Provincia <select id="de-provincia" disabled><option value="">—</option></select></label>
</div>
<div id="de-esito" aria-live="polite"></div>

<script>
(function(){
  var R = document.getElementById('de-regione'), P = document.getElementById('de-provincia'),
      E = document.getElementById('de-esito'), D = null;
  var COL = ['Titolo', 'Anno di copertina', 'Annata', 'Formato', 'Spessore copertina', 'Layout',
             'Pagine', 'Mese aggiornamento', 'Note'];
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  var MANCA = '<span class="sospeso">Dato mancante</span>';
  R.addEventListener('change', function(){
    P.innerHTML = '<option value="">—</option>'; P.disabled = true; E.innerHTML = ''; D = null;
    if (!R.value) return;
    P.innerHTML = '<option value="">caricamento…</option>';
    fetch('../assets/dati-editoriali/' + R.value + '.json').then(function(r){ return r.json(); })
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
    var righe = (D.P[P.value] || []).map(function(j){ return D.F[j]; });
    if (!righe.length) { E.innerHTML = '<p class="cr-nota">Nessun fascicolo pubblicato per questa provincia.</p>'; return; }
    var h = '<p class="dim">' + righe.length + (righe.length === 1 ? ' fascicolo' : ' fascicoli') + '</p>'
      + '<div class="scorri"><table class="dati de"><thead><tr>'
      + COL.map(function(c){ return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>';
    righe.forEach(function(f){
      h += '<tr' + (f[9] ? '' : ' class="de-fuori"') + '>';
      for (var k = 0; k < 9; k++) {
        var v = f[k];
        var cella = v ? esc(v) : ((k === 8 && f[9]) ? '' : MANCA);
        if (k === 0 && v) cella = '<b>' + cella + '</b>';
        h += '<td class="de-' + k + (k === 8 && !v && f[9] ? ' de-vuota' : '') + '" data-l="' + COL[k] + '">' + cella + '</td>';
      }
      h += '</tr>';
    });
    E.innerHTML = h + '</tbody></table></div>';
  });
})();
</script>
