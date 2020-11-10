$(document).ready(function() {
  $('#triangle-checker-form').submit(function(event)  {
    event.preventDefault();
    const length1 = $('#length1').val();
    const length2 = $('#length2').val();
    const length3 = $('#length3').val();
    const triangle = new Triangle.checkType();
    $('#response').append("p" + response + "</P>");
  });
});










