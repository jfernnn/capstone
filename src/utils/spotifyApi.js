
const BASE_URL = 'https://api.spotify.com/';
const CLIENT_ID = '6ce3c94cd356446d8ba658574fa118bf';
//const REDIRECT_URI = 'http%3A%2F%2Flocalhost%3A3000';
const SECRET = '23238c0156c34ea890e3efdba86598fe';

export function authorizeSpot() {
    const formBody = [];
    const encodedKey = encodeURIComponent("grant_type")
    const encodedValue = encodeURIComponent("client_credentials")
    formBody.push(`${encodedKey}=${encodedValue}`)
    return fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            //'Authorization': `Basic ${CLIENT_ID}:${SECRET}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': `Basic ` +  btoa(CLIENT_ID + ':' + SECRET),
        },
        body: formBody
    })
    .then(res => res.json())
}

export function getInfoAPI(name, type, token) {
    return fetch(`${BASE_URL}v1/search?q=${name}&type=${type}&limit=10`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    .then(res => res.json())
}