$(function() {
  $('.contact-form').validate({
    errorClass:'form-error',
    rules: {
      name: {
        required: true,
        minlength: '3'
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: '8'
      }
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Your name its that short?... really?"
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      message: {
        required: "Really... write your message",
        minlength: "C'mon, you can do better than that"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/info@kaizendevs.com ",
        type: "POST",
        data: $('.contact-form').serialize(),
        success: function() {
          window.location.href = 'success-contact.html';
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    }
  })

  $('.project-form').validate({

    errorPlacement: function(error, element) {
    if (element.attr("name") == "project_type" ){
        error.insertAfter(".project-type");
    }
    else if  (element.attr("name") == "phone" ){
        error.insertAfter(".some-other-class");
        }
    else
        error.insertAfter(element);
    },


    errorClass:'form-error',
    rules: {
      name: {
        required: true,
        minlength: '3'
      },
      email: {
        required: true,
        email: true
      },
      organization: {
        required: true,
        minlength: '2'
      },
       project_type: {
        required: true

      }
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Your name its that short?... really?"
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      organization: {
        required: "Please write the company name",
        minlength: "C'mon, you can do better than that"
      },
       project_type: {
        required: "Please select at least one type of project"

      }
    },
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/info@kaizendevs.com ",
        type: "POST",
        data: $('.project-form').serialize(),
        success: function() {
          window.location.href = 'success-project.html';
        },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    }
  })

  $('.close-notifications').on('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });

  $('.notifications .wrapp-center button').on('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
        console.log('clicked');
    });

  var checkBoxNameGetter  = window.location.href.split("?checkbox=")[1];

  preselectCheckBox = function(checkBoxName){
    $("input[value='"+ checkBoxName + "']").prop('checked', true).parent().addClass('active');
  }
    preselectCheckBox(checkBoxNameGetter);


});
