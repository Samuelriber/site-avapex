<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://www.avapex.com.br');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido.']);
    exit;
}

$body = json_decode(file_get_contents('php://input'), true);
if (!$body) {
    http_response_code(400);
    echo json_encode(['error' => 'Payload inválido.']);
    exit;
}

$nome     = trim($body['nome']     ?? '');
$empresa  = trim($body['empresa']  ?? '');
$email    = trim($body['email']    ?? '');
$telefone = trim($body['telefone'] ?? '');
$servico  = trim($body['servico']  ?? '');
$mensagem = trim($body['mensagem'] ?? '');

if (!$nome || !$empresa || !$email || !$telefone || !$servico) {
    http_response_code(400);
    echo json_encode(['error' => 'Campos obrigatórios ausentes.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'E-mail inválido.']);
    exit;
}

$nome     = htmlspecialchars($nome,     ENT_QUOTES, 'UTF-8');
$empresa  = htmlspecialchars($empresa,  ENT_QUOTES, 'UTF-8');
$email    = htmlspecialchars($email,    ENT_QUOTES, 'UTF-8');
$telefone = htmlspecialchars($telefone, ENT_QUOTES, 'UTF-8');
$servico  = htmlspecialchars($servico,  ENT_QUOTES, 'UTF-8');
$mensagem = htmlspecialchars($mensagem, ENT_QUOTES, 'UTF-8');

$destinatario = 'comercial@avapex.com.br';
$assunto      = "[Orçamento] {$servico} — {$empresa}";

$html = "
<html><body style='font-family:Arial,sans-serif;max-width:600px;margin:0 auto;'>
  <div style='background:#0B1121;padding:24px 32px;border-radius:8px 8px 0 0;'>
    <h2 style='color:#facc15;margin:0;'>Nova Solicitação de Orçamento</h2>
    <p style='color:#94a3b8;margin:6px 0 0;font-size:13px;'>Recebida pelo site avapex.com.br</p>
  </div>
  <div style='background:#fff;padding:32px;border:1px solid #e2e8f0;border-radius:0 0 8px 8px;'>
    <table style='width:100%;border-collapse:collapse;'>
      <tr><td style='padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:38%;'><strong>Nome</strong></td><td style='padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:600;'>{$nome}</td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;'><strong>Empresa</strong></td><td style='padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:600;'>{$empresa}</td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;'><strong>E-mail</strong></td><td style='padding:10px 0;border-bottom:1px solid #f1f5f9;'><a href='mailto:{$email}'>{$email}</a></td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;'><strong>Telefone</strong></td><td style='padding:10px 0;border-bottom:1px solid #f1f5f9;'>{$telefone}</td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;'><strong>Serviço</strong></td><td style='padding:10px 0;border-bottom:1px solid #f1f5f9;'>{$servico}</td></tr>
      " . ($mensagem ? "<tr><td style='padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;'><strong>Mensagem</strong></td><td style='padding:10px 0;white-space:pre-wrap;'>{$mensagem}</td></tr>" : '') . "
    </table>
    <div style='margin-top:20px;padding:14px;background:#fefce8;border-left:4px solid #facc15;border-radius:4px;'>
      <p style='margin:0;color:#854d0e;font-size:13px;'>Responda para <strong>{$email}</strong> ou ligue para <strong>{$telefone}</strong>.</p>
    </div>
  </div>
</body></html>";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Site Avapex <noreply@avapex.com.br>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$enviado = mail($destinatario, $assunto, $html, $headers);

if ($enviado) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(502);
    echo json_encode(['error' => 'Falha ao enviar e-mail. Tente novamente.']);
}
