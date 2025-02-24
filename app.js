// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo'); // Campo de texto
  const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco

  // Validação: campo vazio
  if (!nomeAmigo) {
    alert('Por favor, insira um nome válido.'); // Exibe alerta se o campo estiver vazio
    return;
  }

  // Validação: nome duplicado
  if (listaAmigos.includes(nomeAmigo)) {
    alert('Este nome já foi adicionado!'); // Exibe alerta se o nome já existir na lista
    return;
  }

  // Adiciona o nome ao array e atualiza a lista na tela
  listaAmigos.push(nomeAmigo);
  atualizarListaAmigos();

  // Limpa o campo de texto
  inputAmigo.value = '';
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
  const listaAmigosElemento = document.getElementById('listaAmigos'); // Lista de nomes
  listaAmigosElemento.innerHTML = ''; // Limpa a lista atual

  // Adiciona cada nome da lista ao HTML
  listaAmigos.forEach((amigo) => {
    const li = document.createElement('li'); // Cria um novo item da lista
    li.textContent = amigo; // Define o texto do item
    listaAmigosElemento.appendChild(li); // Adiciona o item à lista
  });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  // Validação: pelo menos dois nomes na lista
  if (listaAmigos.length < 2) {
    alert('Adicione pelo menos dois amigos para realizar o sorteio.'); // Exibe alerta se não houver nomes suficientes
    return;
  }

  const resultadoElemento = document.getElementById('resultado'); // Elemento para exibir o resultado
  resultadoElemento.innerHTML = ''; // Limpa o resultado anterior

  // Sorteia um nome aleatório
  const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceSorteado];

  // Exibe o resultado do sorteio
  const li = document.createElement('li'); // Cria um novo item da lista
  li.textContent = `Amigo secreto: ${amigoSorteado}`; // Define o texto do item
  resultadoElemento.appendChild(li); // Adiciona o item à lista
}