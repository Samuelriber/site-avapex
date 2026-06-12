<?php
header('Access-Control-Allow-Origin: https://www.avapex.com.br');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metodo nao permitido']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

// Campos alinhados com o formulario React (ContactForm.jsx): servico e mensagem
$nome     = htmlspecialchars(strip_tags($input['nome']     ?? ''), ENT_QUOTES, 'UTF-8');
$empresa  = htmlspecialchars(strip_tags($input['empresa']  ?? ''), ENT_QUOTES, 'UTF-8');
$email    = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
$telefone = htmlspecialchars(strip_tags($input['telefone'] ?? ''), ENT_QUOTES, 'UTF-8');
$servico  = htmlspecialchars(strip_tags($input['servico']  ?? ''), ENT_QUOTES, 'UTF-8');
$mensagem = htmlspecialchars(strip_tags($input['mensagem'] ?? ''), ENT_QUOTES, 'UTF-8');

if (!$nome || !$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nome e email sao obrigatorios']);
    exit;
}

$para      = 'comercial@avapex.com.br';
$remetente = 'no-reply@avapex.com.br';
$assunto   = 'Nova solicitacao de orcamento - ' . $nome;

$corpo  = "Nova solicitacao de orcamento recebida pelo site.\n\n";
$corpo .= "Nome: $nome\n";
$corpo .= "Empresa: $empresa\n";
$corpo .= "Email: $email\n";
$corpo .= "Telefone: $telefone\n";
$corpo .= "Area de interesse: $servico\n\n";
$corpo .= "Detalhes da demanda:\n$mensagem\n\n";
$corpo .= "---\nEnviado pelo formulario do site avapex.com.br";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "From: Avapex Transportes <$remetente>\r\n";
$headers .= "Reply-To: $nome <$email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: 3\r\n";

// O 5o parametro (-f) define o envelope sender, importante para alinhamento SPF
$enviado = mail($para, $assunto, $corpo, $headers, "-f $remetente");

if ($enviado) {
    echo json_encode(['success' => true, 'message' => 'Email enviado com sucesso']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Falha ao enviar email']);
}
?>
