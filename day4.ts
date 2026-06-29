/* 
NARROWING GUARD,  typeof & instanceof

Narrowing: Is the process where TypeScript reduces a broad type such as union type, to a more specific type beased on runtime check or conditions. 


1. typeof:  checks the type first.
function  user(id: stirng | number){
    if(typeof id === "string"){
      console.log(id.toUpperCase);
    }
}

2.instanceof: used in classes

class Dog{
   bark(){
   console.log("Woof")
   }
}
class Cat{
meow(){
console.log("Meow")
}
}

function makeSound(animal: Dog | Cat){
   if(animal instanceof Dog){
     animal.bark()
   }else{
    animal.meow()
    }
}


Guards (Custom Type Guards)

Suppose:

interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

We have:

function move(animal: Fish | Bird) {
  // Which one is it?
}

Create a guard:

function isFish(animal: Fish | Bird): animal is Fish {
  return "swim" in animal;
}

Notice this:

animal is Fish

This is special syntax.

It tells TypeScript:

"If this function returns true, treat animal as Fish."

Now:

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}

TypeScript narrows automatically.

4. Using "in"

Another built-in guard:

interface Admin {
  permissions: string[];
}

interface User {
  email: string;
}

function handle(person: Admin | User) {
  if ("permissions" in person) {
    console.log(person.permissions);
  } else {
    console.log(person.email);
  }
}

Inside:

person: Admin

Else:

person: User


QUESTION:  
Write a function called formatTransactionAmount that takes amount: string | number. If it's a number, return it formatted as "KES 2000". If it's a string, try to convert it to a number first using Number(), then format it the same way. Use typeof narrowing.

function formatTransactionAmount(amount: string | number){
  if(typeof amount === "number"){
    return "KES " + amount;
  }
  else if(typeof amount === "string"){
     const num = Number(amount);
     if(isNaN(num)){
       return "Invalid amount"
     }
     return "KES " + num;

  }
  
}
console.log(formatTransactionAmount(2000));
console.log(formatTransactionAmount("2000"));

NOTE: Number() will always return NaN if it cannot convert string to a number, like console.log(Number("abc"));

function formatPhoneNumber(phone: string | number){
  if(typeof phone === "number"){
    return "phone: " + phone;
  }
  if(typeof phone === "string"){
    const number = Number(phone);
    if(isNaN(number)){
      return "Invalid phone number";
    }
    return "phone: " + number;
  }
}
console.log(formatPhoneNumber(712345678));
console.log(formatPhoneNumber("712345678"));
*/

/*  
UNKNOWN & ANY
Any: any disables TypeScript’s type safety. Once a variable is any, I can call any method on it and TypeScript won’t warn me, which can lead to runtime errors. For example, if I assign a number to an any variable and call toUpperCase, TypeScript won’t catch it, but JavaScript will crash at runtime because numbers don’t have that method.

EXAMPLE IN ANY: 
let dataAny: any = "hello"
dataAny = 42 
console.log(dataAny.toUpperCase());No error - but this will CRASH at runtime since 42 has no toUpperCase

UNKNOWN: On the other hand, unknown is safer. It still allows any value to be assigned, but it forces me to narrow the type before using it. So I cannot directly call methods on an unknown type until I check its type using something like typeof or a type guard. This makes unknown safer and preferred over any.”

let dataAny: unknown = "hello"
dataAny = 42
console.log(dataAny.toUpperCase());//ERROR TYPESCRIPT BLOCKS THIS IMMEDIATELY

CORRECT VERSION:
let data: unkown = "hello"

if(typeof data === "string"){
console.log(data.toUpperCase())
}

Write a function called processApiResponse that takes data: unknown. Inside it:

Check if data is an object and has a property called amount using the in operator
If it does, log the amount
If not, log "Invalid response shape"

This simulates a real situation — you fetch data from an API, you don't know its shape yet, and you have to safely check before using it.
Write it, test it with { amount: 2000 } and with "random string"

ANSWER:function processApiResponse(data: unknown): void{
 if(typeof data ==="object" && data != null && "amount" in data){
   console.log(data.amount);
 }else{
  console.log("Invalid response")
 }

}

processApiResponse({amount: 2000});
processApiResponse("random string");
*/

/*  
TYPE ASSERTION: it tells typescript to treat a value as a specific type, without  performing any runtime check

let data: unknown = "hello"
console.log((data as string).toUpperCase());

function getAmountFromUnknown(data: unknown){
  return(data as number) * 2;
}
console.log(getAmountFromUnknown(100));
console.log(getAmountFromUnknown("Esther"));

Array & Tuple

*/

type TransactionType = "send" | "withdraw";

/*function createFeeEntry(type:TransactionType, fee: number): [TransactionType, number]{
  return [type, fee];
}
const allFee: number[] = [13, 23, 54, 105, 127];
console.log(createFeeEntry("send", allFee[0]))
*/

function createFeeEntry(
  type: TransactionType,
  fee: number,
): [TransactionType, number] {
  return [type, fee];
}
const allFees: number[] = [10, 23, 45];
//console.log(createFeeEntry("send", allFees[0]!));
const fee = allFees[0];

if (fee !== undefined) {
  console.log(createFeeEntry("send", fee));
}