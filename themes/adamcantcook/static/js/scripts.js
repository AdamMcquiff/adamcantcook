const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
    document.getElementsByTagName('nav')[0].classList.toggle('open')
    document.getElementsByTagName('header')[0].classList.toggle('open')
    document.getElementsByClassName('overlay')[0].classList.toggle('hidden')
})