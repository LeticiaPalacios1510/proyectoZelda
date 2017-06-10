function creaEnemigos(){
	EnemigosNaranjas.push(new Naranja(naranjaImage, 155, 60,'derecha',155,800,1));

	 EnemigosNaranjas[0].direccion = 'derecha';
	 EnemigosNaranjas[0].positionImage = 4;
	 EnemigosNaranjas[0].x = 155;
	 EnemigosNaranjas[0].y = 60;
	 EnemigosNaranjas[0].status = 1;
	 EnemigosNaranjas.push(new Naranja(naranjaImage, 900, 80,'derecha',80,600,1));
	 EnemigosNaranjas[1].direccion = 'abajo';
	 EnemigosNaranjas[1].positionImage = 2;
	 EnemigosNaranjas[1].x = 900;
	 EnemigosNaranjas[1].y = 80;
	 EnemigosNaranjas[1].status = 1;


}
function creaSpider(){
	
	EnemigosSpider.push(new Naranja(spiderRight, 300, 550, 'derecha', 300, 900,2,1));
	
	EnemigosSpider[0].image = spiderDown;
	 EnemigosSpider[0].direccion = 'derecha';
	 EnemigosSpider[0].x = 300;
	 EnemigosSpider[0].y = 550;
	 EnemigosSpider[0].status = 1;
	 EnemigosSpider[0].comienzaPatron = 300;
	 EnemigosSpider[0].finPatron = 900;
	 EnemigosSpider[0].positionImage =2;
	 
	EnemigosSpider.push(new Naranja(spiderRight, 300, 200,'derecha',300,750,2,1));
		EnemigosSpider[1].image = spiderRight;
	 EnemigosSpider[1].direccion = 'derecha';
	 EnemigosSpider[1].positionImage = 2;
	 EnemigosSpider[1].x = 300;
	 EnemigosSpider[1].y = 200;
	 EnemigosSpider[1].status = 1;
	 EnemigosSpider[1].comienzaPatron = 300;
	 EnemigosSpider[1].finPatron = 450;


	 EnemigosSpider.push(new Naranja(spiderDown, 900, 200,'abajo',200,500,1,1));
		EnemigosSpider[2].image = spiderDown;
	 EnemigosSpider[2].direccion = 'abajo';
	 EnemigosSpider[2].positionImage = 1;
	 EnemigosSpider[2].x = 900;
	 EnemigosSpider[2].y = 200;
	 EnemigosSpider[2].status = 1;
	 EnemigosSpider[2].comienzaPatron = 200;
	 EnemigosSpider[2].finPatron = 700;
	 
	


}

function creaFantasmas(){
	EnemigosFantasmas.push(new Naranja(fantasmaImage, 300, 450,'derecha',300,900,1,1));

	 EnemigosFantasmas[0].image = fantasmaImage;
	 EnemigosFantasmas[0].direccion = 'derecha';
	 EnemigosFantasmas[0].x = 300;
	 EnemigosFantasmas[0].y = 450;
	 EnemigosFantasmas[0].status = 1;
	 EnemigosFantasmas[0].comienzaPatron = 300;
	 EnemigosFantasmas[0].finPatron = 900;
	 EnemigosFantasmas[0].positionImage =2;
	 
	EnemigosFantasmas.push(new Naranja(fantasmaImage, 200, 250,'derecha',200,750,2,1));
	 EnemigosFantasmas[1].image = fantasmaImage;
	 EnemigosFantasmas[1].direccion = 'derecha';
	 EnemigosFantasmas[1].positionImage = 2;
	 EnemigosFantasmas[1].x = 200;
	 EnemigosFantasmas[1].y = 250;
	 EnemigosFantasmas[1].status = 1;
	 EnemigosFantasmas[1].comienzaPatron = 200;
	 EnemigosFantasmas[1].finPatron = 750;


	 EnemigosFantasmas.push(new Naranja(fantasmaImage, 900, 200,'abajo',200,500,1,1));
		EnemigosFantasmas[2].image = fantasmaImage;
	 EnemigosFantasmas[2].direccion = 'abajo';
	 EnemigosFantasmas[2].positionImage = 1;
	 EnemigosFantasmas[2].x = 900;
	 EnemigosFantasmas[2].y = 200;
	 EnemigosFantasmas[2].status = 1;
	 EnemigosFantasmas[2].comienzaPatron = 200;
	 EnemigosFantasmas[2].finPatron = 700;


}



function cambiarNivel(){
	numeroEscenario += 1;
	console.log("Escenario: "+numeroEscenario);
	totalEnemigosMuertos = 0;
	BanderaCambiaNivel = false;

	if (numeroEscenario == 2) {
		Escenario = 0;
		Escenario = pradera;
		coordx=1;
		coordy=180;
		positionMatrizx=0;
		positionMatrizy=9;
		auxcoordx=0;
		auxcoordy=0;
		naranjaX=80;
		naranjaY=30;
		auxNaranjaX=0;
		auxNaranjaY=0;
		contNar = 0;
		ataque = false;
		arriba = true;
		abajo = false;
		derecha = false;
		izquierda = false;
		EnemigosNaranjas = [];
		auxArray = [];
		animacionEspada = [];
		animacionArco = [];

		link = new Link(linkImage, coordx, coordy);

		creaEnemigos();
		
	}

	if (numeroEscenario == 3) {
		Escenario = 0;
		Escenario = castillo;
		coordx=1;
		coordy=180;
		positionMatrizx=0;
		positionMatrizy=9;
		auxcoordx=0;
		auxcoordy=0;
		naranjaX=80;
		naranjaY=30;
		auxNaranjaX=0;
		auxNaranjaY=0;
		contNar = 0;
		ataque = false;
		arriba = true;
		abajo = false;
		derecha = false;
		izquierda = false;
		EnemigosNaranjas = [];
		auxArray = [];
		animacionEspada = [];
		animacionArco = [];

		link = new Link(linkImage, coordx, coordy);

		creaEnemigos();
		
	}

	if (numeroEscenario == 4) {
		Escenario = 0;
		Escenario = jefe;
		coordx=1;
		coordy=180;
		positionMatrizx=0;
		positionMatrizy=9;
		auxcoordx=0;
		auxcoordy=0;
		naranjaX=80;
		naranjaY=30;
		auxNaranjaX=0;
		auxNaranjaY=0;
		contNar = 0;
		ataque = false;
		arriba = true;
		abajo = false;
		derecha = false;
		izquierda = false;
		EnemigosNaranjas = [];
		auxArray = [];
		animacionEspada = [];
		animacionArco = [];

		link = new Link(linkImage, coordx, coordy);

		creaDragon();
		
	}
}

function flecha(){
	// console.log("x: "+ (link.draw().x+coordx));
	// console.log("y: "+ (link.draw().y+coordy));
	// console.log("linkX: " + (link.draw().x+coordx+60));
	// console.log("linkY: " + (link.draw().y+coordy+29));

	Flechas.push(new AtaqueVolador(flechaR, 5, 5, 5, 5, 1))
	Flechas[contFlecha].status = 1;
	
	if(arriba) {
		Flechas[contFlecha].image = flechaT;
		Flechas[contFlecha].direccion = "arriba";
		Flechas[contFlecha].linkX = (link.draw().x+coordx+30);
		Flechas[contFlecha].linkY = (link.draw().y+coordy-29);

	}else if(derecha){
		Flechas[contFlecha].image = flechaR;
		Flechas[contFlecha].direccion = "derecha";
		Flechas[contFlecha].linkX = (link.draw().x+coordx+60);
		Flechas[contFlecha].linkY = (link.draw().y+coordy+29);
	}else if(izquierda){
		Flechas[contFlecha].image = flechaL;
		Flechas[contFlecha].direccion = "izquierda";
		Flechas[contFlecha].linkX = (link.draw().x+coordx-60);
		Flechas[contFlecha].linkY = (link.draw().y+coordy+29);
	}else if(abajo){
		Flechas[contFlecha].image = flechaD;
		Flechas[contFlecha].direccion = "abajo";
		Flechas[contFlecha].linkX = (link.draw().x+coordx+30);
		Flechas[contFlecha].linkY = (link.draw().y+coordy+29);
	}	
		Flechas[contFlecha].x = (link.draw().x+coordx);
		Flechas[contFlecha].y = (link.draw().y+coordy);

		
	contFlecha++;
}

function creaDragon(){
	dragon = new Naranja(dragonImage, 830, 100,'abajo',100,450,1,1);

	 dragon.image = dragonImage;
	 dragon.direccion = 'abajo';
	 dragon.x = 830;
	 dragon.y = 100;
	 dragon.status = 1;
	 dragon.comienzaPatron = 100;
	 dragon.finPatron = 450;
	 dragon.positionImage =1;


	 
	


}

function Ataquefuego(){

	// console.log("x: "+ (dragon.x));
	// console.log("y: "+ (dragon.y));
	// console.log("linkX: " + (link.draw().x+coordx+60));
	// console.log("linkY: " + (link.draw().y+coordy+29));

	Fuego.push(new AtaqueVolador(bolaFuego, (dragon.draw().x), 5, 5, 5, 1,1));
	
		Fuego[contFuego].image =bolaFuego;
		Fuego[contFuego].direccion = "izquierda";
		Fuego[contFuego].linkX = dragon.x-30;
		Fuego[contFuego].linkY = (dragon.y+42);
		Fuego[contFuego].status = 1;
		Fuego[contFuego].x = (dragon.x);
		Fuego[contFuego].y = (dragon.y);

		
	contFuego++;
}


