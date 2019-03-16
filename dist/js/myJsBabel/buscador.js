document.addEventListener('DOMContentLoaded', function(event){

'use strict';
function LupaClick(){
    let searchBar 	= document.getElementsByClassName('mysearchinput');	// Caja de búsqueda
    let sIcon 		= document.querySelector('.buscador>a>i');			// Ícono de la lupa
    let iBox 		= document.querySelector('.menu-bar>.buscador a');	// Caja del ícono de la lupa

    // GENERANDO LAS ANIMACIONES DEL BUSCADOR //

    // Al hacer click sobre la lupa en realidad enfocamos el buscador
    // Al poner el enfoque sobre el buscador
    [...searchBar][0].addEventListener('focus', ()=>{
        sIcon.classList.remove('glyphicon-search');
        sIcon.classList.add('glyphicon-remove','change-icon');
        iBox.classList.add('change-style');
    }, false);
    // Al sacar el enfoque del buscador 
    [...searchBar][0].addEventListener('focusout', ()=>{
        sIcon.classList.add('glyphicon-search');
        sIcon.classList.remove('glyphicon-remove','change-icon');
        iBox.classList.remove('change-style');
    }, false);

	// En caso de usar más de 1 buscador
	// este código funciona así exista solo uno
	// let searchBar 	= document.getElementsByClassName('mysearchinput');
	// let sIcon      	= document.querySelectorAll('.buscador>a>i');
	// let iBox 		= document.querySelectorAll('.menu-bar>.buscador a');
	// [...searchBar].forEach((el,index)=>{
	// 	el.addEventListener('focus', ()=>{
	// 		sIcon[index].classList.remove('glyphicon-search');
	// 		sIcon[index].classList.add('glyphicon-remove','change-icon');
	// 		iBox[index].classList.add('change-style');
	// 	}, false);
	// 	el.addEventListener('focusout', ()=>{
	// 		sIcon[index].classList.add('glyphicon-search');
	// 		sIcon[index].classList.remove('glyphicon-remove','change-icon');
	// 		iBox[index].classList.remove('change-style');
	// 	}, false);
	// });
}
LupaClick();

},false);



























































