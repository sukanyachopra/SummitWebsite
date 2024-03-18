export async function getAllUsers() {
    try {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const data = await response.json();
        console.log('Fetched users:', data);
        return data.data; // Extract the 'data' property from the response
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}
export async function createUser(data) {
    try {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
}
