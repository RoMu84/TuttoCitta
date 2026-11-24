# Cerca fra i fascicoli

Interroga il censimento completo: 3.944 combinazioni di fascicolo e annata, con lo stato di
pubblicazione, l'anno riportato in copertina e il tipo di copertina. Il nome mostrato è la
**denominazione in vigore in quell'annata**; dove differisce, sotto compare il nome con cui il fascicolo
è censito nella sua continuità.

[Cerca invece una località →](cerca-localita.md)

<div class="cerca-raccolta">
<label>Regione <select id="reg"></select></label>
<label>Annata <select id="ann"></select></label>
<label>Stato <select id="sta"></select></label>
</div>
<p id="stato" class="stato-ricerca">Caricamento dei dati…</p>
<div class="scorri"><table id="ris" class="dati cf"></table></div>

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

var dati=[], reg=document.getElementById('reg'),
    ann=document.getElementById('ann'), sta=document.getElementById('sta'),
    stato=document.getElementById('stato'), ris=document.getElementById('ris');
function unici(k){ var s={}; dati.forEach(function(d){ if(d[k]) s[d[k]]=1; }); return Object.keys(s).sort(); }
/* Le annate vanno ordinate cronologicamente: 81/82 precede 00/01, non il contrario. */
function ordinaAnnate(a){ return a.sort(function(x,y){
  var fx=+x.slice(0,2), fy=+y.slice(0,2);
  return (fx>=80?0:1)-(fy>=80?0:1) || fx-fy; }); }
fetch('../dati/fascicoli_lungo.csv').then(function(r){return r.text();}).then(function(t){
  dati=parseCSV(t);
  opzioni(reg, unici('regione'), 'scegli…');
  opzioni(ann, ordinaAnnate(unici('annata')), 'tutte le annate');
  opzioni(sta, unici('stato'), 'tutti gli stati');
  sta.value='pubblicato'; mostra();
}).catch(function(){ stato.textContent='Impossibile caricare i dati.'; });

function mostra(){
  if(!reg.value){
    ris.innerHTML='';
    stato.textContent='Seleziona una regione per vedere i fascicoli.';
    return;
  }
  var out=dati.filter(function(x){
    if(reg.value && x.regione!==reg.value) return false;
    if(ann.value && x.annata!==ann.value) return false;
    if(sta.value && x.stato!==sta.value) return false;
    return true;
  });
  stato.textContent = out.length ? out.length+' risultati' : 'Nessun risultato.';
  var max=out.slice(0,350);
  /* 24 novembre 2026: intestazioni con la maiuscola, il colore della serie in un quadratino accanto
     al tipo di copertina (non più nel filo a sinistra del nome), lo stato in fondo; sul telefono
     ogni fascicolo è una scheda. */
  ris.innerHTML='<thead><tr><th>Regione</th><th>Fascicolo</th><th>Annata</th>'
    + '<th>Anno di copertina</th><th>Tipo di copertina</th><th>Stato</th></tr></thead><tbody>'
    + max.map(function(x){
        var nome=x.denominazione||x.fascicolo;
        var extra=(x.denominazione && x.denominazione!==x.fascicolo)
          ? '<br><span class="dim">censito come: '+x.fascicolo+'</span>' : '';
        var quad=x.colore_esadecimale ? '<span class="pastiglia" style="background:'+x.colore_esadecimale+'"></span> ' : '';
        return '<tr><td class="cf-r">'+x.regione+'</td><td class="cf-f"><b>'+nome+'</b>'+extra+'</td>'
          + '<td class="cf-a">'+x.annata+'</td><td class="cf-c">'+(x.anno_copertina||'—')+'</td>'
          + '<td class="cf-t">'+(x.tipo_copertina ? quad+x.tipo_copertina : '—')+'</td>'
          + '<td class="cf-s">'+x.stato.replace(/_/g,' ')+'</td></tr>';
      }).join('') + '</tbody>';
  if(out.length>350) stato.textContent += ' (ne sono mostrati i primi 350)';
}
[reg,ann,sta].forEach(function(e){ e.addEventListener('input',mostra); });
</script>

**Come leggere i risultati.** Lo stato *pubblicato* indica un fascicolo accertato; *probabile non
confermato* una pubblicazione ritenuta probabile ma non verificata; *non pubblicato* un fascicolo che non
uscì, perché le province erano raggruppate diversamente oppure perché la cartografia era confluita nelle
Pagine Gialle. Il quadratino accanto al tipo di copertina riprende il colore della serie.

I dati provengono da [`fascicoli_lungo.csv`](../dati/fascicoli_lungo.csv).
