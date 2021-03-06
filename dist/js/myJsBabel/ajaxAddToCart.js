'use strict';

$(function () {

    // On form submit
    $('.ajax-task-complete').on('submit', function (e) {
        e.preventDefault(); // Prevent the browser to send the form
        var $url = $(this).attr('action');
        var $method = $(this).attr('method');
        var $data = $(this).serialize();
        // let $sourceView = $(this).attr('data-source'); // Source html of the form
        var $formID = $(this).attr('id');
        var $sourceView = document.getElementsByName('src')[0].value;
        console.log($sourceView);
        $.ajax({
            url: $url,
            data: $data,
            method: $method,
            dataType: 'json',
            cache: false,
            beforeSend: function beforeSend() {//add animation before send request ajax
                // $('#' + $formID).append('<div class="loading"></div>');
            },
            success: function success(dataReceived) {

                // Remove elements
                $('.loading').remove();
                $('.loading-updated').remove();

                // Reset button Add To Cart
                $('.btn-addToCart').attr('disabled', true).removeClass('btn-success').addClass('btn-default');

                // Add Element Success to form
                $('#' + $formID).append('<div class="loading-updated visible-sm visible-md ok-sign glyphicon glyphicon-ok-sign">&nbsp;</div>'); //add new element
                $('#' + $formID).append('<div class="loading-updated hidden-sm hidden-md glyphicon glyphicon-ok-sign">&nbsp;</div>'); //add new element

                // Reset quantity to zero
                $('input[data-inputs=qties]').val('0');

                if ($sourceView === 'suggestionsView') {
                    $('.update-cart-menu').html(dataReceived['cartMenu']);
                    // Update the shopping cart content
                    $('.cart-content').html(dataReceived['cartContent']);
                } else if ($sourceView === 'productsView') {
                    // $('#modal-bag').modal('show');
                    console.log('tests');

                    $('.update-cart-menu').html(dataReceived['cartMenu']);
                }

                // Reload function after ajax success
                // plusAndMinus();
            },
            error: function error(xhr, status, _error) {
                alert(xhr.responseText);
            }
        });
    });

    // On form submit
    $('.ajx-check-promo').on('submit', function (e) {
        e.preventDefault(); // Prevent the browser to send the form
        var $url = $(this).attr('action');
        var $method = $(this).attr('method');
        var $data = $(this).serialize();
        // let $sourceView = $(this).attr('data-source'); // Source html of the form
        var $formID = $(this).attr('id');
        $.ajax({
            url: $url,
            data: $data,
            method: $method,
            dataType: 'json',
            cache: false,
            beforeSend: function beforeSend() {
                //add animation before send request ajax
                $('#' + $formID).append('<div class="loading"></div>');
            },
            success: function success(dataReceived) {

                // Remove elements
                $('.loading').remove();
                $('#cartTotalUpdate').remove();

                // Add Element Success to form
                $('.cart-total-update').html(dataReceived);
            },
            error: function error(xhr, status, _error2) {
                $('.loading').remove();
                console.log(_error2);
            }
        });
    });
});