const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";

const validateEmail = (email) => {
  return email.match(/(m[\w]+@[\w]+.com)|(t[a-z]+@[a-z]+.com)/g);
};
console.log(validateEmail(textEmail));



const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120732";

const handleNumber = (textPhone) => {
  return textPhone.match(/0[0-9]{9}/g);
};
console.log(handleNumber(textPhone));