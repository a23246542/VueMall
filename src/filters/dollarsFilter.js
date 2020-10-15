// 千分號 & 錢字號
export default (value) => `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
// const str = value.toString;
// return '$' + str.replace(/\B(?=(\d{3})+(?!\d))/g, ',') // eslint(prefer-template)
// return `$ ${str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
