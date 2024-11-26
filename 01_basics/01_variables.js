const accountId=1234
let accountemail="pranjaljaiswal@gmail.com"
var accountpassword="pj00000@11"
accountCity = "Jaipur"
let accountState;
//accountId=2  //not allowed

accountemail="pj@email.com"
accountpassword="pj11"
accountCity="Kota"

console.log(accountId);
console.table([accountId,accountemail,accountpassword,accountCity,accountState]);

/* prefer not to use var because of issue in block scope and functional scope */