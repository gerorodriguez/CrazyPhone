export const formFields = [
  {
    label: "Nombre",
    name: "fullName",
    type: "text",
    pattern: "[a-zA-Z ]+",
    placeholder: "Enter Name",
  },
  {
    label: "Número de telefono",
    name: "phoneNumber",
    type: "tel",
    pattern: "[789][0-9]{10}",
    placeholder: "(+54) 4562-7890",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,64}",
    placeholder: "name@example.com",
  },
  {
    label: "Contraseña",
    name: "password",
    type: "password",
    placeholder: "Contraseña",
    minLength: 10,
    maxLength: 20,
  },
  {
    label: "Confirmar contraseña",
    name: "confirmPassword",
    type: "password",
    placeholder: "Contraseña",
    minLength: 10,
    maxLength: 20,
  },
];
