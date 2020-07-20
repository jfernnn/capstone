
const BASE_URL = 'https://api.spotify.com/v1/search';

export function getInfoAPI(name, type) {
    return fetch(`${BASE_URL}?q=${name}&type=${type}&limit=10`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer BQDFhOh_310LLfDRQYyhtryWtagY5de2UxF_IPEnXXFPZr7fdX3I9iB3yAm1SH4NRvHCqpYLJYJWuh8604PdPGlrfKBe0HFBKSBFZirYbD95TQ12HdiDwAZb2P1P56RPtAjICFvZFo5RlBg`
        },
    })
    .then(res => res.json())
}