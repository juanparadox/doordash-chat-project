/** Services for making API requests */
export async function HTTPService(url, method, body) {
    return fetch(
        `http://localhost:8080/api/${url}`,
        {
            method,
            body
        }
    )
        .then(response => {
            console.log(response.body);
            return response.json();
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        });
}