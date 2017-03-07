$(document).ready(init);
    function init()
        {
            solicitarEstimado();
        }
    function solicitarEstimado()
        {
            $.ajax({
            url:"https://clientes.geekadvice.pe/api/estimado",
            data:{"tipo":1}
            }).success(function(_data){
            update(_data)
            })
        }
function update(_info)
{
    $("#calle").text(_info.destino);
    $("#precio").text(_info.estimado.moneda+_info.estimado.min+"-"+_info.estimado.max);
 //alert(_info.destino);
 //alert(_info.estimado.min)
}