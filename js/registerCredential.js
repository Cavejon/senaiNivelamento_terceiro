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