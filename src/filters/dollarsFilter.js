export default (value) => { // 千分號 & 錢字號
  // const str = value.toString;
  // return '$' + str.replace(/\B(?=(\d{3})+(?!\d))/g, ',') // eslint(prefer-template)
  // return `$ ${str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
  return `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`; // @@replace的)看似被字串化
};
