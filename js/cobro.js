$(document).ready(init);
    function init()
        {
            solicitarEstimado();
        }
    function solicitarEstimado()
        {
            $.ajax({
            url:"https://clientes.geekadvice.pe/api/carrera",
            data:{"tipo":1}
            }).success(function(_data){
            update(_data)
            })
        }
function update(_info)
{
    $("#imagen").src(_info.conductor);
    $("#precio").text(_info.estimado.moneda+_info.estimado.min+"-"+_info.estimado.max);
 //alert(_info.destino);
 //alert(_info.estimado.min)
}



function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}