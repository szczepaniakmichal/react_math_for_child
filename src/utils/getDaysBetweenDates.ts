function getDaysBetweenDates(dateFrom: string, dateTo?: string): number {
    const previousDate = parseDate(dateFrom);
    const newDate = dateTo ? parseDate(dateTo) : new Date();
    const diffTime = Math.abs(newDate.getTime() - previousDate.getTime());

    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default getDaysBetweenDates;

const parseDate = (dateStr: string): Date => {
    const [day, month, year] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
};