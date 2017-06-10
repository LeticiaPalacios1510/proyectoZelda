var song = new Audio();
song.src = "musica/sound/musica.mp3";

	let Escenario;
	let bosque = [
	    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
	    [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
	    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 10],
	    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 8],
	    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 11],
	    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
	    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
	    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];
	let pradera = [
	    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
	    [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11],
	    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 1],
	    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];
	let castillo = [
	    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 2],
	    [2, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
	    [2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
	    [0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2],
	    [0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2],
	    [2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2],
	    [2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2],
	    [2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 10],
	    [2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 8],
	    [2, 0, 0, 0, 2, 2, 2, 0, 7, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 11],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];

	let jefe = [
	    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 2],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 2],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 4, 2],
	    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 2],
	    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	];
	//variables de escenario
	let colum = 30,
	    linea = 18,
	    pox = 0,
	    poy = 0,
	    pasto, piedra, arbusto, piedraMedio, alfombraD, alfombraC, alfombraI, alfombra,
	    link, tronquito, pastito, tronquitoAplastado, florecita, skull, hole;
	// Variables de Link
	let coordx = 1,
	    coordy = 100,
	    auxcoordx = 0,
	    auxcoordy = 0,
	    face = 0,
	    espadazo = 0,
	    flechazo = 0,
	    positionSprite, vidasLink = [],
	    linkImageAttack = [],
	    linkSprites = [],
	    linkImage;
	//variables Enemigos
	let naranjaX = 80,
	    naranjaY = 30,
	    auxNaranjaX = 0,
	    auxNaranjaY = 0,
	    caminoOtro = false,
	    naranjaImage, fantasmaImage, positionNaranja, naranjaImages = [],
	    EnemigosNaranjas = [],
	    spiderImages = [],
	    EnemigosSpider = [],
	    dragon,
	    golpeDragon =0,
	    dragonImages = [],
	    dragonImage,
	    contFuego=0,
	    positionDragon,
	    siAtaca,
	    spiderImage,
	    positionFantasma;
	    fantasmasImages = [],
	    EnemigosFantasmas = [];
	    
	//Variables 
	let positionAttack = 0;
	let positionMatrizx = 0;
	let positionMatrizy = 5;
	let contNar = 0;
	let numeroEscenario = 1;
	let ataque = false;
	let arriba = true;
	let abajo = false;
	let derecha = false;
	let izquierda = false;
	let vista = 2;
	let contFlecha = 0;
	let auxArray = [];
	let animacionEspada = [];
	let animacionArco = [];
	let Flechas = [];
	let Fuego = [];
	let banderaMuerte = false
	let contadorTiempoMuerte = 0;
	let acaboJuego = false;
	let totalEnemigosMuertos = 0;
	let imagen = [];
	let BanderaCambiaNivel = false;
	var setup = function() {
		song.play();
	    createCanvas(1200, 700);
	    pasto = loadImage('img/Escenario/p.png');
	    arbusto = loadImage('img/Escenario/pA3.png');
	    piedra = loadImage('img/Escenario/malvada2.png');
	    piedraMedio = loadImage('img/Escenario/malvada3.png');
	    alfombraD = loadImage('img/Escenario/al2.png');
	    alfombraT = loadImage('img/Escenario/a2.png');
	    alfombraD = loadImage('img/Escenario/a3.png');
	    pisoAzul = loadImage('img/Escenario/pisoAzul.png');
	    pisoCalaca = loadImage('img/Escenario/pisoCalaca.png');
	    centro = loadImage('img/Escenario/centro.png');
	    alfombraAbajo = loadImage('img/Escenario/a5.png');
	    skull = loadImage('img/Escenario/skull2.png');
	    hole = loadImage('img/Escenario/hole2.png')
	    tronquito = loadImage('img/Escenario/tronquito.png');
	    pastito = loadImage('img/Escenario/pastito.png');
	    florecita = loadImage('img/Escenario/florecita.png');
	    tronquitoAplastado = loadImage('img/Escenario/tronquitoAplastado.png');
	    positionSprite = 0;
	    positionNaranja = 0;
	    //FRENTE 
	    //0-9
	    linkSprites.push(loadImage('img/Link/frente1.png'));
	    linkSprites.push(loadImage('img/Link/frente2.png'));
	    linkSprites.push(loadImage('img/Link/frente3.png'));
	    linkSprites.push(loadImage('img/Link/frente4.png'));
	    linkSprites.push(loadImage('img/Link/frente5.png'));
	    linkSprites.push(loadImage('img/Link/frente6.png'));
	    linkSprites.push(loadImage('img/Link/frente7.png'));
	    linkSprites.push(loadImage('img/Link/frente8.png'));
	    linkSprites.push(loadImage('img/Link/frente9.png'));
	    linkSprites.push(loadImage('img/Link/frente10.png'));
	    //DERECHA
	    ////10-19
	    linkSprites.push(loadImage('img/Link/right1.png'));
	    linkSprites.push(loadImage('img/Link/right2.png'));
	    linkSprites.push(loadImage('img/Link/right3.png'));
	    linkSprites.push(loadImage('img/Link/right4.png'));
	    linkSprites.push(loadImage('img/Link/right5.png'));
	    linkSprites.push(loadImage('img/Link/right6.png'));
	    linkSprites.push(loadImage('img/Link/right7.png'));
	    linkSprites.push(loadImage('img/Link/right8.png'));
	    linkSprites.push(loadImage('img/Link/right9.png'));
	    linkSprites.push(loadImage('img/Link/right10.png'));
	    //IZQUIERDA 
	    ////20-29
	    linkSprites.push(loadImage('img/Link/left1.png'));
	    linkSprites.push(loadImage('img/Link/left2.png'));
	    linkSprites.push(loadImage('img/Link/left3.png'));
	    linkSprites.push(loadImage('img/Link/left4.png'));
	    linkSprites.push(loadImage('img/Link/left5.png'));
	    linkSprites.push(loadImage('img/Link/left6.png'));
	    linkSprites.push(loadImage('img/Link/left7.png'));
	    linkSprites.push(loadImage('img/Link/left8.png'));
	    linkSprites.push(loadImage('img/Link/left9.png'));
	    linkSprites.push(loadImage('img/Link/left10.png'));
	    //ESPALDA 
	    ////30-39
	    linkSprites.push(loadImage('img/Link/espalda1.png'));
	    linkSprites.push(loadImage('img/Link/espalda2.png'));
	    linkSprites.push(loadImage('img/Link/espalda3.png'));
	    linkSprites.push(loadImage('img/Link/espalda4.png'));
	    linkSprites.push(loadImage('img/Link/espalda5.png'));
	    linkSprites.push(loadImage('img/Link/espalda6.png'));
	    linkSprites.push(loadImage('img/Link/espalda7.png'));
	    linkSprites.push(loadImage('img/Link/espalda8.png'));
	    linkSprites.push(loadImage('img/Link/espalda9.png'));
	    linkSprites.push(loadImage('img/Link/espalda10.png'));
	    //0-6  ATAQUE LINK-- Derecha Espada
	    linkImageAttack.push(loadImage('img/Link/ed1.png'));
	    linkImageAttack.push(loadImage('img/Link/ed2.png'));
	    linkImageAttack.push(loadImage('img/Link/ed3.png'));
	    linkImageAttack.push(loadImage('img/Link/ed4.png'));
	    linkImageAttack.push(loadImage('img/Link/ed5.png'));
	    linkImageAttack.push(loadImage('img/Link/ed6.png'));
	    linkImageAttack.push(loadImage('img/Link/ed7.png'));
	    ///7 -13 ATAQUE LINK -- IZQUIERDA ESPADA
	    linkImageAttack.push(loadImage('img/Link/edd1.png'));
	    linkImageAttack.push(loadImage('img/Link/edd2.png'));
	    linkImageAttack.push(loadImage('img/Link/edd3.png'));
	    linkImageAttack.push(loadImage('img/Link/edd4.png'));
	    linkImageAttack.push(loadImage('img/Link/edd5.png'));
	    linkImageAttack.push(loadImage('img/Link/edd6.png'));
	    linkImageAttack.push(loadImage('img/Link/edd7.png'));
	    //14- 20 ATAQUE LINK FRENTE ESPADA
	    linkImageAttack.push(loadImage('img/Link/ee1.png'));
	    linkImageAttack.push(loadImage('img/Link/ee2.png'));
	    linkImageAttack.push(loadImage('img/Link/ee3.png'));
	    linkImageAttack.push(loadImage('img/Link/ee4.png'));
	    linkImageAttack.push(loadImage('img/Link/ee5.png'));
	    linkImageAttack.push(loadImage('img/Link/ee6.png'));
	    linkImageAttack.push(loadImage('img/Link/ee7.png'));
	    //21- 27 ATAQUE LINK FRENTE ESPADA
	    linkImageAttack.push(loadImage('img/Link/e1.png'));
	    linkImageAttack.push(loadImage('img/Link/e2.png'));
	    linkImageAttack.push(loadImage('img/Link/e3.png'));
	    linkImageAttack.push(loadImage('img/Link/e4.png'));
	    linkImageAttack.push(loadImage('img/Link/e5.png'));
	    linkImageAttack.push(loadImage('img/Link/e6.png'));
	    linkImageAttack.push(loadImage('img/Link/e7.png'));
	    //28-34 ATAQUE LINK ARCO DERECHA
	    linkImageAttack.push(loadImage('img/Link/arco/arcR1.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcR2.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcR3.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcR4.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcR5.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcR6.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcR7.png'));
	    //35-41 ATAQUE LINK ARCO IZQUIERDA
	    linkImageAttack.push(loadImage('img/Link/arco/arcL1.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcL2.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcL3.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcL4.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcL5.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcL6.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcL7.png'));
	    //42-49 ATAQUE LINK ARCO FRENTE
	    linkImageAttack.push(loadImage('img/Link/arco/arcD1.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcD2.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcD3.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcD4.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcD5.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcD6.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcD7.png'));
	    //50-57 ATAQUE LINK ARCO ABAJO
	    linkImageAttack.push(loadImage('img/Link/arco/arcU1.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcU2.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcU3.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcU4.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcU5.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcU6.png'));
	    linkImageAttack.push(loadImage('img/Link/arco/arcU7.png'));
	    //IMAGENES FLECHA
	    flechaR = loadImage('img/Link/arco/arrow/arrowR.png');
	    flechaL = loadImage('img/Link/arco/arrow/arrowL.png');
	    flechaT = loadImage('img/Link/arco/arrow/arrowU.png');
	    flechaD = loadImage('img/Link/arco/arrow/arrowD.png');
	    //ATAQUE NARANJA
	    naranjaImages.push(loadImage('img/Enemigos/n1.png'));
	    naranjaImages.push(loadImage('img/Enemigos/n2.png'));
	    naranjaImages.push(loadImage('img/Enemigos/n3.png'));
	    naranjaImages.push(loadImage('img/Enemigos/n4.png'));
	    naranjaImages.push(loadImage('img/Enemigos/n5.png'));
	    naranjaImages.push(loadImage('img/Enemigos/n6.png'));
	    naranjaImages.push(loadImage('img/Enemigos/n7.png'));
	    naranjaImages.push(loadImage('img/Enemigos/n8.png'));

	    //Araña
	    spiderLeft = loadImage('img/Enemigos/spider_left.png');
	    spiderDown = loadImage('img/Enemigos/spider_down.png');
	    spiderRight = loadImage('img/Enemigos/spider_right.png');
	    spiderUp = loadImage('img/Enemigos/spider_up.png');
	    spiderImages.push(loadImage('img/Enemigos/spider_left.png'));
	    spiderImages.push(loadImage('img/Enemigos/spider_down.png'));
	    spiderImages.push(loadImage('img/Enemigos/spider_right.png'));
	    spiderImages.push(loadImage('img/Enemigos/spider_up.png'));

	    //ANIMACION FANTASMA
	    fantasmasImages.push(loadImage('img/Enemigos/fantasmaR1.png'));
	    fantasmasImages.push(loadImage('img/Enemigos/fantasmaR2.png'));
	    fantasmasImages.push(loadImage('img/Enemigos/fantasmaL1.png'));
	    fantasmasImages.push(loadImage('img/Enemigos/fantasmaL2.png'));

	    //DRAGON

	    dragonImages.push(loadImage('img/Enemigos/dragon1.png'));
	    dragonImages.push(loadImage('img/Enemigos/dragon2.png'));
	    dragonImages.push(loadImage('img/Enemigos/dragon3.png'));
	    dragonImages.push(loadImage('img/Enemigos/dragon4.png'));
	    dragonImages.push(loadImage('img/Enemigos/dragonExtra1.png'));
	    dragonImages.push(loadImage('img/Enemigos/dragonExtra2.png'))

	    bolaFuego = loadImage('img/Escenario/bolaFuego.png');


	    /* ------------ Arreglo vidas ------------*/
	    var posicion_corazon_x = 0;
	    for (var i = 0; i < 3; i++) {
	        var vida = {
	            x: (20 + posicion_corazon_x),
	            y: 10,
	            image: loadImage('img/Escenario/heart.png')
	        };
	        vidasLink.push(vida);
	        posicion_corazon_x += 28;
	    }
	    imagen.push(loadImage('img/Escenario/key.png'));
	    imagen.push(loadImage('img/Escenario/key_block.png'));
	    link = new Link(linkImage, coordx, coordy);
	    creaEnemigos();
	    creaSpider();
	    creaFantasmas();
	    creaDragon();
	    console.log(numeroEscenario)
	    Escenario = bosque;
	}
	var draw = function() {
	    frameRate(20);
	    if (numeroEscenario == 1) {
	        pox = 0;
	        poy = 0;
	        for (var i = 0; i < linea; i++) {
	            for (var j = 0; j < colum; j++) {
	                switch (bosque[i][j]) {
	                    case 0:
	                        image(pasto, pox, poy, 40, 40);
	                        break;
	                    case 1:
	                        image(arbusto, pox, poy, 40, 40);
	                        break;
	                     case 8:
	                        image(centro, pox, poy, 40, 40);
	                        break;
	                    case 10:
	                        image(alfombraD, pox, poy, 40, 40);
	                        break;
	                    case 11:
	                        image(alfombraAbajo, pox, poy, 40, 40);
	                        break;
	                }
	                pox += 40;
	            }
	            poy += 40;
	            pox = 0;
	        }
	    } else if (numeroEscenario == 2) {
	        pox = 0;
	        poy = 0;
	        for (var i = 0; i < linea; i++) {
	            for (var j = 0; j < colum; j++) {
	                switch (pradera[i][j]) {
	                    case 0:
	                        image(pastito, pox, poy, 40, 40);
	                        break;
	                    case 1:
	                        image(tronquito, pox, poy, 40, 40);
	                        break;
	                    case 2:
	                        image(florecita, pox, poy, 40, 40);
	                        break;
	                    case 3:
	                        image(tronquitoAplastado, pox, poy, 40, 40);
	                        break;
	                    case 8:
	                        image(centro, pox, poy, 40, 40);
	                        break;
	                    case 10:
	                        image(alfombraD, pox, poy, 40, 40);
	                        break;
	                    case 11:
	                        image(alfombraAbajo, pox, poy, 40, 40);
	                        break;
	                }
	                pox += 40;
	            }
	            poy += 40;
	            pox = 0;
	        }
	    } else if (numeroEscenario == 3){
	        pox = 0;
	        poy = 0;
	        for (var i = 0; i < linea; i++) {
	            for (var j = 0; j < colum; j++) {
	                switch (castillo[i][j]) {
	                    case 0:
	                        image(pisoAzul, pox, poy, 40, 40);
	                        break;
	                    case 1:
	                        image(piedra, pox, poy, 40, 40);
	                        break;
	                    case 2:
	                        image(piedraMedio, pox, poy, 40, 40);
	                        break;
	                    case 7:
	                        image(pisoCalaca, pox, poy, 40, 40);
	                        break;
	                    case 8:
	                        image(centro, pox, poy, 40, 40);
	                        break;
	                    case 10:
	                        image(alfombraD, pox, poy, 40, 40);
	                        break;
	                    case 11:
	                        image(alfombraAbajo, pox, poy, 40, 40);
	                        break;
	                }
	                pox += 40;
	            }
	            poy += 40;
	            pox = 0;
	        }
	    }else if (numeroEscenario == 4){
	        pox = 0;
	        poy = 0;
	        for (var i = 0; i < linea; i++) {
	            for (var j = 0; j < colum; j++) {
	                switch (jefe[i][j]) {
	                    case 0:
	                        image(pisoAzul, pox, poy, 40, 40);
	                        break;
	                    case 1:
	                        image(piedra, pox, poy, 40, 40);
	                        break;
	                    case 2:
	                        image(piedraMedio, pox, poy, 40, 40);
	                        break;
	                     case 3:
	                     	image(hole, pox, poy, 40, 40);
	                     break;
	                     case 4:
	                     	 image(skull, pox, poy, 40, 40);
	                     break;
	                    case 7:
	                        image(pisoCalaca, pox, poy, 40, 40);
	                        break;
	                    case 8:
	                        image(centro, pox, poy, 40, 40);
	                        break;
	                    case 10:
	                        image(alfombraD, pox, poy, 40, 40);
	                        break;
	                    case 11:
	                        image(alfombraAbajo, pox, poy, 40, 40);
	                        break;
	                }
	                pox += 40;
	            }
	            poy += 40;
	            pox = 0;
	        }
	    }
	    moveLink();
	    start();
	    if(acaboJuego){
	    	textSize(60);
	    	fondo=loadImage('img/Escenario/gameOver.png');
	    	text("GAME OVER",250,400);

	    }
	    else if (!acaboJuego) {
	        /* --- Imprimir link ---*/
	        if (!ataque) {
	            if (!banderaMuerte) {
	                image(linkSprites[positionSprite], link.draw().x + coordx, link.draw().y + coordy);
	                link.update();
	            } else {
	                contadorTiempoMuerte++;
	                if ((contadorTiempoMuerte % 5) == 0) {
	                    image(linkSprites[positionSprite], link.draw().x + coordx, link.draw().y + coordy);
	                }
	                if (contadorTiempoMuerte >= 60) {
	                    banderaMuerte = false;
	                    contadorTiempoMuerte = 0;
	                }
	            }
	        } else {
	            image(linkImageAttack[positionAttack], link.draw().x + coordx, link.draw().y + coordy);
	            link.update();
	            ataque = false;
	        }
	        /*-----*/
	        if (numeroEscenario == 2) {
	            /* --- Imprime enemigos ---*/
	            for (var i = 0; i < EnemigosNaranjas.length; i++) {
	                if (EnemigosNaranjas[i].status == 1) {
	                    image(naranjaImages[EnemigosNaranjas[i].positionImage], EnemigosNaranjas[i].x, EnemigosNaranjas[i].y);
	                    EnemigosNaranjas[i].update();
	                }
	            }
	            moverEnemigoNaranja();
	        }
	        if (numeroEscenario == 1) {
	            /* --- Imprime enemigos ---*/
	            for (var i = 0; i < EnemigosSpider.length; i++) {
	                if (EnemigosSpider[i].status == 1) {
	                    image(spiderImages[EnemigosSpider[i].positionImage], EnemigosSpider[i].x, EnemigosSpider[i].y);
	                    EnemigosSpider[i].update();
	                }
	                mueveAraña();
	            }
	        }

	        if(numeroEscenario == 3){
	        		/* --- Imprime enemigos ---*/
	            for (var i = 0; i < EnemigosFantasmas.length; i++) {
	                if (EnemigosFantasmas[i].status == 1) {
	                    image(fantasmasImages[EnemigosFantasmas[i].positionImage], EnemigosFantasmas[i].x, EnemigosFantasmas[i].y);
	                    EnemigosFantasmas[i].update();
	                }
	                mueveFantasmas();
	            }

	        }
	        if(numeroEscenario == 4){
	        		/* --- Imprime enemigos ---*/
	            
	             if (dragon.status == 1) {
	                    image(dragonImages[dragon.positionImage], dragon.x, dragon.y);
	                    dragon.update();
	                }
	                mueveDragon();
	            

	        }


	        for (var i = 0; i < Flechas.length; i++) {
	            if (Flechas[i].status == 1) {
	                image(Flechas[i].image, Flechas[i].linkX, Flechas[i].linkY);
	                Flechas[i].update();
	                //	console.log("df: " + (Flechas[i].draw().linkX));
	            }
	        }

	         for (var i = 0; i < Fuego.length; i++) {
	            if (Fuego[i].status == 1) {
	                image(Fuego[i].image, Fuego[i].linkX, Fuego[i].linkY);
	                Fuego[i].update();
	                //	console.log("df: " + (Flechas[i].draw().linkX));
	            }
	        }
	        mueveAtaque();
	        /* -------*/
	        /* --- Imprime imagenes de vida ---*/
	        for (var i = 0; i < vidasLink.length; i++) {
	            image(vidasLink[i].image, vidasLink[i].x, vidasLink[i].y);
	        }
	        /* -------*/
	        toqueEnemigo();
	        image(imagen[1], 1000, 10);
	    }
	    if (numeroEscenario == 1) {
	        if (totalEnemigosMuertos >= 3) {
	            image(imagen[0], 1000, 10);
	            if (BanderaCambiaNivel) {
	                cambiarNivel();
	            }
	        }
	    }
	    if (numeroEscenario == 2) {
	        if (totalEnemigosMuertos >= 2) {
	            image(imagen[0], 1000, 10);
	            if (BanderaCambiaNivel) {
	                cambiarNivel();
	            }
	        }
	    }

	    if(numeroEscenario == 3){
	    	 if (totalEnemigosMuertos >= 3) {
	            image(imagen[0], 1000, 10);
	            if (BanderaCambiaNivel) {
	                cambiarNivel();
	            }
	        }
	    }
	}