export const reduceDescription = (title, over, cut) =>
  typeof title === "string"
    ? title.length > over
      ? `${title.substring(0, cut)}...`
      : `${title}...`
    : "error";

export const convertDate = (publishedAt) => {
  const date = replaceAll(publishedAt.split('T')[0],'-','.');
  const time = publishedAt.split('T')[1].split('Z')[0].substring(0,5);
  return `${date} ${time}`;
}

const replaceAll = function(str, target, replace){
  return str.split(target).join(replace);
}