function gerarPerfil() {
    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipoSanguineo').value;

    if (!nome || !tipo) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Em um app real, aqui você salvaria no banco de dados e geraria um link
    // Para este exemplo, vamos codificar os dados diretamente no QR Code
    const dadosParaOQRCode = `Nome: ${nome} | Tipo Sanguíneo: ${tipo}`;

    // Limpar QR Code anterior se existir
    document.getElementById("qrcode").innerHTML = "";

    // Gerar o QR Code
    new QRCode(document.getElementById("qrcode"), {
        text: dadosParaOQRCode,
        width: 200,
        height: 200
    });

    // Atualizar textos na tela
    document.getElementById('display-nome').innerText = nome;
    document.getElementById('display-tipo').innerText = tipo;

    // Trocar de tela
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('qr-section').style.display = 'block';
}

function voltar() {
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('qr-section').style.display = 'none';
}