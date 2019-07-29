$( document ).ready(function() {
    $('body').scrollspy({ target: '#main-navbar' })

    const configuration = {
      useEasing: true,
      duration: 4
    }

    const employees = new CountUp('employees-count', 2990000, configuration);
    const benefits = new CountUp('benefits-count', 2989530000, configuration);
    const claims = new CountUp('claims-count', 111604, configuration);

    employees.start();
    benefits.start();
    claims.start();
    
    $('#slider_1').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items: 1,
        autoplay: true
    })
    $('#test-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items: 1,
        autoplay: true
    })

    $("#contactForm").submit(function(e){

        e.preventDefault();
        var $ = jQuery;

        var postData        = $(this).serializeArray(),
            formURL         = $(this).attr("action"),
            $cfResponse     = $('#contactFormResponse'),
            $cfsubmit       = $("#cfsubmit"),
            cfsubmitText    = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data)
                {
                    $cfResponse.html(data);
                    $cfsubmit.text(cfsubmitText);
                },
                error: function(data)
                {
                    alert("Error occurd! Please try again");
                }
            });

        return false;

    });
});
/*------------------------------------------
 Subscribe form ajax
 ------------------------------------------*/


$('#subscription-form').submit(function(e) {

    e.preventDefault();
    var $form           = $('#subscription-form');
    var submit          = $('#subscribe-button');
    var ajaxResponse    = $('#subscription-response');
    var email           = $('#subscriber-email').val();

    $.ajax({
        type: 'POST',
        url: 'php/subscribe.php',
        dataType: 'json',
        data: {
            email: email
        },
        cache: false,
        beforeSend: function(result) {
            submit.html("Working...");
        },
        success: function(result) {
            if(result.sendstatus == 1) {
                ajaxResponse.html(result.message);
                $form.fadeOut(500);
            } else {
                ajaxResponse.html(result.message);
                submit.html('<i class="ion-heart"></i> Get it');
            }
        },
        error: function(){
            submit.html('<i class="ion-heart"></i> Get it');
        }
    });

});