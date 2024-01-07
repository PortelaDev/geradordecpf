import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

// (function () {
//   const gera = new GeraCPF();
//   const cpfGerado = document.querySelector('.cpf-gerado');
//   cpfGerado.innerHTML = gera.geraNovoCpf();
// })();

const gera = new GeraCPF();
const cpfGerado = document.querySelector('.cpf-gerado');
const btn = document.querySelector('.gerar');
btn.addEventListener('click', e => {
  e.preventDefault();
  cpfGerado.innerHTML = gera.geraNovoCpf();

})