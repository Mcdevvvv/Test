function total(){
    let sub1 = parseInt(document.getElementById("1").value);
    let sub2 = parseInt(document.getElementById("2").value);
    let sub3 = parseInt(document.getElementById("3").value);
    let sub4 = parseInt(document.getElementById("4").value);
    let sub5 = parseInt(document.getElementById("5").value);
    let sub6 = parseInt(document.getElementById("6").value);
    let sub7 = parseInt(document.getElementById("7").value);
    let sub8 = parseInt(document.getElementById("8").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub6>100 || sub7>100 || sub8>100){
        alert("Please Enter Marks Under 100")
    }
    else{
        let total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8;
        document.getElementById("total").innerHTML = "P-RESEACH:   "+sub1+" <br> R&W:  "+sub2+"<br> S-PROBABILITY:  "+sub3+"<br> P-SCIENCE:  "+sub4+"<br> PER-DEV :  "+sub5+"<br> P.E :  "+sub6+"<br> E-TECH :  "+sub7+"<br> CSS :  "+sub8+"<br>_____________________<br> Total Marks:   "+total;
    }
}

function Average(){
    let sub1 = parseInt(document.getElementById("1").value);
    let sub2 = parseInt(document.getElementById("2").value);
    let sub3 = parseInt(document.getElementById("3").value);
    let sub4 = parseInt(document.getElementById("4").value);
    let sub5 = parseInt(document.getElementById("5").value);
    let sub6 = parseInt(document.getElementById("6").value);
    let sub7 = parseInt(document.getElementById("7").value);
    let sub8 = parseInt(document.getElementById("8").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub6>100 || sub7>100 || sub8>100){
        alert("Please Enter Marks Under 100")
    }
    else{
        let total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8;
        let Ave=total/8;
        document.getElementById("ave").innerHTML = "Your Average Marks is :"+Ave;
    }
}


