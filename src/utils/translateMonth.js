// Translate month name from Norwegian to English if necessary
const translateMonth = (date) => {
  if (date.indexOf('januar') > -1) {
    return date.replace('januar', 'january');
  }
  if (date.indexOf('februar') > -1) {
    return date.replace('februar', 'february');
  }
  if (date.indexOf('mars') > -1) {
    return date.replace('mars', 'march');
  }
  if (date.indexOf('mai') > -1) {
    return date.replace('mai', 'may');
  }
  if (date.indexOf('juni') > -1) {
    return date.replace('juni', 'june');
  }
  if (date.indexOf('juli') > -1) {
    return date.replace('juli', 'july');
  }
  if (date.indexOf('oktober') > -1) {
    return date.replace('oktober', 'october');
  }
  if (date.indexOf('desember') > -1) {
    return date.replace('desember', 'december');
  }
  return date;
}

export default translateMonth;
