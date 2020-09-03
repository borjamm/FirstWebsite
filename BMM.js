var tit = document.getElementById("changes");
var iterator = 0;
function changes(){
 	var tittles = document.getElementById("social");
 	if(tittles !== null){
 		tittles.parentNode.removeChild(tittles);
 	}

 	var h4 = document.createElement('h4');
 	h4.setAttribute("id","social");

	var elementoNode = document.createElement('span');
	var textoNode = document.createTextNode('\u00a0');
	elementoNode.appendChild(textoNode);

	
	//const choices = ["Ingeniero inform&aacutetico...", "Desarrollador web...", "Dise&ntildeador web..."];
	var choices = ["Estudiante de inform\u00e1tica", "Estudiante de desarrollador web", "Estudiante de dise\u00f1ador web"];
	if(iterator > 2){
		iterator = 0;
	}
	//tittles.innerHTML = choices[iterator++];
	var texto = document.createTextNode(choices[iterator++]);
	h4.appendChild(texto);
	h4.appendChild(elementoNode);
	tit.appendChild(h4);

	//console.log(tit);
}


function validarFormulario(){
    let error = true;
    var cont = new Array(12);
   
    if(document.getElementById("nombre").value.length < 2 || document.getElementById("nombre").value.length > 32){
        error = false;
        cont[0] = 1;
        cont[1] = "¡Debe introducir un valor entre 2 a 32 caracteres!";
    }
    
    if(document.getElementById("direccion").value.length < 2 || document.getElementById("direccion").value.length > 32 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/).test(document.getElementById("direccion").value)){
        error = false;
        cont[2] = 1;
        cont[3] = "¡Debe introducir una dirección válida entre 2 a 32 caracteres!";
    }
    
    if(document.getElementById("descripcion").value.length < 12 || document.getElementById("descripcion").value.length > 1024){
        error = false;
        cont[4] = 1;
        cont[5] = "¡Debe introducir un valor entre 12 a 1024 caracteres!";
    }
    
    
    if(error !== true){
    	var cuenta = 0;
    	var err0 = 0;
    	var err2 = 0;
    	var eer4 = 0;
        for(var k=0; k<cont.length; k++){

            var image_error = document.getElementById("img"+k);
            if (image_error !== null) image_error.parentNode.removeChild(image_error);


            var parrafo = document.getElementById("span"+k);
            if(parrafo !== null){
                parrafo.parentNode.removeChild(parrafo);
            }
        }
        
        for(var i=0; i<cont.length; i++){
            if(cont[i] == 1){
                if ("Error"+i != "Error4"){
                    var img_error = document.createElement('img');
                    img_error.setAttribute("id", "img"+i);
                    img_error.setAttribute("src", "images/cancel.png");
                    img_error.style.display="inline-block";
                    document.getElementById("Error"+i).appendChild(img_error);
                }
                var elementoNode = document.createElement('span');
                elementoNode.setAttribute("id", "span"+i);
                elementoNode.setAttribute("class", "ErrorJS");
                var textoNode = document.createTextNode(cont[i+1]);
                elementoNode.appendChild(textoNode);
                document.getElementById("Error"+i).appendChild(elementoNode);

                switch("Error"+i){

                	case "Error0":  var input_border = document.getElementById("nombre");
                					input_border.style.border="2px solid red";
                					err0 = 1;
                					break;
                	case "Error2":  var input_border = document.getElementById("direccion");
                					input_border.style.border="2px solid red";
                					err2 = 1;
                					break;
                	case "Error4": 	var input_border = document.getElementById("asunto");
                					input_border.style.border="2px solid red";
                					var input_border_text = document.getElementById("descripcion");
                					input_border_text.style.border = "2px solid red";

                                    var image_error_text = document.getElementById("image-error-text");
                                    image_error_text.style.display = "inline-block";
                					err4 = 1;
                					break; 
                }
                cuenta++;
            }
        }
        
        if (err0 == 0){
        	var input0 = document.getElementById("nombre");
            input0.style.border="2px solid black";
        }

        if (err2 == 0){
        	var input2 = document.getElementById("direccion");
            input2.style.border="2px solid black";
        }

        if (err4 == 0){
        	var input4 = document.getElementById("asunto");
            input4.style.border="2px solid black";
            var input4_1 = document.getElementById("descripcion");
            input4_1.style.border = "2px solid black";
            var image_error_text = document.getElementById("image-error-text");
            image_error_text.style.display = "none";
        }


        if (cuenta > 0){
        	var moviles_height = document.querySelector(".contact-form");
            moviles_height.style.height="900px";
            cuenta = 0;
        }

        err0 = 0;
        err2 = 0;
        err4 = 0;
    }
    return error;
}

contador = 1;
function muestraMenu(){
	var menu = document.querySelector(".menu-movil-true");
	if (contador == 1){
		menu.style.display="block";
		contador=0;
	}else{
		menu.style.display="none";
		contador=1;
	}
}
