
function daysBetweenDates(date1, date2) {
    const time1 = new Date(date1).getTime();
    const time2 = new Date(date2).getTime();

    const difference = Math.abs(time1 - time2);

    return difference / (1000 * 60 * 60 * 24);
}
