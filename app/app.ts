import { NegociacaoController } from "./controllers/negocicao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    controller.adiciona();
})