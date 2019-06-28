/** Services for making API requests */
export async function HTTPService(url, method, body) {
    return fetch(
        `http://localhost:8080/api/${url}`,
        {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(async response => {
            const result = await response.json();
            // Handle errors
            if (!response.ok || result.error) {
                throw new Error();
            }
            return result;
        });
}