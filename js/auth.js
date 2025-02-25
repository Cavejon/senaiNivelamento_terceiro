document.addEventListener("DOMContentLoaded", function () {
    let user = sessionStorage.getItem("loggedUser");
    let authLink = document.getElementById("authLink");

    if (authLink && user) {
        authLink.innerHTML = '<a href="#" class="nav-link" id="logoutBtn">Sair</a>';
        document.getElementById("logoutBtn").addEventListener("click", function () {
            sessionStorage.removeItem("loggedUser");
            Swal.fire({
                icon: 'error',
                title: 'Até logo!',
                text: 'Você foi deslogado com sucesso.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            }).then(() => {
                window.location.href = "../pages/login.html";
            });
        });
    }
});
