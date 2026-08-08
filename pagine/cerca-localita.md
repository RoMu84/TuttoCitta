# Cerca una località

Cerca il nome di un comune, di una frazione o di una zona e scopri **in quale fascicolo di TuttoCittà
compariva la sua cartografia**, e in quali decenni. L'indice raccoglie 1.012 località rilevate sugli
esemplari della raccolta.

[Cerca invece fra i fascicoli →](cerca-fascicoli.md)

<div class="cerca">
  <input type="search" id="q" placeholder="Scrivi un nome, per esempio Cadoneghe" autocomplete="off">
  <select id="dec"></select>
  <label class="chk"><input type="checkbox" id="cap"> solo capoluoghi</label>
</div>
<p id="stato" class="stato-ricerca">Caricamento dei dati…</p>
<div class="scorri"><table id="ris" class="dati"></table></div>

<script>

function parseCSV(t){
  var r=[],f=[],c='',q=false,i;
  t=t.replace(/\r\n/g,'\n').replace(/\r/g,'\n');
  for(i=0;i<t.length;i++){
    var ch=t[i];
    if(q){ if(ch==='"'){ if(t[i+1]==='"'){c+='"';i++;} else q=false; } else c+=ch; }
    else if(ch==='"') q=true;
    else if(ch===','){ f.push(c); c=''; }
    else if(ch==='\n'){ f.push(c); c=''; r.push(f); f=[]; }
    else c+=ch;
  }
  if(c!==''||f.length){ f.push(c); r.push(f); }
  var head=r.shift();
  return r.filter(function(x){return x.length===head.length;}).map(function(x){
    var o={}; head.forEach(function(h,j){o[h]=x[j];}); return o;
  });
}
function norm(s){ return (s||'').toLowerCase()
  .replace(/[àá]/g,'a').replace(/[èé]/g,'e').replace(/[ìí]/g,'i')
  .replace(/[òó]/g,'o').replace(/[ùú]/g,'u').replace(/['’]/g,' ').trim(); }
function opzioni(sel, valori, etichetta){
  sel.innerHTML='<option value="">'+etichetta+'</option>'
    + valori.map(function(v){return '<option>'+v+'</option>';}).join('');
}

var DEC=['anni ottanta','anni novanta','anni duemila','anni duemiladieci'];
var dati=[], q=document.getElementById('q'), dec=document.getElementById('dec'),
    cap=document.getElementById('cap'), stato=document.getElementById('stato'),
    ris=document.getElementById('ris');
opzioni(dec, DEC, 'tutti i decenni');
fetch('../dati/comuni_per_fascicolo.csv').then(function(r){return r.text();}).then(function(t){
  dati=parseCSV(t);
  dati.forEach(function(d){ d._n=norm(d.localita); });
  stato.textContent='Scrivi almeno due lettere per cercare fra '+dati.length+' voci.';
}).catch(function(){ stato.textContent='Impossibile caricare i dati.'; });

function mostra(){
  var s=norm(q.value), d=dec.value, soloCap=cap.checked;
  if(s.length<2 && !d && !soloCap){
    ris.innerHTML=''; stato.textContent='Scrivi almeno due lettere per cercare fra '+dati.length+' voci.'; return;
  }
  var out=dati.filter(function(x){
    if(s.length>=2 && x._n.indexOf(s)<0) return false;
    if(d && x[d]!=='sì') return false;
    if(soloCap && x.capoluogo!=='sì') return false;
    return true;
  });
  stato.textContent = out.length ? out.length+' risultati' : 'Nessun risultato.';
  var max=out.slice(0,300);
  ris.innerHTML='<thead><tr><th>località</th><th>fascicolo</th><th>capoluogo</th><th>indicizzata</th>'
    + DEC.map(function(x){return '<th>'+x.replace('anni ','')+'</th>';}).join('') + '</tr></thead><tbody>'
    + max.map(function(x){
        return '<tr><td><b>'+x.localita+'</b></td><td>'+x.fascicolo+'</td><td>'+x.capoluogo+'</td><td>'
          + x.indicizzata+'</td>'+DEC.map(function(k){return '<td>'+(x[k]==='sì'?'●':'')+'</td>';}).join('')+'</tr>';
      }).join('') + '</tbody>';
  if(out.length>300) stato.textContent += ' (ne sono mostrati i primi 300)';
}
[q,dec,cap].forEach(function(e){ e.addEventListener('input',mostra); });
</script>

**Come leggere i risultati.** *Capoluogo* indica se la località è il capoluogo dell'area coperta dal
fascicolo. *Indicizzata* dice se compariva anche nell'elenco delle vie: «no» significa che era
cartografata ma priva di elenco stradale, «in parte» che la condizione cambiò nel tempo. I pallini
segnalano in quali decenni la località risulta mappata.

I dati provengono da [`comuni_per_fascicolo.csv`](../dati/comuni_per_fascicolo.csv) e riguardano soltanto
gli esemplari esaminati direttamente: l'assenza di una località non prova che non fosse mai cartografata.
