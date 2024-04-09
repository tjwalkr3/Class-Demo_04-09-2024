import { AddUser, GetAllUserAccounts } from "./service.js";

console.log("Hello, world!");

var userAccounts = await GetAllUserAccounts();
console.log(userAccounts);

const setupForm = () => {
    const formElement = document.getElementById("userCreationForm");
    formElement.addEventListener("submit", async (event) => {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        await AddUser(userName);
        userAccounts = await GetAllUserAccounts();
        await renderUserAccounts();
    });
}

const renderUserAccounts = async () => {
    const container = document.getElementById("usersContainer");
    container.replaceChildren();
    userAccounts.forEach((user) => {
        console.log(user);
        const userCard = document.createElement("div");
        userCard.textContent = `${user.userName} - ${user.id}`;
        container.appendChild(userCard);
    });
}



console.log(userAccounts);
await renderUserAccounts();
setupForm();