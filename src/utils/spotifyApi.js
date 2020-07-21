
const BASE_URL = 'https://api.spotify.com/';
const TOKEN = 'BQC3XqqrZFjFSuXy5N3zKoMPcPV7r6mEpkdZ01nuD126l9cSO8cDo4nrMiT3_OTcvaelSqffhxABoOltdjP7cV08n1rz0EqgNjcYIUQSr8Pu0zRW2WLoVVGhd99K8ds5uLoID4i3IWeENfw';
const CLIENT_ID = '6ce3c94cd356446d8ba658574fa118bf';
//const REDIRECT_URI = 'http%3A%2F%2Flocalhost%3A3000';
const SECRET = '23238c0156c34ea890e3efdba86598fe';

export function authorizeSpot() {
    return fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            //'Authorization': `Basic ${CLIENT_ID}:${SECRET}`,
            'Authorization': `Basic` +  btoa(CLIENT_ID + ':' + SECRET),
        },
        body: {
            'grant_type': 'client_credentials'
        },
    })
    .then(res => res.json())
}

export function getInfoAPI(name, type) {
    console.log(TOKEN);
    return fetch(`${BASE_URL}v1/search?q=${name}&type=${type}&limit=10`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
    })
    .then(res => res.json())
}