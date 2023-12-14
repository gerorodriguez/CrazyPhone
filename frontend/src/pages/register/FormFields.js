export const formFields = [
  {
    label: 'Nombre',
    name: 'fullName',
    type: 'text',
    pattern: '[a-zA-Z ]+',
    placeholder: 'Ingrese nombre',
  },
  {
    label: 'Número de telefono',
    name: 'phoneNumber',
    type: 'tel',
    placeholder: '(+54) 4562-7890',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,64}',
    placeholder: 'nombre@email.com',
  },
  {
    label: 'Contraseña',
    name: 'password',
    type: 'password',
    placeholder: 'Ingrese contraseña (minimo 8 caracteres)',
  },
  {
    label: 'Confirmar contraseña ',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Ingrese contraseña (minimo 8 caracteres)',
  },
];
