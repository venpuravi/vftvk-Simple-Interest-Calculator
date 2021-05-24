function compute()
{ // get values, basic validation and result publish
    if(!checkInputValidity()){
        return;
    }
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var mature=+principal + +interest; 
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("pdisplay").innerText = principal;
    document.getElementById("rdisplay").innerText = rate;
    document.getElementById("idisplay").innerText = interest;
    document.getElementById("ydisplay").innerText = year;

    document.getElementById("result").style.visibility="visible";
}


function updateRateView(){ //update the view on setting the rate slider
  var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}  
function checkInputValidity(){ // function to check principal amount to be empty,0 or negative
    var principal = document.getElementById("principal").value;
    //if(principal)
    if(principal<=0){
        document.getElementById("principal").focus();
        window.alert("Enter a positive number");
        
        return false;
    }
    return true;
}


        