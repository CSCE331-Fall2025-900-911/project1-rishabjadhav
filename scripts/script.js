function toggleStyleSheet(){
    var element = document.querySelector('link[rel="stylesheet"]');
    var current = element.getAttribute("href");
    // Detect which page we're on for correct path
    var isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
    var mainSheet = isRoot ? 'styles/styles.css' : '../styles/styles.css';
    var altSheet = isRoot ? 'styles/alt.css' : '../styles/alt.css';
    var newSheet = (current === mainSheet) ? altSheet : mainSheet;
    element.setAttribute("href", newSheet);
    localStorage.setItem("stylesheet", newSheet);
    var iconSpan = document.getElementById("toggle-icon");
    if (iconSpan) {
        if (newSheet.endsWith('alt.css')) {
            iconSpan.innerHTML = `<svg id='icon-moon' width='24' height='24' viewBox='0 0 24 24' fill='none' style='vertical-align:middle;'><path d='M21 12.79A9 9 0 0 1 12.21 3a7 7 0 1 0 8.79 9.79z' fill='#07f0ff'/></svg>`;
        } else {
            iconSpan.innerHTML = `<svg id='icon-sun' width='24' height='24' viewBox='0 0 24 24' fill='none' style='vertical-align:middle;'><circle cx='12' cy='12' r='5' fill='#ffe066'/><g stroke='#ffe066' stroke-width='2'><line x1='12' y1='2' x2='12' y2='5'/><line x1='12' y1='19' x2='12' y2='22'/><line x1='2' y1='12' x2='5' y2='12'/><line x1='19' y1='12' x2='22' y2='12'/><line x1='4.22' y1='4.22' x2='6.34' y2='6.34'/><line x1='17.66' y1='17.66' x2='19.78' y2='19.78'/><line x1='4.22' y1='19.78' x2='6.34' y2='17.66'/><line x1='17.66' y1='6.34' x2='19.78' y2='4.22'/></g></svg>`;
        }
    }
}

window.onload = function(){
    var persistStyle = localStorage.getItem("stylesheet");
    var isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
    var mainSheet = isRoot ? 'styles/styles.css' : '../styles/styles.css';
    var altSheet = isRoot ? 'styles/alt.css' : '../styles/alt.css';
    var el2 = document.querySelector('link[rel="stylesheet"]');
    var iconSpan = document.getElementById("toggle-icon");
    
    if (!el2) {
        console.warn("No stylesheet link element found");
        return;
    }
    
    var stylesheetToApply;
    
    if (persistStyle) {
        // If the stored path doesn't match the current page context (root vs subpage), fix it
        stylesheetToApply = persistStyle.endsWith('alt.css') ? altSheet : mainSheet;
    } else {
        // First time visit or no preference stored, default to main stylesheet
        stylesheetToApply = mainSheet;
        localStorage.setItem("stylesheet", mainSheet);
    }
    
    el2.setAttribute("href", stylesheetToApply);
    
    if (iconSpan) {
        if (stylesheetToApply.endsWith('alt.css')) {
            iconSpan.innerHTML = `<svg id='icon-moon' width='24' height='24' viewBox='0 0 24 24' fill='none' style='vertical-align:middle;'><path d='M21 12.79A9 9 0 0 1 12.21 3a7 7 0 1 0 8.79 9.79z' fill='#07f0ff'/></svg>`;
        } else {
            iconSpan.innerHTML = `<svg id='icon-sun' width='24' height='24' viewBox='0 0 24 24' fill='none' style='vertical-align:middle;'><circle cx='12' cy='12' r='5' fill='#ffe066'/><g stroke='#ffe066' stroke-width='2'><line x1='12' y1='2' x2='12' y2='5'/><line x1='12' y1='19' x2='12' y2='22'/><line x1='2' y1='12' x2='5' y2='12'/><line x1='19' y1='12' x2='22' y2='12'/><line x1='4.22' y1='4.22' x2='6.34' y2='6.34'/><line x1='17.66' y1='17.66' x2='19.78' y2='19.78'/><line x1='4.22' y1='19.78' x2='6.34' y2='17.66'/><line x1='17.66' y1='6.34' x2='19.78' y2='4.22'/></g></svg>`;
        }
    }
}