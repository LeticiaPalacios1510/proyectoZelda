var start = function(){
	if (keyIsDown('69')) {

		// console.log('pepe');
		if(vista==1)MovimientoEspada(0);	
		else if(vista==2)MovimientoEspada(7);
		else if(vista == 3)MovimientoEspada(14);
		else if(vista == 4)MovimientoEspada(21);
		else espadazo=0;

		ataque = true;
		var deleteMonster = ataqueEfectivo();
		if(numeroEscenario ==1){
			if (deleteMonster != null) {
				EnemigosSpider[deleteMonster].status = 0;
		 
			}	 
		}

		if(numeroEscenario == 2){
				if (deleteMonster != null) {
				 EnemigosNaranjas[deleteMonster].status = 0;
				}
			}
		if(numeroEscenario == 3){
				if (deleteMonster != null) {
				 EnemigosFantasmas[deleteMonster].status = 0;
				}
			}
		
		}
	

	if (keyIsDown('81')) {

		if(vista==1)MovimientoArco(28);	 //derecha
		else if(vista==2)MovimientoArco(35); //izquierda
		else if(vista == 3)MovimientoArco(49); //arriba
		else if(vista == 4)MovimientoArco(42); //abajo
		else flechazo=0;

		ataque = true;
	
	}


}


var pintarSprints = function(tam){

	var caseOfNumber=0;
	for(var i=tam ;  i<=tam+9;i++){
		auxArray[caseOfNumber]=i;
		caseOfNumber++;
	}

	switch(face){
			case 0:
				positionSprite = auxArray[0];
				face=1;
			break;
			case 1:
				positionSprite = auxArray[1];
				face=2;
			break;
			case 2:
				positionSprite = auxArray[2];
				face=3;
			break;
			case 3:
				positionSprite = auxArray[3];
				face=4;
			break;
			case 4:
				positionSprite = auxArray[4];
				face=5;
			break;
			case 5:
				positionSprite = auxArray[5];
				face=6;
			break;
			case 6:
				positionSprite = auxArray[6];
				face=7;
			break;
			case 7:
				positionSprite = auxArray[7];
				face=8;
			break;
			case 8:
				positionSprite = auxArray[8];
				face=9;
			break;
			case 9:
				positionSprite = auxArray[9];
				face=0;
			break;
		}
}


var MovimientoEspada = function(anim){//animacion de la espada
	var sword=0;
	for (var i=anim; i<=anim+6 ;i++){
		animacionEspada[sword]=i;
		sword++;
	}

	switch(espadazo){
		case 0:
			positionAttack=animacionEspada[0];
			espadazo=1;
		break;
		case 1:
			positionAttack=animacionEspada[1];
			espadazo=2;
		break;
		case 2:
			positionAttack=animacionEspada[2];
			espadazo=3;
		case 3:
			positionAttack=animacionEspada[3];
			espadazo=4;
		break;
		case 4:
			positionAttack=animacionEspada[4];
			espadazo=5;
		break;
		case 5:
			positionAttack=animacionEspada[5];
			espadazo=6;
		break;
		case 6:
			positionAttack=animacionEspada[6];
			espadazo=0;
		break;
	}
}