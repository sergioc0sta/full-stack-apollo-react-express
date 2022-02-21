export const convertDate = (getTime, stringDate) => {
    const newDate = new Date(stringDate + 'Z');
    if (getTime === 'day') {
        return newDate.getDay();
    }
    if (getTime === 'month') {
        return newDate.getMonth() + 1;
    }
    if (getTime === 'year') {
        const currentYear = new Date().getFullYear();
        return currentYear - newDate.getFullYear();
    }

    return null;
};
