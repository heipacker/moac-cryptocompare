var SensitiveUtils = require("../modules/common/SensitiveUtils");

console.log(SensitiveUtils.username("哈哈"));
console.log("哈哈".length);
console.log(SensitiveUtils.username("heipacker"));
console.log(SensitiveUtils.idCardNum("362528199011034512"));
console.log(SensitiveUtils.fixedPhone("5291000"));
console.log(SensitiveUtils.mobilePhone("18600653783"));
console.log(SensitiveUtils.email("fupanyouxiang@163.com"));
console.log(SensitiveUtils.email("1@163.com"));
console.log(SensitiveUtils.email("12@163.com"));