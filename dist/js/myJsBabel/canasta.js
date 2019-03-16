document.addEventListener('DOMContentLoaded', function(event){

'use strict';
function ToggleModal(){
	// MODAL RELATED ELEMENTS //
	let bagIcon 		= document.getElementById('update-cart-icon');	//	El ícono de la bolsa de compra
	let modal 			= document.querySelector('.modal-bag');			//	Modal general de los items
	let closeModal   	= document.querySelector('.modal-bag-close');	//	Botón para cerrar el modal
	let cartBuyButton   = document.querySelectorAll('.btn-addToCart');	//	Botones "Añadir al carrito"
	let deleteItem 		= document.querySelectorAll('.delete-item');	//	Botón borrar de cada item
	let itemBag 		= document.querySelectorAll('.modal-bag-main');	//	Contenedor padre de cada item
	let newItem			= itemBag.length-1;								//	Index del último item añadido
	let slideUpLayer 	= document.querySelectorAll('.slideUp-layer');	//	Capa para la animación borrar

	// ASIGN EVENTS //
	// Cuando el ratón entre sobre bagIcon o modal
	bagIcon.addEventListener('mouseenter', ShowModal, false);

	// Cuando el ratón salga de bagIcon o modal
	bagIcon.addEventListener('mouseleave', HideModal, false);

	// Al hacer click en la X
	closeModal.addEventListener('click', HideModal, false)

	// Al añadir uno o  más item al carrito
	cartBuyButton.forEach((el) => {
		el.addEventListener('click', TemporalModal, false);
	})

	// APPLY FUNCTIONS //
	// Mostrar el modal
	function ShowModal(){
		modal.classList.add('modal-visible');
	}

	// Ocultar el modal
	function HideModal(){
		modal.classList.remove('modal-visible');
	}

	// Mostrar el modal por unos segundos con un mensaje sobre el último item *por ende el item añadido*
	function TemporalModal(){
		setTimeout(ShowModal,1000);
		setTimeout(HideModal,4000);

		// Crear los elementos que construirán el mensaje cada vez que se añada un item
		let onBuyMsg 	= document.createElement("DIV");
		let checkIcon 	= document.createElement("DIV");
		let label 		= document.createElement("DIV");
		let textLabel 	= document.createTextNode("It's in the bag - We'll hold it for an hour");

		// Agregar las clases
		onBuyMsg.classList.add('modal-bag-msg');
		checkIcon.classList.add('glyphicon','glyphicon-ok-circle');
		label.classList.add('msg-label');
		
		// Contruir el mensaje
		onBuyMsg.appendChild(checkIcon);
		onBuyMsg.appendChild(label);
		label.appendChild(textLabel);

		// Anclar el mensaje sobre el último item añadido
		itemBag[newItem].before(onBuyMsg);
		setTimeout(() => onBuyMsg.remove(),4500);
	};

	// Animar al borrar CADA elemento sin importar el orden
	deleteItem.forEach((el,index) => {
		el.addEventListener('click',() => {
			itemBag[index].classList.add('layer-animation','msg-animation');
			slideUpLayer[index].classList.add('slide');
			setTimeout(() => itemBag[index].remove(), 2250);
			setTimeout(HideModal,2000);
		}, false)
	});
};
ToggleModal();

},false);




































