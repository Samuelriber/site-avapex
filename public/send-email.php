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
    echo json_encode(['ok' => false, 'erro' => 'Método não permitido', 'message' => 'Método não permitido']);
    exit;
}

// Carrega .env local se existir (dev e produção via FTP)
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $vars = parse_ini_file($envFile);
    if (is_array($vars)) {
        foreach ($vars as $k => $v) {
            $_ENV[$k] = $v;
        }
    }
}

$senha = $_ENV['MAIL_PASSWORD'] ?? getenv('MAIL_PASSWORD') ?: '';

if (!file_exists(__DIR__ . '/vendor/autoload.php')) {
    // Modo de desenvolvimento: simula o sucesso para não travar o Front-end
    http_response_code(200);
    echo json_encode(['ok' => true, 'mock' => true, 'message' => 'Simulação de envio local.']);
    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$input = json_decode(file_get_contents('php://input'), true);

$nome     = htmlspecialchars(strip_tags($input['nome']     ?? ''), ENT_QUOTES, 'UTF-8');
$empresa  = htmlspecialchars(strip_tags($input['empresa']  ?? ''), ENT_QUOTES, 'UTF-8');
$email    = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
$telefone = htmlspecialchars(strip_tags($input['telefone'] ?? ''), ENT_QUOTES, 'UTF-8');
$servico  = htmlspecialchars(strip_tags($input['servico']  ?? ''), ENT_QUOTES, 'UTF-8');
$mensagem = htmlspecialchars(strip_tags($input['mensagem'] ?? ''), ENT_QUOTES, 'UTF-8');

if (!$nome || !$email) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'erro' => 'Nome e e-mail são obrigatórios', 'message' => 'Nome e e-mail são obrigatórios']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtps.uhserver.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'comercial3@avapex.com.br';
    $mail->Password   = $senha;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom('comercial3@avapex.com.br', 'Avapex Transportes');
    $mail->addAddress('comercial3@avapex.com.br', 'Avapex Transportes');
    $mail->addReplyTo($email, $nome);

    $mail->isHTML(true);
    $mail->Subject = "Novo contato - $servico";
    $mail->Body    = "
<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;\">
    <h2 style=\"color: #1a3a5c; border-bottom: 2px solid #1a3a5c; padding-bottom: 8px;\">Novo contato pelo site Avapex</h2>
    <table style=\"width: 100%; border-collapse: collapse; margin-top: 16px;\">
        <tr style=\"background: #f5f8ff;\">
            <td style=\"padding: 10px 12px; font-weight: bold; width: 130px;\">Nome</td>
            <td style=\"padding: 10px 12px;\">$nome</td>
        </tr>
        <tr>
            <td style=\"padding: 10px 12px; font-weight: bold;\">Empresa</td>
            <td style=\"padding: 10px 12px;\">$empresa</td>
        </tr>
        <tr style=\"background: #f5f8ff;\">
            <td style=\"padding: 10px 12px; font-weight: bold;\">E-mail</td>
            <td style=\"padding: 10px 12px;\"><a href=\"mailto:$email\" style=\"color: #1a3a5c;\">$email</a></td>
        </tr>
        <tr>
            <td style=\"padding: 10px 12px; font-weight: bold;\">Telefone</td>
            <td style=\"padding: 10px 12px;\">$telefone</td>
        </tr>
        <tr style=\"background: #f5f8ff;\">
            <td style=\"padding: 10px 12px; font-weight: bold;\">Serviço</td>
            <td style=\"padding: 10px 12px;\">$servico</td>
        </tr>
    </table>
    <h3 style=\"color: #1a3a5c; margin-top: 24px;\">Mensagem</h3>
    <div style=\"background: #f5f5f5; padding: 14px 16px; border-left: 4px solid #1a3a5c; border-radius: 2px; white-space: pre-wrap;\">$mensagem</div>
    <hr style=\"border: none; border-top: 1px solid #ddd; margin: 28px 0 12px;\">
    <p style=\"color: #aaa; font-size: 12px;\">Enviado pelo formulário do site avapex.com.br</p>
</div>
";
    $mail->AltBody = "Novo contato pelo site Avapex\n\nNome: $nome\nEmpresa: $empresa\nE-mail: $email\nTelefone: $telefone\nServiço: $servico\n\nMensagem:\n$mensagem\n\n---\nEnviado pelo formulário do site avapex.com.br";

    $mail->send();
    echo json_encode(['ok' => true]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'erro' => 'Falha ao enviar e-mail', 'message' => 'Falha ao enviar e-mail']);
}
?>
