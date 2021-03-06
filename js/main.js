$(document).ready(function(){
	//AJAX PARA CARGAR LA PRIMERA VEZ LA PAGINA
	if($( "#mMenu1" ).hasClass( "active" )) {
		loadRecibidos(1);  // For first time page load default results
	}else if($( "#foro" ).hasClass( "active" )){
		loadforo(1, "Amistad");
	}
	
	//MENU DEL INDEX
		//CAMBIAR A LA PRIMERA PESTAÑA DEL MENU PRINCIPAL
		$('#mMenu1').click(function(){
			document.getElementById("mMenu1").className="item active";
			document.getElementById("mMenu2").className="item";
			loadRecibidos(1);
	    });
		//CAMBIAR A LA SEGUNDA PESTAÑA DEL MENU PRINCIPAL
		$('#mMenu2').click(function(){
			document.getElementById("mMenu1").className="item";
			document.getElementById("mMenu2").className="item active";
			loadEnviados(1);
		});
	//ABRIR VENTANA MODAL
	$('.mensaje.button').click(function(){
		// show modal now
		$('.mensaje.modal')
			.modal('show')
		;
	});
	//VALIDACION VENTANA MODAL
	$('.ui.mensaje.form').form({
		fields: {
			matter: {
				identifier: 'matter',
				rules: [
					{
						type   : 'empty',
						prompt : 'Escribe el asunto del mensaje'
					}
				]
			},
			body: {
				identifier: 'body',
				rules: [
					{
						type   : 'empty',
						prompt : 'Escribe el mensaje que quieras enviar'
					}
				]
			}
		}
	});	
	$('.ui.radio.checkbox')
		.checkbox()
	;
	//VALIDACION LOGIN
	$('.ui.center.aligned.login.orange.form').form({
		fields: {
  			email: {
        		identifier : 'email',
        		rules:[{
            		type   : 'email',
            		prompt : 'Introduce un correo electrónico válido.'
          		}]
      		},
  			password: {
    			identifier : 'password',
    			rules: [{
        			type   : 'empty',
        			prompt : 'Introduce tu contraseña.'
      			},]
      		},
		}
	});
	//VALIDACION REGISTRO
	$('.ui.center.aligned.registro.orange.form').form({
		fields: {
  			nickname: {
        		identifier : 'nickname',
        		rules:[{
            		type   : 'empty',
            		prompt : 'Debes introducir un nickname.'
          		}]
      		},
      		email: {
        		identifier : 'email',
        		rules:[{
            		type   : 'email',
            		prompt : 'Introduce un correo electrónico válido.'
          		}]
      		},
  			password: {
    			identifier : 'password',
    			rules: [{
        			type   : 'empty',
        			prompt : 'Debes introducir una contraseña.'
      			},]
      		},
      		nombre: {
        		identifier : 'nombre',
        		rules:[{
            		type   : 'empty',
            		prompt : 'Debes introducir un nombre.'
          		}]
      		},
      		apellidos: {
        		identifier : 'apellidos',
        		rules:[{
            		type   : 'empty',
            		prompt : 'Debes introducir un apellido.'
          		}]
      		},
      		terms: {
        		identifier: 'terms',
        		rules: [{
            		type   : 'checked',
            		prompt : 'Tienes que aceptar los terminos y condiciones de uso.'
          		},]
      		},
		}
	});
	//VALIDACION DEL FORMULARIO DE MODIFICAR PERFIL
	$('.ui.modifcarPerfil.form').form({
		fields: {
  			mod_nickname: {
        		identifier : 'mod_nickname',
        		rules:[{
            		type   : 'empty',
            		prompt : 'Debes introducir un nickname.'
          		}]
      		},
      		mod_email: {
        		identifier : 'mod_email',
        		rules:[{
            		type   : 'email',
            		prompt : 'Introduce un correo electrónico válido.'
          		}]
      		},
      		mod_repeat_password: {
        		identifier  : 'mod_repeat_password',
        		rules: [{
            		type   : 'match[mod_password]',
            		prompt : 'Please put the same value in both fields'
          		}]
      		},
      		mod_nombre: {
        		identifier : 'mod_nombre',
        		rules:[{
            		type   : 'empty',
            		prompt : 'Debes introducir un nombre.'
          		}]
      		},
      		mod_apellidos: {
        		identifier : 'mod_apellidos',
        		rules:[{
            		type   : 'empty',
            		prompt : 'Debes introducir un apellido.'
          		}]
      		},
		}
	});
	//ABRIR VENTANA MODAL nuevo tema
	$('.tema.button').click(function(){
		// show modal now
		$('.tema.modal')
			.modal('show')
		;
	});
	//VALIDACION VENTANA MODAL nuevo tema
	$('.ui.tema.form').form({
		fields: {
			matter: {
				identifier: 'matter',
				rules: [
					{
						type   : 'empty',
						prompt : 'Escribe el asunto del tema'
					}
				]
			},
			body: {
				identifier: 'body',
				rules: [
					{
						type   : 'empty',
						prompt : 'Escribe el tema que quieras enviar'
					}
				]
			},
			categoria: {
				identifier: 'categoria',
				rules: [
					{
						type   : 'empty',
						prompt : 'Seleciona la categoria'
					}
				]
			},
			pro: {
				identifier: 'pro',
				rules: [
					{
						type   : 'empty',
						prompt : 'Seleciona el tipo de tema'
					}
				]
			}
		}
	});	
	//CAMBIAR A LA PESTAÑAS DEL MENU DEL FORO
	$('#Amistad').click(function(){
		document.getElementById("Amistad").className="item active";
		document.getElementById("Amor").className="item";
		document.getElementById("Dinero").className="item";
		document.getElementById("Estudios").className="item";
		document.getElementById("Familia").className="item";
		document.getElementById("Salud").className="item";
		document.getElementById("Sexualidad").className="item";
		document.getElementById("Trabajo").className="item";
		document.getElementById("Otros").className="item";
		var tema = $(this).attr('f');
		loadforo(1, tema);
	});
	$('#Amor').click(function(){
		document.getElementById("Amistad").className="item";
		document.getElementById("Amor").className="item active";
		document.getElementById("Dinero").className="item";
		document.getElementById("Estudios").className="item";
		document.getElementById("Familia").className="item";
		document.getElementById("Salud").className="item";
		document.getElementById("Sexualidad").className="item";
		document.getElementById("Trabajo").className="item";
		document.getElementById("Otros").className="item";
		var tema = $(this).attr('f');
		loadforo(1, tema);
	});
	$('#Dinero').click(function(){
		document.getElementById("Amistad").className="item";
		document.getElementById("Amor").className="item";
		document.getElementById("Dinero").className="item active";
		document.getElementById("Estudios").className="item";
		document.getElementById("Familia").className="item";
		document.getElementById("Salud").className="item";
		document.getElementById("Sexualidad").className="item";
		document.getElementById("Trabajo").className="item";
		document.getElementById("Otros").className="item";
		var tema = $(this).attr('f');
		loadforo(1, tema);
	});
	$('#Estudios').click(function(){
		document.getElementById("Amistad").className="item";
		document.getElementById("Amor").className="item";
		document.getElementById("Dinero").className="item";
		document.getElementById("Estudios").className="item active";
		document.getElementById("Familia").className="item";
		document.getElementById("Salud").className="item";
		document.getElementById("Sexualidad").className="item";
		document.getElementById("Trabajo").className="item";
		document.getElementById("Otros").className="item";
		var tema = $(this).attr('f');
		loadforo(1, tema);
	});
	$('#Familia').click(function(){
		document.getElementById("Amistad").className="item";
		document.getElementById("Amor").className="item";
		document.getElementById("Dinero").className="item";
		document.getElementById("Estudios").className="item";
		document.getElementById("Familia").className="item active";
		document.getElementById("Salud").className="item";
		document.getElementById("Sexualidad").className="item";
		document.getElementById("Trabajo").className="item";
		document.getElementById("Otros").className="item";
		var tema = $(this).attr('f');
		loadforo(1, tema);
	});
	$('#Salud').click(function(){
		document.getElementById("Amistad").className="item";
		document.getElementById("Amor").className="item";
		document.getElementById("Dinero").className="item";
		document.getElementById("Estudios").className="item";
		document.getElementById("Familia").className="item";
		document.getElementById("Salud").className="item active";
		document.getElementById("Sexualidad").className="item";
		document.getElementById("Trabajo").className="item";
		document.getElementById("Otros").className="item";
		var tema = $(this).attr('f');
		loadforo(1, tema);
	});
	$('#Sexualidad').click(function(){
		document.getElementById("Amistad").className="item";
		document.getElementById("Amor").className="item";
		document.getElementById("Dinero").className="item";
		document.getElementById("Estudios").className="item";
		document.getElementById("Familia").className="item";
		document.getElementById("Salud").className="item";
		document.getElementById("Sexualidad").className="item active";
		document.getElementById("Trabajo").className="item";
		document.getElementById("Otros").className="item";
		var tema = $(this).attr('f');
		loadforo(1, tema);
	});
	$('#Trabajo').on("click", function(){
		document.getElementById("Amistad").className="item";
		document.getElementById("Amor").className="item";
		document.getElementById("Dinero").className="item";
		document.getElementById("Estudios").className="item";
		document.getElementById("Familia").className="item";
		document.getElementById("Salud").className="item";
		document.getElementById("Sexualidad").className="item";
		document.getElementById("Trabajo").className="item active";
		document.getElementById("Otros").className="item";
		var tema = $(this).attr('f');
		loadforo(1, tema);
	});
	$('#Otros').click(function(){
		document.getElementById("Amistad").className="item";
		document.getElementById("Amor").className="item";
		document.getElementById("Dinero").className="item";
		document.getElementById("Estudios").className="item";
		document.getElementById("Familia").className="item";
		document.getElementById("Salud").className="item";
		document.getElementById("Sexualidad").className="item";
		document.getElementById("Trabajo").className="item";
		document.getElementById("Otros").className="item active";
		var tema = $(this).attr('f');
		loadforo(1, tema);
	});
	function loadRecibidos(page){
		$.ajax({
			type: "POST",
			url: "load_recibidos.php",
			data: "page="+page,
			success: function(msg)
			{
				$(document).ajaxComplete(function(event, request, settings)
				{
					$("#container").html(msg);
				});
			}
		});
	}
	function loadEnviados(page){
		$.ajax({
			type: "POST",
			url: "load_enviados.php",
			data: "page="+page,
			success: function(msg)
			{
				$(document).ajaxComplete(function(event, request, settings)
				{
					$("#container").html(msg);
				});
			}	
		});
	}
	function loadforo(page, tema){
		document.getElementById(tema).className="item active";
		$.ajax({
			type: "GET",
			url: "load_foro.php",
			data: "page="+page+"&tema="+tema,  	
			success: function(msg)
			{
				$(document).ajaxComplete(function(event, request, settings)
				{
					$("#container").html(msg);
				});
			}
		});
	}
	function cargarRecibidosMensaje(missatge){
		$.ajax({
			type: "POST",
			url: "carga_recibidos.php",
			data: "missatge="+missatge,
			success: function(msg)
			{
				$(document).ajaxComplete(function(event, request, settings)
				{
					$("#missatges").html(msg);
				});
			}	
		});
	}
	function cargarEnviadosMensaje(missatge){
		$.ajax({
			type: "POST",
			url: "carga_enviados.php",
			data: "missatge="+missatge,
			success: function(msg)
			{
				$(document).ajaxComplete(function(event, request, settings)
				{
					$("#missatges").html(msg);
				});
			}	
		});
	}
	function marcarComoLeido(missatge){
		$.ajax({
			type: "POST",
			url: "marcarComoLeido.php",
			data: "missatge="+missatge,
			success: function(msg)
			{
			}	
		});
	}
	$(document).on("click","a.item", function(){
		if($("#mMenu1").hasClass("item active")){
			var page = $(this).attr('p');
			loadRecibidos(page);
		} else if($("#mMenu2").hasClass("item active")){
			var page = $(this).attr('p');
			loadEnviados(page);
		}else if($("#foro").hasClass("item active")){
			var page = $(this).attr('p');
			var tema = $(this).attr('f');;
			loadforo(page, tema);
		}
	});
	
	$(document).on("click","div.content", function(){
		if($("#mMenu1").hasClass("item active")){
			if($(this).attr('m')){
				var missatge = $(this).attr('m');
				document.getElementById("missatges").value = "";
				cargarRecibidosMensaje(missatge);
				marcarComoLeido(missatge);
			}
		} else if($("#mMenu2").hasClass("item active")){
			if($(this).attr('m')){
				var missatge = $(this).attr('m');
				document.getElementById("missatges").value = "";
				cargarEnviadosMensaje(missatge);
				marcarComoLeido(missatge);
			}
		}
	});
	$('#enviarConstestacioMissatge').click(function(){
		alert("hola");
	});
});	