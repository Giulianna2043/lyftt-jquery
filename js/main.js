function init(){}

// Solo permite ingresar numeros.
function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}
//validacion de nombres
function validacionNomb(event){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        palabra = window.event.keyCode;

        if((palabra>=65 && palabra<=90)||palabra==8||palabra==32||palabra.length<30){

        }
        else
        {
            // = "";
            //alert("Este campo solo permite caracteres de la A-Z");
            event.preventDefault();
        }

}
