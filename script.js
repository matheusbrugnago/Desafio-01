// Função para salvar reserva no localStorage
document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Coletar dados do formulário
    const placa = document.getElementById('placa').value;
    const nome = document.getElementById('nome').value;
    const apartamento = document.getElementById('apartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const vaga = parseInt(document.getElementById('vaga').value); // Converte para inteiro
  
    // Verificar se a vaga está dentro do intervalo permitido
    if (vaga < 1 || vaga > 10) {
        alert('O número da vaga deve estar entre 1 e 10.');
        return; // Impede a execução do código abaixo
    }

    // Objeto com as informações
    const reserva = {
        placa,
        nome,
        apartamento,
        bloco,
        modelo,
        cor,
        vaga
    };

    // Armazenar as reservas no localStorage
    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

    const vagaOcupada = reservas.find(reserva => reserva.vaga === vaga);

    if (vagaOcupada) {
        // Se a vaga já foi ocupada, exibir mensagem de erro
        alert('Vaga já ocupada!');
        return; // Impede o cadastro da nova reserva
    }
    
    reservas.push(reserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));

    console.log(`Reserva salva: Placa: ${reserva.placa}, Nome: ${reserva.nome}, Apartamento: ${reserva.apartamento}, Bloco: ${reserva.bloco}, Modelo: ${reserva.modelo}, Cor: ${reserva.cor}, Vaga: ${reserva.vaga}`);

    // Exibir as informações temporariamente na página
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    messageDiv.textContent = `Última reserva salva: Placa: ${reserva.placa}, Nome: ${reserva.nome}, Apartamento: ${reserva.apartamento}, Bloco: ${reserva.bloco}, Modelo: ${reserva.modelo}, Cor: ${reserva.cor}, Vaga: ${reserva.vaga}`;
    document.body.appendChild(messageDiv);

    // Limpar a mensagem após 5 segundos
    setTimeout(function() {
        document.getElementById('message').remove();
    }, 10000);
  
    // Limpar o formulário
    document.getElementById('reservaForm').reset();
  
    alert('Reserva salva com sucesso!');
});
  
  // Função para carregar vagas disponíveis e cadastradas
  
  function irParaTela2() {
    window.location.href = 'vagas.html';
}




  