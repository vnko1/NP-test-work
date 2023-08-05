import * as yup from "yup";

export const formTrackCodeSchema = yup.object({
  trackCode: yup
    .string()
    .min(14, "Необхідно ввести 14 символів")
    .max(14, "Необхідно ввести 14 символів")
    .matches(/^[0-9]+$/, { excludeEmptyString: true, message: "Введіть цифри" })
    .required("Обовʼязковий"),
});

export const formCitySchema = yup.object({
  city: yup
    .string()
    .min(2, "Мінімум 2 символи")
    .matches(/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+/, { excludeEmptyString: true })
    .required("Обовʼязковий"),
});
