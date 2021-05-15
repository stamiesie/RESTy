export const apiCall = (url, method, body) => {
    console.log(url, method, typeof body)
    if(method === 'GET') {
        // console.log('HIT 1')
        return fetch(url)

        .then(res => res.json())
    }

    // DELETE
    else if(method === 'DELETE') {
        return fetch(url, { 
            method
        })

        .then(res => res.json())
    }

    // POST, PUT
    else if(method === 'POST' || method === 'PUT') {
        // console.log('HIT 2')
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body
        })

        .then(async response => {
            try {
                const data = await response.json()
                console.log('response data?', data)
            } catch(error) {
                console.log('Error happened here!')
                console.error(error)
            }
        })
    }
}
