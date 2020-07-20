
const BASE_URL = 'https://api.spotify.com/v1/search';

export function getInfoAPI(name, type) {
    return fetch(`${BASE_URL}?q=${name}&type=${type}`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer BQD6O1KSkZM8P6Jq5S0vTKps9ePNUuDACUZwwfw8W-f86gjMrbpw6_8b6InEbnd7zGLnM8FCLMl81zDHlm9MTPFVeVmjve0zuDYqlIHl47kv0fz6EC8qCl5BDGa328TjpIyPJkmJKHtybhc`
        },
    })
    .then(res => res.json())
}