export const convertDate = (dateToConvert) => {
    const newDate = new Date(dateToConvert);

    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear() % 100;

    const formatedDate = `${day}/${month}/${year}`;

    return formatedDate
}