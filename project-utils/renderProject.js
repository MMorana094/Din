// stili/projects-utils.js
(function(global) {
  'use strict';

  // Ordina i progetti per anno decrescente
  function sortProjectsChronoDesc(arr) {
    if (!Array.isArray(arr)) return [];
    return [...arr].sort((a, b) => {
      const yearA = parseInt(a.year) || 0;
      const yearB = parseInt(b.year) || 0;
      return yearB - yearA;
    });
  }

  // Esempio di rendering (puoi riutilizzarlo in index e projects)
  function renderProjects(listElement, projects, lang, limit = 0, truncateDesc = false) {
    if (!listElement) return;
    listElement.innerHTML = '';

    const items = limit > 0 ? projects.slice(0, limit) : projects;
    if (items.length === 0) {
      listElement.innerHTML = '<p class="muted">Nessun progetto disponibile.</p>';
      return;
    }

    function loc(p, field) {
      return p[field + '_' + lang] || p[field] || '';
    }

    items.forEach(p => {
      const a = document.createElement('a');
      a.className = 'project-card stacked';
      a.href = `projects.html#${encodeURIComponent(p.id || '')}`;

      // Thumbnail
      const thumb = document.createElement('div');
      thumb.className = 'project-thumb';
      if (p.thumb && p.thumb !== 'blank') {
        const img = document.createElement('img');
        img.src = p.thumb;
        img.alt = loc(p, 'title');
        thumb.appendChild(img);
      }
      a.appendChild(thumb);

      // Titolo con label
      const titleContainer = document.createElement('div');
      titleContainer.className = 'project-title-container';
      
      const titleLabel = document.createElement('span');
      titleLabel.className = 'project-label';
      titleLabel.textContent = 'Titolo: ';
      
      const title = document.createElement('h4');
      title.className = 'project-title';
      title.textContent = loc(p, 'title');
      
      titleContainer.appendChild(titleLabel);
      titleContainer.appendChild(title);
      a.appendChild(titleContainer);

      // Ruolo con label
      const roleContainer = document.createElement('div');
      roleContainer.className = 'project-role-container';

      const roleLabel = document.createElement('span');
      roleLabel.className = 'project-label';
      roleLabel.textContent = 'Ruolo: ';

      const role = document.createElement('span');
      role.className = 'project-role';
      role.textContent = loc(p, 'role');

      roleContainer.appendChild(roleLabel);
      roleContainer.appendChild(role);
      a.appendChild(roleContainer);

      // Anno con label
      const yearContainer = document.createElement('div');
      yearContainer.className = 'project-year-container';
      
      const yearLabel = document.createElement('span');
      yearLabel.className = 'project-label';
      yearLabel.textContent = 'Anno: ';
      
      const year = document.createElement('span');
      year.className = 'project-year';
      year.textContent = p['year_' + lang] || p.year || '';
      
      yearContainer.appendChild(yearLabel);
      yearContainer.appendChild(year);
      a.appendChild(yearContainer);

      // Descrizione con label
      const descContainer = document.createElement('div');
      descContainer.className = 'project-desc-container';
      
      const descLabel = document.createElement('span');
      descLabel.className = 'project-label';
      descLabel.textContent = 'Descrizione: ';
      
      const desc = document.createElement('span');
      desc.className = 'project-desc';
      let d = loc(p, 'desc') || '';
      
      // Tronca solo se truncateDesc è true
      if (truncateDesc) {
        const firstDot = d.indexOf('.');
        if (firstDot !== -1) d = d.slice(0, firstDot + 1).trim();
      }
      
      desc.textContent = d;
      
      descContainer.appendChild(descLabel);
      descContainer.appendChild(desc);
      a.appendChild(descContainer);

      listElement.appendChild(a);
    });
  }

  // Esporta funzioni globali
  global.ProjectUtils = {
    sortProjectsChronoDesc,
    renderProjects
  };

})(window);