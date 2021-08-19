export const createProjectCard = (element) => {
  const card = document.createElement("div");
  card.className = "project-wrapper";

  const projectHeader = document.createElement("div");
  projectHeader.className = "project-header";

  const info = document.createElement("div");
  info.className = "info";
  const dateCreated = new Date(element.created_at);
  info.innerHTML = `<span class='name'>${
    element.name
  }</span> <span class='date'>${dateCreated.toLocaleDateString()}</span>`;

  const menu = document.createElement("div");
  menu.className = "project-menu";

  const link = document.createElement("div");
  link.className = "link";
  link.innerHTML = `<a href = ${element.homepage}> <i class="fas fa-eye"></i> </a>`;

  const code = document.createElement("div");
  code.className = "code";
  code.innerHTML = `<a href = ${element.html_url}> <i class="fas fa-code"></i> </a>`;

  const description = document.createElement("div");
  description.className = "description";
  description.textContent = `${element.description}`;

  card.append(projectHeader, description);
  projectHeader.append(info, menu);
  if (element.homepage === null) {
    menu.append(code);
  } else {
    menu.append(code, link);
  }

  return card;
};
