document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").addEventListener("click", function (event) {
        event.preventDefault();

        let nome = document.getElementById("fname").value.trim();
        let sobrenome = document.getElementById("lname").value.trim();
        let email = document.getElementById("email").value.trim();
        let comentario = document.getElementById("comment").value.trim();

        if (nome === "" || sobrenome === "" || email === "" || comentario === "") {
            Swal.fire({
                icon: 'error',
                title: 'Campos vázios',
                text: 'Por favor, preencha todos os campos.',
                confirmButtonText: 'OK',
                confirmButtonColor: 'red'
            });
            return;
            return;
        }

        let telefone = "5547996373949";
        let mensagem = `Olá! Meu nome é ${nome} ${sobrenome}.
Email: ${email}
Mensagem: ${comentario}`;

        let url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    });
});

