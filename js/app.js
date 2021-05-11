
document.addEventListener('DOMContentLoaded', ()=>{

    let openBtn =  document.querySelector('.nav-trigger--open'),
        closeBtn = document.querySelector('.nav-trigger--close'),
        nav = document.querySelector('.navigation');

        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('cliked open')
            nav.classList.add('active');
        });

        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('cliked close')
            nav.classList.remove('active');
        });

});