/** @format */

$(document).ready(function () {
  const input = document.querySelector("#countrycode");
  window.intlTelInput(input, {
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@23.6.1/build/js/utils.js",
    initialCountry: "SA",
  });
  window.setInterval("reloadIFrame();", 30000);
  function reloadIFrame() {
    document.getElementById("video-iframe").src =
      "https://www.youtube.com/embed/OiyAzP9PotM?autoplay=1&loop=1&mute=1&controls=0&playlist=OiyAzP9PotM";
  }
  $(".countrycode .iti__country").click(function () {
    $("#countrycode").val($(this).attr("data-dial-code"));
  });
  $.validator.addMethod(
    "phonefield",
    function (value, element) {
      return this.optional(element) || /^([0-9]{7,})$/i.test(value);
    },
    "Invalid phone number"
  );
  $.validator.addMethod(
    "email",
    function (value, element) {
      return (
        this.optional(element) ||
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)
      );
    },
    "Invalid email address"
  );
  $.validator.addMethod(
    "atLeastOneChecked",
    function (value, element) {
      return $('input[name="interestedoptions"]:checked').length > 0;
    },
    "Please select at least one option"
  );
  $.validator.addMethod(
    "atLeastOneChecked1",
    function(value,element){
      return $('input[name="marketingpermission"]:checked').length>0;
    },
    "Please select at least one option"
  )
  $("#trojena-form").validate({
    ignore: ".ignore",
    errorElement: "span",
    rules: {
      fname: {
        required: true,
        minlength: 2,
        maxlength: 100,
        // namefield: true,
      },
      lname: {
        required: true,
        minlength: 2,
        maxlength: 100,
        // namefield: true,
      },
      phone: {
        required: true,
        minlength: 7,
        maxlength: 14,
        phonefield: true,
      },
      email: {
        required: true,
        minlength: 2,
        maxlength: 100,
        email: true,
      },
      interestedoptions: {
        atLeastOneChecked: true,
      },
      marketingpermission:{
        atLeastOneChecked1:true,
      },
    },
    errorPlacement: function (error, element) {
      error.appendTo($(element).parent());
    },
    messages: {
      fname: {
        required: "This field is required",
        // namefield: "Please enter valid characters"
      },
      phone: {
        required: "This field is required",
        phonefield: "Please enter valid number",
      },
      lname: {
        required: "This field is required",
        // phonefield: "Please enter valid number"
      },
      email: {
        required: "This field is required",
        email: "Please enter valid email",
      },
      interestedoptions: {
        atLeastOneChecked: "Please select at least one option",
      },
      marketingpermission:{
        atLeastOneChecked1:"Please select at least one option"
      },
    },
    submitHandler: function () {
      // alert("SUccess")
      // $(".submission-wrap").addClass('show');
      // $('#contactForm')[0].reset();
      // $('.error').remove();
      //   console.log($("#fname").val());
      //   console.log($("#lname").val());
      //   console.log($("#countrycode").val());
      //   console.log($("#phone").val());
      //   console.log($("#email").val());
      return true;
    },
  });
});
