export const apiCall = (url, method, body) => {
    if(method === 'GET') {
        return fetch(url)
        .then(res => res.json())
        // .then(console.log);
    }

    // DELETE does not send body
    else if(method === 'DELETE') {
        return fetch(url, { 
            method,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
         })
        .then(res => res.json())
    }

    // PUT POST
    return fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body
    })

    // stringify in container?
}