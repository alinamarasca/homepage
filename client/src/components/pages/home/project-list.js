import { createProjectCard } from "./project-card.js";

export const projectList = (array) => {
  const section = document.createElement("section");
  section.classList = "s2";
  const div = document.createElement("div");
  div.classList = "main-container";
  section.appendChild(div);
  const list = document.createElement("div");
  list.id = "project-list";
  div.appendChild(list);
  array.forEach((element) => {
    list.appendChild(createProjectCard(element));
  });
  return section;
};

// console.log(projectList(array));
