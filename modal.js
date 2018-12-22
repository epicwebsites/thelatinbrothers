$(document).ready (ToggleModal)
function ToggleModal(){
  //  Declare elements
  openModal    = $('#modal-bag,#modal-open')
  closeModal   = $('#modal-bag-close')
  triggerModal = $('#canasta,#modal-bag')
  onbuyModal   = $('#btn-comprar')
  //  Trigger events
  triggerModal
    .mouseenter(ShowModal)
    .mouseleave(HideModal)
  closeModal
    .click(HideModal)
  onbuyModal
    .click(TemporalModal)
  //  Apply functions
  function ShowModal(){
    openModal.addClass('modal-visible')
  }
  function HideModal(){
    openModal.removeClass('modal-visible')
  }
  function TemporalModal(){
    openModal.addClass('modal-visible')
    setTimeout(HideModal,3000)
  }
}
