const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {currency: "THB", style: "currency"})

export function formatCurrency(number: number){
    return CURRENCY_FORMATER.format(number)
}