function calcularTempoRestante(dataFutura) {
      const agora = new Date().getTime();
      const diferenca = dataFutura - agora;

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

      return { dias, horas, minutos, segundos };
    }

    function atualizarTemporizador() {
      const dataFutura = new Date('2026-12-31T23:59:59').getTime();
      const tempoRestante = calcularTempoRestante(dataFutura);

      document.getElementById('dias').innerText = `Dias: ${tempoRestante.dias}`;
      document.getElementById('horas').innerText = `Horas: ${tempoRestante.horas}`;
      document.getElementById('minutos').innerText = `Minutos: ${tempoRestante.minutos}`;
      document.getElementById('segundos').innerText = `Segundos: ${tempoRestante.segundos}`;
    }
setInterval(atualizarTemporizador, 1000);
atualizarTemporizador();