function logoutUser() {
    sessionStorage.removeItem("loggedUser");
    Swal.fire({
        icon: 'error',
        title: 'Usuário deslogado',
        confirmButtonText: 'OK',
        confirmButtonColor: 'red'
    });
    window.location.href = "login.html";
}

