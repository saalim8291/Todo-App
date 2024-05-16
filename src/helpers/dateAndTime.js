export const getDateByEpoch = (epochDate) => {

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date()
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    console.log(date.getDay(), 'd')
};
