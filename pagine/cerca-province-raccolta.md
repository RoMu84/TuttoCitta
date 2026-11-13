# Cerca le copertine per provincia

Scegli una regione e una provincia: compaiono allineate tutte le copertine della provincia selezionata.
Le province sono quelle attuali: per una provincia nata più tardi, come Prato, le annate precedenti
rimandano al fascicolo in cui erano i suoi comuni.

<div class="cerca-raccolta">
<label>Regione <select id="cp-regione"><option value="">scegli…</option><option value="abruzzo">Abruzzo</option><option value="basilicata">Basilicata</option><option value="calabria">Calabria</option><option value="campania">Campania</option><option value="emilia-romagna">Emilia - Romagna</option><option value="friuli-venezia-giulia">Friuli - Venezia Giulia</option><option value="lazio">Lazio</option><option value="liguria">Liguria</option><option value="lombardia">Lombardia</option><option value="marche">Marche</option><option value="molise">Molise</option><option value="piemonte">Piemonte</option><option value="puglia">Puglia</option><option value="sardegna">Sardegna</option><option value="sicilia">Sicilia</option><option value="toscana">Toscana</option><option value="trentino-alto-adige">Trentino - Alto Adige</option><option value="umbria">Umbria</option><option value="valle-daosta">Valle d'Aosta</option><option value="veneto">Veneto</option></select></label>
<label>Provincia <select id="cp-provincia" disabled><option value="">—</option></select></label>
</div>
<div id="cp-esito" aria-live="polite"></div>

<script>
(function(){
  var R = document.getElementById('cp-regione'), P = document.getElementById('cp-provincia'),
      E = document.getElementById('cp-esito'), D = null;
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  R.addEventListener('change', function(){
    P.innerHTML = '<option value="">—</option>'; P.disabled = true; E.innerHTML = ''; D = null;
    if (!R.value) return;
    P.innerHTML = '<option value="">caricamento…</option>';
    fetch('../assets/province-raccolta/' + R.value + '.json').then(function(r){ return r.json(); })
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
    var lista = D.P[P.value] || [];
    if (!lista.length) { E.innerHTML = '<p class="cr-nota">Nessun fascicolo per questa provincia.</p>'; return; }
    E.innerHTML = '<div class="cp-copertine">' + lista.map(function(i){
      var f = D.F[i], cl = f.rid ? ' class="ridotta"' : '', img, alt;
      if (f.s === 'r' || f.s === 'i') {
        alt = 'Copertina del fascicolo ' + f.t;
        img = '<a href="../immagini/' + esc(f.img) + '"><img' + cl + ' src="../immagini/' + esc(f.img)
          + '" alt="' + esc(alt) + '" loading="lazy"></a>';
      } else {
        alt = (f.s === 'p' ? 'Segnaposto per il fascicolo ' + f.t + ', di pubblicazione probabile'
                           : 'Copertina non reperita del fascicolo ' + f.t);
        img = '<img' + cl + ' src="../immagini/' + esc(f.img) + '" alt="' + esc(alt) + '" loading="lazy">';
      }
      return '<figure class="' + (f.s === 'r' || f.s === 'i' ? '' : 'cp-manca') + (f.rid ? ' cp-ridotta' : '')
        + '">' + img + '<figcaption>' + esc(f.t) + '</figcaption></figure>';
    }).join('') + '</div>'
      + '<p class="cr-rimando">Tutti i fascicoli della regione: <a href="' + D.slug + '.html">'
      + esc(D.regione) + '</a></p>';
  });
})();
</script>
