
function setInitialMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true'; 
    const body = document.body;
    const toggleButton = document.getElementById('dark-mode-toggle');

    if (darkMode) {
        body.classList.add('dark');
        toggleButton.innerText = 'activate white mode';
    } else {
        body.classList.remove('dark');
        toggleButton.innerText = 'activate dark mode';
    }
}

function toggleDarkMode() {
    const body = document.body;
    const toggleButton = document.getElementById('dark-mode-toggle');
    
    body.classList.toggle('dark');

    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);

    if (isDarkMode) {
        toggleButton.innerText = 'activate white mode';
    } else {
        toggleButton.innerText = 'activate dark mode';
    }
}

setInitialMode();

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
