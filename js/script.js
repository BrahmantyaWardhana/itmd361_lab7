function init(){
//add your javascript between these two lines of code
  var button = document.getElementById('entrybutton');
  
  function alertText(){
    var textbook = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Brahmantya B. Wardhana " + textbox.value);
  }

  button.addEventListener('click', alertText);
  }
  
window.addEventListener('load', init);
