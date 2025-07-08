document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('interruptor-tema');
    const body = document.body;

    // SVG para el icono del SOL 
    const sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1m6.313-2.09l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 1.218-1.567zm-11.306.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM6.213 4.81l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7A1 1 0 0 1 6.11 4.74zm12.894.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m0 5a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"/></svg>';

    // SVG para el icono de la LUNA
    const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.98 6.98 0 0 0 10 7m-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A8 8 0 0 0 4 12"/></svg>';

    // Función para actualizar el icono y el título del botón
    const updateIcon = () => {
        if (body.classList.contains('dark-mode')) {
            themeSwitcher.innerHTML = sunIcon;
            themeSwitcher.title = 'Activar modo claro';
        } else {
            themeSwitcher.innerHTML = moonIcon;
            themeSwitcher.title = 'Activar modo oscuro';
        }
    };

    // Función para aplicar el tema guardado al cargar la página
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
        updateIcon(); // Pone el ícono correcto al cargar
    };

    // Listener para el clic en el botón
    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Guarda la preferencia
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        updateIcon(); // Actualiza el ícono inmediatamente
    });

    // Aplica el tema al cargar la página por primera vez
    applyTheme();
});