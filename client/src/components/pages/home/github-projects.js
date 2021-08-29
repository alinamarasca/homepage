import { fetchUser } from "../../../api-calls/api-call.js";
import { createProjectCard } from "./project.js";

export const githubProjects = document.createElement("section");
githubProjects.className = "s2";

const div = document.createElement("div");
div.className = "main-container";

const projects = document.createElement("div");
projects.id = "projects-list";
div.appendChild(projects);
githubProjects.appendChild(div);

export const showProjects = async () => {
  try {
    const response = await fetchUser();
    console.log(response);
    response.forEach((element) => {
      projects.appendChild(createProjectCard(element));
    });
  } catch (error) {
    console.log(error);
  }
};
