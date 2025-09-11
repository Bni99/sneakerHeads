export const formatCurrency = (amount: number, currency: string = "USD") => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
  }).format(amount);
};
