const projetos = [
  {
    titulo: "LadingPage",
    descricao:
      " CSS e JavaScript, com foco em design atraente, navegação intuitiva e boa experiência do usuário em todos os dispositivos..",
    imagem: "./img/ladingpage.png",
    projeto: "https://devdeived.github.io/ladingpage06/",
    repo: "https://github.com/DevDeived/ladingpage06/",
  },
  {
    titulo: "Ladin Pages 07",
    descricao:
      "Desenvolvi uma landing page moderna e responsiva utilizando HTML, CSS e JavaScript, com foco em design atraente, navegação intuitiva e boa experiência do usuário em todos os dispositivos..",
    imagem: "./img/ladingpage07.png",
    projeto: "https://devdeived.github.io/LandingPage07",
    repo: "https://github.com/DevDeived/LandingPage07",
  },
  {
    titulo: "Mundo das licngeries",
    descricao: "MMeu primeiro projeto desenvolvido com HTML, CSS e JavaScript, onde apliquei sozinho os conceitos básicos para criar uma página com estilo e interatividade.",
    imagem: "./img/mundo das lingeries.png",
    projeto: "https://devdeived.github.io/mundodaslingeries/",
    repo: "https://github.com/DevDeived/mundodaslingeries",
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
        <a href="${projeto.projeto}" target="_blank">Ver Demo</a>
        <a href="${projeto.repo}" target="_blank">Repositório</a>
      </div>
    </div>
  `;

  container.appendChild(card);
});
