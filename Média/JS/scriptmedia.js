$(document).keypress(function(e){ if (e.which == 13) $('btncalcular'). click();
	});
		$('button'). click(function(e) {
			alert(this.innerHTML);
	});

		function mediatot(){
			var nota1=parseInt(document.getElementById('txtnota1').value);
			var nota2=parseInt(document.getElementById('txtnota2').value);
			media= (nota1 + nota2) / 2;
			document.frmcalcmedia.txtmedia.value= media;
			
			if ((nota1 <0)||(nota1>10)) {document.getElementById('txtmedia').value= '1ª nota inválida';
			document.getElementById('txtconceito').null};
			if ((nota2 <0)||(nota2>10)) {document.getElementById('txtmedia').value= '2ª Nota inválida';
			document.getElementById('txtconceito').clear};
	}

		function conceito(){
			if ((media >= 0) && (media<=4,99)) {document.getElementById('txtconceito').value= 'IN'};
			if ((media >= 5) && (media<=6,99)) {document.getElementById('txtconceito').value= 'R'};
			if ((media >= 7) && (media<=8,99)) {document.getElementById('txtconceito').value= 'B'};
			if ((media >= 9) && (media<=10)) {document.getElementById('txtconceito').value= 'MB'};
	}

		function calculo(){
			mediatot();
			conceito();
		}

		function cancelar(){
			var btn = document.querySelector("#btncancelar");
			btn.addEventListener("click", function() {
    		location.reload();});
			document.getElementById('txtnumero').focus();}