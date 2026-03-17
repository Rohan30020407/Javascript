const accountId = 98765
let accountEmail = "rohan@google.com"
var accountPassword = "67890"
accountCity = "Bilaspur"
let accountState;

//accountId = 7 assigning value to constant again not allowed
accountEmail = "raja@raja.com"
accountPassword = "12345"
accountCity = "Delhi"


console.log(accountId)

/* Prefer not to use var
 because of issue of block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity ,accountState]) 