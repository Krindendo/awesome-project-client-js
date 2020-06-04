import moment from "moment";

function debounceEvent(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}

function changeDate(date) {
  let today = moment();
  let time = moment(date, "YYYY/MM/DD");
  let time1 = moment().subtract(1, "months");
  if (time.isSame(today, "day")) return "Today";
  if (time.isAfter(time1, "day"))
    return moment(date, "YYYY/MM/DD").format("DD.MM.YYYY");
  return moment(date, "YYYY/MM/DD").fromNow();
}

function isObjectEmpty(obj) {
  if (obj === undefined) return true;
  return Object.keys(obj).length === 0 && obj.constructor === Object;

  // Object = [] !!Object
  // Array = {} !!Array.length
}

export const helper = {
  debounceEvent,
  removeHTMLTags,
  changeDate,
  isObjectEmpty,
};
