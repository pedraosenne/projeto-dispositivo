// app.js
let qrCodeInstance = null;

function fazerLogin() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("formScreen").classList.remove("hidden");
}

function gerarQRCode() {
  const nome = document.getElementById("nome").value.trim();
  const nascimento = document.getElementById("nascimento").value;
  const sangue = document.getElementById("sangue").value;

  if (!nome || !nascimento || !sangue) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const textoQR = `Nome: ${nome}\nData de Nascimento: ${nascimento}\nTipo Sanguíneo: ${sangue}`;

  // Troca de telas
  document.getElementById("formScreen").classList.add("hidden");
  document.getElementById("qrScreen").classList.remove("hidden");

  // Limpa QR anterior
  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = "";

  // Gera novo QR Code
  qrCodeInstance = new QRCode(qrDiv, {
    text: textoQR,
    width: 280,
    height: 280,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Mostra informações abaixo do QR
  document.getElementById("qrInfo").innerHTML = `
    <strong>Nome:</strong> ${nome}<br>
    <strong>Data de Nascimento:</strong> ${nascimento}<br>
    <strong>Tipo Sanguíneo:</strong> ${sangue}
  `;
}

function baixarQRCode() {
  const canvas = document.querySelector("#qrcode canvas");
  if (canvas) {
    const link = document.createElement("a");
    link.download = "qr-code-medico.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }
}

function voltarFormulario() {
  document.getElementById("qrScreen").classList.add("hidden");
  document.getElementById("formScreen").classList.remove("hidden");
}