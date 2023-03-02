const menuInicial = document.querySelector('.menu'); //tomando la clase menu
const menuFinal = document.querySelector('.menu-navegacion');

console.log(menuInicial)
console.log(menuFinal)


menuInicial.addEventListener('click',()=>{      //al elemento menuInicial se le agrega un evento .addEventListener de tipo click
 menuFinal.classList.toggle("spread")        //al menu-le seleccione las clases -y que coloque y le quite la clase spread
})

window.addEventListener('click' , e=>{
    if(menuFinal.classList.contains('spread') && e.target != menuFinal && e.target != menuInicial){

        menuFinal.classList.toggle("spread")

    }
})

