$(document).ready(function()
{
   //console.log(init);
    var paises=
        [{"nombre":"Australia", "phone_code": "355", "imagen":'iconos/paises/au.png', "letra":'A<br>B'},   
        {"nombre":"Canada","phone_code": "49" , "imagen": 'iconos/paises/ca.png',"letra":'C<br>D'},  
          { "nombre":"China","phone_code": "213","imagen": 'iconos/paises/cn.png',"letra":'E<br>F'},{ "nombre":"Francia","phone_code": "213","imagen": 'iconos/paises/fr.png',"letra":'G<br>H'},{ "nombre":"India","phone_code": "213","imagen": 'iconos/paises/in.png',"letra":'I<br>J'},{ "nombre":"Japon","phone_code": "213","imagen": 'iconos/paises/jp.png',"letra":'K<br>L'},{ "nombre":"Mexico","phone_code": "213","imagen": 'iconos/paises/mx.png',"letra":'M<br>N'},{ "nombre":"Puerto Rico","phone_code": "213","imagen": 'iconos/paises/pa.png',"letra":'O<br>P'},{ "nombre":"United Kingdom","phone_code": "213","imagen": 'iconos/paises/cn.png',"letra":'U<br>Z'},
            ];
    
    //console.log(paises[0].nombre);
    var listaPaises= $("#lista-paises");
    //console.log(listaPaises);
        for(var i  in paises)
        {
		
        var html='<a href="signup.html"> <li><img class="imagen"  src="'+paises[i].imagen+'" alt="">'+paises[i].nombre+'<span class="codigo">'+paises[i].phone_code+'</span></li></a>';
    
		listaPaises.html(html);
	}
//var text = document.getElementsByTagName("pre")[0].innerHTML;
//After a little research on Stack I was able to come up with this equivalent:

///var text = $(data).$('pre')[0].html();
    
    //var link =document.getElementsByTagName("li");
    var link =$("li"); 
    //console.log(link);
    // link.each()funcion(){
   // console.log(this.);
//}
    for (var i=0 ;i<link.length;i++){
		link[i].on('click', onLinkClick);
    }

});

function onLinkClick(evt)
{   
    var imgSrc=evt.currentTarget(".imagen")[0].src;
    //console.log(imgSrc);
    var codigo=evt.currentTarget(".codigo")[0].textContent;
    localStorage.setItem('srcimg',imgSrc);
    localStorage.setItem('code',codigo);
    

}

















