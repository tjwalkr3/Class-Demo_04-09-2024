import { GetAllUserAccounts } from "./service.js";

console.log("Hello, world!");

const userAccounts = await GetAllUserAccounts();
console.log(userAccounts);