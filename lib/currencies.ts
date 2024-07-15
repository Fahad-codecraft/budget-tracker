export const Currencies = [
  {value: "INR", label: "₹ Rupee", locale: "en-IN"},
  {value: "USD", label: "$ Dollar", locale: "en-US"},
  {value: "EUR", label: "€ Euro", locale: "en-IE"},
  {value: "GBP", label: "£ Pound", locale: "en-GB"},
]

export type Currency = (typeof Currencies)[0];