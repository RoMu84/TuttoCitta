# Edizioni annuali

Scegli l'annata per generare una tabella che mostra quali fascicoli vennero pubblicati in quella
determinata annata, l'anno di copertina e, quando il dato è disponibile, il mese di aggiornamento e il
numero di pagine. Il colore di fondo della tabella riflette il colore della copertina in uso.

<div class="cerca-raccolta">
<label>Seleziona l'annata <select id="ea-annata"><option value="">scegli…</option><option value="81-82">1981/82</option><option value="82-83">1982/83</option><option value="83-84">1983/84</option><option value="84-85">1984/85</option><option value="85-86">1985/86</option><option value="86-87">1986/87</option><option value="87-88">1987/88</option><option value="88-89">1988/89</option><option value="89-90">1989/90</option><option value="90-91">1990/91</option><option value="91-92">1991/92</option><option value="92-93">1992/93</option><option value="93-94">1993/94</option><option value="94-95">1994/95</option><option value="95-96">1995/96</option><option value="96-97">1996/97</option><option value="97-98">1997/98</option><option value="98-99">1998/99</option><option value="99-00">1999/00</option><option value="00-01">2000/01</option><option value="01-02">2001/02</option><option value="02-03">2002/03</option><option value="03-04">2003/04</option><option value="04-05">2004/05</option><option value="05-06">2005/06</option><option value="06-07">2006/07</option><option value="07-08">2007/08</option><option value="08-09">2008/09</option><option value="09-10">2009/10</option><option value="10-11">2010/11</option><option value="11-12">2011/12</option><option value="12-13">2012/13</option><option value="13-14">2013/14</option><option value="14-15">2014/15</option></select></label>
</div>
<div id="ea-esito" aria-live="polite"></div>

<script>
(function(){
  var A = document.getElementById('ea-annata'), E = document.getElementById('ea-esito');
  var SF = {'Arancione':'#F9D5AE', 'Grigio':'#DEDEDE', 'Grigio cromatico':'#D6DCE4', 'Rosa':'#F6D3DC'};
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function pc(n, t){ return t ? (100 * n / t).toFixed(1).replace('.', ',') + '%' : '—'; }
  A.addEventListener('change', function(){
    E.innerHTML = '';
    if (!A.value) return;
    E.innerHTML = '<p class="cr-nota">caricamento…</p>';
    fetch('../assets/edizioni-annuali/' + A.value + '.json').then(function(r){ return r.json(); })
      .then(function(d){
        var corpo = d.righe.map(function(x){
          var st = x.c ? ' style="background:' + x.c + '"' : '',
              cl = (x.r ? '' : ' class="ea-manca"'),
              ti = x.r ? '' : (x.d ? ' title="Pubblicazione probabile, non confermata; non in raccolta"'
                                   : ' title="Non in raccolta"');
          return '<tr' + cl + ti + '>'
            + '<td class="ea-t"' + st + '>' + esc(x.t) + (x.d ? ' <i>?</i>' : '') + '</td>'
            + '<td' + st + '>' + esc(x.a) + '</td>'
            + '<td' + st + '>' + esc(x.m) + '</td>'
            + '<td class="ea-n"' + st + '>' + esc(x.p) + '</td>'
            + '<td' + (SF[x.sf] ? ' style="background:' + SF[x.sf] + '"' : '') + '>' + esc(x.sf) + '</td></tr>';
        }).join('');
        E.innerHTML = '<p class="ea-conto">Fascicoli in raccolta: <b>' + d.in_raccolta + '</b> sul totale di <b>'
          + d.totale + '</b> (' + pc(d.in_raccolta, d.totale) + ')</p>'
          + '<p class="ea-legenda">Per ogni fascicolo: anno di copertina, mese di aggiornamento, pagine e sfondo della cartografia.</p>'
          + '<div class="ea-scorri"><table class="ea-tabella"><thead><tr><th>Fascicolo</th><th>Anno di copertina</th>'
          + '<th>Mese di aggiornamento</th><th>Pagine</th><th>Cartografia</th></tr></thead><tbody>'
          + corpo + '</tbody></table></div>';
      }).catch(function(){ E.innerHTML = '<p class="cr-nota">Dati non disponibili.</p>'; });
  });
})();
</script>
