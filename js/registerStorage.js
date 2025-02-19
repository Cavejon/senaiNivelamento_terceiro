function registerMailer() {
    const email = document.getElementById('emailInput').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email && emailRegex.test(email)) {
        localStorage.setItem('userEmail', email);
        window.location.assign('../pages/registro.html');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'E-mail inválido',
            text: 'Por favor, insira um e-mail válido.',
            confirmButtonText: 'OK',
            confirmButtonColor: 'red'
        });
    }
}
