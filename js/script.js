console.log('js');
$('#contactForm').hide();
$(document).ready(function(){
  // $('body').click(function(){
  //   alert('body clicked');
  // });
  $('#contact').click(function(){
    $('#contactForm').show();
    $('#homeSection').hide();
  });
  $('#home').click(function(){
    $('#contactForm').hide();
    $('#homeSection').show();
  });
});
