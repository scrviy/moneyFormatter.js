function moneyFormatter(value, currency, locale)
{
    return new Intl.NumberFormat(locale,
        {
            style: 'currency',
            currency
        }).format(value);
}

console.log(moneyFormatter(1000, 'USD', 'en-US'));
console.log(moneyFormatter(1000, 'EUR', 'de-DE'));
console.log(moneyFormatter(1000, 'JPY', 'ja-JP'));
console.log(moneyFormatter(1000, 'BRL', 'pt-BR'));