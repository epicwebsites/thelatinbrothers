/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER TOP --> NAVBAR & NAVBARSUB
/*-----------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function(event) {

'use strict';
let menuSub = document.querySelector('.navigation-sub'); // Segunda barra de navegación

// AL HACER SCROLL SOBRE LA VENTANA DEL DOCUMENTO //
window.addEventListener('scroll',()=>{
	// Lista con el tamaño y la posición de la barra respecto a la ventana, aprovechamos la función para hacer uso de .scrollTop
	// elemento.getBoundingClientRect().scrollTop = Posición del elemento respecto a su tope al hacer scroll
	// elemento.scrollHeight = height total del elemento incluyendo el padding (no borde ni scroll)
	let posSub = menuSub.getBoundingClientRect();

	// SIMULANDO LA ANIMACIÓN FADE DE JQUERY
	if ((document.body.scrollTop > posSub.top + menuSub.scrollHeight) && menuSub.classList.contains('default') &&( document.body.scrollTop > 100)){
		menuSub.style.opacity = '0';
		setTimeout(()=>{
			menuSub.classList.remove('default');
			menuSub.classList.add('fixed');
			menuSub.style.opacity = '';
		},200);
	}
	else if (document.body.scrollTop <= (pos.top + 100) && menuSub.classList.contains('fixed')){
		menuSub.style.opacity = '0';
		menuSub.classList.remove('fixed');
		menuSub.classList.add('default');
		menuSub.style.opacity = '';
	};
});
	
},false);







































































