import { intro } from "./intro.js";
import { projectList } from "./project-list.js";
// import { githubProjects } from "./github-projects.js";
import { contact } from "./contact.js";
// import { showProjects } from "./github-projects.js";
import { fetchUser } from "../../../api-calls/api-call.js";
/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = async () => {
  const container = document.createElement("div");
  container.className = "body";
  container.appendChild(intro());

  const projects = await fetchUser();

  container.appendChild(projectList(projects));
  // container.append(showProjects());
  container.append(contact());

  return container;
};
