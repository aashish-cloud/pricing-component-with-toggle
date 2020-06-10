const cb = document.querySelector("#checkbox");

cb.addEventListener("change" , function() {
  if(cb.checked) {
    var hidePriceArray = document.querySelectorAll(".price-monthly");
    var showPriceArray = document.querySelectorAll(".price-annually");
    for(var i = 0; i < showPriceArray.length; i++){
      hidePriceArray[i].style.display = "none";
      showPriceArray[i].style.display = "block";
    }
  } else {
    var hidePriceArray = document.querySelectorAll(".price-annually");
    var showPriceArray = document.querySelectorAll(".price-monthly");
    for(var i = 0; i < showPriceArray.length; i++){
      hidePriceArray[i].style.display = "none";
      showPriceArray[i].style.display = "block";
    }
  }
});
