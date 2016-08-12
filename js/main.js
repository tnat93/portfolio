$(window).load(function() {
    "use strict";
    // Parallax Effect
    (function() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        } else {
            $(window).stellar({
                horizontalScrolling: false,
                responsive: true,
            });
        }
    }());
});

$(document).ready(function() {
  // Sticky Menu
    $(".header-area").sticky({
        topSpacing: 0
    });

  // Responsive Menu
  $("ul.nav.navbar-nav li a").click(function() {
      $(".navbar-collapse").removeClass("in");
  });

  $(".loves").typed({
      strings: ["science^100", "adventures^100", "programming^100", "coffee^100", "low-level designing^100"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
  });

  $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

  $('#contactForm').submit(function(e) {
        e.preventDefault();

        var $btn = $('#form-button').button('loading');
        $.ajax({
                url: 'send_email/',
                type: 'POST',
                dataType: 'json',
                data: {
                    'name': $('#name').val(),
                    'email': $('#email').val(),
                    'subject': $('#subject').val(),
                    'message': $('#message').val()
                },
                success: function(response) {
                    Msg.show('Thanks for the message ' + $('#name').val() + '!', 'success', 2000);
                    $btn.button('reset');
                    $('#contactForm').trigger('reset');
                    console.log("SUCCESS");
                }
            }
        );
        return false;
    });
});
