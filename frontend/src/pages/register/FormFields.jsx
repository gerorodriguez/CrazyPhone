export const formFields = [
  {
    label: "Name",
    name: "name",
    type: "text",
    pattern: "[a-zA-Z ]+",
    placeholder: "Enter Name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,64}",
    placeholder: "name@example.com",
  },
  {
    label: "Confirm Email",
    name: "confirmEmail",
    type: "email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,64}",
    placeholder: "name@example.com",
  },
  {
    label: "Enter Password",
    name: "password",
    type: "password",
    placeholder: "Password",
    minLength: 10,
    maxLength: 20,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Password",
    minLength: 10,
    maxLength: 20,
  },
];
