const nav =document.querySelector('.secciones');
    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', this.window.scrollY >0)
    })