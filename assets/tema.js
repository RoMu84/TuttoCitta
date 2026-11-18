/* Tema chiaro o scuro: vedi la nota in fondo a sito.css. */
(function(){
  var d = document.documentElement, chiave = 'tema';
  var sistema = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function salvato(){ try { return localStorage.getItem(chiave); } catch(e) { return null; } }
  function applica(t){ d.setAttribute('data-tema', t); }
  applica(salvato() || (sistema && sistema.matches ? 'scuro' : 'chiaro'));
  if (sistema && sistema.addEventListener) sistema.addEventListener('change', function(e){
    if (!salvato()) applica(e.matches ? 'scuro' : 'chiaro');
  });
  document.addEventListener('click', function(e){
    var b = e.target.closest ? e.target.closest('button.tema') : null;
    if (!b) return;
    var t = d.getAttribute('data-tema') === 'scuro' ? 'chiaro' : 'scuro';
    applica(t);
    try { localStorage.setItem(chiave, t); } catch(x) {}
  });
})();
