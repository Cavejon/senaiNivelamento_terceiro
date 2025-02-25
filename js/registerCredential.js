function registerUserContent() {
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("emailRegistro").value.trim();
        let senha = document.getElementById("senhaRegistro").value.trim();
        let confirmSenha = document.getElementById("confirmSenha").value.trim();

        if (email == "" || senha == "" || confirmSenha == "") {
            Swal.fire({
                icon: 'error',
                title: 'Campos vázios',
                text: 'Por favor, preencha os campos obrigatórios.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }
        if (senha.length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Senhas muito fraca!',
                text: 'Por favor, insira a uma senha maior.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }else if (senha.search(/[a-z]/) < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Senhas muito fraca!',
                text: 'Por favor, sua senha deve conter letras minusculas.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }
        if(senha.search(/[A-Z]/) < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Senhas muito fraca!',
                text: 'Por favor, sua senha deve conter letras maiusculas.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }
        if(email.search(/[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,}/)){
            Swal.fire({
                icon: 'error',
                title: 'Formato de e-mail incorreto!',
                text: 'Por favor, insira um e-mail válido.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }
        if(senha.search(/[0-9]/) < 0){
            Swal.fire({
                icon: 'error',
                title: 'Senhas muito fraca!',
                text: 'Por favor, sua senha deve conter caracteres numéricos.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }
        if (senha !== confirmSenha) {
            Swal.fire({
                icon: 'error',
                title: 'Senhas não coincidem!',
                text: 'Por favor, insira a mesma senha nos dois campos.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }
        if (localStorage.getItem(email)) {
            Swal.fire({
                icon: 'error',
                title: 'E-mail já cadastrado!',
                text: 'Por favor, use outro e-mail ou faça login.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }
        localStorage.setItem(email, JSON.stringify({ email, senha }));

        Swal.fire({
            icon: 'success',
            title: 'Registro realizado com sucesso!',
            text: 'Redirecionando para a página de login...',
            confirmButtonColor: 'green'
        }).then(() => {
            window.location.href = "login.html";
        });
    });
}