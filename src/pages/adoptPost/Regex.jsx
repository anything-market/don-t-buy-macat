const nameRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,15}$/;
const priceRegex = /^[0-9\\,]*$/;
const urlRegex =
  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

const regex = { nameRegex, priceRegex, urlRegex };
export default regex;
