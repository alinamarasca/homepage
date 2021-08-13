export const navbar = () => {
  const nav = document.createElement("div");
  nav.className = "nav-wrapper";

  const menu = document.createElement("ul");
  menu.id = "navigation";
  const projects = document.createElement("li");
  projects.textContent = "Projects";
  menu.appendChild(projects);
  const contact = document.createElement("li");
  contact.textContent = "Contact";
  menu.appendChild(contact);
  return nav;
};
