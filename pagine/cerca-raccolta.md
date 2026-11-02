# Cerca nella raccolta

Scegli una regione, una provincia e un'annata: compare il fascicolo in cui quella provincia era
cartografata, con la copertina, i dati della tabella della raccolta, i comuni cartografati e, per gli
anni novanta, gli articoli della rubrica della provincia. Le province sono quelle attuali: per una
provincia nata più tardi, come Prato, le annate precedenti rimandano al fascicolo in cui erano i suoi
comuni. Le annate in grigio non sono selezionabili, perché il fascicolo non è in raccolta o non è mai
uscito.

<div class="cerca-raccolta">
<label>Regione <select id="cr-regione"><option value="">scegli…</option><option value="abruzzo">Abruzzo</option><option value="basilicata">Basilicata</option><option value="calabria">Calabria</option><option value="campania">Campania</option><option value="emilia-romagna">Emilia - Romagna</option><option value="friuli-venezia-giulia">Friuli - Venezia Giulia</option><option value="lazio">Lazio</option><option value="liguria">Liguria</option><option value="lombardia">Lombardia</option><option value="marche">Marche</option><option value="molise">Molise</option><option value="piemonte">Piemonte</option><option value="puglia">Puglia</option><option value="sardegna">Sardegna</option><option value="sicilia">Sicilia</option><option value="toscana">Toscana</option><option value="trentino-alto-adige">Trentino - Alto Adige</option><option value="umbria">Umbria</option><option value="valle-daosta">Valle d'Aosta</option><option value="veneto">Veneto</option></select></label>
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
      if (!v || v.z) return '<option disabled>' + a[1] + (v && v.z === 'nc'
        ? ' — nessun comune cartografato' : ' — fascicolo non pubblicato') + '</option>';
      var ok = v.p.some(function(i){ return D.F[i].r; });
      var dubbia = v.p.every(function(i){ return D.F[i].prob; });
      return ok ? '<option value="' + a[0] + '">' + a[1] + '</option>'
                : '<option disabled>' + a[1] + ' — non in raccolta' + (dubbia ? ' - esistenza dubbia' : '') + '</option>';
    }).join('');
    A.disabled = false;
  });
  function voce(et, val){ return val ? '<dt>' + et + '</dt><dd>' + esc(val) + '</dd>' : ''; }
  function scheda(i, prov){
    var f = D.F[i];
    if (!f.r) return '<div class="cr-scheda cr-assente"><p><b>' + esc(f.t) + '</b>: non in raccolta.</p></div>';
    var rid = f.dim.indexOf('140 x 212') >= 0 ? ' ridotta' : '';
    var h = '<div class="cr-scheda"><div class="cr-testa"><div class="cr-cop">'
      + '<a href="../immagini/' + esc(f.img) + '"><img class="copertina' + rid + '" src="../immagini/'
      + esc(f.img) + '" alt="Copertina del fascicolo ' + esc(f.t) + '"></a>'
      + '<h3>' + esc(f.t) + '</h3></div><div class="cr-dati"><dl>'
      + voce('Annata', D.annate.filter(function(a){ return a[0] === f.a; })[0][1])
      + voce('Anno in copertina', f.anno)
      + voce('Spessore copertina', f.cop ? f.cop.charAt(0).toUpperCase() + f.cop.slice(1) : '')
      + voce('Formato', f.dim) + voce('Layout', f.lay)
      + voce('Sfondo mappe', f.sf)
      + voce('Pagine', f.pag) + voce('Aggiornamento', f.mese ? f.mese.charAt(0).toUpperCase() + f.mese.slice(1) : '') + voce('Note', f.note ? f.note.charAt(0).toUpperCase() + f.note.slice(1) : '')
      + '</dl></div></div>';
    if (f.c.length) {
      var ni = false;
      // un gruppo per provincia, nell'ordine in cui compaiono: ognuno va a capo
      var gruppi = [], dove = {};
      f.c.forEach(function(c){
        if (!(c[3] in dove)) { dove[c[3]] = gruppi.length; gruppi.push([]); }
        gruppi[dove[c[3]]].push(c);
      });
      h += '<h4>Comuni cartografati <span>· ' + f.c.length + '</span></h4><div class="cr-riquadro cr-comuni">'
        + gruppi.map(function(g){ return '<p>' + g.map(function(c){
            var t = esc(c[0]) + (c[4] ? ' (' + esc(c[4]) + ')' : '') + (c[2] ? '<sup>*</sup>' : ''); if (c[2]) ni = true;
            return t; }).join(' <b class="perno">&bull;</b> ') + '</p>'; }).join('')
        + '</div>'
        + '<p class="cr-nota">' + (gruppi.length > 1 ? 'Una riga per provincia.' : '')
        + (f.c.some(function(c){ return c[4]; }) ? ' Fra parentesi la sigla dei comuni di altre province.' : '')
        + (ni ? ' Con l\'asterisco i comuni cartografati ma assenti dall\'elenco delle vie.' : '') + '</p>';
    } else {
      h += '<p class="cr-nota">I comuni cartografati di questo fascicolo non sono ancora stati trascritti.</p>';
    }
    if (D.slug === 'lazio' && /^Roma( |$)/.test(f.l))
      h += '<p class="cr-nota">Per Roma città c\'è anche lo <a href="roma.html">Speciale Roma</a>, con la '
        + 'cartografia annata per annata.</p>';
    (f.art || []).forEach(function(r){
      h += '<h4>Articoli <b class="perno">&bull;</b> Rubrica ' + (/^Provincia di /.test(r[0]) ? 'della ' : 'di ')
        + esc(r[0]) + '</h4>'
        + '<div class="cr-riquadro"><ul class="punti">' + r[1].map(function(x){ return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
    });
    return h + '</div>';
  }
  A.addEventListener('change', function(){
    E.innerHTML = '';
    if (!A.value || !D) return;
    var v = D.P[P.value][A.value], prov = P.value;
    var h = v.p.length > 1 ? '<p class="cr-nota">In questa annata la provincia era divisa fra ' + v.p.length
      + ' fascicoli.</p>' : '';
    v.p.forEach(function(i){ h += scheda(i, prov); });
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
