// Dados de exemplo para os editais
const editais = [
    { nome: "Edital de Obras 1", orgao: "Prefeitura A", categoria: "Obras", dataPublicacao: "2024-11-01", prazo: "2024-11-15" },
    { nome: "Edital de Serviços 2", orgao: "Prefeitura B", categoria: "Serviços", dataPublicacao: "2024-11-03", prazo: "2024-11-18" },
    { nome: "Edital de Compras 3", orgao: "Prefeitura C", categoria: "Compras", dataPublicacao: "2024-11-05", prazo: "2024-11-20" },
];

// Função para exibir os editais na tabela
function displayEditais(filteredEditais) {
    const tableBody = document.getElementById("editalTableBody");
    tableBody.innerHTML = ""; // Limpa a tabela antes de preencher

    filteredEditais.forEach(edital => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${edital.nome}</td>
            <td>${edital.orgao}</td>
            <td>${edital.categoria}</td>
            <td>${edital.dataPublicacao}</td>
            <td>${edital.prazo}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Função para filtrar os editais
function filterEditais() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value;

    const filteredEditais = editais.filter(edital => {
        const matchesSearch = edital.nome.toLowerCase().includes(searchInput);
        const matchesCategory = categoryFilter === "" || edital.categoria === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    displayEditais(filteredEditais);
}

// Função para limpar os filtros
function resetFilters() {
    document.getElementById("search").value = "";
    document.getElementById("categoryFilter").value = "";
    displayEditais(editais);
}

// Inicialização
window.onload = () => {
    displayEditais(editais);
};
