import { navbar } from "../../layout/navbar.js";

export const intro = () => {
  const section = document.createElement("section");
  section.className = "s1";
  section.id = "intro";

  const div = document.createElement("div");
  div.className = "main-container";

  const wrapper = document.createElement("div");
  wrapper.className = "intro-wrapper";
  div.appendChild(wrapper);

  const photo = document.createElement("div");
  photo.className = "left-column";
  const img = document.createElement("img");
  img.id = "profile-pic";
  img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1621045122639-b38a49f0d3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  );
  photo.appendChild(img);

  const about = document.createElement("div");
  about.className = "right-column";
  const p = document.createElement("p");
  p.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  about.appendChild(p);

  section.append(div);
  div.append(wrapper);
  wrapper.append(photo, about);
  return section;
};
