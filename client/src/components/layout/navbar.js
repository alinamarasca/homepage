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
  intro.textContent = "Intro";
  menu.appendChild(intro);

  const projects = document.createElement("div");
  projects.textContent = "Projects";
  menu.appendChild(projects);

  const contact = document.createElement("div");
  contact.textContent = "Contact";
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
