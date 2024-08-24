const o_btn = document.querySelector('.btn')
const nav_asli = document.querySelectorAll('.nav')
const c_btn = document.querySelector('.btn-close')


o_btn.addEventListener('click', () => {nav_asli.forEach(ele => ele.classList.add('visible'))})
c_btn.addEventListener('click', () => {nav_asli.forEach(ele => ele.classList.remove('visible'))})