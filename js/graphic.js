const dadosQueimadas24 = {
    "ano": 2024,
    "total_area_queimada_hectares": 30860000,
    "biomas": [
        {
            "nome": "Amazônia",
            "area_queimada_hectares": 17900000
        },
        {
            "nome": "Mata Atlântica",
            "area_queimada_hectares": 896000
        }
    ]
};

const dadosQueimadas23 = {
    "ano": 2023,
    "total_area_queimada_hectares": 29500000,
    "biomas": [
        {
            "nome": "Amazônia",
            "area_queimada_hectares": 16500000
        },
        {
            "nome": "Mata Atlântica",
            "area_queimada_hectares": 850000
        },
        {
            "nome": "Cerrado",
            "area_queimada_hectares": 7800000
        },
        {
            "nome": "Pampa",
            "area_queimada_hectares": 520000
        },
        {
            "nome": "Pantanal",
            "area_queimada_hectares": 430000
        },
        {
            "nome": "Caatinga",
            "area_queimada_hectares": 3300000
        }
    ]
};

// Gráfico 23 - 2023
const ctx1 = document.getElementById('grafico23').getContext('2d');
const areaQueimada23 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Amazônia', 'Mata Atlântica', 'Cerrado', 'Pampa', 'Pantanal', 'Caatinga'],
        datasets: [{
            label: 'Área Queimada em 2023 (ha)',
            data: [16500000, 850000, 7800000, 520000, 430000, 3300000],
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }]
    }
});

// Gráfico 24 - 2024
const biomas24 = dadosQueimadas24.biomas.map(bioma => bioma.nome);
const areaQueimada24 = dadosQueimadas24.biomas.map(bioma => bioma.area_queimada_hectares);

const ctx2 = document.getElementById('grafico24').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: biomas24,
        datasets: [{
            label: 'Área Queimada em 2024 (ha)',
            data: areaQueimada24,
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
        }]
    }
});
