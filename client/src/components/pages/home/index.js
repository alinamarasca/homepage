import { intro } from "./intro.js";
// import { navbar } from "./navbar.js";
import { githubProjects } from "./github-projects.js";
import { contact } from "./contact.js";
import { showProjects } from "./github-projects.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.appendChild(intro());
  // container.append(navbar());
  container.appendChild(githubProjects);
  container.append(showProjects());
  container.append(contact());

  return container;
};
