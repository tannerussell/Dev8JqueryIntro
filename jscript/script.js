$('#content').hide().fadeIn(3000); 
$(document).ready(function () {  
function resetPage(event) {
  var signData = ['greeting', 'userSign',
      'tiles', 'subTotal', 'shipping',
      'grandTotal'];
     
  for (var i=0; i<signData.length; i++) {
      setTextContentById(signData[i], '');
    
  }
  event.preventDefault();
}


// Create variables for the welcome message
var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome;
var sign = '[not initialized]';
var tiles, subTotal, shipping, grandTotal;

function calcSign() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function initiateVars() {
  greeting = 'Howdy';
  name = 'Tanner';
  message = 'Please check your order:';
  sign = 'JavaScript';
  welcome = greeting + "! " + name + ", " + message;
  calcSign();
}
function setTextContentById(getId, setMsg) {
  var el = document.getElementById(getId);
  // Replace the content with a personalized welcome message
  el.textContent = setMsg;
}

function setSign() {
  setTextContentById('greeting', welcome);
  setTextContentById('userSign', sign);
  setTextContentById('tiles', tiles);
  setTextContentById('subTotal', '$' + subTotal);
  setTextContentById('shipping', '$' + shipping);
  setTextContentById('grandTotal', '$' + grandTotal);
}

(function () {
  initiateVars();
  setSign();
})();


var el = document.getElementById('resetButton');

el.addEventListener('click', resetPage, false);
    
})