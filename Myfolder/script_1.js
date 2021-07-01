function incrementCount(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  function decrementCount(){
    var value = parseInt(document.getElementById('number').value, 0);
    value = isNaN(value) ? 10 : value;
    value--;
    document.getElementById('number').value = value;
  }
  function resetCount(){
    var value = parseInt(document.getElementById('number').value, 0);
    value = isNaN(value) ? 0 : value;
    value = 0;
    document.getElementById('number').value = value;}
    var color = ["red", "green"]
    if ("value" > 3){
      color = "red";  }
      else if ("value" < 1){
        color = "green";
      }