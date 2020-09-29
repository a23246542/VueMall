// const data;
export default (time) => {
// export default data = function (time) {
  const date = new Date(time * 1000);
  console.log(date);
  return date.toLocaleDateString();
};
