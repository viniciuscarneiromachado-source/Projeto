// Cria a div container que centraliza o conteúdo
const container = document.createElement('div');
container.id = 'container';

const titulo_1 = document.createElement('h1');
titulo_1.id = 'titulo_principal';
titulo_1.textContent = 'Bem-vindo à Clínica ABCD';

const paragrafo_1 = document.createElement('p1');
paragrafo_1.id = 'texto_principal';
paragrafo_1.textContent = 'Conteúdo';

const titulo_2 = document.createElement('h1');
titulo_2.id = 'titulo_principal';
titulo_2.textContent = 'Sobre o nosso site';

const paragrafo_2 = document.createElement('p1');
paragrafo_2.id = 'texto_principal';
paragrafo_2.textContent = 'Conteúdo';

const titulo_3 = document.createElement('h1');
titulo_3.id = 'titulo_principal';
titulo_3.textContent = 'Por quê consultar com nós?';

const paragrafo_3 = document.createElement('p1');
paragrafo_3.id = 'texto_principal';
paragrafo_3.textContent = 'Conteúdo';

document.body.appendChild(container);
container.appendChild(titulo_1);
container.appendChild(paragrafo_1);
container.appendChild(titulo_2);
container.appendChild(paragrafo_2);
container.appendChild(titulo_3);
container.appendChild(paragrafo_3);