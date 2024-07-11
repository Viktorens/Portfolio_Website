/**
 * Dark Mode
 */

function setColorScheme(scheme) {
    switch (scheme) {
        case 'dark':
            // Dark
            document.documentElement.style.setProperty('--background-primary-color', '#151515');
            document.documentElement.style.setProperty('--background-primary-color-RGBA', 'rgba(0, 0, 0, 0.5)');
            document.documentElement.style.setProperty('--background-secondary-color', 'black');
            document.documentElement.style.setProperty('--text-primary-color', 'whitesmoke');
            document.documentElement.style.setProperty('--text-secondary-color', '#252525'); // Sections Title Color
            document.documentElement.style.setProperty('--panel-primary-color', '#161616');
            break;
        case 'light':
            // Light
            document.documentElement.style.setProperty('--background-primary-color', 'white');
            document.documentElement.style.setProperty('--background-primary-color-RGBA', 'rgba(255, 255, 255, 0.5)');
            document.documentElement.style.setProperty('--background-secondary-color', '#f0f0f0');
            document.documentElement.style.setProperty('--text-primary-color', '#252525');
            document.documentElement.style.setProperty('--text-secondary-color', '#252525'); // Sections Title Color
            document.documentElement.style.setProperty('--panel-primary-color', 'white');
            break;
        default:
            // Default
            console.log('default');
            break;
    }
}

function getPreferredColorScheme() {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else {
            return 'light';
        }
    }
    return 'light';
}

// Listens for changes
if (window.matchMedia) {
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', setColorScheme(getPreferredColorScheme()));
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    setColorScheme(newColorScheme);
});
