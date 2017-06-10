
		//Classe
		Autenticacao = function(){}	
	
		//Metodo
		Autenticacao.prototype.validarCampos =function(){
			
			elementoUsuario = document.getElementById("txtUsuario");
			usuarioDigitado = elementoUsuario.value;
		
			
			elementoSenha = document.getElementById("txtSenha");
			senhaDigitado = elementoSenha.value;
		
			if(usuarioDigitado == "" || senhaDigitado == ""){
				window.alert("Os campos 'USUARIO' e 'SENHA' nao podem permanecer vazios!#3");
				return false;
			}else{
				return true;
			}
			
			
		}
		//Instanciando objeto
		aut = new Autenticacao();
		
		
	
	