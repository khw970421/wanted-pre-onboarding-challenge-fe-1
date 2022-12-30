export const emailValidation = (value) =>
  new RegExp(/@\w+\./, "gi").test(value);
export const passwordValidation = (value) =>
  new RegExp("^.{8,30}$", "gi").test(value);
