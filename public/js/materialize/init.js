(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider({});
    $('.carousel').carousel();
    $('.datepicker').pickadate({
       selectMonths: false, // Creates a dropdown to control month
       selectYears: 1 // Creates a dropdown of 15 years to control year
     });

  }); // end of document ready
})(jQuery); // end of jQuery name space
