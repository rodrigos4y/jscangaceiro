// Criou a instância do controller
const controller = new NegociacaoController();

document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));