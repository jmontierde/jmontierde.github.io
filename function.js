const navbarEl= document.querySelector('nav');
const changeEl = document.getElementById('changing-background');
const footerEl = document.querySelector('footer');

window.addEventListener('scroll', () => {
      if(window.scrollY > changeEl.offsetTop){
            changeEl.style.background = "#042F39";

      }else{
            changeEl.style.background = "transparent";
      }
});



