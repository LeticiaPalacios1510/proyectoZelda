var Naranja = function(image, x, y, direccion, comienzaPatron, finPatron, positionImage,status){

	var image = image;
	var x = x;
	var y = y;
	var direccion = direccion;
	var comienzaPatron = comienzaPatron;
	var finPatron = finPatron;
	var positionImage = positionImage;
	var status = status;


	var draw = function(){

		return{
			x: x,
			y: y,
			image: image,
			direccion: direccion,
			comienzaPatron: comienzaPatron,
			finPatron: finPatron,
			positionImage : positionImage,
			status : status
		}
	}

	var drawAttack = function(){

		return{
			x: x,
			y: y,
			image: image[count]
		}
	}

	var update = function(){
		// count++;
		// if( count == image.length){
		// 	count = 0;
		// }
		
	}

	return{
		
		draw : draw,
		update : update
	}

};