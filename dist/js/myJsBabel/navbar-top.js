// Ejecutar cuando el DOM haya cargado
document.addEventListener('DOMContentLoaded', function(event) {

'use strict';
/* -------------------- 
	DROPDOWN MENU
-------------------- */

// FUNCIONES REUSABLES //

// Devuelve un array filtrando los elementos que se encuentren en el MISMO nivel
const siblingsOf = (n) => [...n.parentElement.children].filter(c=>c.nodeType == 1 && c!=n);

// Devuelve los un array con los hijos directos del elemento
const childrenOf = (n) => [...n.children].filter(c=>c.nodeType == 1);

let activeDropdown 	= document.querySelectorAll('nav ul li a:not(:only-child)');
let navDropdown 	= document.querySelectorAll('.nav-dropdown');

activeDropdown.forEach((el) => {
	// Elementos hermanos
	let siblings = siblingsOf(el);
	// Filtrando solos los elementos con clase nav-dropdown
	let filteredSiblings = siblings.filter(c=>c.classList.contains('nav-dropdown'));

	// Close one dropdown when selecting another
	el.addEventListener('click',(e) => {
		filteredSiblings.forEach((el)=>{
			(el.style.display == '' || el.style.display == 'block')
				?	el.style.display = 'none'
				: 	el.style.display = 'block'
		});
		siblings.forEach(el=>{
			[...navDropdown].filter(c=>c != el).forEach(el=>{
				el.style.display = 'none'
			});
		});
		// for(let i = 0; i < siblings.length; i++){
		// 	[...navDropdown].filter(c=>c != siblings[i]).forEach(el=>{
		// 		el.style.display = 'none'
		// 	});
		// }
		e.stopPropagation();
	},false);
});

// Clicking away from dropdown will remove the dropdown class
document.addEventListener('click',()=>{	
	navDropdown.forEach(el=>{ el.style.display = 'none' });
},false)

let navToggle 	= document.getElementById('nav-toggle');
let mainMenu 	= document.querySelector('nav.nav-top ul');

navToggle.addEventListener('click',function(){
	// Calculando el alto del menú CADA VEZ que se haga click en navToggle
	// Es importante que menuHeight se calcule dentro de la función
	// ya que si por ejm cuando la ventana pase los 798px si se ejecuta fuera de la función
	// el alto se calculará solo una vez al cargar la página, en el cual el valor será de 51px
	// pero si luego pasamos a menos de 798px el alto seguirá siendo el mismo y al abrir el
	// menú este se desplegerá solo hasta esa altura
	// Esto no representa un problema en desktops y móviles pero puede generar un evidente
	// problema de interface en situaciones donde el usuario con una tablet entre a la página
	// en modo horizontal suponiendo que su tablet es lo suficientemente grande para pasar
	// los 798px en este modo y luego cambie la orientación a vertical ejecutando la versión
	// responsive y abriendo el menú

	// Toggle open and close nav styles on click
	let menuHeight 	= mainMenu.scrollHeight+1;
	(mainMenu.style.maxHeight == '' || mainMenu.style.maxHeight == 0)
		?(
			mainMenu.style.maxHeight = menuHeight+'px',
			setTimeout(()=>mainMenu.style.overflowY = 'visible',400)
		)
		:(
			mainMenu.style.maxHeight = '',
			mainMenu.style.overflowY = ''
		)
	// Hamburger to X toggle
	this.classList.toggle('active');
},false);

let hoveredLink = document.querySelectorAll('.navigation .nav-top .nav-list li,.navigation .nav-sub .nav-list li');
// Toggle open and close nav styles on hover
hoveredLink.forEach(el=>{
	let listChild = childrenOf(el);
	let displayNav = property => {
		listChild.filter(c => c.classList.contains('nav-dropdown')).forEach(el=>{
			el.style.display = property;
		});
	};
	el.addEventListener('mouseenter',()=> displayNav('block'), false);	//	Mostrar los nav
	el.addEventListener('mouseleave',()=> displayNav('none'), false);	//	Ocultar los nav
});

/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER TOP --> NAVBAR & NAVBARSUB
/*-----------------------------------------------------------------------------------*/
let menu = document.querySelectorAll('.navigation');	// Ambas barras de navegación

// SIMULANDO LA ANIMACIÓN FADE DE JQUERY AL HACER SCROLL
window.addEventListener('scroll',function(){
	menu.forEach((el)=> {
		window.pos = el.getBoundingClientRect(); // Declarando una variable global para usarla en navbar-sub.js
		if ((document.body.scrollTop > pos.top + el.scrollHeight) && (el.classList.contains('default')) &&( document.body.scrollTop > 100)){
			el.style.opacity = '0';
			setTimeout(()=>{
				el.classList.remove('default');
				el.classList.add('fixed');
				el.style.opacity = '';
			},200);
			document.querySelector('body .container').classList.add('top100');
			document.querySelector('body .container').style.opacity = '';
			let conFluid = document.querySelector('body .container-fluid');
			if (conFluid != null) {
				conFluid.classList.add('top100');
				conFluid.style.opacity = '';
			};
		}
		else if ((document.body.scrollTop <= (pos.top + 100)) && (el.classList.contains('fixed'))){
			el.style.opacity = '0';
			el.classList.remove('fixed');
			el.classList.add('default');
			el.style.opacity = '';
		};
	});
});

},false);