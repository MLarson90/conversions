//background logic:
var temp = function(number1){
  return number1 * 5/9 +32;
};
var tablespoon = function(number1){
  return number1 *3;
};
var gallon = function(number1){
  return number1 * 4;
};
var chocolate = function(number1){
  return number1 *6;
};
//frontround logic:
$(document).ready(function(){
  $('#conversionChart1').submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($('#celcius').val());
    var result = temp(number1);
    $('#answer1').text(result);
  });
  $('#conversionChart2').submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($('#tblsp').val());
    var result = tablespoon(number1);
    $('#answer2').text(result);
  });
  $('#conversionChart3').submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($('#gallon').val());
    var result = gallon(number1);
    $('#answer3').text(result);
  });
  $('#conversionChart4').submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($('#choc').val());
    var result = chocolate(number1);
    $('#answer4').text(result);
  });
});
