type Locale = 'en-US' | 'de' | 'fr';

export function formatNumberAsCurrency(n: number, locale: Locale = 'en-US'): string {
    if(locale === 'fr') return 'fr locale is currently not supported'
    if(locale === 'de') return new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' }).format(n);

    return new Intl.NumberFormat(locale).format(n);
}