$(document).ready(function() {

    //stopPropagation//
    $(document).on('click', '.stop-prop', function(e) {
        e.stopPropagation()
    });

    //Footer click event to scroll to top
    $('#scroll-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 880);
        return false;
    });


    //Switch Style//
    $("#switch-boxed").click(function() {
        $("body").addClass("container").addClass("body-boxed");
    });


    $("#switch-boxed").click(function() {
        $(".navbar-fixed-top").addClass("container").addClass("nav-boxed");
    });

    $("#switch-wide").click(function() {
        $("body").removeClass("container").removeClass("body-boxed");
    });

    $("#switch-reset").click(function() {
        $("body").removeClass("container").removeClass("body-boxed");
        $("#nav").removeClass("container").removeClass("nav-boxed");

    });


    //Search Box//
    var wrapperAll = $('.wrapper-search-all');
    var searchBox = $('.form-searchbox');
    var inputBox = $('.input-searchbox');
    var submitIcon = $('.icon-searchbox');
    var isOpen = false;
    submitIcon.click(function() {
        if (isOpen == false) {
            wrapperAll.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            wrapperAll.removeClass('searchbox-open');
            inputBox.val('');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function() {
        return false;
    });
    searchBox.mouseup(function() {
        return false;
    });
    $(document).mouseup(function() {
        if (isOpen == true) {
            $('.icon-searchbox').css('display', 'block');
            submitIcon.click();
        }
    });


    //Accordion//
    $('.panel-acc .panel-heading a[data-toggle="collapse"], .accordion-group .accordion-heading a[data-toggle="collapse"]').on('click', function() {
        $(this).removeClass('acc-on');
        $(this).addClass('acc-on');
    });

});

//Search Box//
function buttonUp() {
    var inputVal = $('.input-searchbox').val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
        $('.icon-searchbox').css('display', 'none');
    } else {
        $('.input-searchbox').val('');
        $('.icon-searchbox').css('display', 'block');
    }
}
