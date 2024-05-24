const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const cls = document.getElementById('close');
const lgCart = document.getElementById('lg-cart');

if (bar) {
    bar.addEventListener('click',()=>{
        lgCart.classList.add('hidden');
        nav.classList.add('active');
        console.log('works')
    })
}

if (cls) {
    cls.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

