const weekdayFormatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' });
const dayFormatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' });

export function formatWeekDay(dateString) {
    const date = new Date(dateString);
    const weekday = weekdayFormatter.format(date)
    return weekday.charAt(0).toUpperCase() + weekday.slice(1); // Dom.
}

export function formatMonthDay(dateString) {
    const date = new Date(dateString);
    return dayFormatter.format(date); // "05/10"
}