const projetos = [
  {
    titulo: "E-commerce Lingerie",
    descricao:
      "CRUD completo com autenticação, carrinho e painel admin (React + Node + MongoDB).",
    imagem: "./img/loja.png",
    demo: "#",
    repo: "#",
  },
  {
    titulo: "Sistema de Agendamento",
    descricao:
      "Agendamento para pequenos negócios com painel e relatórios completos.",
    imagem: "./img/agendamento.png",
    demo: "#",
    repo: "#",
  },
  {
    titulo: "Portfolio Pessoal",
    descricao: "Meu portfolio pessoal com projetos, sobre mim e contato.",
    imagem: "./img/portfolio.png",
    demo: "#",
    repo: "#",
  },
];

const container = document.getElementById("cards-container");

projetos.forEach((projeto) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${projeto.imagem}" alt="${projeto.titulo}">
    <div class="card-content">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <div class="card-buttons">
        <a href="${projeto.demo}" target="_blank">Ver Demo</a>
        <a href="${projeto.repo}" target="_blank">Repositório</a>
      </div>
    </div>
  `;

  container.appendChild(card);
});
