export const reduceDescription = (title, over, cut) =>
  typeof title === "string"
    ? title.length > over
      ? `${title.substring(0, cut)}...`
      : `${title}...`
    : "error";

export const convertDate = publishedAt => {
  const standardTime = new Date(publishedAt);
  const year = standardTime.getFullYear();
  const month = standardTime.getMonth() + 1;
  const day = standardTime.getDate();

  const hour = standardTime.getHours();
  const minute = standardTime.getMinutes();

  return `${year}.${month > 9 ? month : "0" + month}.${
    day > 9 ? day : "0" + day
  } ${hour > 9 ? hour : "0" + hour}:${minute > 9 ? minute : "0" + minute}`;
  // const date = replaceAll(publishedAt.split('T')[0],'-','.');
  // const time = publishedAt.split('T')[1].split('Z')[0].substring(0,5);
  // return `${date} ${time}`;
};

const replaceAll = function(str, target, replace) {
  return str.split(target).join(replace);
};
