function pilihMood(mood) {
    localStorage.setItem('activeMood', mood);
    document.body.className = mood;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedMood = localStorage.getItem('activeMood') || 'joy';
    
    document.body.className = savedMood;

    const path = window.location.pathname;
    const isContentPage = path.includes('music.html') || path.includes('video.html') || path.includes('quotes.html');

    if (isContentPage) {
        if (!window.location.hash) {
            window.location.hash = savedMood;
        }
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1); 
    }
});

window.addEventListener('hashchange', () => {
    let currentHash = window.location.hash.replace('#', '');
    if (currentHash) {
        document.body.className = currentHash;
        localStorage.setItem('activeMood', currentHash);
    }
});