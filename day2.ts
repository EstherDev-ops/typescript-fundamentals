/*  
1. UNION TYPES: 
It allow value to accept several types
 let amount = string | number
  amount = "two-thousands"
  amount = 2000
Meanng that typescript will only acccepts values that are either a string or number, any other value is considered invalid, and causes error. 

type TransactionType =  "send" | "withdraw" | "atm"
type Id = string | number

type FeeResult = number | "invalid"

type TransactionType = "send" | "withdraw" | "atm";

function getTransactionLabel(type: TransactionType): string{
  switch (type) {
    case "send":
      return "Money Sent";

    case "withdraw":
      return "Cash Withdrawn";

    case "atm":
      return "ATM Transaction";
  }
  return "Unknown";
}
console.log(getTransactionLabel("send"));
console.log(getTransactionLabel("withdraw"));
console.log(getTransactionLabel("atm"));
//console.log(getTransactionLabel("hello"))// The app will crash since TransactionType had three values defined, and "hello" is not among them thus, typescript catches the error, early even before the runtime

INTERSECTION: It allows a value have properties of the multiple types or interfaces.

type TransactionType = "send" | "withdraw" | "atm"
interface BaseTransaction {
   id: number
   amount:number
}
interface MpesaDetails{
   transactionType: TransactionType
   fee: number
}

type FullTransaction = BaseTransaction & MpesaDetails

const details: FullTransaction ={
   id: 1,
   amount: 25000,
   transactionType: "send",
   fee: 23
}
console.log(details)

type MpesaDetails={
   amount: number
   timestamp: string
   fee: number
}

type UserProfile = UserDetails & MpesaDetails

const user: UserProfile = {
  name: "Esther",
  age: 23,
  email: "esther254@gmail.com",
  amount: 23000,
  timestamp: "2026-06-13T10:30:00Z",
  fee: 23
};
console.log(user);


OPTIONAL PROPERTIES: Allowa  object properties to exist or not exist, it  is marked by a question mark symbols(?), it is useful, when using data where some of the fields are not guranteed,like user profile, APIS.

type User ={
   name: string
   age: number
   email?: string

}
const user: User ={
   name: "Esther",
   age: 23
}
const user2: User ={
   name: "john",
   age: 23,
   email: "john@gmail.com"
}
console.log(user);
console.log(user2);

type Student = {
  name: string;
  course: string;
  phoneNumber?: string;
  email?: string;
};

const user: Student = {
  name: "John",
  course: "Computer Science",
  phoneNumber: "+254113456789",
  email: "john@gmail.com",
};

const student: Student = {
  name: "Esther",
  course: "Hospitality",
};
console.log(user);
console.log(student);
interface MpesaTransaction {
  transactionid: number;
  amount: number;
  type: string;
  feecharged: number;
  timestamp: string;
  isSuccessful: boolean;
  note?: string
  reference?: string
}

const transaction: MpesaTransaction = {
  transactionid: 2,
  amount: 20000,
  type: "send",
  feecharged: 23,
  timestamp: "2026-06-13T10:30:00Z",
  isSuccessful: true,
};
const transaction1: MpesaTransaction = {
  transactionid: 2,
  amount: 20000,
  type: "send",
  feecharged: 23,
  timestamp: "2026-06-13T10:30:00Z",
  isSuccessful: true,
  note: "UFED0C72E Confirmed. Ksh. 20000 sent to Esther at 2026-06-13T10:30:00Z, feecharged Ksh.23",
  reference: "UFED0C72E",
};

console.log(transaction);
console.log(transaction1);


LITERAL PROPERTIES: Allows only the exact specific values instead of general, instead of allowing any string or number or boolean , typescript restrict the values to the exact literal.

EXAMPLE:

let  name: "Esther"
here only Esther is valid. if we enter any other string value, Typescript will reject immeditely.

let dice: 1 | 2 | 3 | 4 | 5 | 6
if I say dice = 7, then it will be reject

Why would this be useful in an API?

type RequestStatus =
  | "loading"
  | "success"
  | "error";

What bug is TypeScript helping prevent here?
It helps you, the developer, avoid invalid states in your code before runtime.
*/

type MpesaStatus = "pending" | "completed" | "failed";

type MinimumAmount= 50;

type HttpStatus = 200 | 400 | 401 | 500;

function getStatusMessage(status: MpesaStatus){
 
  if(status === "pending"){
    return "Still Processing!";
  }

  else if(status === "completed"){
    return "Process completed successfully!"
  }
  else if(status === "failed"){
    return "Transaction failed. Please try again!"
  }
}
console.log(getStatusMessage("pending"));
console.log(getStatusMessage("completed"));
console.log(getStatusMessage("failed"));