/*function openUser() {
	$('header').css({ 'border': 'none' });
	$('header').find('.login, .authorized').show();
	$('header').find('.container').css({ 'height': 'auto' });
	$('header').find('.search').hide();

	$('.userButton').find('.open').hide();
	$('.userButton').find('.close').show();
}

function closeUser() {
	$('.userButton').find('.open').show();
	$('.userButton').find('.close').hide();

	$('header').css({ 'border-bottom': '1px solid #eaecf0' });
	$('header').find('.login, .authorized').hide();
	$('header').find('.container').css({ 'height': '100px' });
	$('header').find('.search').show();
}
*/


/*  $('.userButton').on('click', '.open', function() {
    $('header').css({
      'border': 'none' });
  	$('header').find('.login, .authorized').show();
  	$('header').find('.container').css({
  		'height': 'auto' });
  	$('header').find('.search').hide();

  	$('.userButton').find('.open').hide();
  	$('.userButton').find('.close').show();
  });

  $('.userButton').on('click', '.close', function() {
  	$('.userButton').find('.open').show();
  	$('.userButton').find('.close').hide();

    $('header').css({
      'border-bottom': '1px solid #eaecf0' });
  	$('header').find('.login, .authorized').hide();
  	$('header').find('.container').css({
  		'height': '100px' });
  	$('header').find('.search').show();
  });
*/
function clickLogin(myOpen) {
    if (document.getElementsByTagName('header').length) {
        var obj = document.getElementsByTagName('header')[0];
        var obj2=document.getElementsByClassName('userButton');
        if (!myOpen && obj2.length) {
            obj2[0].getElementsByClassName('open').length && (obj2[0].getElementsByClassName('open')[0].style.display=myOpen?'none':'block');
            obj2[0].getElementsByClassName('close').length && (obj2[0].getElementsByClassName('close')[0].style.display=myOpen?'block':'none');
        }
        myOpen ? (obj.style.border='none') : (obj.style.borderBottom='1px solid #eaecf0');
        ['login','authorized'].forEach(function(val) { obj.getElementsByClassName(val).length && (obj.getElementsByClassName(val)[0].style.display=myOpen?'block':'none'); });
        obj.getElementsByClassName('container').length && (obj.getElementsByClassName('container')[0].style.height=myOpen?'auto':'auto');
        obj.getElementsByClassName('search').length && (obj.getElementsByClassName('search')[0].style.display=myOpen?'none':'flex');
        if (myOpen && obj2.length) {
            obj2[0].getElementsByClassName('open').length && (obj2[0].getElementsByClassName('open')[0].style.display=myOpen?'none':'block');
            obj2[0].getElementsByClassName('close').length && (obj2[0].getElementsByClassName('close')[0].style.display=myOpen?'block':'none');
        }
    }
}
$(function() {
  $('#popUpLimit').on('click', '.close', function() {
    $('#popUpLimit, #balanceZero').fadeOut(600);
  });

  $('#sentContactUsForm').on('click', formSumitButtonHandler);

  function formSumitButtonHandler(e) {

    var contactUsForm = $( "#sentContactUsForm" );

        var firstName = $('#fName').val();
        var lastName = $('#lName').val();
        var email = $('#eMail').val();
        var phone = $('#phone').val();
        var message = $('#message').val();

        if ( ! contactUsForm[0].checkValidity() ) {

            var formData = {
                'firstName': $('#fName').val(),
                'lastName': $('#lName').val(),
                'email': $('#eMail').val(),
                'phone': $('#phone').val(),
                'message': $('#message').val()
            };

            $.ajax({
                type: 'POST',
                url: 'c/contact_form',
                data: formData,
                success: function(data, textStatus, jQxhr) {

                    $('#contactUsForm')[0].reset($(function() {

                        setTimeout(function() {
                            $('#success').fadeIn(500);
                        }, 400);

                        setTimeout(function() {
                            $('#success').fadeOut(500);
                        }, 5000);

                    }));

                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {

                    $('#contactUsForm')[0].reset($(function() {

                        setTimeout(function() {
                            $('#error').fadeIn(500);
                        }, 400);

                        setTimeout(function() {
                            $('#error').fadeOut(500);
                        }, 5000);

                    }));
                    
                }
                
            })

            e.preventDefault();

        } 

    }

});
