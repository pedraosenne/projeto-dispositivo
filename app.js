// app.js
let qrCodeInstance = null;

function irParaFormulario() {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("formScreen").classList.remove("hidden");
}

function pularLogin() {
  irParaFormulario();
}

function voltarHome() {
  document.getElementById("formScreen").classList.add("hidden");
  document.getElementById("homeScreen").classList.remove("hidden");
}

function voltarFormulario() {
  document.getElementById("qrScreen").classList.add("hidden");
  document.getElementById("formScreen").classList.remove("hidden");
}

function gerarQRCode() {
  const nome = document.getElementById("nome").value.trim();
  const nascimento = document.getElementById("nascimento").value;
  const rg = document.getElementById("rg").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const sangue = document.getElementById("sangue").value;
  const alergias = document.getElementById("alergias").value.trim();
  const medicamentos = document.getElementById("medicamentos").value.trim();

  if (!nome || !nascimento || !telefone || !sangue) {
    alert("Por favor, preencha os campos obrigatórios: Nome, Data de nascimento, Telefone e Tipo sanguíneo.");
    return;
  }

  let textoQR = `Nome: ${nome}\n`;
  textoQR += `Data de Nascimento: ${nascimento}\n`;
  if (rg) textoQR += `RG: ${rg}\n`;
  textoQR += `Telefone: ${telefone}\n`;
  if (endereco) textoQR += `Endereço: ${endereco}\n`;
  textoQR += `Tipo Sanguíneo: ${sangue}\n`;
  if (alergias) textoQR += `Alergias: ${alergias}\n`;
  if (medicamentos) textoQR += `Medicamentos: ${medicamentos}`;

  // Troca de telas
  document.getElementById("formScreen").classList.add("hidden");
  document.getElementById("qrScreen").classList.remove("hidden");

  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = "";

  qrCodeInstance = new QRCode(qrDiv, {
    text: textoQR,
    width: 280,
    height: 280,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Mostra informações legíveis abaixo do QR
  let infoHTML = `<strong>Nome:</strong> ${nome}<br>`;
  infoHTML += `<strong>Data de Nascimento:</strong> ${nascimento}<br>`;
  if (rg) infoHTML += `<strong>RG:</strong> ${rg}<br>`;
  infoHTML += `<strong>Telefone:</strong> ${telefone}<br>`;
  if (endereco) infoHTML += `<strong>Endereço:</strong> ${endereco}<br>`;
  infoHTML += `<strong>Tipo Sanguíneo:</strong> ${sangue}<br>`;
  if (alergias) infoHTML += `<strong>Alergias:</strong> ${alergias}<br>`;
  if (medicamentos) infoHTML += `<strong>Medicamentos:</strong> ${medicamentos}`;

  document.getElementById("qrInfo").innerHTML = infoHTML;
}

function baixarQRCode() {
  const canvas = document.querySelector("#qrcode canvas");
  if (canvas) {
    const link = document.createElement("a");
    link.download = "qr-code-medico-emergencia.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }
}