$(document).ready(Start)

function Start(){
	LupaClick();
	ToggleModal();
};


/* -------------------- 
	BUSCADOR ANIMADO
   -------------------- */

// Click in/out 🔍
function LupaClick(){
  var buscador = $('#mysearchinput');
  buscador.on('focus focusout',AnimarLupa);
	// Animación 🔍 <> ❌
	function AnimarLupa(){
	  var lupa = $('.glyphicon-search,.glyphicon-remove');
	  var lupabg = $('#menu-bar>#buscador a');
	  lupa.toggleClass('glyphicon-search glyphicon-remove change-icon');
	  lupabg.toggleClass('change-style');
	};
};


/* -------------------- 
	MODAL ANIMADO
   -------------------- */

// Modal actions
function ToggleModal(){
	var openModal    = $('.update-cart-icon,#modal-bag');
	var closeModal   = $('#modal-bag-close');
	var triggerModal = $('#update-cart-icon,#modal-bag');
	var onbuyModal   = $('.btn-addToCart');
	var msgModal 	 = $('#modal-bag-header');
	//  Trigger events
	triggerModal
		.mouseenter(ShowModal)
		.mouseleave(HideModal);
	closeModal
		.on('click', HideModal);
	onbuyModal
		.on('click', TemporalModal);
	//  Apply functions
	function ShowModal(){
		openModal.addClass('modal-visible');
	};
	function HideModal(){
		openModal.removeClass('modal-visible');
	};
	function TemporalModal(){
		setTimeout(ShowModal,1000);
		setTimeout(HideModal,4000);
		setTimeout(RemoveMsg,4000);
		msgModal.after(`
			<div id='modal-bag-msg'>
				<div class='glyphicon glyphicon-ok-circle'></div>
				<div class='msg-label'>It's in the bag - We'll hold it for an hour</div>
			</div>
		`)
		function RemoveMsg(){
			setTimeout(function(){
				$('#modal-bag-msg').remove()
			}, 0);
		};
	};
};
