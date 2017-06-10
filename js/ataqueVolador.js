var AtaqueVolador = function(image, x, y,linkX, linkY, direccion, status){

	var image = image;
	var x = x;
	var y = y;
	var linkX = linkX;
	var linkY = linkY;
	var direccion = direccion;
	var status = status;


	var draw = function(){

		return{
			x: x,
			y: y,
			image: image,
			linkX : linkX,
			linkY : linkY,
			direccion : direccion,
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