document.addEventListener("DOMContentLoaded", function () {
    // Simulação do cálculo do valor total
    let valorTotal = 166.06; // Soma dos valores dos produtos no site
    document.getElementById("valor").textContent = valorTotal.toFixed(2);

    // Captura do formulário
    document.getElementById("form-endereco").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o recarregamento da página

        alert("Pedido finalizado com sucesso! Sua Self Care Box está a caminho. 💖");
    });
});
