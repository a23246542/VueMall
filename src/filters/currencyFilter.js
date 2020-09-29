// const currency;
export default (num) => { // 只有千分號 @@eslint(func-names)
// export default currency=function(num){//千分號
  const n = Number(num);
  return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
    const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
    return currency;
  })}`;
};
