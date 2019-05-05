export const reduceDescription = (title, over, cut) =>
  typeof title === "string"
    ? title.length > over
      ? `${title.substring(0, cut)}...`
      : `${title}...`
    : "error";
