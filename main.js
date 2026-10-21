const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Receita de bolo de cenoura';
container.appendChild(titulo);

const tabela = document.createElement('table');
tabela.id = 'tabela';

const linhacab = document.createElement('tr');
linhacab.textContent("texto");

const celulacab = document.createElement('th');
celulacab.textContent("cel");

const celula = document.createElement('td');
celula.textContent("texto");
