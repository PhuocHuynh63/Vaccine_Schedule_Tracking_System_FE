export const formatDate = (dateStr: string, locale: string = "en-US") => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
};
