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
    $("#dolar").text(_info.final);
 //alert(_info.destino);
 //alert(_info.estimado.min)
}
//{"estimado":{"min":null,"max":null,"moneda":"$"},"final":0,"conductor":{"name":"Maricela Darwinowa","url":"https:\/\/0.academia-photos.com\/34959676\/10181871\/11362172\/s200_maricela.alvarez_drobush.jpg"}}



function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}

