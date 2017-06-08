


$(document).ready(function()
{
	$('.registro-display').on('click', function()
	{
		$('.submenu-hijo2').slideToggle('slow');
	});
});

$(document).ready(function()
{
	$('.nombre-perfil').on('click', function()
	{
		$('.submenu-hijo').slideToggle('slow');
	});
});

/////////////////////////////////////////////////////////
//////////// Registro y login de un usuario en el sistema
/////////////////////////////////////////////////////////

$('#registroIng').validate({
	rules:{
		nombreing :{required:true },
		apellidoing:{required:true},
		email:{required:true,email:true},
		fecha:{required:true},
		cedula:{required:true,number:true},
		password:{required:true},
		password_re:{required:true, equalTo:"#password"}
	},
	messages:
  {
    nombreing :"Nombre Vacio",
		apellidoing:"Apellido vacio",
		email:"Email vacio o no valido",
		fecha:"fecha vacia",
		cedula:"Cedula vacia",
		password:"contraseña vacia",
		password_re:"contraseñas no coinciden"
	},
submitHandler: function(form){
	console.log('llegamos hast aqui');


		$.ajax({
			url: $('#registroIng').attr('action'),
			method:'post',
			data:$('#registroIng').serialize(),
			success : function(data)
			{
				$('#success').html(data); // cambiar los .val
				// $('#user').val('')
				// $('#email').val('')
				// $('#direccion').val('')
				// $('#telefono').val('')
				// $('#cedula').val('')
				// $('#password').val('')
				// $('#password_re').val('')
				// //$('#myModalRegistro').modal('hide')
			}
		});
 }
});

$('#loginData').validate({
	rules:{
		usuario :{required:true , email:true},
		pass:{required:true },
	},
	messages:
	{
		usuario : "Email vacio o invalido",
		pass: "Contraseña Vacia"
	},
submitHandler: function(form){
	var formulario = $('#loginData');	
	console.log('llegamos a logi');
 $.ajax({
	url: formulario.attr('action'),
	method:'post',
	data:formulario.serialize(),
 success : function(data)
	{
		var obj = JSON.parse(data);
    if(obj.login==true)
    {
      document.location.href='perfil_ing.php';
    } 
		else
		{
			$('#div_error_login').html(obj.error);
			$('#usuario').val('')
			$('#pass').val('')
		}
	}
});
}
});
/////////////////////////////////////////////////////////
//////////// termina Registro y login de un usuario en el sistema
/////////////////////////////////////////////////////////







/////////////////////////////////////////////////////////
//////////// CRUD sobre las obras del sistema
/////////////////////////////////////////////////////////



// Permite abrir el modal con la informacion de una obra para eliminar
$('#dataDelete').on('show.bs.modal', function(event){

	var este=$(this);
  console.log('elimnar');	
  var button=$(event.relatedTarget);
	var id=button.data('id');

	var modal = $('#dataDelete');

  modal.find('#IDeliminar').val(id);	
	
});


// Permite abrir el modal con la informacion de una obra para modificar
$('#modalobra').on('show.bs.modal', function(event){

	var este=$(this);
  console.log('actualizaa');
  var button=$(event.relatedTarget);
	var id=button.data('id');
	var nombre = button.data('nombre');
	var fechaini = button.data('fechaini');
	var fechafin = button.data('fechafin');

	console.log(nombre);
	console.log(fechafin);
	console.log(fechaini);

	var modal = $('#modalobra')	;

  modal.find('#ID').val(id);	
	modal.find('#nombreobra').val(nombre);
	modal.find('#iniobra').val(fechaini);
	modal.find('#finobra').val(fechafin);
});



// Permite modificar una obra
$('#modificarObra').validate({
	rules:{
		nombreobra :{required:true},
		iniobra:{required:true},
		finobra:{required:true },
	},
	messages:
	{
		nombreobra : "Nombre vacio",
		iniobra: "Fecha Vacia",
		finobra: "Fecha Vacia",
	},
submitHandler: function(form){
	var formulario = $('#modificarObra');	
	console.log('llegamos a modificar');
 $.ajax({
	url: formulario.attr('action'),
	method:'post',
	data:formulario.serialize(),
 success : function(data)
	 {
			$('#div_ajax_update').html(data);

	 }
  });
 }
});

// permite registrar una obra
$('#registrarObra').validate({
	rules:{
		nameobra :{required:true},
		inicioobra:{required:true},
		finalobra:{required:true },
	},
	messages:
	{
		nameobra : "Nombre vacio",
		inicioobra: "Fecha Vacia",
		finalobra: "Fecha Vacia",
	},
submitHandler: function(form){
	var formulario = $('#registrarObra');	
	console.log('llegamos a registrar');
 $.ajax({
	url: formulario.attr('action'),
	method:'post',
	data:formulario.serialize(),
 success : function(data)
	 {
			$('#div_ajax_registro').html(data);
			$('#nameobra').val('')
			$('#inicioobra').val('')
			$('#finalobra').val('')
	 }
  });
 }
});

// eliminar una obra
$( "#eliminarObra").submit(function( event )
	 {
		debugger
		var parametros = $('#eliminarObra').serialize();
			 $.ajax({
					type: "POST",
					url: $('#eliminarObra').attr('action'),
					data: parametros,
					success: function(datos){
					$(".div_ajax_delete").html(datos);

					$('#dataDelete').modal('hide');
				  }
			});
		});


/////////////////////////////////////////////////////////
//////////// Termina CRUD sobre las obras del sistema
/////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////
//////////// CRUD sobre los proveedores del sistema
/////////////////////////////////////////////////////////

// Permite modificar un proveedor del sistema
$('#modalproveedor').on('show.bs.modal', function(event){

	var este=$(this);
  console.log('proveedor');
  var button=$(event.relatedTarget);
	var id=button.data('id');
	var nombre = button.data('nombre');
	var telefono = button.data('telefono');
	var direccion = button.data('direccion');
	var nit = button.data('nit');

	console.log(nombre);
	

	var modal = $('#modalproveedor')	;

  modal.find('#IDproveedor').val(id);	
	modal.find('#nombreproveedor').val(nombre);
	modal.find('#nitproveedor').val(nit);
	modal.find('#telefonoproveedor').val(telefono);
	modal.find('#direccionproveedor').val(direccion);
});

$('#modificarProveedor').validate({
	rules:{
		nombreproveedor :{required:true},
		nitproveedor:{required:true},
		telefonoproveedor:{required:true },
		direccionproveedor:{required:true},
	},
	messages:
	{
		nombreproveedor :"Nombre Vacio",
		nitproveedor:"NIT vacio",
		telefonoproveedor:"Telefono vacio",
		direccionproveedor:"Direccion vacia",
	},
submitHandler: function(form){
	var formulario = $('#modificarProveedor');	
	console.log('llegamos a modificar');
 $.ajax({
	url: formulario.attr('action'),
	method:'post',
	data:formulario.serialize(),
 success : function(data)
	 {
			$('#div_ajax_update_pro').html(data);
	 }
  });
 }
});

// Permite abrir el modal para eliminar un proveedor
$('#deleteProveedor').on('show.bs.modal', function(event){

	var este=$(this);
  console.log('elimnar');	
  var button=$(event.relatedTarget);
	var id=button.data('id');

	var modal = $('#deleteProveedor');

  modal.find('#IDeliminarPro').val(id);	
	
});


// Permite registrar un proveedor en el sistema
$('#registrarProveedor').validate({
	rules:{
		nameproveedor :{required:true},
		nitprovee:{required:true},
		telefonopro:{required:true },
		direccionpro:{required:true},
	},
	messages:
	{
		nameproveedor :"Nombre Vacio",
		nitprovee:"NIT vacio",
		telefonopro:"Telefono vacio",
		direccionpro:"Direccion vacia",
	},
submitHandler: function(form){
	var formulario = $('#registrarProveedor');	
	console.log('llegamos a registrarmee');
 $.ajax({
	url: formulario.attr('action'),
	method:'post',
	data:formulario.serialize(),
 success : function(data)
	 {
			$('#div_ajax_registro_pro').html(data);
			$('#nameproveedor').val('')
			$('#nitprovee').val('')
			$('#telefonopro').val('')
			$('#direccionpro').val('')
	 }
  });
 }
});







