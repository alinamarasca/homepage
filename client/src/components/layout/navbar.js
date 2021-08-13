/**
 * The shared navbar.
 *
 * @param {object} routes - A routes object, see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */
export const navbar = (routes) => {
  const wrapper = document.createElement("nav");
  wrapper.className = "nav-wrapper";

  const menu = document.createElement("div");
  menu.id = "navigation";

  const intro = document.createElement("div");
  intro.innerHTML = `<a href='#intro'>Intro</a>`;
  menu.appendChild(intro);

  const projects = document.createElement("div");
  projects.innerHTML = `<a href='#projects-list'>Projects</a>`;
  menu.appendChild(projects);

  const contact = document.createElement("div");
  // contact.textContent = "Contact";
  contact.innerHTML = `<a href='#contact-form'>Contact</a>`;
  menu.appendChild(contact);

  wrapper.append(menu);

  // for (const route of routes) {
  //   const anchor = document.createElement("a");
  //   anchor.innerHTML = route.name;
  //   anchor.href = route.path;
  //   anchor.setAttribute("data-navigo", "");
  //   container.appendChild(anchor);
  // }

  return wrapper;
};
