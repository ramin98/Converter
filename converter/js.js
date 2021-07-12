function dollars(){
    var rub = Number(document.getElementById("from-rub").value);
    var dol = 0.0134
    var result = document.getElementById("sum")
    result.innerHTML = rub * dol
}
function euro(){
    var rub = Number(document.getElementById("from-rub").value);
    var euros = 0.0113
    var result = document.getElementById("sum")
    result.innerHTML = rub * euros
  }