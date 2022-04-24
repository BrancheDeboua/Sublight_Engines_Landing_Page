document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        menu.classList.add('display');
    });

    document.addEventListener('click', (e) => {
        if (e.target.id != "hamburger")
            menu.classList.remove('display');
    })
});