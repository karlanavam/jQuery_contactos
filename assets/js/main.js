var contador = 0;

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
    $('#btnAgregarModal').click(imprimir);
  });

var imprimir = function(){
    //Recoge datos
    var $textoNombre = $("#icon_prefix");
    var $nombre = $textoNombre.val();
    
    var $textoApellido = $("#last_name");
    var $apellido = $textoApellido.val();
    
    var $textoTelefono = $("#icon_telephone");
    var $telefono = $textoTelefono.val();
    
    //Crea el espacio para imprimir
    var $espacioContactos = $("#contactosAgregados");
    
    //Crear espacios individuales para contactos
    var $contenedorContacto = $('<div />');
    var $parrafoNombres = $('<p>' + $nombre + ' ' + $apellido  + ' - ' + $telefono + '</p>');
    
    
    var $contador = $('<h3>' +  'Total de contactos agregados: ' + $contador + '</h3>');
   
 
    //Imprimirlo
    $espacioContactos.append($contenedorContacto);
    $contenedorContacto.append($parrafoNombres);
  
    
    //Quitas carácteres a inputs
    $textoNombre.val('');
    $textoApellido.val('');
    $textoTelefono.val('');
    
    
    contador++;
    console.log(contador);
}

