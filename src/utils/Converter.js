const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const dollar = (p) => {
  return USDollar.format(p);
};
