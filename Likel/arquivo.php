<?php
session_start();

// Conectar ao banco de dados (substitua com suas credenciais)
$host = 'localhost';
$db = 'seu_banco_de_dados';
$user = 'seu_usuario';
$pass = 'sua_senha';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verifica se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $confirmar_senha = $_POST['confirmar_senha'];

    // Verifica se as senhas são iguais
    if ($senha !== $confirmar_senha) {
        header('Location: /HTML/cadastro.html?erro=senhas_nao_correspondem');
        exit();
    }

    // Verifica se o e-mail já está cadastrado
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        header('Location: /HTML/cadastro.html?erro=email_ja_cadastrado');
        exit();
    }

    // Hash a senha antes de armazená-la
    $senha_hash = password_hash($senha, PASSWORD_BCRYPT);

    // Prepara a consulta para inserir o novo usuário
    $stmt = $conn->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nome, $email, $senha_hash);

    if ($stmt->execute()) {
        // Redireciona para a página inicial após o cadastro
        header('Location: /HTML/index.html');
        exit();
    } else {
        header('Location: /HTML/cadastro.html?erro=cadastro_falhou');
        exit();
    }

    $stmt->close();
}
$conn->close();
?>
