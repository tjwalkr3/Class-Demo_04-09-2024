export const GetAllUserAccounts = async () => {
    const url = "http://localhost:5043";
    const response = await fetch(url);
    return await response.json();
}