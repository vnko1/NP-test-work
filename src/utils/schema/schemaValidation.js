export const trackCodeSchema = {
  minLength: { value: 14, message: "Необхідно ввести 14 цифр" },
  maxLength: { value: 14, message: "Необхідно ввести 14 цифр" },
  pattern: { value: /^[0-9]+$/, message: "Введіть цифри" },
  required: "Це поле є обовʼязковим",
};

export const сitySchema = {
  minLength: { value: 2, message: "Введіть мінімум 2 символи" },
  pattern: {
    value: /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+/,
    message: "Значення має бути в літерах",
    required: "Це поле є обовʼязковим",
  },
};
