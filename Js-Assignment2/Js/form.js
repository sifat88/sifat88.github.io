/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction() {
  if(document.getElementById('same').checked){

    var one = document.getElementById('shippingName').value;
    var two = document.getElementById('shippingZip').value;

    document.getElementById('billingName').value = one;
    document.getElementById('billingZip').value = two;

  }else{

    document.getElementById('billingName').value = "";
    document.getElementById('billingZip').value = "";

  }
}