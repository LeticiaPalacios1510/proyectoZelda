
var MovimientoArco = function(anim){//animacion de la espada
	frameRate(8);
	var arco=0;
	for (var i=anim; i<=anim+6 ;i++){
		animacionArco[arco]=i;
		arco++;
	}

	switch(flechazo){
		case 0:
			positionAttack=animacionArco[0];
			flechazo=1;
		break;
		case 1:
			positionAttack=animacionArco[1];
			flechazo=2;
		break;
		case 2:
			positionAttack=animacionArco[2];
			flechazo=3;
		case 3:
			positionAttack=animacionArco[3];
			flechazo=4;
		break;
		case 4:
			flechazo=animacionArco[4];
			flechazo=5;
		break;
		case 5:
			positionAttack=animacionArco[5];
			flechazo=6;
		break;
		case 6:
			positionAttack=animacionArco[6];
			flechazo=0;

			flecha();
		break;
	}
}



function moverEnemigoNaranja() {
	// frameRate(10);

	for (var i = 0; i < EnemigosNaranjas.length; i++) {
		switch(contNar){
			case 0:
				if(EnemigosNaranjas[i].direccion == 'derecha')
					positionNaranja = 4 ;
				else if(EnemigosNaranjas[i].direccion == 'izquierda')
					positionNaranja = 6;
				else if(EnemigosNaranjas[i].direccion == 'arriba')
					positionNaranja = 0;
				else if(EnemigosNaranjas[i].direccion == 'abajo')
					positionNaranja = 2;
				contNar++;
			break;
			case 1:
				if(EnemigosNaranjas[i].direccion == 'derecha')
					positionNaranja = 4 ;
				else if(EnemigosNaranjas[i].direccion == 'izquierda')
					positionNaranja = 6;
				else if(EnemigosNaranjas[i].direccion == 'arriba')
					positionNaranja = 0;
				else if(EnemigosNaranjas[i].direccion == 'abajo')
					positionNaranja = 2;
				contNar++;
			break;
			case 2:
				if(EnemigosNaranjas[i].direccion == 'derecha')
					positionNaranja = 5 ;
				else if(EnemigosNaranjas[i].direccion == 'izquierda')
					positionNaranja = 7;
				else if(EnemigosNaranjas[i].direccion == 'arriba')
					positionNaranja = 1;
				else if(EnemigosNaranjas[i].direccion == 'abajo')
					positionNaranja = 3;
				contNar++;
			break;
			case 3:
				if(EnemigosNaranjas[i].direccion == 'derecha')
					positionNaranja = 5 ;
				else if(EnemigosNaranjas[i].direccion == 'izquierda')
					positionNaranja = 7;
				else if(EnemigosNaranjas[i].direccion == 'arriba')
					positionNaranja = 1;
				else if(EnemigosNaranjas[i].direccion == 'abajo')
					positionNaranja = 3;
				contNar=0;
			break;
		}
			// naranjaX+=3;

		EnemigosNaranjas[i].positionImage = positionNaranja;


		if (EnemigosNaranjas[i].x >= EnemigosNaranjas[i].draw().finPatron && EnemigosNaranjas[i].direccion == 'derecha') {
			EnemigosNaranjas[i].direccion ='izquierda';
			/*console.log(EnemigosNaranjas[i].direccion);*/
		}
		else if (EnemigosNaranjas[i].x <= EnemigosNaranjas[i].draw().comienzaPatron && EnemigosNaranjas[i].direccion == 'izquierda') {
			EnemigosNaranjas[i].direccion ='derecha';
			/*console.log(EnemigosNaranjas[i].direccion);*/
		}
		else if (EnemigosNaranjas[i].y >= EnemigosNaranjas[i].draw().finPatron && EnemigosNaranjas[i].direccion == 'abajo') {
			EnemigosNaranjas[i].direccion ='arriba';
			
		}
		else if (EnemigosNaranjas[i].y <= EnemigosNaranjas[i].draw().comienzaPatron && EnemigosNaranjas[i].direccion == 'arriba') {
			EnemigosNaranjas[i].direccion ='abajo';		
		}

		if(EnemigosNaranjas[i].direccion == 'izquierda'){
			/*naranjaX-=3;*/
			EnemigosNaranjas[i].x = EnemigosNaranjas[i].x-3;

		}else if(EnemigosNaranjas[i].direccion == 'derecha'){
			/*naranjaX+=3;*/
			EnemigosNaranjas[i].x += 3;
		}else if(EnemigosNaranjas[i].direccion == 'abajo'){
			/*naranjaX+=3;*/
			EnemigosNaranjas[i].y += 2;
		}else if(EnemigosNaranjas[i].direccion == 'arriba'){
			/*naranjaX+=3;*/
			EnemigosNaranjas[i].y -= 2;
		}
	}
}


function mueveAtaque(){
	var distanciaAerea = 0, alcanceAereo = 0;

	if(numeroEscenario == 4){
		for (var i = 0; i < Fuego.length; i++) {
		
			if (Fuego[i].status == 1) {
				if (Fuego[i].draw().linkX <= Fuego[i].draw().x ) 
				Fuego[i].linkX -= 10; 

			}	
		//console.log(link.draw().x+coordx)
		distanciaAerea = Math.abs((link.draw().x+coordx)-(Fuego[i].linkX));
		alcanceAtaque = Math.abs((link.draw().y+coordy)-Fuego[i].linkY);

		if (alcanceAtaque <= 10 &&  distanciaAerea < 28 && distanciaAerea > 0) {
				Fuego[i].status = 0;
				banderaMuerte = true;

		}


		}

		for (var i = 0; i < Flechas.length; i++) {
		
		if (Flechas[i].status == 1) {
			var distanciaAerea = 0, alcanceAereo = 0;

			if(Flechas[i].direccion=='arriba'){
				if (Flechas[i].draw().linkX <= Flechas[i].draw().x ) 
				Flechas[i].linkY -= 10; 
			}
			else if(Flechas[i].direccion=='derecha'){		
				if (Flechas[i].draw().linkX <= Flechas[i].draw().x ) 
				Flechas[i].linkX += 10; 
			} else if(Flechas[i].direccion=='izquierda'){
				if (Flechas[i].draw().linkX <= Flechas[i].draw().x ) 
				Flechas[i].linkX -= 10; 
			}else if(Flechas[i].direccion=='abajo'){
					if (Flechas[i].draw().linkX <= Flechas[i].draw().x ) 
				Flechas[i].linkY += 10; 
			}
	
	
			//	console.log("Dragonsini: "+ dragon.y);
			
			distanciaAerea = dragon.x - (Flechas[i].linkX);
			alcanceAereo = Math.abs(Flechas[i].linkY-(dragon.y));


				console.log("Distnacia Aerea: " + distanciaAerea);
				console.log("alcanceAereo: "+ alcanceAereo);

			if ( alcanceAereo <= 50 && distanciaAerea<20 && distanciaAerea>0) {
				console.log("pego DRAGON");
				Flechas[i].status = 0;
				golpeDragon ++;
				
			}
			if(golpeDragon>=5){
					dragon.status = 0;
					acaboJuego = true;
			}
				
}
}
}

	for (var i = 0; i < Flechas.length; i++) {
		
		if (Flechas[i].status == 1) {

			if(Flechas[i].direccion=='arriba'){
				if (Flechas[i].draw().linkX <= Flechas[i].draw().x ) 
				Flechas[i].linkY -= 10; 
			}
			else if(Flechas[i].direccion=='derecha'){		
				if (Flechas[i].draw().linkX <= Flechas[i].draw().x ) 
				Flechas[i].linkX += 10; 
			} else if(Flechas[i].direccion=='izquierda'){
				if (Flechas[i].draw().linkX <= Flechas[i].draw().x ) 
				Flechas[i].linkX -= 10; 
			}else if(Flechas[i].direccion=='abajo'){
					if (Flechas[i].draw().linkX <= Flechas[i].draw().x ) 
				Flechas[i].linkY += 10; 
			}
	if(numeroEscenario == 2){
			for (var j = 0; j < EnemigosNaranjas.length; j++) {
				if(Flechas[i].direccion == 'arriba'){
					distanciaAerea =  (Flechas[i].linkY) - EnemigosNaranjas[j].y;
					alcanceAereo = Math.abs(Flechas[i].linkX - (EnemigosNaranjas[j].x));
					
					if (alcanceAereo <= 40 && distanciaAerea<20 && distanciaAerea>0) {
						EnemigosNaranjas[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}else if(Flechas[i].direccion == 'derecha'){
					distanciaAerea = EnemigosNaranjas[j].x - (Flechas[i].linkX);
					alcanceAereo = Math.abs(Flechas[i].linkY-(EnemigosNaranjas[j].y));

					if (alcanceAereo <= 40 && distanciaAerea<20 && distanciaAerea>0) {
						EnemigosNaranjas[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}else if(Flechas[i].direccion == 'abajo'){
					distanciaAerea = EnemigosNaranjas[j].y - (Flechas[i].linkY);
					alcanceAereo = Math.abs(Flechas[i].linkX - (EnemigosNaranjas[j].x));

					if (alcanceAereo <=40 &&  distanciaAerea < 20 && distanciaAerea > 0) {
						EnemigosNaranjas[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}else if(Flechas[i].direccion == 'izquierda'){
					distanciaAerea = Math.abs((Flechas[i].linkX)-EnemigosNaranjas[j].x);
					alcanceAtaque = Math.abs(Flechas[i].linkY-(EnemigosNaranjas[j].y));

					if (alcanceAtaque <= 40 &&  distanciaAerea < 20 && distanciaAerea > 0) {
						EnemigosNaranjas[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}
			}
		}
		if(numeroEscenario == 1){

			for (var j = 0; j < EnemigosSpider.length; j++) {
				if(Flechas[i].direccion == 'arriba'){
					distanciaAerea =  (Flechas[i].linkY) - EnemigosSpider[j].y;
					alcanceAereo = Math.abs(Flechas[i].linkX - (EnemigosSpider[j].x));
					
					if (alcanceAereo <= 40 && distanciaAerea<20 && distanciaAerea>0) {
						EnemigosSpider[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}else if(Flechas[i].direccion == 'derecha'){
					distanciaAerea = EnemigosSpider[j].x - (Flechas[i].linkX);
					alcanceAereo = Math.abs(Flechas[i].linkY-(EnemigosSpider[j].y));

					if (alcanceAereo <= 40 && distanciaAerea<20 && distanciaAerea>0) {
						EnemigosSpider[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}else if(Flechas[i].direccion == 'abajo'){
					distanciaAerea = EnemigosSpider[j].y - (Flechas[i].linkY);
					alcanceAereo = Math.abs(Flechas[i].linkX - (EnemigosSpider[j].x));

					if (alcanceAereo <=40 &&  distanciaAerea < 20 && distanciaAerea > 0) {
						EnemigosSpider[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}else if(Flechas[i].direccion == 'izquierda'){
					distanciaAerea = Math.abs((Flechas[i].linkX)-EnemigosSpider[j].x);
					alcanceAtaque = Math.abs(Flechas[i].linkY-(EnemigosSpider[j].y));

					if (alcanceAtaque <= 40 &&  distanciaAerea < 20 && distanciaAerea > 0) {
						EnemigosSpider[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}
			}
		}

		if(numeroEscenario == 3){

			for (var j = 0; j < EnemigosFantasmas.length; j++) {
				if(Flechas[i].direccion == 'arriba'){
					distanciaAerea =  (Flechas[i].linkY) - EnemigosFantasmas[j].y;
					alcanceAereo = Math.abs(Flechas[i].linkX - (EnemigosFantasmas[j].x));
					
					if (alcanceAereo <= 40 && distanciaAerea<20 && distanciaAerea>0) {
						EnemigosFantasmas[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}else if(Flechas[i].direccion == 'derecha'){
					distanciaAerea = EnemigosFantasmas[j].x - (Flechas[i].linkX);
					alcanceAereo = Math.abs(Flechas[i].linkY-(EnemigosFantasmas[j].y));

					if (alcanceAereo <= 40 && distanciaAerea<20 && distanciaAerea>0) {
						EnemigosFantasmas[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}else if(Flechas[i].direccion == 'abajo'){
					distanciaAerea = EnemigosFantasmas[j].y - (Flechas[i].linkY);
					alcanceAereo = Math.abs(Flechas[i].linkX - (EnemigosFantasmas[j].x));

					if (alcanceAereo <=40 &&  distanciaAerea < 20 && distanciaAerea > 0) {
						EnemigosFantasmas[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}else if(Flechas[i].direccion == 'izquierda'){
					distanciaAerea = Math.abs((Flechas[i].linkX)-EnemigosFantasmas[j].x);
					alcanceAtaque = Math.abs(Flechas[i].linkY-(EnemigosFantasmas[j].y));

					if (alcanceAtaque <= 40 &&  distanciaAerea < 20 && distanciaAerea > 0) {
						EnemigosFantasmas[j].status = 0;
						Flechas[i].status = 0;
						totalEnemigosMuertos++;
					}
				}
			}
		}
	}
	}
}

function mueveAraña(){
	

	for (var i = 0; i < EnemigosSpider.length; i++) {
		
		if (EnemigosSpider[i].x >= EnemigosSpider[i].draw().finPatron && EnemigosSpider[i].direccion == 'derecha') {
			EnemigosSpider[i].direccion ='izquierda';
			/*console.log(EnemigosNaranjas[i].direccion)
			;*/
			EnemigosSpider[i].positionImage = 0;	

		}
		else if (EnemigosSpider[i].x <= EnemigosSpider[i].draw().comienzaPatron && EnemigosSpider[i].direccion == 'izquierda') {
			EnemigosSpider[i].direccion ='derecha';
			EnemigosSpider[i].positionImage = 2;	

			/*console.log(EnemigosNaranjas[i].direccion);*/
		}
		else if (EnemigosSpider[i].y >= EnemigosSpider[i].draw().finPatron && EnemigosSpider[i].direccion == 'abajo') {
			EnemigosSpider[i].direccion ='arriba';
			EnemigosSpider[i].positionImage = 3;	

			
		}
		else if (EnemigosSpider[i].y <= EnemigosSpider[i].draw().comienzaPatron && EnemigosSpider[i].direccion == 'arriba') {
			EnemigosSpider[i].direccion ='abajo';	
			EnemigosSpider[i].positionImage = 1;	
		}

		if(EnemigosSpider[i].direccion == 'izquierda'){
			/*naranjaX-=3;*/
			EnemigosSpider[i].x = EnemigosSpider[i].x-3;

		}else if(EnemigosSpider[i].direccion == 'derecha'){
			/*naranjaX+=3;*/
			EnemigosSpider[i].x += 3;
		}else if(EnemigosSpider[i].direccion == 'abajo'){
			/*naranjaX+=3;*/
			EnemigosSpider[i].y += 2;
		}else if(EnemigosSpider[i].direccion == 'arriba'){
			/*naranjaX+=3;*/
			EnemigosSpider[i].y -= 2;
		}
	// image(flechaR,(link.draw().x+coordx+60),(link.draw().y+coordy+29),40,5);
		

	}
}

function mueveFantasmas() {
	// frameRate(10);

	for (var i = 0; i < EnemigosFantasmas.length; i++) {
		switch(contNar){
			case 0:
				if(EnemigosFantasmas[i].direccion == 'derecha')
					positionFantasma = 0 ;
				else if(EnemigosFantasmas[i].direccion == 'izquierda')
					positionFantasma = 2;
				else if(EnemigosFantasmas[i].direccion == 'arriba')
					positionFantasma = 0;
				else if(EnemigosFantasmas[i].direccion == 'abajo')
					positionFantasma = 2;
				contNar++;
			break;
			case 1:
				if(EnemigosFantasmas[i].direccion == 'derecha')
					positionFantasma = 1 ;
				else if(EnemigosFantasmas[i].direccion == 'izquierda')
					positionFantasma = 3;
				else if(EnemigosFantasmas[i].direccion == 'arriba')
					positionFantasma = 1;
				else if(EnemigosFantasmas[i].direccion == 'abajo')
					positionFantasma = 3;
				contNar=0;
			break;
			
		}
			// naranjaX+=3;

		EnemigosFantasmas[i].positionImage = positionFantasma;


		if (EnemigosFantasmas[i].x >= EnemigosFantasmas[i].draw().finPatron && EnemigosFantasmas[i].direccion == 'derecha') {
			EnemigosFantasmas[i].direccion ='izquierda';
			/*console.log(EnemigosNaranjas[i].direccion);*/
		}
		else if (EnemigosFantasmas[i].x <= EnemigosFantasmas[i].draw().comienzaPatron && EnemigosFantasmas[i].direccion == 'izquierda') {
			EnemigosFantasmas[i].direccion ='derecha';
			/*console.log(EnemigosNaranjas[i].direccion);*/
		}
		else if (EnemigosFantasmas[i].y >= EnemigosFantasmas[i].draw().finPatron && EnemigosFantasmas[i].direccion == 'abajo') {
			EnemigosFantasmas[i].direccion ='arriba';
			
		}
		else if (EnemigosFantasmas[i].y <= EnemigosFantasmas[i].draw().comienzaPatron && EnemigosFantasmas[i].direccion == 'arriba') {
			EnemigosFantasmas[i].direccion ='abajo';		
		}

		if(EnemigosFantasmas[i].direccion == 'izquierda'){
			/*naranjaX-=3;*/
			EnemigosFantasmas[i].x = EnemigosFantasmas[i].x-3;

		}else if(EnemigosFantasmas[i].direccion == 'derecha'){
			/*naranjaX+=3;*/
			EnemigosFantasmas[i].x += 3;
		}else if(EnemigosFantasmas[i].direccion == 'abajo'){
			/*naranjaX+=3;*/
			EnemigosFantasmas[i].y += 2;
		}else if(EnemigosFantasmas[i].direccion == 'arriba'){
			/*naranjaX+=3;*/
			EnemigosFantasmas[i].y -= 2;
		}
	}
}



var moveLink = function(){
	if(keyIsDown(UP_ARROW)){
		
		if(Escenario[positionMatrizy-1][positionMatrizx]==0)
		{
			coordy -=4;
			auxcoordy -=4;

			if(auxcoordy<=-40){

				auxcoordy=0;
				positionMatrizy-=1;

			 }
		}
		// console.log("ARRIBA");
		// coordy -=4;
		arriba = true;
		abajo = false;
		derecha = false;
		izquierda = false;
		pintarSprints(30);
		vista = 3;
	}
	if(keyIsDown(DOWN_ARROW)){
		if(numeroEscenario==2){
			if(Escenario[positionMatrizy+1][positionMatrizx]==0 || (Escenario[positionMatrizy+1][positionMatrizx]== 2))
				{
					coordy += 4
					auxcoordy += 4;
				 	if(auxcoordy>=38){
				  		auxcoordy=0;
				 		positionMatrizy+=1;
				  	}
				}
		}
		else if(Escenario[positionMatrizy+1][positionMatrizx]==0)
		{
			coordy += 4
			auxcoordy += 4;
		 	if(auxcoordy>=38){
		  		auxcoordy=0;
		 		positionMatrizy+=1;
		  	}
		}
		
		arriba = false;
		abajo = true;
		derecha = false;
		izquierda = false;
		
		pintarSprints(0);
		vista = 4;
	}

	if(keyIsDown(LEFT_ARROW)){
		if(Escenario[positionMatrizy][positionMatrizx-1]==0)
		{
				// bar.y -= bar.step;
			coordx -= 4;
			auxcoordx -=4;
			auxcoordy = 0;
			
			if(auxcoordx<=-40){
		 		auxcoordx=0;
				positionMatrizx-=1;
		 	}

		}
		// positionSprite = 2
		// coordx -=4;
		arriba = false;
		abajo = false;
		derecha = false;
		izquierda = true;
		vista=2;

		pintarSprints(20);
		
		
	}
	if(keyIsDown(RIGHT_ARROW)){
		//link.updateMove.x;
	//	coordx +=4;
		/*console.log(coordx);*/

		if(Escenario[positionMatrizy][positionMatrizx+1]==0)
		{		
			coordx +=4;
			auxcoordx +=4;
			
			if(auxcoordx>=40){
				auxcoordx=0;
				positionMatrizx+=1;
			}
		}else if(Escenario[positionMatrizy][positionMatrizx+1]==10 || Escenario[positionMatrizy][positionMatrizx+1]==11 || Escenario[positionMatrizy][positionMatrizx+1]==8){
			
			coordx +=4;
			auxcoordx +=4;
			
			BanderaCambiaNivel = true;
		}
		arriba = false;
		abajo = false;
		derecha = true;
		izquierda = false;
		pintarSprints(10);
		vista=1;
	}

	

}

function mueveDragon() {
	//frameRate(10);

	switch(contNar){
			case 0:
				if(dragon.direccion == 'arriba')
					positionDragon = 0 ;
				else if(dragon.direccion == 'abajo')
					positionDragon = 3;
				
				contNar++;
			break;
			case 1:
				if(dragon.direccion == 'arriba')
					positionDragon = 1 ;
				else if(dragon.direccion == 'abajo')
					positionDragon = 3;
				
				contNar++;
			break;
			case 2:
				if(dragon.direccion == 'arriba')
					positionDragon = 0 ;
				else if(dragon.direccion == 'abajo')
					positionDragon = 3;
				
				contNar++;
			break;
			case 3:
				if(dragon.direccion == 'arriba')
					positionDragon = 0 ;
				else if(dragon.direccion == 'abajo')
					positionDragon = 3;
				
				contNar++;
			break;
			case 4:
				if(dragon.direccion == 'arriba')
					positionDragon = 1 ;
				else if(dragon.direccion == 'abajo')
					positionDragon = 0;
				
				contNar++;
			break;

			case 5:
				if(dragon.direccion == 'arriba')
					positionDragon = 0 ;
				else if(dragon.direccion == 'abajo')
					positionDragon = 1;
				
				contNar=0;
			break;
			
		}
		
		siAtaca=Math.floor((Math.random() * 30) +0);

		if(siAtaca ==3){
		//	console.log("pepeee");
			Ataquefuego();
			ataque=true;
		}


		dragon.positionImage = positionDragon;


		if (dragon.x >= dragon.draw().finPatron && dragon.direccion == 'derecha') {
			dragon.direccion ='izquierda';
			/*console.log(EnemigosNaranjas[i].direccion);*/
		}
		else if (dragon.x <= dragon.draw().comienzaPatron && dragon.direccion == 'izquierda') {
			dragon.direccion ='derecha';
			/*console.log(EnemigosNaranjas[i].direccion);*/
		}
		else if (dragon.y >= dragon.draw().finPatron && dragon.direccion == 'abajo') {
			dragon.direccion ='arriba';
			
		}
		else if (dragon.y <= dragon.draw().comienzaPatron && dragon.direccion == 'arriba') {
			dragon.direccion ='abajo';		
		}

		if(dragon.direccion == 'izquierda'){
			/*naranjaX-=3;*/
			dragon.x = dragon.x-3;

		}else if(dragon.direccion == 'derecha'){
			/*naranjaX+=3;*/
			dragon.x += 3;
		}else if(dragon.direccion == 'abajo'){
			/*naranjaX+=3;*/
			dragon.y += 2;
		}else if(dragon.direccion == 'arriba'){
			/*naranjaX+=3;*/
			dragon.y -= 2;
		}
	
}

