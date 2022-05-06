class Utils {
  changeDateFormat(date) {
    if (!date) return;
    return date.replace(/-/g, "/");
  }
}

const utils = new Utils();
export default utils;
