// Chamar a função carregarVagas na página de vagas
function carregarVagas() {
    const totalVagas = 10; // Total de 10 vagas
    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];

    const vagasCadastradasElement = document.getElementById('vagasCadastradas');
    const vagasDisponiveisElement = document.getElementById('vagasDisponiveis');

    // Limpar as listas
    vagasCadastradasElement.innerHTML = '';
    vagasDisponiveisElement.innerHTML = '';

    // Preencher vagas cadastradas
    if (reservas.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nenhuma vaga cadastrada.';
        vagasCadastradasElement.appendChild(li);
    } else {
        reservas.forEach(reserva => {
            const li = document.createElement('li');
            li.textContent = `Vaga ${reserva.vaga}: ${reserva.nome}, ${reserva.modelo} - ${reserva.cor}`;
            vagasCadastradasElement.appendChild(li);
        });
    }

    // Preencher vagas disponíveis
    for (let i = 1; i <= totalVagas; i++) {
        const vagaOcupada = reservas.find(reserva => reserva.vaga == i);
        if (!vagaOcupada) {
            const li = document.createElement('li');
            li.textContent = `Vaga ${i} disponível`;
            vagasDisponiveisElement.appendChild(li);
        }
    }

    // Exibir quantas vagas estão ocupadas
    const vagasOcupadasCount = reservas.length;
    const vagasDisponiveisCount = totalVagas - vagasOcupadasCount;

    const vagasInfoElement = document.getElementById('vagasInfo');
    vagasInfoElement.textContent = `Total de vagas: ${totalVagas} | Vagas ocupadas: ${vagasOcupadasCount} | Vagas disponíveis: ${vagasDisponiveisCount}`;
}
if (document.getElementById('vagasDisponiveis')) {
    carregarVagas();
  }
function VoltarParaATela1() {
    window.location.href = 'index.html';
}