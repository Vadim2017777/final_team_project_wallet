const d = new Date();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const years = ['2020', '2021'];
const currentMonth = months[d.getMonth()];
const currentYear = d.getFullYear().toString();

export {months, currentMonth, years, currentYear};
