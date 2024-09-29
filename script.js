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
    reservas.push(reserva);
    localStorage.setItem('reservas', JSON.stringify(reservas));
  
    // Limpar o formulário
    document.getElementById('reservaForm').reset();
  
    alert('Reserva salva com sucesso!');
});
  
  // Função para carregar vagas disponíveis e cadastradas
  
  function irParaTela2() {
    window.location.href = 'vagas.html';
}




  