export const contact = () => {
  const section = document.createElement("section");
  section.className = "s3";
  const div = document.createElement("div");
  div.className = "main-container";
  const h3 = document.createElement("h3");
  h3.innerText = "Get In Touch";
  const wrapper = document.createElement("div");
  wrapper.className = "form-wrapper";
  div.appendChild(wrapper);
  const form = document.createElement("form");
  form.id = "contact-form";

  const formFields = ["Name", "Subject", "Email"];
  for (let i = 0; i < formFields.length; i++) {
    const field = document.createElement("input");
    field.setAttribute("type", "text");
    field.setAttribute("name", formFields[i].toLowerCase());
    const label = document.createElement("label");
    label.textContent = formFields[i];
    field.className = "input-field";
    form.appendChild(label);
    form.appendChild(field);
  }
  const label = document.createElement("label");
  label.textContent = "Message";
  form.appendChild(label);
  const message = document.createElement("textarea");
  message.className = "input-field";
  message.setAttribute("name", "Message");
  form.appendChild(message);

  const button = document.createElement("input");
  button.setAttribute("type", "submit");
  button.setAttribute("value", "send");
  button.id = "submit-btn";
  form.appendChild(button);
  section.appendChild(div);
  div.append(h3, form);
  return section;
};
