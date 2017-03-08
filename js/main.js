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


$(document).ready(function()
    {
    $("#name").keyup(validacionNombre);
   // $("#lastname").keyup(validacionApellido);
    $("#input-email").keyup(validacionEmail);
   // $("#input-password").keyup(validacionPassword);
   // $("#select").keyup(validateOption)
});

function validacionNombre(){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
    var nombre = $("#name");

        if(nombre.val() !="")
        {
        nombre.val(convertirMayus(nombre.val()));
        }

        else
        { 
        alert("Campo requerido");
        }
    }




//validacion email
function validacionEmail(){
    var email = $("#input-email").val();
    //var texto5="Verifique su e-mail";
//console.log("hshshsh");
    if (email!=/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(email))
        {
            alert("Campo requerido");
        }

     else
        {
             if (email.length==0)
            {
                alert("Campo requerido");
            }
        }
}


function convertirMayus(texto){
    
    var nombreArray = texto.split("");
    var primeraLetra = nombreArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio = false;

    for(var i=1; i<nombreArray.length; i++) {

        if(espacio){
            mayuscula += nombreArray[i].toUpperCase();
            espacio = false;
        } else {
            mayuscula += nombreArray[i];
            if(nombreArray[i] == " ")
                espacio = true;
        }
    }
    
    return mayuscula;
}


