/*-----------------------------------------------------------------------------------*/
/*	FOOTER => SIEMPRE AL PIE DE LA PÁGINA CON O SIN CONTENIDO
/*-----------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function(event) {

'use strict';
	let footer = document.getElementsByTagName('footer');	// Guardamos al footer dentro de una variable
	footer[0].style.marginTop = 'auto'						// Hacemos que el margen superior siempre lo empuje hacia abajo
});

// Este efecto está siendo realizado incluso sin este archivo ya que solo necesita de una propiedad css para realizarse
// la cual se encuentra en footer.scss línea 6