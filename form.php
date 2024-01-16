<?php

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    // Recupera os dados do formulário
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_NUMBER_INT);
    $mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);

    // Realiza a validação
    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo "Por favor, preencha todos os campos.";
    } else {
        // Validar o número de telefone
        if (!preg_match("/^[0-9]{10}$/", $telefone)) {
            echo "Por favor, insira um número de telefone válido (10 dígitos).";
        } else {
            // Processa os dados
            echo "Nome: $nome<br>";
            echo "E-mail: $email<br>";
            echo "Telefone: $telefone<br>";
            echo "Mensagem: $mensagem<br>";

            // Envia e-mail
            $para = "mixeuskaczala@gmail.com"; 
            $assunto = "Novo Formulário de Contato";

            $mensagem_email = "Nome: $nome\n";
            $mensagem_email .= "E-mail: $email\n";
            $mensagem_email .= "Telefone: $telefone\n";
            $mensagem_email .= "Mensagem:\n$mensagem";

            $headers = "De: $email";

            if (mail($para, $assunto, $mensagem_email, $headers)) {
                echo "E-mail enviado com sucesso!";
            } else {
                echo "Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.";
            }
        }
    }
}

?>
