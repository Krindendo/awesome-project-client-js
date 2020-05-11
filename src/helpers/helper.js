import moment from "moment";

function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}

function changeDate(date) {
  let time = moment(date, "YYYY/MM/DD");
  let time1 = moment().subtract(1, "months");
  if (time <= time1) {
    return moment(date, "YYYY/MM/DD").format("DD.MM.YYYY");
  } else {
    return moment(date, "YYYY/MM/DD").fromNow();
  }
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export const helper = {
  removeHTMLTags,
  changeDate,
  isObjectEmpty,
};
