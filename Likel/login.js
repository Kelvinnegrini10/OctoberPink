document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Simulação de validação
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Lógica de validação (substitua com uma chamada real)
    if (email === "usuario@example.com" && senha === "senha123") {
        // Redireciona para a página inicial em caso de sucesso
        window.location.href = '/HTML/index.html';
    } else {
        // Exibe mensagem de erro
        document.getElementById('message').innerHTML = "<p class='error'>E-mail ou senha incorretos.</p>";
    }
});
