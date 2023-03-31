window.onload = iniciar;

function iniciar() {
    let btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular() {
    let txtPeso = document.getElementById("txtPeso");
    let peso = txtPeso.value;

    let txtAltura = document.getElementById("txtAltura");
    let altura = txtAltura.value;

    let imc = peso / (altura * altura);
   
    alert("Su indice de masa corporal es: " + Math.round(imc));
    
    if (imc < 25) {
        alert ("Su peso es normal");
    } else if (imc > 25 && imc <= 30) {
        alert ("Tienes sobrepeso");
    } else if (imc > 30 && imc <= 40) {
        alert ("Tienes Obesidad");
    } else if (imc > 40) {
        alert ("Estas super Obeso EXTREMO, :P");
    }

    // const mostrarResulta = document.getElementById('mostrarResult');
  	// mostrarResulta.innerHTML = "Su índice de masa corporal es: " + Math.round(imc);
}



