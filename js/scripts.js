function loadAssets() {
    let assets = [
        { type: "css", url: "https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" },
        { type: "css", url: "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/dist/sweetalert2.min.css" },
        { type: "css", url: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },

        { type: "js", url: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
        { type: "js", url: "https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" },
        { type: "js", url: "https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" },
        { type: "js", url: "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/dist/sweetalert2.min.js" },
    ];

    assets.forEach(asset => {
        let element;
        if (asset.type === "css") {
            element = document.createElement("link");
            element.rel = "stylesheet";
            element.href = asset.url;
        } else if (asset.type === "js") {
            element = document.createElement("script");
            element.src = asset.url;
            element.defer = true; // Garante que o JS não bloqueie o carregamento da página
        }

        if (element) {
            document.head.appendChild(element);
        }
    });
}

// Executa a função ao carregar a página
document.addEventListener("DOMContentLoaded", loadAssets);
