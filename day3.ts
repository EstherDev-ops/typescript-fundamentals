/* 
FUNCTIONS IN TS
 Functions: Are block of code, resusable.
 In typescript, it cares what comes in and what goes out.

TYPED PARAMETERS: You have to specify the type of the parameter.

In normal JavaScript:
function add(a, b){
  return a + b;
}
add(2, 3);
add("23", 5); this is still valid
meaning here parameters a and b, can take any data type values
 
But in typescript, you need to specify, the data type of the specific parameter.

function add(a: number, b: number):number{
   return a + b;
}
console.log(2, 3) valid
console.log("3", 2) is invalid, TypeScript only allows number data types.
): number= means that a function must return a number.
 structure: function names(params: type): return type


 2. TYPED RETURN VALUES:  This is what a function returns as the output, meaning that a type must be explicitly type coerced,

function displayName(name: string): string{
  return`Hello ${name}`;
}
console.log(displayName("Esther"));

VOID RETURN TYPE: Meaning a function does not return anything meangingfull

function calculateTotal(amount:number, fee:number):number{
  return amount + fee;
}
console.log(calculateTotal(3000, 33));

type TransactionType = "send" | "withdraw" | "atm" 

interface BaseTransaction {
  id: number;
  amount: number;
}
interface MpesaDetails {
  transactionType: TransactionType;
  fee: number;
}

type FullTransaction = BaseTransaction & MpesaDetails;

const transaction: FullTransaction = {
  id: 1,
  amount: 3000,
  transactionType: "send",
  fee: 12
}
function logTransaction(transaction: FullTransaction):void{
   console.log(transaction)
}
logTransaction(transaction);

function getFirstItem(items: string[]): string | undefined{
  return items[0];
}
console.log(getFirstItem(["apple", "banana"]));
console.log(getFirstItem([]));


ENUMS: Is way of grouping a set of related constant under one name.

Take example am building a game, which can only accept three status, "start", "continue" or "failed" meaning these are related constant,

SYNTAX: enum gameStatus {
  Start,
  Continue,
  Failed
}
so we can write: let status: gameStatus = gameStatus.Start; this enables the status not to be reassigned or change the value. OR: Enums are a TypeScript feature used to define a collection of related named constants. They help restrict values to a predefined set and improve readability and type safety.

enum Role {
  Admin,
  User,
  Guest
}
console.log(Role.Admin); //0 because under the hood, the constant values are assigned to numeric values, the first value Admin, gets zero..

 STRING ENUMUS

enum Role {
   Admin = "ADMIN",
   User = "USER",
   Guest = "GUEST"
}
console.log(Role.Admin) // ADMIN

Why is enums advisable to not over use it? It generates actual JS object, that add bundle size, this can lead to long time in downloading in large libraries. 

Type Union and Literal Types are prefered since they are removed entirely, after compilation.

*/

enum TransactionType {
  Send = "SEND",
  Withdraw = "WITHDRAW",
  Atm = "ATM"
}
console.log(TransactionType.Send);
console.log(TransactionType.Withdraw);
console.log(TransactionType.Atm);