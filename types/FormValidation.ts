export type FormValidation = {
  hasErrors: boolean;
  message?: string;
}

export type FormErrors = {
  field: string;
  check: InputValidation;
}
