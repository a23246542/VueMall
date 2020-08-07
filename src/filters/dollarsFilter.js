export default function(value){//千分號 & 錢字號
    const str = value.toString();
    // return 'NT$' + str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return '$' + str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}