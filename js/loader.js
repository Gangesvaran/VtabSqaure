(function($) {
    "use strict";
    $('.tp-banner').show().revolution({
        delay: 16000,
        startwidth: 1170,
        startheight: 700,
        hideThumbs: 200,
        dottedOverlay: "none",
        hideTimerBar: "on",
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,
        navigationType: "none",
        navigationArrows: "solo",
        navigationStyle: "preview4",
        touchenabled: "on",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        fullWidth: "off",
        fullScreen: "on",
        spinner: "spinner1",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "off",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off"
    });
    $('.tp-banner-video').show().revolution({
        dottedOverlay: "none",
        delay: 9000,
        startheight: 700,
        hideTimerBar: "on",
        navigationType: "none",
        navigationStyle: "preview4",
        touchenabled: "on",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        keyboardNavigation: "on",
        fullScreen: "on",
        spinner: "spinner1",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        forceFullWidth: "off",
        fullScreenAlignForce: "off",
        minFullScreenHeight: "400",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off"
    });
    $("#quote-slider").owlCarousel({
        autoPlay: true,
        singleItem: true,
        pagination: false,
        navigation: false
    });
    $("#owl-testimonials").owlCarousel({
        autoPlay: true,
        singleItem: true,
        pagination: true,
        navigation: false,
    });
    $(document).ajaxComplete(function() {
        $("#project-slider").owlCarousel({
            autoPlay: true,
            singleItem: true,
            pagination: true,
            navigation: false,
        });
    });
    $("#owl-slider").owlCarousel({
        autoPlay: true,
        singleItem: true,
        pagination: true,
        navigation: false,
        navigationText: ['<i class="icon ion-chevron-left"></i>', '<i class="icon ion-chevron-right"></i>'],
    });
    $("#slider-features-1").owlCarousel({
        autoPlay: false,
        items: 3,
        pagination: false,
        navigation: false
    });
    $("#clients-slider-2").owlCarousel({
        autoPlay: true,
        items: 6,
        pagination: false,
        navigation: false
    });
    if (!Modernizr.touch) {
        $('#home-parallax-fullscreen').parallax("50%", 0.5);
        $('#home-parallax-fullwidth').parallax("50%", 0.5);
        $('.parallax-section-1').parallax("50%", 0.5);
        $('.parallax-section-2').parallax("50%", 0.5);
        $('.parallax-section-3').parallax("50%", 0.5);
        $('.parallax-section-4').parallax("50%", 0.5);
        $('.parallax-section-5').parallax("50%", 0.5);
        $('.parallax-section-6').parallax("50%", 0.5);
        $('.parallax-section-7').parallax("50%", 0.5);
        $('.parallax-section-8').parallax("50%", 0.5);
        $('#home-landing').parallax("50%", 0.5);
        new WOW().init();
    }
    $("#map").gmap3({
        marker: {
            address: "Avadi, Chennai",
            options: {
                icon: "assets/img/assets/marker.png"
            }
        },
        map: {
            options: {
                styles: [{
                    stylers: [{
                        "saturation": -90
                    }, {
                        "lightness": 0
                    }, {
                        "gamma": 0.0
                    }]
                }, ],
                zoom: 13,
                scrollwheel: false,
                draggable: true
            }
        }
    });
    $('.tweet').twittie({
        username: 'cdudenetworks',
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}} <div class="date">{{date}}</div>',
        count: 2,
        hideReplies: true
    });
    $('.progress-bars').waypoint(function() {
        $('.progress').each(function() {
            $(this).find('.progress-bar').animate({
                width: $(this).attr('data-percent')
            }, 800);
        });
    }, {
        offset: '100%',
        triggerOnce: true
    });
    $('.counter').counterUp({
        delay: 8,
        time: 1400
    });
    $('#video-lightbox').cubeportfolio({
        gridAdjustment: 'alignCenter',
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxShowCounter: false
    });
    $("html,body").scrollTop(0);
    $(window).scroll(function() {
        parallax();
        if ($(this).scrollTop() > 5) {
            $('nav').addClass("navbar-small")
        } else {
            $('nav').removeClass("navbar-small")
        }
        if ($(window).scrollTop() > 400) {
            $("#back-to-top").stop().animate({
                bottom: '16px'
            }, 300, 'easeInOutCubic')
        } else {
            $("#back-to-top").stop().animate({
                bottom: '-50px'
            }, 300, 'easeInOutCubic')
        }
    });
    $(window).ready(function() {
        setTimeout(function() {
            $('.loader').fadeOut('slow');
            $('#preloader').delay(350).fadeOut('slow');
        }, 5000);
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.hero').css('top', -(scrolled * 0.0515) + 'rem');
        $('.home-container').css('bottom', -(scrolled * 0.0515) + 'rem');
        $('.op-1,.op-2,.op-3').css('opacity', 1 - (scrolled * .00110));
    };
    $('.to-section a,.btn-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 54
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    $('#back-to-top,.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'easeInOutExpo');
        return false;
    });
    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();
    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('current');
                sections.removeClass('current');
                $(this).addClass('current');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('current');
            }
        });
    });

    function close_toggle() {
        if ($(window).width() <= 992) {
            $('.navbar-collapse a').on('click', function() {
                $('.navbar-collapse').collapse('hide')
            });
        } else {
            $('.navbar .navbar-default a').off('click')
        }
    }
    close_toggle();
    $(window).resize(close_toggle);
    $(".navbar-collapse").css({
        maxHeight: $(window).height() - $(".navbar-header").height() + "px"
    });
    $('#contactform').submit(function() {
        var action = $(this).attr('action');
        $("#message").slideUp(250, function() {
            $('#message').hide();
            $('#submit').after('<img src="img/assets/contact-form-loader.gif" class="loader" />').attr('disabled', 'disabled');
            $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                comments: $('#comments').val(),
            }, function(data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown(250);
                $('#contactform img.loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#contactform').slideUp(850, 'easeInOutExpo');
            });
        });
        return false;
    });
    $(document).on('ready', function() {
        $('#subscribe-form').on('submit', function(e) {
            e.preventDefault();
            var $el = $(this),
                $alert = $el.find('.form-validation'),
                $submit = $el.find('button'),
                action = $el.attr('action');
            $submit.button('loading');
            $alert.removeClass('alert-danger alert-success');
            $alert.html('');
            $.ajax({
                type: 'POST',
                url: action,
                data: $el.serialize() + '&ajax=1',
                dataType: 'JSON',
                success: function(response) {
                    if (response.status == 'error') {
                        $alert.html(response.message);
                        $alert.addClass('alert-danger').fadeIn(500);
                    } else {
                        $el.trigger('reset');
                        $alert.html(response.message);
                        $alert.addClass('alert-success').fadeIn(500);
                    }
                    $submit.button('reset');
                },
            })
        });
    });
    $(function() {
        $("[data-toggle='tooltip']").tooltip();
        $(".alert").alert()
    });
    $(function() {
        var active = true;
        $('#collapse-init').click(function() {
            if (active) {
                active = false;
                $('.panel-collapse').collapse('show');
                $('.panel-title').attr('data-toggle', '');
                $(this).text('Close All');
            } else {
                active = true;
                $('.panel-collapse').collapse('hide');
                $('.panel-title').attr('data-toggle', 'collapse');
                $(this).text('Open All');
            }
        });
        $('#accordion').on('show.bs.collapse', function() {
            if (active) $('#accordion .in').collapse('hide');
        });
    });
    $('#myTab a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    })
})(jQuery);
(function($, window, document, undefined) {
    "use strict";
    var gridContainer = $('#grid-container-fullwidth'),
        filtersContainer = $('#filters-container-fullwidth'),
        wrap, filtersCallback;
    gridContainer.cubeportfolio({
        defaultFilter: '*',
        animationType: 'slideDelay',
        gapHorizontal: 15,
        gapVertical: 15,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            var t = this;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            }).done(function(result) {
                t.updateSinglePage(result);
            }).fail(function() {
                t.updateSinglePage("Error! Please refresh the page!");
            });
        },
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {}
    });
    if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
        wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');
        wrap.on({
            'mouseover.cbp': function() {
                wrap.addClass('cbp-l-filters-dropdownWrap-open');
            },
            'mouseleave.cbp': function() {
                wrap.removeClass('cbp-l-filters-dropdownWrap-open');
            }
        });
        filtersCallback = function(me) {
            wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
            wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
            me.addClass('cbp-filter-item-active');
            wrap.trigger('mouseleave.cbp');
        };
    } else {
        filtersCallback = function(me) {
            me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
        };
    }
    filtersContainer.on('click.cbp', '.cbp-filter-item', function() {
        var me = $(this);
        if (me.hasClass('cbp-filter-item-active')) {
            return;
        }
        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            filtersCallback.call(null, me);
        }
        gridContainer.cubeportfolio('filter', me.data('filter'), function() {});
    });
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'), function() {
        var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
            item;
        if (match !== null) {
            item = filtersContainer.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
            if (item.length) {
                filtersCallback.call(null, item);
            }
        }
    });
    $('.cbp-l-loadMore-button-link').on('click.cbp', function(e) {
        e.preventDefault();
        var clicks, me = $(this),
            oMsg;
        if (me.hasClass('cbp-l-loadMore-button-stop')) {
            return;
        }
        clicks = $.data(this, 'numberOfClicks');
        clicks = (clicks) ? ++clicks : 1;
        $.data(this, 'numberOfClicks', clicks);
        oMsg = me.text();
        me.text('LOADING...');
        $.ajax({
            url: me.attr('href'),
            type: 'GET',
            dataType: 'HTML'
        }).done(function(result) {
            var items, itemsNext;
            items = $(result).filter(function() {
                return $(this).is('div' + '.cbp-loadMore-block' + clicks);
            });
            gridContainer.cubeportfolio('appendItems', items.html(), function() {
                me.text(oMsg);
                itemsNext = $(result).filter(function() {
                    return $(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
                });
                if (itemsNext.length === 0) {
                    me.text('NO MORE WORKS');
                    me.addClass('cbp-l-loadMore-button-stop');
                }
            });
        }).fail(function() {});
    });
})(jQuery, window, document);
document.addEventListener('DOMContentLoaded', function() {
    $(".typing-text").each(function() {
        var a = $('.typing-text').data("strings");
        Typed.new("#typed", {
            strings: ['^1000 Nope! ^2000 DO  your passion @ CyberDude ^1000', 'Code the future tech ^1000 today @Cyberdude ^3000'],
            typeSpeed: 50,
            startDelay: 300,
            backDelay: 50,
            loop: !0,
            loopCount: 2
        });
    });
});


$(document).ready(function() {
    $('#job-form').on('submit', function(e) {
        e.preventDefault();
        $('#job-submit').remove();
        $('#dismiss').remove();
        $("#loading-container").html('<h5 class="text-center" align="center"> <img src="img/assets/rev-loader.GIF" alt="CDN Loading" /> &nbsp; Loading . . .</h5>');
        var f_name = $('#f_name').val();
        var l_name = $('#l_name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var linkedin = $('#linkedin').val();
        var resume_file = $('#resume_file').val();
        var job_position = $("#job-position").text();
        var job_experience = $("#experience").val();
        var city = $("#city").val();
        var form = $('#job-form')[0];
        var data = new FormData(form);
        data.append("resume_file", data);
        data.append("f_name", f_name);
        data.append("l_name", l_name);
        data.append("email", email);
        data.append("phone", phone);
        data.append("linkedin", linkedin);
        data.append("job_position", job_position);
        data.append("job_experience", job_experience);
        data.append("city", city);
        $.ajax({
            url: 'resumeUpload.php',
            enctype: 'multipart/form-data',
            type: 'POST',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
        }).done(function(r) {
            $(".modal-title").html('<h4 class="modal-title">Great dude! It was a  <label class="label label-success"> Success </label></h4>');
            $("#job-form").hide("slow");
            $("#update-status").html(r);
        }).fail(function() {
            console.log("error");
        }).always(function() {
            console.log("complete");
        });
    });
});
$(document).ready(function() {
    $('.select2-me').select2();
});

$(".form-validate").length > 0 && $(".form-validate").each(function() {
    var e = $(this).attr("id");
    $("#" + e).validate({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
            $(element).closest('.form-group').addClass('has-success');
        },
        success: function(e) {
            e.addClass("valid").closest(".form-group").removeClass("has-error has-success").addClass("has-success")
        },
        errorElement: "span",
        errorClass: "help-block error hf-status",
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
});

// cyberdude Careers
$(document).ready(function() {
    
    var url = window.location + ''; //Example: http://somesite.com/page.php#div1
    if (url.substring(url.lastIndexOf('#')) == "#apply") {
        var conditions = $('#condition_readed').val();
        if (conditions == "no") {


        }

        $('#apply-job-form').show();
        $('#job-seeker-suggestion').show();
        $('html, body').animate({
            scrollTop: $("#apply-job-form").offset().top + -70
        }, 1500);
    }

   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'condition_readed') {
            if ($(this).attr('value') == 'yes') 
                { $('#apply-job-btn').removeAttr('disabled'); }
            else 
                {  $('#apply-job-form').hide(); $('#job-seeker-suggestion').hide(); $('#apply-job-btn').attr('disabled', 'disabled'); }
       }
   });

   $('#apply-job-btn').click(function() {
        // alert("Please make sure, you enter the correct required information on the job fields.");    

        window.location.hash = "apply";
      $('#apply-job-form').show();
      $('#job-seeker-suggestion').show();

      $('html, body').animate({
          scrollTop: $("#apply-job-form").offset().top + -70
      }, 1500);


   });

    if($('.datepickerx').length >0 ){
        $('.datepickerx').datepicker({
            autoclose: true
        });
    }


});


// end of cyberdude careers