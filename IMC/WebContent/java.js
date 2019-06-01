
function calcularImc() {
	
	
	if(altura.value==""){
		erro.innerHTML ="prencha a altura";
		return false;
	}else if(peso.value==""){
		erro.innerHTML ="prencha o peso"
			return false;
	}else{
		var a = parseFloat(altura.value);
		var p = parseFloat(peso.value);
		
		 var imc = p/ (a*a);
		
		 resp.innerHTML = "Calculo do imc"+ " " +imc;
	}
	
	
}

function validarNumero(tag) {
	var valor = parseFloat(tag.value);
	if(valor<1.00){
		alert("Valor invalido");
		tag.focus();
		
		return true ;
		
		
	}
	
}