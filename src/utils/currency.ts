export function formatCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`
  }
  return `₹${(amount / 100000).toFixed(2)} Lakhs`
}

export function formatNumberWithCommas(val: number): string {
  return val.toLocaleString('en-IN')
}
