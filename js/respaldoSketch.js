	let bosque = [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1],
			[1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0],
			[1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0],
			[1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0],
			[1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1],
			[1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1],
			[1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

	let castillo = [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,2],
			[2,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
			[2,0,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0,0,2],
			[2,0,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0,0,2],
			[2,0,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,2,2,0,0,2],
			[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,2,2,0,0,2],
			[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2],
			[0,0,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,2,2,0,0,2],
			[0,0,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,2,2,0,0,2],
			[0,0,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,2,2,0,0,2],
			[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2],
			[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2],
			[2,0,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,2,2,0,9,10],
			[2,0,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0,4,8],
			[2,0,0,0,2,2,2,0,7,2,2,2,0,0,2,2,2,0,0,2,2,2,0,0,0,0,0,0,5,11],
			[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

	var colum = 30;
	var linea = 18;
	var pox=0,poy=0;
	var pasto;
	var piedra;
	var arbusto;
	var piedraMedio;
	var alfombraD;
	var alfombraC;
	var alfombraI;
	var alfombra;
	let link;
	
	//Link
	let coordx=1;
	let coordy=180;
	let auxcoordx=0;
	let auxcoordy=0;

//Naranja
	let naranjaX=80;
	let naranjaY=30;
	let auxNaranjaX=0;
	let auxNaranjaY=0;
	let caminoOtro= false;

	let naranjaImage;
	let positionNaranja;



	let positionSprite;
	let positionAttack = 0;
	let positionMatrizx=0;
	let positionMatrizy=9

	let contR = 0;
	let contD = 0;
	let contA = 0;
	let contF = 0;
	let contNar = 0;
	let numeroEscenario = 2;

	let ataque = false;
	let arriba = true;
	let abajo = false;
	let derecha = false;
	let izquierda = false;

	let linkImage;
	let linkImageAttack = [];
	let linkSprites = [];

	let naranjaImages = [];
	let EnemigosNaranjas = [];
	

var setup = function(){
	createCanvas(1300,700);


		pasto=loadImage('img/Escenario/p.png');
		arbusto=loadImage('img/Escenario/pA3.png');
		piedra=loadImage('img/Escenario/malvada2.png');
		piedraMedio=loadImage('img/Escenario/malvada3.png');
		alfombraD=loadImage('img/Escenario/al2.png');
		alfombraT=loadImage('img/Escenario/a2.png');
		alfombraD=loadImage('img/Escenario/a3.png');
		alfombraC=loadImage('img/Escenario/a1.png');
		alfombraI=loadImage('img/Escenario/a4.png');
		pisoAzul=loadImage('img/Escenario/pisoAzul.png');
		estatua=loadImage('img/Escenario/oing.png');
		pisoCalaca=loadImage('img/Escenario/pisoCalaca.png');
		centro=loadImage('img/Escenario/centro.png');
		alfombraAbajo=loadImage('img/Escenario/a5.png');
		positionSprite = 0;
		positionNaranja = 0;



		

	///SPRITES DE LINK
	////0-8
		linkSprites.push(loadImage('img/Link/b1.png'));
		linkSprites.push(loadImage('img/Link/b4.png'));
		linkSprites.push(loadImage('img/Link/b5.png'));
		linkSprites.push(loadImage('img/Link/b6.png'));
		linkSprites.push(loadImage('img/Link/b7.png'));
		linkSprites.push(loadImage('img/Link/b8.png'));
		linkSprites.push(loadImage('img/Link/b9.png'));
		linkSprites.push(loadImage('img/Link/b10.png'));
		linkSprites.push(loadImage('img/Link/b11.png'));


	//9-12
		linkSprites.push(loadImage('img/Link/dd1.png'));
		linkSprites.push(loadImage('img/Link/dd2.png'));
		linkSprites.push(loadImage('img/Link/dd3.png'));
		linkSprites.push(loadImage('img/Link/dd4.png'));
	//13-16
		linkSprites.push(loadImage('img/Link/c1.png'));
		linkSprites.push(loadImage('img/Link/c5.png'));
		linkSprites.push(loadImage('img/Link/c6.png'));
		linkSprites.push(loadImage('img/Link/c7.png'));
		//linkImage = loadImage('img/Link/b1.png');

	//17 - 25
		linkSprites.push(loadImage('img/Link/n1.png'));
		linkSprites.push(loadImage('img/Link/n4.png'));
		linkSprites.push(loadImage('img/Link/n6.png'));
		linkSprites.push(loadImage('img/Link/n7.png'));
		linkSprites.push(loadImage('img/Link/n8.png'));
		linkSprites.push(loadImage('img/Link/n9.png'));
		linkSprites.push(loadImage('img/Link/n10.png'));
		linkSprites.push(loadImage('img/Link/n11.png'));
		linkSprites.push(loadImage('img/Link/n12.png'));

	//0-7  ATAQUE LINK-- Derecha Espada
	 	linkImageAttack.push(loadImage('img/Link/ed1.png'));
	 	linkImageAttack.push(loadImage('img/Link/ed2.png'));
	 	linkImageAttack.push(loadImage('img/Link/ed3.png'));
	 	linkImageAttack.push(loadImage('img/Link/ed4.png'));
	 	linkImageAttack.push(loadImage('img/Link/ed5.png'));
	 	linkImageAttack.push(loadImage('img/Link/ed6.png'));
	 	linkImageAttack.push(loadImage('img/Link/ed7.png'));
	 	linkImageAttack.push(loadImage('img/Link/ed8.png'));
	///8 -15 ATAQUE LINK -- IZQUIERDA ESPADA
	 	linkImageAttack.push(loadImage('img/Link/edd1.png'));
	 	linkImageAttack.push(loadImage('img/Link/edd2.png'));
	 	linkImageAttack.push(loadImage('img/Link/edd3.png'));
	 	linkImageAttack.push(loadImage('img/Link/edd4.png'));
	 	linkImageAttack.push(loadImage('img/Link/edd5.png'));
	 	linkImageAttack.push(loadImage('img/Link/edd6.png'));
	 	linkImageAttack.push(loadImage('img/Link/edd7.png'));
	 	linkImageAttack.push(loadImage('img/Link/edd8.png'));
	 //16- 23 ATAQUE LINK FRENTE ESPADA
	 	linkImageAttack.push(loadImage('img/Link/ee1.png'));
	 	linkImageAttack.push(loadImage('img/Link/ee2.png'));
	 	linkImageAttack.push(loadImage('img/Link/ee3.png'));
	 	linkImageAttack.push(loadImage('img/Link/ee4.png'));
	 	linkImageAttack.push(loadImage('img/Link/ee5.png'));
	 	linkImageAttack.push(loadImage('img/Link/ee6.png'));
	 	linkImageAttack.push(loadImage('img/Link/ee7.png'));
	 	linkImageAttack.push(loadImage('img/Link/ee8.png'));
	 	//24- 31 ATAQUE LINK FRENTE ESPADA
	 	linkImageAttack.push(loadImage('img/Link/e1.png'));
	 	linkImageAttack.push(loadImage('img/Link/e2.png'));
	 	linkImageAttack.push(loadImage('img/Link/e3.png'));
	 	linkImageAttack.push(loadImage('img/Link/e4.png'));
	 	linkImageAttack.push(loadImage('img/Link/e5.png'));
	 	linkImageAttack.push(loadImage('img/Link/e6.png'));
	 	linkImageAttack.push(loadImage('img/Link/e7.png'));
	 	linkImageAttack.push(loadImage('img/Link/e8.png'));


	 	//ATAQUE NARANJA
	 	naranjaImages.push(loadImage('img/Enemigos/n1.png'));
	 	naranjaImages.push(loadImage('img/Enemigos/n2.png'));
	 	naranjaImages.push(loadImage('img/Enemigos/n3.png'));
	 	naranjaImages.push(loadImage('img/Enemigos/n4.png'));
	 	naranjaImages.push(loadImage('img/Enemigos/n5.png'));
	 	naranjaImages.push(loadImage('img/Enemigos/n6.png'));
	 	naranjaImages.push(loadImage('img/Enemigos/n7.png'));
	 	naranjaImages.push(loadImage('img/Enemigos/n8.png'));

	 link = new Link(linkImage, coordx, coordy);

	 /*naranja = new Naranja(naranjaImage, naranjaX, naranjaY);*/
	 EnemigosNaranjas.push(new Naranja(naranjaImage, 80, 30,'derecha',30,800,4));
	 EnemigosNaranjas.push(new Naranja(naranjaImage, 100, 800,'arriba',30,800,7));
	 EnemigosNaranjas[0].direccion = 'derecha';
	 EnemigosNaranjas[1].direccion = 'arriba';

	frameRate(15);
}


var draw = function(){
	
	if(numeroEscenario == 1){
		pox=0;
		poy=0;
		for(var i =0; i<linea; i++){
			for(var j=0; j<colum; j++){

				switch(bosque[i][j]){
					case 0:
						image(pasto,pox,poy,40,40);
					break;
					case 1:
						image(arbusto,pox,poy,40,40);
					break;
					}
				pox+=40;
			}		
			poy+=40;
			pox=0;
		}
	}else if(numeroEscenario == 2){
		pox=0;
		poy=0;
		for(var i =0; i<linea; i++){
			for(var j=0; j<colum; j++){

				switch(castillo[i][j]){
					case 0:
						image(pisoAzul,pox,poy,40,40);
					break;
					case 1:
						image(piedra,pox,poy,40,40);
					break;

					case 2:
						image(piedraMedio,pox,poy,40,40);
					break;
					case 3:
						image(alfombraD,pox,poy,40,40);
					break;
					case 4:
						image(alfombraC,pox,poy,40,40);
					break;
					case 5:
						image(alfombraI,pox,poy,40,40);
					break;
					case 6:
						image(estatua,pox,poy,40,40);
					break;
					case 7:
						image(pisoCalaca,pox,poy,40,40);
					break;
					case 8:
						image(centro,pox,poy,40,40);
					break;
					case 9:
						image(alfombraT,pox,poy,40,40);
					break;
					case 10:
						image(alfombraD,pox,poy,40,40);
					break;
					case 11:
						image(alfombraAbajo,pox,poy,40,40);
					break;
				
				}
				pox+=40;
			}		
			poy+=40;
			pox=0;
		}
	}

	moveLink();
	

	//image(link.draw().image, link.draw().x+coordx, link.draw().y+coordy);
	if(!ataque){
		image(linkSprites[positionSprite], link.draw().x+coordx, link.draw().y+coordy);
		link.update();
	}else{
	
		image(linkImageAttack[positionAttack], link.draw().x+coordx, link.draw().y+coordy);
		link.update();
		ataque = false;
		
	}

	for (var i = 0; i < EnemigosNaranjas.length; i++) {
	
	image(naranjaImages[EnemigosNaranjas[i].draw().positionImage], EnemigosNaranjas[i].draw().x+naranjaX, EnemigosNaranjas[i].draw().y+naranjaY);
	EnemigosNaranjas[i].update();



	}
	moverEnemigoNaranja();

	
}

var moveLink = function(){
	if(keyIsDown(UP_ARROW)){
		
		if(castillo[positionMatrizy-1][positionMatrizx]==0)
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
		positionAttack = 16;
	
		switch(contA){
			case 0:
				positionSprite = 0;
				
				contA++;
			break;
			case 1:
				positionSprite = 1;
			
				contA++;
			break;
			case 2:
				positionSprite = 2;
				
				contA++;
			break;
			case 3:
				positionSprite = 3;
			
				contA++;
			break;
			case 4:
				positionSprite = 4;
				contA++;
			break;
			case 5:
				positionSprite = 5;
				contA++;
			break;
			case 6:
				positionSprite = 6;
				contA++;
			break;
			case 7:
				positionSprite = 7;
				contA++;
			break;
			case 8:
				positionSprite = 8;
				contA=0;
			break;

		}
	}
	if(keyIsDown(DOWN_ARROW)){

		if(castillo[positionMatrizy+1][positionMatrizx]==0)
		{

			coordy += 4
			auxcoordy += 4;
		 	if(auxcoordy>=38){
		  		auxcoordy=0;
		 		positionMatrizy+=1;
		  	}
		}
		
		// positionSprite = 1;
		// coordy +=4
		arriba = false;
		abajo = true;
		derecha = false;
		izquierda = false;
		positionAttack = 24;

		switch(contF){
			case 0:
				positionSprite = 17;
				contF++;
			break;
			case 1:
				positionSprite = 18;
				contF++;
			break;
			case 2:
				positionSprite = 19;
				contF++;
			break;
			case 3:
				positionSprite = 20;
				contF++;
			break;
			case 4:
				positionSprite = 21;
				contF++;
			break;
			case 5:
				positionSprite = 22;
				contF++;
			break;
			case 6:
				positionSprite = 23;
				contF++;
			break;
			case 7:
				positionSprite = 24;
				contF++;
			break;
			case 8:
				positionSprite = 25;
				contF=0;
			break;

		}

	}

	if(keyIsDown(LEFT_ARROW)){
		if(castillo[positionMatrizy][positionMatrizx-1]==0)
		{
				// bar.y -= bar.step;
			coordx -= 4;
			auxcoordx -=4;
			
			if(auxcoordx<=-38){
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
		positionAttack = 8;

		switch(contD){
			case 0:
				positionSprite = 9;
				contD++;
			break;
			case 1:
				positionSprite = 10;
				contD++;
			break;
			case 2:
				positionSprite = 11;
				contD++;
			break;
			case 3:
				positionSprite = 12;
				contD=0;
			break;

		}
		
		
	}
	if(keyIsDown(RIGHT_ARROW)){
		//link.updateMove.x;
	//	coordx +=4;
		console.log(coordx);

		if(castillo[positionMatrizy][positionMatrizx+1]==0)
		{		
			coordx +=4;
			auxcoordx +=4;
			
			if(auxcoordx>=38){
				auxcoordx=0;
				positionMatrizx+=1;
			}
		}
		arriba = false;
		abajo = false;
		derecha = true;
		izquierda = false;
		positionAttack = 0;


		switch(contR){
			case 0:
				positionSprite = 13;
				contR++;
			break;
			case 1:
				positionSprite = 14;
				contR++;
			break;
			case 2:
				positionSprite = 15;
				contR++;
			break;
			case 3:
				positionSprite = 16;
				contR=0;
			break;

		}		
	}

	if(keyIsDown(ENTER)){
	
		if(positionAttack<7 && derecha == true){
			positionAttack ++;
			if(positionAttack == 7){
				positionAttack = 0;
			}
			 
		}
		


		if(positionAttack<15 && izquierda == true){
			positionAttack ++;
			if(positionAttack ==15){
				positionAttack = 8;
			}
		
		}

		if(positionAttack<23 && arriba == true){
			positionAttack ++;
			if(positionAttack ==23){
				positionAttack = 16;
			}
		
		}

		if(positionAttack<31 && abajo == true){
			positionAttack ++;
			if(positionAttack == 31){
				positionAttack = 24;
			}
		
		}

		ataque = true;
	}
			
	




}

function keyTyped() {
  if (key === 'q') {
    console.log("pepe");
    
  } 
   // prevent default
}

function moverEnemigoNaranja() {
	// frameRate(10);
	for (var i = 0; i < EnemigosNaranjas.length; i++) {
		console.log("HOla?");

	
		switch(contNar){
			case 0:
				if(EnemigosNaranjas[i].direccion == 'derecha')
					EnemigosNaranjas[i].positionImage = 4;
					
				else if(EnemigosNaranjas[i].direccion == 'izquierda')
					EnemigosNaranjas[i].positionImage = 6;
				else if(EnemigosNaranjas[i].direccion == 'arriba')
					EnemigosNaranjas[i].positionImage = 7;
				else if(EnemigosNaranjas[i].direccion == 'abajo')
					EnemigosNaranjas[i].positionImage = 1;
				contNar++;
			break;
			case 1:
				if(EnemigosNaranjas[i].direccion == 'derecha')
					EnemigosNaranjas[i].positionImage = 4;
					
				else if(EnemigosNaranjas[i].direccion == 'izquierda')
					EnemigosNaranjas[i].positionImage = 6;
				else if(EnemigosNaranjas[i].direccion == 'arriba')
					EnemigosNaranjas[i].positionImage = 7;
				else if(EnemigosNaranjas[i].direccion == 'abajo')
					EnemigosNaranjas[i].positionImage = 1;
				contNar++;
			break;
			case 2:
				if(EnemigosNaranjas[i].direccion == 'derecha')
					EnemigosNaranjas[i].positionImage =  5 ;
				else if(EnemigosNaranjas[i].direccion == 'izquierda')
					EnemigosNaranjas[i].positionImage =  7;
				else if(EnemigosNaranjas[i].direccion == 'arriba')
					EnemigosNaranjas[i].positionImage =  0;
				else if(EnemigosNaranjas[i].direccion == 'abajo')
					EnemigosNaranjas[i].positionImage =  1;
				contNar++;
			break;
			case 3:
				if(EnemigosNaranjas[i].direccion == 'derecha')
					EnemigosNaranjas[i].positionImage =  5 ;
				else if(EnemigosNaranjas[i].direccion == 'izquierda')
					EnemigosNaranjas[i].positionImage =  7;
				else if(EnemigosNaranjas[i].direccion == 'arriba')
					EnemigosNaranjas[i].positionImage = 0;
				else if(EnemigosNaranjas[i].direccion == 'abajo')
					EnemigosNaranjas[i].positionImage = 1;
				contNar=0;
			break;
		}
			// naranjaX+=3;

		if(naranjaX >= EnemigosNaranjas[0].draw().finPatron){
		
			EnemigosNaranjas[0].direccion ='izquierda';
			console.log(EnemigosNaranjas[0].direccion);
			EnemigosNaranjas[1].direccion = 'abajo';

		}

		if(EnemigosNaranjas[0].direccion == 'izquierda'){
			naranjaX-=3;

		}else{
			naranjaX+=3;
		}

		if(naranjaX <=EnemigosNaranjas[0].draw().comienzaPatron){
			
			EnemigosNaranjas[0].direccion ='derecha';
			console.log(EnemigosNaranjas[0].direccion);
			EnemigosNaranjas[1].direccion = 'abajo';
			console.log(EnemigosNaranjas[1].direccion);

		
		
		}
	}

}