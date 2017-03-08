$(document).ready(init);
    function init()
        {
            solicitarEstimado();
        }
    function solicitarEstimado()
        {
            $.ajax({
            url:"https://clientes.geekadvice.pe/api/carrera",
            data:{"tipo":2}
            }).done(function(_data){
            update(_data) 
            });
        }
function update(_info)
{
    $("#imagen").attr({'src':_info.conductor.url});
    $("#nuevo").text(_info.conductor.name);
 //alert(_info.destino);
 //alert(_info.estimado.min)
}



function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}

