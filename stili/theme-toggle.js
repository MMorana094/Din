// theme-toggle.js
// Gestisce il tema light/dark con persistenza in localStorage
(function(){
    const KEY = 'site_theme';
    function getStored(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
    function store(v){ try{ localStorage.setItem(KEY, v); }catch(e){} }
    function apply(theme){ if(!theme) theme='light'; document.documentElement.setAttribute('data-theme', theme); }
    function init(){ const stored = getStored() || (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'); apply(stored); }
    function toggle(){ const cur = document.documentElement.getAttribute('data-theme') || 'light'; const next = cur === 'light' ? 'dark' : 'light'; apply(next); store(next); return next; }
    // expose API
    window.themeToggle = { init, toggle, apply };
    // auto init
    document.addEventListener('DOMContentLoaded', init);
})();
