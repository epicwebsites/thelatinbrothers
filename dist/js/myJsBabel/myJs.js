'use strict';

$(document).ready(function () {

    /*-----------------------------------------------------------------------------------*/
    /*	DROPDOWN MENU
    /*-----------------------------------------------------------------------------------*/
    $('nav ul li a:not(:only-child)').click(function (e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
        $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
        $('nav.nav-top ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function () {
        this.classList.toggle('active');
    });

    $('.navigation .nav-top .nav-list li, .navigation .nav-sub .nav-list li').hover(function () {
        $(this).children('.nav-dropdown').stop(true, true).delay(0).fadeIn(0);
    }, function () {
        $(this).children('.nav-dropdown').stop(true, true).delay(0).fadeOut(0);
    });

    /*-----------------------------------------------------------------------------------*/
    /*	STICKY HEADER TOP --> NAVBAR & NAVBARSUB
    /*-----------------------------------------------------------------------------------*/
    var menu = $('.navigation'),
        pos = menu.offset();
    $(window).scroll(function () {
        if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && $(this).scrollTop() > 100) {
            menu.fadeOut('fast', function () {
                $(this).removeClass('default').addClass('fixed').fadeIn('fast');
            });
            $('body .container').addClass('top100').fadeIn(0);
            $('body .container-fluid').addClass('top100').fadeIn(0);
        } else if ($(this).scrollTop() <= pos.top + 100 && menu.hasClass('fixed')) {
            menu.fadeOut(0, function () {
                $(this).removeClass('fixed').addClass('default').fadeIn(0);
            });
        }
    });

    /*-----------------------------------------------------------------------------------*/
    /*	STICKY HEADER TOP
    /*-----------------------------------------------------------------------------------*/
    var menuSub = $('.navigation-sub'),
        posSub = menuSub.offset();
    $(window).scroll(function () {
        if ($(this).scrollTop() > posSub.top + menuSub.height() && menuSub.hasClass('default') && $(this).scrollTop() > 100) {
            menuSub.fadeOut('fast', function () {
                $(this).removeClass('default').addClass('fixed').fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= pos.top + 100 && menuSub.hasClass('fixed')) {
            menuSub.fadeOut(0, function () {
                $(this).removeClass('fixed').addClass('default').fadeIn(0);
            });
        }
    });

    // $(".carousel").swipe({
    //     swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    //         if (direction === 'left') $(this).carousel('next');
    //         if (direction === 'right') $(this).carousel('prev');
    //     },
    //     allowPageScroll:"vertical"
    // });


    // let cat1 = 'home-rum';
    // let cat2 = 'home-pisco';
    //
    // let current = 0,
    //     slides = document.getElementsByClassName(cat1);
    //
    // setInterval(function() {
    //     for (let i = 0; i < slides.length; i++) {
    //         slides[i].style.opacity = 0;
    //     }
    //     current = (current !== slides.length - 1) ? current + 1 : 0;
    //     slides[current].style.opacity = 1;
    //
    // }, 12000);
    //
    //
    // let current2 = 0,
    // slides2 = document.getElementsByClassName(cat2);
    // setInterval(function() {
    //     for (let i = 0; i < slides2.length; i++) {
    //         slides2[i].style.opacity = 0;
    //     }
    //     current2 = (current2 !== slides2.length - 1) ? current2 + 1 : 0;
    //     slides2[current2].style.opacity = 1;
    //
    // }, 12000);

    /***********************************************/
    // IF NAVBAR COLLAPSED REMOVE MARGIN TOP FROM LANGUAGE DROPDOWN
    $(".navbar-toggle").click(function () {
        $("#dropdownMenu1").removeClass('mt-10');
    });

    /***********************************************/
    // CAROUSEL FOR CLOTHING COLORS IN TWIG "SINGLE/QUICKVIEW"
    $('#media').carousel({ pause: true, interval: false });

    /***********************************************/
    // DISPLAY NICE TOOLTIP IN TWIG "SINGLE/QUICKVIEW"
    $('[data-toggle="tooltip"]').tooltip();

    /***********************************************/
    // HIDE DIV DRINKS IN PRODUCTS ADMIN VIEWS
    $('#chkboxDrinks').on('click', function () {
        $('#divDrinks').toggle();
    });
    /***********************************************/
    // HIDE DIV BOOKS IN PRODUCTS ADMIN VIEWS
    $('#chkboxBooks').on('click', function () {
        $('#divBooks').toggle();
    });
    /***********************************************/
    // HIDE DIV OWNER IN PRODUCTS ADMIN VIEWS
    $('#chkOwner').on('click', function () {
        $('#divOwner').toggle();
    });
    /***********************************************/
    // HIDE DIV NEW ADDRESS IN DELIVERY VIEWS
    $('#chkboxDelivery').on('click', function () {
        $('#divDelivery').toggle();
    });

    /***********************************************/
    // HIDE DIV CLOTHING IN TRANSACTION ADMIN VIEWS
    $('#chkboxClothing').on('click', function () {
        $('#divClothing').toggle();

        var elemInTransaction = document.getElementById('appbundle_transaction_size');
        var elemInMedia = document.getElementById('appbundle_media_color');
        // If clothing, size and color is required
        if (elemInTransaction) {
            appbundle_transaction_size.hasAttribute('required') ? appbundle_transaction_size.removeAttribute('required') : appbundle_transaction_size.setAttribute('required', 'required');
            appbundle_transaction_color.hasAttribute('required') ? appbundle_transaction_color.removeAttribute('required') : appbundle_transaction_color.setAttribute('required', 'required');
        } else if (elemInMedia) {
            elemInMedia.hasAttribute('required') ? elemInMedia.removeAttribute('required') : elemInMedia.setAttribute('required', 'required');
            console.log(elemInMedia);
        }
    });

    /***********************************************/
    // HIDE/DISPLAY SEARCH INPUT
    $('#find').on('click', function () {
        $('#mysearchForm').toggle();
    });

    /***********************************************/
    // // MEDIA CREATION AND EDIT - HIDE/DISPLAY ELEMENT
    // $('.productTypeSelect').on('keyup change', function () {
    //     let type = $(this).find("option:selected").text();
    //     if (type === 'Clothing') $('.productTypeDiv').show();
    //     else $('.productTypeDiv').hide();
    // })


    /***********************************************/
    //SEARCH INPUTS
    var searchinputs = document.querySelectorAll('[data-mysearchinput]');
    //make array from collection "searchinputs" and add EventListener to element
    Array.from(searchinputs).forEach(function (element) {
        element.addEventListener('keypress', function (e) {
            // prevent default event when enter key press in search input
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) e.preventDefault();
        });
    });

    /***********************************************/
    //DISABLE ANCHOR WITH CLASS btn-disabled
    var btnDisabled = document.querySelectorAll('a.btn-disabled');

    // Add EventListener to each element
    btnDisabled.forEach(function (element) {
        element.addEventListener('click', function (e) {
            // e.target.setAttribute('title', 'Not available');
            e.preventDefault();
        });
    });

    /***********************************************/
    //TOOLTIP FOR SINGLE BUTTON ADD, ACTIVATE ONCE SIZE SELECTED
    $('#size').on('click', function () {
        var sizeSelected = $(this).val();
        if (sizeSelected) {
            var elem = $('.btn-ground>button');
            elem.removeAttr('data-placement data-toggle title data-original-title onclick').removeClass('btn-disabled');
            elem.attr('onclick', 'loadingAnimation(this)');
        }
    });

    /********************************************************************************************************/
    //BUTTONS PLUS AND MINUS
    //get elements buttons plus & minus
    var btnPlusMinus = document.getElementsByClassName('btn-number');

    //make array from collection "btnPlusMinus" and add EventListener to each button
    Array.from(btnPlusMinus).forEach(function (element) {

        element.addEventListener('click', function (evt) {
            // Remove elements
            $('.loading').remove();
            $('.loading-updated').remove();

            var MINVALUE = 1;
            var MAXVALUE = 9999;
            var prodId = evt.currentTarget.getAttribute('data-id'); //product id
            var btnType = evt.currentTarget.getAttribute('data-type'); //type plus or minus
            var input = $("input[id='" + prodId + "']"); //input qty of the current product
            var currentVal = parseInt(input.val()); //current value before treatment
            console.log(currentVal);
            if (!isNaN(currentVal)) {
                //if minus
                if (btnType === 'minus') {
                    if (currentVal > MINVALUE) {
                        input.val(currentVal - 1).change(); //decrease qty of 1
                    } else evt.currentTarget.setAttribute('disabled', true); // disable btn minus
                    //if plus
                } else if (btnType === 'plus') {
                    if (currentVal < MAXVALUE) {
                        input.val(currentVal + 1).change(); //increase qty of 1
                    } else evt.currentTarget.setAttribute('disabled', true); // disable btn plus
                }
            } else {
                //default value 0
                input.value(0);
            }
        });
    });

    // ALLOW ONLY NUMBERS IN QUANTITY INPUT
    var inputNumber = document.getElementsByClassName('input-number');

    //make array from collection "btnPlusMinus" and add EventListener to each button
    Array.from(inputNumber).forEach(function (element) {
        element.addEventListener('keypress', function (e) {

            // Allow: backspace, delete, tab, escape, enter and
            var keyCode = e.keyCode || e.which;

            if ($.inArray(keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            // Allow: Ctrl+A
            e.keyCode === 65 && e.ctrlKey === true ||
            // Allow: home, end, left, right
            keyCode >= 35 && keyCode <= 39) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || keyCode < 48 || keyCode > 57) && (keyCode < 96 || keyCode > 105)) {
                e.preventDefault();
            }
        });
    });

    //ACTIVATE AND CHANGE STYLES BUTTONS "MINUS", "PLUS", "ADD TO CART"
    // input qty field value change
    $('.input-number').change(function () {
        var MINVALUE = 1;
        var MAXVALUE = 9999;
        // current value of the input qty
        var currentVAlue = parseInt($(this).val());

        //if value is 1 or grater
        if (currentVAlue >= MINVALUE) {
            //Activate button "minus" and activate button "add to cart" and change style to green
            $(".btn-number[data-type='minus'][data-id='" + this.id + "']").removeAttr('disabled');
            $(".refresh[data-id='" + this.id + "']").removeAttr('disabled').addClass('btn btn-success');
        }
        if (currentVAlue < MAXVALUE) {
            $(".btn-number[data-type='plus'][data-id='" + this.id + "']").removeAttr('disabled');
        }
    });
    /********************************************************************************************************/

    /********************************************************************************************************/
    // Create REFERENCE accronym from name
    var btnAcronym = document.getElementById('btnAcronym');
    var proReference = document.getElementById('appbundle_products_reference');

    // Create day name
    var d = new Date();
    var days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    var acronym = '';
    if (btnAcronym) {

        btnAcronym.addEventListener('click', function (_) {
            // Get product name without special characters
            var productName = document.getElementById('appbundle_products_name').value.replace(/[^a-zA-Z0-9]/g, ' ');
            console.log(productName);
            // Generate acronym
            acronym = productName.split(/\s/).reduce(function (accumulator, word) {
                return accumulator + word.charAt(0);
            }, '').toUpperCase() + days[d.getDay()];

            proReference.value = acronym + minTenDigits(acronym);
        });
    }

    function minTenDigits(n) {
        var res = '';
        for (var i = n.length; i < 8; i++) {
            res += '0';
        }
        return res;
    }

    /********************************************************************************************************/
    // Create ALT from selected product name
    var btnAlt = document.getElementById('btnAlt');
    if (btnAlt) {
        btnAlt.addEventListener('click', function (_) {
            // Get product name without special characters
            var product = document.getElementById('appbundle_media_products');
            appbundle_media_alt.value = product.options[product.selectedIndex].text;
        });
    }

    /********************************************************************************************************/
    //ADD LISTENER
    //Paid checkbox in form EXPORTSE
    var chkboxPaid = document.querySelector('.js-paid');
    if (chkboxPaid) {
        chkboxPaid.addEventListener('change', function () {
            if (this.checked) {
                $('.js-onAccount').addClass('hidden');
                $('.js-onAccount').attr('disabled', 'disabled');
            } else {
                $('.js-onAccount').attr('disabled', false);
                $('.js-onAccount').removeClass('hidden');
            }
        });
    }
    /***********************************************/
    //SLIDES IN MOBILE VIEW
    //touch slides in mobile view
    $(".carousel").on("touchstart", function (event) {

        var xClick = event.originalEvent.touches[0].pageX;
        //moving
        $(this).one("touchmove", function (event) {
            var xMove = event.originalEvent.touches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                $(this).carousel('next');
            } else if (Math.floor(xClick - xMove) < -5) {
                $(this).carousel('prev');
            }
        });
        //stop moving
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
        });
    });
});

// Create random for promo code
function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var string_length = 6;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    var d = new Date();
    var dn = d.getDate();
    var yn = d.getYear();
    var hn = d.getHours();
    document.getElementById('appbundle_promo_code').value = dn + randomstring + hn;
}

function loadingAnimProd(elem) {
    $(elem).parent().append('<div class="loading visible-sm visible-md ok-sign"></div>');
    $(elem).parent().append('<div class="loading hidden-sm hidden-md"></div>');
}

function loadingAnimation(elem) {
    $(elem).parent().append('<div class="loading"></div>');
}

function loadingAnimation_toParent(elem) {
    $(elem).parent().parent().append('<div class="loading">...</div>');
}

function datepicker() {
    $(function () {
        $(".js-datepicker").datepicker({ dateFormat: "yy-mm-dd" });
    });
}

$(document).ready(function () {
    $('.tile')
    // tile mouse actions
    .on('mouseover', function () {
        $(this).children('.photo').css({ 'transform': 'scale(' + $(this).attr('data-scale') + ')' });
    }).on('mouseout', function () {
        $(this).children('.photo').css({ 'transform': 'scale(1)' });
    }).on('mousemove', function (e) {
        $(this).children('.photo').css({ 'transform-origin': (e.pageX - $(this).offset().left) / $(this).width() * 100 + '% ' + (e.pageY - $(this).offset().top) / $(this).height() * 100 + '%' });
    })
    // tiles set up
    .each(function () {
        $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        //                    .append('<div class="txt"><div class="x"></div>THELATINBROTHERS</div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({ 'background-image': 'url(' + $(this).attr('data-image') + ')' });
    });

    //slider product image
    $('.thumb').mouseenter(function () {
        $(".img-content").hide();
        $(".thumb").removeClass("thumb-active");
        $(this).addClass("thumb-active");
        var divID = $(this).attr('id');
        $('#img' + divID).show();
    });

    $("#nav .dropdown").hover(function () {
        $('#products-menu.dropdown-menu', this).stop(true, true).fadeIn("fast");
        $(this).toggleClass('open');
    }, function () {
        $('#products-menu.dropdown-menu', this).stop(true, true).fadeOut("fast");
        $(this).toggleClass('open');
    });
});