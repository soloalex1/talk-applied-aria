window.onload = () => {
  const button = document.querySelector('div.btn');

  button.addEventListener('click', () => {
    alert('Você clicou no botão.');
  });

  button.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      alert('Você apertou a tecla Enter no botão.');
    }
  });

  button.addEventListener('keyup', (event) => {
    if (event.keyCode === 32) {
      alert('Você soltou a tecla Space no botão.');
    }
  });
};
