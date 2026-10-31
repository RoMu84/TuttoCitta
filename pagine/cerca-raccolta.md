# Cerca nella raccolta

Scegli una regione, una provincia e un'annata: compare il fascicolo in cui quella provincia era
cartografata, con la copertina, i dati della tabella della raccolta, i comuni cartografati e, per gli
anni novanta, gli articoli della rubrica della provincia. Le province sono quelle attuali: per una
provincia nata più tardi, come Prato, le annate precedenti rimandano al fascicolo in cui erano i suoi
comuni. Le annate in grigio non sono selezionabili, perché il fascicolo non è in raccolta o non è mai
uscito.

<div class="cerca-raccolta">
<label>Regione <select id="cr-regione"><option value="">scegli…</option><option value="abruzzo">Abruzzo</option><option disabled>Basilicata (in preparazione)</option><option disabled>Calabria (in preparazione)</option><option disabled>Campania (in preparazione)</option><option disabled>Emilia - Romagna (in preparazione)</option><option disabled>Friuli - Venezia Giulia (in preparazione)</option><option disabled>Lazio (in preparazione)</option><option disabled>Liguria (in preparazione)</option><option disabled>Lombardia (in preparazione)</option><option disabled>Marche (in preparazione)</option><option disabled>Molise (in preparazione)</option><option disabled>Piemonte (in preparazione)</option><option disabled>Puglia (in preparazione)</option><option disabled>Sardegna (in preparazione)</option><option disabled>Sicilia (in preparazione)</option><option value="toscana">Toscana</option><option disabled>Trentino - Alto Adige (in preparazione)</option><option disabled>Umbria (in preparazione)</option><option disabled>Valle d'Aosta (in preparazione)</option><option disabled>Veneto (in preparazione)</option></select></label>
<label>Provincia <select id="cr-provincia" disabled><option value="">—</option></select></label>
<label>Annata <select id="cr-annata" disabled><option value="">—</option></select></label>
</div>
<div id="cr-esito" aria-live="polite"></div>

<script>
(function(){
  var R = document.getElementById('cr-regione'), P = document.getElementById('cr-provincia'),
      A = document.getElementById('cr-annata'), E = document.getElementById('cr-esito'), D = null;
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function vuota(sel, testo){ sel.innerHTML = '<option value="">' + testo + '</option>'; sel.disabled = true; }
  R.addEventListener('change', function(){
    vuota(P, '—'); vuota(A, '—'); E.innerHTML = ''; D = null;
    if (!R.value) return;
    P.innerHTML = '<option value="">caricamento…</option>';
    fetch('../assets/ricerca-raccolta/' + R.value + '.json').then(function(r){ return r.json(); })
      .then(function(d){
        D = d;
        P.innerHTML = '<option value="">scegli…</option>' + d.province.map(function(p){
          return '<option>' + esc(p) + '</option>'; }).join('');
        P.disabled = false;
      }).catch(function(){ P.innerHTML = '<option value="">dati non disponibili</option>'; });
  });
  P.addEventListener('change', function(){
    vuota(A, '—'); E.innerHTML = '';
    if (!P.value || !D) return;
    var per = D.P[P.value] || {};
    A.innerHTML = '<option value="">scegli…</option>' + D.annate.map(function(a){
      var v = per[a[0]];
      if (!v) return '<option disabled>' + a[1] + ' — nessun fascicolo</option>';
      var ok = v.p.some(function(i){ return D.F[i].r; });
      return ok ? '<option value="' + a[0] + '">' + a[1] + '</option>'
                : '<option disabled>' + a[1] + ' — non in raccolta</option>';
    }).join('');
    A.disabled = false;
  });
  function voce(et, val){ return val ? '<dt>' + et + '</dt><dd>' + esc(val) + '</dd>' : ''; }
  function scheda(i, prov, art){
    var f = D.F[i];
    if (!f.r) return '<div class="cr-scheda cr-assente"><p><b>' + esc(f.t) + '</b>: non in raccolta.</p></div>';
    var rid = f.dim.indexOf('140 x 212') >= 0 ? ' ridotta' : '';
    var h = '<div class="cr-scheda"><div class="cr-testa">'
      + '<a class="cr-cop" href="../immagini/' + esc(f.img) + '"><img class="copertina' + rid + '" src="../immagini/'
      + esc(f.img) + '" alt="Copertina del fascicolo ' + esc(f.t) + '"></a><div class="cr-dati">'
      + '<h3>' + esc(f.t) + '</h3><dl>'
      + voce('Annata', D.annate.filter(function(a){ return a[0] === f.a; })[0][1])
      + voce('Anno in copertina', f.anno) + voce('Copertina', f.tipo.replace(/^Copertina /, ''))
      + voce('Formato', f.dim + (f.cop ? ', copertina ' + f.cop : '')) + voce('Layout', f.lay)
      + voce('Pagine', f.pag) + voce('Aggiornamento', f.mese) + voce('Note', f.note)
      + '</dl></div></div>';
    if (f.c.length) {
      var ni = false;
      h += '<h4>Comuni cartografati <span>· ' + f.c.length + '</span></h4><p class="cr-comuni">'
        + f.c.map(function(c){
            var t = esc(c[0]) + (c[2] ? '<sup>*</sup>' : ''); if (c[2]) ni = true;
            return c[1] === prov ? '<b>' + t + '</b>' : t; }).join(' <b class="perno">&bull;</b> ') + '</p>'
        + '<p class="cr-nota">In grassetto i comuni della provincia di ' + esc(prov) + '.'
        + (ni ? ' Con l\'asterisco i comuni cartografati ma assenti dall\'elenco delle vie.' : '') + '</p>';
    } else {
      h += '<p class="cr-nota">I comuni cartografati di questo fascicolo non sono ancora stati trascritti.</p>';
    }
    (art || []).forEach(function(r){
      var t = (f.art || {})[r[0]] || [];
      if (!t.length) return;
      h += '<h4>Articoli · rubrica ' + (/^Provincia di /.test(r[0]) ? 'della ' : 'di ') + esc(r[0]) + '</h4>'
        + (r[1] ? '<p class="cr-nota">' + esc(r[1]) + ': la rubrica è quella.</p>' : '')
        + '<ul class="punti">' + t.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    });
    return h + '</div>';
  }
  A.addEventListener('change', function(){
    E.innerHTML = '';
    if (!A.value || !D) return;
    var v = D.P[P.value][A.value], prov = P.value;
    var h = v.p.length > 1 ? '<p class="cr-nota">In questa annata la provincia era divisa fra ' + v.p.length
      + ' fascicoli.</p>' : '';
    v.p.forEach(function(i){ h += scheda(i, prov, (v.art || {})[i]); });
    if (v.x.length) {
      h += '<p class="cr-anche">Comuni della provincia di ' + esc(prov) + ' compaiono anche in: '
        + v.x.map(function(i){
            var f = D.F[i], cc = f.c.filter(function(c){ return c[1] === prov; }).map(function(c){ return c[0]; });
            return '<b>' + esc(f.t) + '</b> (' + esc(cc.join(', ')) + ')' + (f.r ? '' : ', non in raccolta');
          }).join('; ') + '.</p>';
    }
    h += '<p class="cr-rimando">Tutti i fascicoli della regione: <a href="' + D.slug + '.html">' + esc(D.regione) + '</a></p>';
    E.innerHTML = h;
  });
})();
</script>
