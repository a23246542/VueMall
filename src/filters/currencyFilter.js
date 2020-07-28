// const currency;
export default function(num){//千分號 & 錢字號
// export default currency=function(num){//千分號 & 錢字號
      const n = Number(n);
      return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
            const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
            return currency;
      })}`;
}