function changeToDarkMode(settings) {
    const element = document.body;
    element.classList.toggle("dark-mode");
    if (settings && settings.smooth_transition) {
        element.classList.toggle("smooth-transition");
    }
    
        const element_t = document.document.getElementById("wrapper");
    element_t.classList.toggle("dark-mode");
    if (settings && settings.smooth_transition) {
        element_t.classList.toggle("smooth-transition");
    }
}
