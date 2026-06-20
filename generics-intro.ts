/* 
WHAT PROBLEM DO GENERICS SOLVE:

Take a look: 
function identity(value: string): string{
   return value
} Means that it works only for string

FOR NUMBERS:

function identity(value: number): number{
   return number
}
 For Boolean

function identity(value: boolean): boolean{
  return value
}

This repetition is what Generics came to solve, instaead of repeting the same logic, we say I don't know the type yet, I'll decide later, meaning any type is valid.
 
SYNTAX: function identity<T>(value: T):T{
  return values
}
 here "T" is the place holder of the type you are going to decide later to use.

<t>: Means we are creating a function that works for ANY type, but presever the relatinship between input and output

Why Genrics aare powerful(core insight)
WIhtou generics

function identity(value: string[]) : string{
  return value
} MEnas that only string values are valid

But with generic, means any data type value is valid

function identity<T>(value: T): T{
  return value[0]
}
identity<number>([1, 2,3,4]);
identity<string>(["apple", "mango", "banana"]);
identity<boolean>([true, false]);
*/

/*function getFirstItem<T>(item: T[]): T | undefined{
  return item[0];
 }
console.log(getFirstItem(["Apple", "Banana", "Lemon"]));
console.log(getFirstItem([12, 35, 67]));

interface BaseTransaction {
  id: number;
  amount: number;
}

type TransactionType = "send" | "withdraw";

interface MpesaDetails {
  transactionType: TransactionType;
  fee: number;
}

type FullTransaction = BaseTransaction & MpesaDetails;

function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}
const transactions: FullTransaction[] = [
  {
    id: 1,
    amount: 3000,
    transactionType: "send",
    fee: 12,
  },
  {
    id: 2,
    amount: 5000,
    transactionType: "withdraw",
    fee: 20,
  },
];

console.log(getFirstItem(transactions));
console.log(getFirstItem(["Apple", "Banana", "Lemon"]));
console.log(getFirstItem([35, 40, 50]));
*/
interface BaseTransaction {
  id: number;
  amount: number;
}

type TransactionType = "send" | "withdraw"

interface MpesaDetails {
  transactionType: TransactionType;
  fee: number;
}

type FullTransaction = BaseTransaction & MpesaDetails;

interface MpesaApiResponse<T>{
  data: T
  success: boolean
  errorMessage?: string
}

const mpesaResponse: MpesaApiResponse<FullTransaction> ={
  data: {
    id: 2,
    amount: 15000,
    transactionType: "withdraw",
    fee: 23
  },
  success: true
}



const transaction: MpesaApiResponse<FullTransaction[]> = {
  data: [{
    id: 2,
    amount: 2000,
    transactionType: "send",
    fee: 13
  }],
  success: false,
  errorMessage: "Transaction process failed. Please try again later."
}

console.log(mpesaResponse);
console.log(transaction);






















