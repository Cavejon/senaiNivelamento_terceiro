function loginUserContent() {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("emailLogin").value;
        let senha = document.getElementById("senhaLogin").value;

        let user = localStorage.getItem(email);

        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Usuário não localizado!',
                text: 'Por favor, insira um usúario válido!.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }

        user = JSON.parse(user);
        if (user.senha !== senha) {
            Swal.fire({
                icon: 'error',
                title: 'Senha inválida!',
                text: 'Por favor, insira uma senha válida.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }
        if (email.trim() == "") {
            console.log(email.trim)
            Swal.fire({
                icon: 'error',
                title: 'E-mail não encontrado',
                text: 'Por favor, insira um e-mail válido.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'E-mail inválido',
                text: 'Por favor, insira um e-mail válido.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
        }


        sessionStorage.setItem("loggedUser", email);
        window.location.href = "../index.html";
    });
};

function credentialInvalid() {
    const user = sessionStorage.getItem("loggedUser");

    if (!user) {
        Swal.fire({
            icon: 'error',
            title: 'Você precisa estar logado',
            confirmButtonText: 'OK',
            confirmButtonColor: 'red'
        });
        window.location.href = "login.html";
    }
}