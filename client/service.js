export const GetAllUserAccounts = async () => {
    const url = "http://localhost:5043/userAccounts";
    const response = await fetch(url);
    return await response.json();
}

export const AddUser = async (userName) => {
    const url = "http://localhost:5043/addAccount";
    const newUser = {userName};

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(newUser)
    });
}