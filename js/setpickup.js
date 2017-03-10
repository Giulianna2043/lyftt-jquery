$(document).ready(init);

function init()
{
        asignaEventoClick();
}

function asignaEventoClick(){
    var lista=$('li');
    $.each(lista,function(){
        $(this).on('click',onClickList)
    }); 
}
function onClickList(evt)
{
    var srcImg=$(evt.currentTarget).find('.imagencar').attr('src');
    localStorage.setItem('src',srcImg);
    
    //var code=$(evt.currentTarget).find('.codigo').text(); 
    var code=$(evt.currentTarget).find('#frase').text();
        
        
    localStorage.setItem('src',srcImg);
    localStorage.setItem('frase',code);
    
}


