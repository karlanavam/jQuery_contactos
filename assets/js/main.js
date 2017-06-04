var contador = 0;

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
    $('#btnAgregarModal').click(imprimirContactos);
  });

var imprimirContactos = function(){
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

	var $spanContador = $('#aquiContador');
	
 
    //Imprimirlo
    $espacioContactos.append($contenedorContacto);
    $contenedorContacto.append($parrafoNombres);
    
    $textoNombre.val('');
    $textoApellido.val('');
    $textoTelefono.val('');
	
	contador++;
	$spanContador.text(contador);
}



