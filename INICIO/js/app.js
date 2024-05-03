const nav =document.querySelector('.secciones');
    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', this.window.scrollY >0)
    });

var logo;
function loadNow(opacity){
    if(opacity <= 0){
        displayContent();
    }else{
        logo.style.opacity=opacity;
        window.setTimeout(function(){
            loadNow(opacity -0.1)
        }, 50);
    }
}
function displayContent(){
    logo.style.display='none';
    document.getElementById('general').style.display='block';
} 
    document.addEventListener("DOMContentLoaded", function(){
    logo = document.getElementById('logo');
    loadNow(2);
});