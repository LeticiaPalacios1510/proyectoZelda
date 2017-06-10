
function ataqueEfectivo() {
	var diferencia = 0, alcanceAtaque = 0, alcanceAereo = 0, distanciaAerea=0;
	var idPega = null;
if(numeroEscenario == 2){
	for (var i = 0; i < EnemigosNaranjas.length; i++) {

		if(EnemigosNaranjas[i].status == 1){

			if(arriba){
				diferencia =  (link.draw().y+coordy)-EnemigosNaranjas[i].y;
				alcanceAtaque = Math.abs((link.draw().x+coordx)-(EnemigosNaranjas[i].x));
				if (alcanceAtaque <=40 &&  diferencia < 40 && diferencia > 0) {
					console.log("Pega arriba :c");
					idPega = i;
					totalEnemigosMuertos++;
				}
			}else if(abajo){
				diferencia = EnemigosNaranjas[i].y - (link.draw().y+coordy);
				alcanceAtaque = Math.abs((link.draw().x+coordx)-(EnemigosNaranjas[i].x));
				if (alcanceAtaque <=40 &&  diferencia < 40 && diferencia > 0) {
					console.log("Pega abajo :c");
					idPega = i;
					totalEnemigosMuertos++;
				}
			}else if(derecha){
				diferencia = EnemigosNaranjas[i].x - (link.draw().x+coordx);
				alcanceAtaque = Math.abs((link.draw().y+coordy)-(EnemigosNaranjas[i].y));

				if (alcanceAtaque <= 40 &&  diferencia < 50 && diferencia > 0) {
					console.log("Pega derecha :c");
					idPega = i;
					totalEnemigosMuertos++;
				}
			}else if(izquierda){
				diferencia = (link.draw().x+coordx)-EnemigosNaranjas[i].x;
				alcanceAtaque = Math.abs((link.draw().y+coordy)-(EnemigosNaranjas[i].y));

				if (alcanceAtaque <= 40 &&  diferencia < 50 && diferencia > 0) {
					console.log("Pega izq :c");
					idPega = i;
					totalEnemigosMuertos++;
				}

			}
		}
	}

}
if(numeroEscenario == 1){
	for (var i = 0; i < EnemigosSpider.length; i++) {

		if(EnemigosSpider[i].status == 1){
			console.log("PEPE");

			if(arriba){
				diferencia =  (link.draw().y+coordy)-EnemigosSpider[i].y;
				alcanceAtaque = Math.abs((link.draw().x+coordx)-(EnemigosSpider[i].x));
				if (alcanceAtaque <=40 &&  diferencia < 40 && diferencia > 0) {
					console.log("Pega arriba :c");
					idPega = i;
					totalEnemigosMuertos++;
				}
			}else if(abajo){
				diferencia = EnemigosSpider[i].y - (link.draw().y+coordy);
				alcanceAtaque = Math.abs((link.draw().x+coordx)-(EnemigosSpider[i].x));
				if (alcanceAtaque <=40 &&  diferencia < 40 && diferencia > 0) {
					console.log("Pega abajo :c");
					idPega = i;
					totalEnemigosMuertos++;
				}
			}else if(derecha){
				diferencia = EnemigosSpider[i].x - (link.draw().x+coordx);
				alcanceAtaque = Math.abs((link.draw().y+coordy)-(EnemigosSpider[i].y));

				if (alcanceAtaque <= 40 &&  diferencia < 50 && diferencia > 0) {
					console.log("Pega derecha :c");
					idPega = i;
					totalEnemigosMuertos++;
				}
			}else if(izquierda){
				diferencia = (link.draw().x+coordx)-EnemigosSpider[i].x;
				alcanceAtaque = Math.abs((link.draw().y+coordy)-(EnemigosSpider[i].y));

				if (alcanceAtaque <= 40 &&  diferencia < 50 && diferencia > 0) {
					console.log("Pega izq :c");
					idPega = i;
					totalEnemigosMuertos++;
				}

			}

		}
	}
}

if(numeroEscenario == 3){
	for (var i = 0; i < EnemigosFantasmas.length; i++) {

		if(EnemigosFantasmas[i].status == 1){
			console.log("PEPE");

			if(arriba){
				diferencia =  (link.draw().y+coordy)-EnemigosFantasmas[i].y;
				alcanceAtaque = Math.abs((link.draw().x+coordx)-(EnemigosFantasmas[i].x));
				if (alcanceAtaque <=40 &&  diferencia < 40 && diferencia > 0) {
					console.log("Pega arriba :c");
					idPega = i;
					totalEnemigosMuertos++;
				}
			}else if(abajo){
				diferencia = EnemigosFantasmas[i].y - (link.draw().y+coordy);
				alcanceAtaque = Math.abs((link.draw().x+coordx)-(EnemigosFantasmas[i].x));
				if (alcanceAtaque <=40 &&  diferencia < 40 && diferencia > 0) {
					console.log("Pega abajo :c");
					idPega = i;
					totalEnemigosMuertos++;
				}
			}else if(derecha){
				diferencia = EnemigosFantasmas[i].x - (link.draw().x+coordx);
				alcanceAtaque = Math.abs((link.draw().y+coordy)-(EnemigosFantasmas[i].y));

				if (alcanceAtaque <= 40 &&  diferencia < 50 && diferencia > 0) {
					console.log("Pega derecha :c");
					idPega = i;
					totalEnemigosMuertos++;
				}
			}else if(izquierda){
				diferencia = (link.draw().x+coordx)-EnemigosFantasmas[i].x;
				alcanceAtaque = Math.abs((link.draw().y+coordy)-(EnemigosFantasmas[i].y));

				if (alcanceAtaque <= 40 &&  diferencia < 50 && diferencia > 0) {
					console.log("Pega izq :c");
					idPega = i;
					totalEnemigosMuertos++;
				}

			}

		}
	}
}


	console.log(idPega);
	return idPega;
}


function toqueEnemigo(){
	if(numeroEscenario == 2){
	for (var i = 0; i < EnemigosNaranjas.length; i++) {
		if (!banderaMuerte && EnemigosNaranjas[i].status == 1) {
			var distanciaEnemigo = 0, alcanceEnemigo = 0;
			if(arriba){
				distanciaEnemigo =  (link.draw().y+coordy)-EnemigosNaranjas[i].y;
				alcanceEnemigo = Math.abs((link.draw().x+coordx)-(EnemigosNaranjas[i].x));

				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}else if(abajo){
				distanciaEnemigo = EnemigosNaranjas[i].y - (link.draw().y+coordy);
				alcanceEnemigo = Math.abs((link.draw().x+coordx)-(EnemigosNaranjas[i].x));
				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}else if(derecha){
				distanciaEnemigo = EnemigosNaranjas[i].x - (link.draw().x+coordx);
				alcanceEnemigo = Math.abs((link.draw().y+coordy)-(EnemigosNaranjas[i].y));
				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}else if(izquierda){
				distanciaEnemigo = (link.draw().x+coordx)-EnemigosNaranjas[i].x;
				alcanceEnemigo = Math.abs((link.draw().y+coordy)-(EnemigosNaranjas[i].y));
				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}

			if (banderaMuerte) {
				vidasLink.pop();

				if (vidasLink.length == 0) {
					acaboJuego = true;
				}
			}

		}

	}
}

if(numeroEscenario == 1){
	for (var i = 0; i < EnemigosSpider.length; i++) {
		if (!banderaMuerte && EnemigosSpider[i].status == 1) {
			var distanciaEnemigo = 0, alcanceEnemigo = 0;
			if(arriba){
				distanciaEnemigo =  (link.draw().y+coordy)-EnemigosSpider[i].y;
				alcanceEnemigo = Math.abs((link.draw().x+coordx)-(EnemigosSpider[i].x));

				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}else if(abajo){
				distanciaEnemigo = EnemigosSpider[i].y - (link.draw().y+coordy);
				alcanceEnemigo = Math.abs((link.draw().x+coordx)-(EnemigosSpider[i].x));
				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}else if(derecha){
				distanciaEnemigo = EnemigosSpider[i].x - (link.draw().x+coordx);
				alcanceEnemigo = Math.abs((link.draw().y+coordy)-(EnemigosSpider[i].y));
				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}else if(izquierda){
				distanciaEnemigo = (link.draw().x+coordx)-EnemigosSpider[i].x;
				alcanceEnemigo = Math.abs((link.draw().y+coordy)-(EnemigosSpider[i].y));
				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}

			if (banderaMuerte) {
				vidasLink.pop();

				if (vidasLink.length == 0) {
					acaboJuego = true;
				}
			}

		}

	}


}

if(numeroEscenario == 3){
	for (var i = 0; i < EnemigosFantasmas.length; i++) {
		if (!banderaMuerte && EnemigosFantasmas[i].status == 1) {
			var distanciaEnemigo = 0, alcanceEnemigo = 0;
			if(arriba){
				distanciaEnemigo =  (link.draw().y+coordy)-EnemigosFantasmas[i].y;
				alcanceEnemigo = Math.abs((link.draw().x+coordx)-(EnemigosFantasmas[i].x));

				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}else if(abajo){
				distanciaEnemigo = EnemigosFantasmas[i].y - (link.draw().y+coordy);
				alcanceEnemigo = Math.abs((link.draw().x+coordx)-(EnemigosFantasmas[i].x));
				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}else if(derecha){
				distanciaEnemigo = EnemigosFantasmas[i].x - (link.draw().x+coordx);
				alcanceEnemigo = Math.abs((link.draw().y+coordy)-(EnemigosFantasmas[i].y));
				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}else if(izquierda){
				distanciaEnemigo = (link.draw().x+coordx)-EnemigosFantasmas[i].x;
				alcanceEnemigo = Math.abs((link.draw().y+coordy)-(EnemigosFantasmas[i].y));
				if (alcanceEnemigo <=40 && distanciaEnemigo<20 && distanciaEnemigo>0) {
					banderaMuerte = true;
				}
			}

			if (banderaMuerte) {
				vidasLink.pop();

				if (vidasLink.length == 0) {
					acaboJuego = true;
				}
			}

		}

	}


}

if(numeroEscenario == 4){

		for (var i = 0; i < Fuego.length; i++) {
		if (!banderaMuerte && Fuego[i].status == 1) {
			var distanciaEnemigo = 0, alcanceEnemigo = 0;
			
				distanciaEnemigo =  (Fuego[i].linkX)- Math.abs((link.draw().x+coordx));
				alcanceEnemigo =  Math.abs((link.draw().y+coordy)-Fuego[i].linkY);

			//	console.log("distanciaEnemigo: "+ distanciaEnemigo);
			//	console.log("alcanceEnemigo: "+ alcanceEnemigo);

		if (alcanceEnemigo <= 48 &&  distanciaEnemigo < 28 && distanciaEnemigo > 0) {
					banderaMuerte = true;
					console.log("aqui?");
				}

			if (banderaMuerte) {
				vidasLink.pop();
				console.log('quita la PUTA VIDA');

				if (vidasLink.length == 0) {
					acaboJuego = true;
				}
			}

		}

	}



}
}
