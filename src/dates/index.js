// import moment here; use this package in each function

const moment = require('moment'); // require

const today = () => {
  // write code for dates.today
  let day = moment().format('dddd');
  return day;
}

const calendar = () => {
  // write code for dates.calendar
  let date = moment().format('MMM DD, YYYY');
  return date;
}

const currentTime = () => {
  // write code for dates.currentTime
  let time = moment().format('h:mm:ss A');
  return time;
}

module.exports = {
  today,
  calendar,
  currentTime
}