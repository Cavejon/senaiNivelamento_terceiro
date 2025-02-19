// Função genérica para carregar conteúdo de qualquer página
function loadPage(page) {
    const contentDiv = document.getElementById('pagInicial');

    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar a página:', error);
            contentDiv.innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
        });
}


function loadHeader() {
    fetch('../pages/cabecalho.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('cabecalho').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o cabeçalho:', error);
        });
}

function loadFooter() {
    fetch('../pages/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o footer:', error);
        });
}

// Carregar o cabeçalho e a página inicial ao carregar a página
window.onload = function () {
    loadHeader();
    loadPage('../pages/pagInicial'); // Página inicial
    loadFooter();
};
