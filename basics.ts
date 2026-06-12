/*
BASIC TYPES(STRING, NUMBER, BOOLEAN)
 We define variables in typescript like this: Let, variable name, colon, type, equal sign, value: let city: string = "Nairobi"

let name: string = "Esther"
let age: number = 21
let isDeveloper: boolean = true

console.log(name, age, isDeveloper);

function calculateFee(amount: number, transactionType: string){
  return amount;
}
calculateFee(2000,"Invalid amount")

Type Alias: It allows to name a type, so as to reuse is.

type UserName = string;

let name: UserName = "Esther"

function userProfile(name: UserName){
console.log(name)
}

type User ={
  id: number
  name: string
  isActive: boolean
}
const userprofile: User ={
  id: 1,
  name: "John",
  isActive: true
}

During runtime, the type UserName = string is erased entirely,  and it becomes name = 'Esther' where now JS reads and execute it.

Interface: It is a contract, that defines the shape an object must follow.

Interface User ={
 id: number
 name: string
 email: string
 isActive: boolean
}
const newUser: User = {
  id: 1,
  name: "Esther",
  email: "esther@vorta.com",
  isActive: true
}
*/

interface MpesaTransaction{
  transactionid: number
  amount: number
  type: string
  feecharged: number
  timestamp: string
  isSuccessful:boolean
}

const transaction: MpesaTransaction = {
  transactionid: 2,
  amount: 20000,
  type: "send",
  feecharged: 23,
  timestamp: "2026-06-13T10:30:00Z",
  isSuccessful: true,
};

//function
console.log(transaction);